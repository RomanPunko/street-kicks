"use client";

import ResultsTable from "@/components/results-table/ResultsTable";
import Button from "@/components/ui/button";
import { LoadingSpinner } from "@/components/ui/spinner";
import React, { useRef, useState, type FC } from "react";
import { IoReceiptOutline } from "react-icons/io5";
import Tesseract from "tesseract.js";

const Home: FC = () => {
  const inputRef = useRef<HTMLInputElement | null>(null);
  const [imagePreview, setImagePreview] = useState<string | null>(null);
  const [isDragging, setIsDragging] = useState<boolean>(false);
  const [receiptInfoList, setReceiptInfoList] = useState<
    { sum: string | null; date: string | null }[]
  >([]);
  const [loading, setLoading] = useState<boolean>(false);

  const handleFileChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0];
    file ? setImagePreview(URL.createObjectURL(file)) : setImagePreview(null);
    if (inputRef.current) inputRef.current.value = "";
  };

  const handleDrop = (e: React.DragEvent<HTMLButtonElement>) => {
    e.preventDefault();
    e.stopPropagation();
    setIsDragging(false);

    const file = e.dataTransfer.files?.[0];
    file ? setImagePreview(URL.createObjectURL(file)) : setImagePreview(null);
  };

  const handleDragOver = (e: React.DragEvent<HTMLButtonElement>) => {
    e.preventDefault();
    setIsDragging(true);
  };

  const handleDragLeave = () => {
    setIsDragging(false);
  };

  async function extractFieldsWithOpenAI(text: string) {
    const prompt = `
Витягни з наступного тексту чека лише дату (формат: ДД.ММ.РРРР) та суму (число після слова "Сума"). 
Поверни JSON такого формату:
{ "sum": "...", "date": "..." }

Текст:
${text}
`;

    try {
      const response = await fetch("/api/extract", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ prompt }),
      });

      const { result } = await response.json();
      const data = JSON.parse(result);

      return {
        sum: data?.sum || null,
        date: data?.date || null,
      };
    } catch (e) {
      console.error("Помилка парсингу:", e);
      return { sum: null, date: null };
    }
  }

  const handleCalculate = async (image: string) => {
    if (!image) return;
    setLoading(true);

    try {
      const {
        data: { text },
      } = await Tesseract.recognize(image, "ukr");
      const info = await extractFieldsWithOpenAI(text);
      setReceiptInfoList((prev) => [info, ...prev]);
    } catch (e) {
      console.error("OCR or AI error", e);
    } finally {
      setLoading(false);
      setImagePreview(null);
    }
  };

  return (
    <div className="flex items-center justify-around">
      <div className="flex items-center justify-center min-h-screen">
        {!imagePreview && (
          <div className="flex items-center justify-center w-full gap-[150px]">
            <div className="receipt-icon-animation">
              <IoReceiptOutline size={150} />
            </div>
            <Button
              onClick={() => inputRef.current?.click()}
              onDrop={handleDrop}
              onDragOver={handleDragOver}
              onDragLeave={handleDragLeave}
              className={`flex items-center justify-center text-6xl ${
                !isDragging ? "bg-black" : "bg-white/30"
              } rounded-xl border-1 border-white/30 px-4 py-2 cursor-pointer h-[300px] w-[300px]`}
            >
              <div className="flex flex-col items-center justify-center">
                <p>+</p>
                <p className="text-[16px]">add a receipt</p>
              </div>
            </Button>
          </div>
        )}
        <input
          ref={inputRef}
          type="file"
          accept="image/*"
          onChange={handleFileChange}
          className="hidden"
        />
        {imagePreview && (
          <div className="flex flex-col justify-center items-center gap-4">
            <img src={imagePreview} className="max-w-xs rounded shadow" />
            <Button
              onClick={() => handleCalculate(imagePreview)}
              className="bg-black rounded-xl border-1 border-white/30 px-4 py-2 cursor-pointer"
            >
              Сalculate
            </Button>
          </div>
        )}
      </div>
      {loading ? <LoadingSpinner /> : <ResultsTable items={receiptInfoList} />}
    </div>
  );
};

export default Home;
