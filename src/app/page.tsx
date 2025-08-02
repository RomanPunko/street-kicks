"use client";

import Button from "@/components/ui/button";
import { LoadingSpinner } from "@/components/ui/spinner";
import React, { useRef, useState, type FC } from "react";
import { IoReceiptOutline } from "react-icons/io5";
import Tesseract from "tesseract.js";

const Home: FC = () => {
  const inputRef = useRef<HTMLInputElement | null>(null);
  const [imagePreview, setImagePreview] = useState<string | null>(null);
  const [isDragging, setIsDragging] = useState<boolean>(false);
  const [receiptFilterInfo, setReceiptFilterInfo] = useState<{
    sum: string | null;
    date: string | null;
  }>({ sum: null, date: null });
  const [textLoading, setTextLoading] = useState<boolean>(false);


  const handleFileChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0];
    file ? setImagePreview(URL.createObjectURL(file)) : setImagePreview(null);
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

  function extractFields(text: string) {

    const sumMatch = text.match(/Сума\s*([\d,.]+)/i);
    const sum = sumMatch ? sumMatch[1] : null;

    const dateMatch = text.match(/(\d{2}\.\d{2}\.\d{4})/);
    const date = dateMatch ? dateMatch[1] : null;
    return { sum, date };
  }

  const handleCalculate = (image: string) => {
    if (!image) return;
    setTextLoading(true);
    Tesseract.recognize(image, "ukr")
      .then(({ data: { text } }) => {
        setReceiptFilterInfo(extractFields(text));
      })
      .finally(() => {
        setTextLoading(false);
      });
  };

  return (
    <div className="flex items-center justify-center min-h-screen w-full">
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
          <div>
            <img src={imagePreview} className="max-w-xs rounded shadow" />
          </div>
          <Button
            onClick={() => handleCalculate(imagePreview)}
            className=" bg-black rounded-xl border-1 border-white/30 px-4 py-2 cursor-pointer"
          >
            Сalculate
          </Button>
          {textLoading ? (
            <LoadingSpinner />
          ) : (
            <div>
              <p>{receiptFilterInfo.sum}</p>
              <p>{receiptFilterInfo.date}</p>
            </div>
          )}
        </div>
      )}
    </div>
  );
};

export default Home;
