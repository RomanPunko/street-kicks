"use client";

import Button from "@/components/ui/button";
import React, { useRef, useState, type FC } from "react";
import { LiaMoneyCheckAltSolid } from "react-icons/lia";

const Home: FC = () => {
  const inputRef = useRef<HTMLInputElement | null>(null);
  const [imagePreview, setImagePreview] = useState<string | null>(null);
  const [isDragging, setIsDragging] = useState(false);

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

  return (
    <div className="flex items-center justify-center min-h-screen w-full">
      {!imagePreview && (
        <div className="flex items-center justify-center w-full gap-[150px]">
          <div className="money-check-animation">
            <LiaMoneyCheckAltSolid size={200} />
          </div>
          <Button
            onClick={() => inputRef.current?.click()}
            onDrop={handleDrop}
            onDragOver={handleDragOver}
            onDragLeave={handleDragLeave}
            className={`flex items-center justify-center text-6xl ${!isDragging ? "bg-black" : 'bg-white/30'} rounded-xl border-1 border-white/30 px-4 py-2 cursor-pointer h-[300px] w-[300px]`}
          >
            <div className="flex flex-col items-center justify-center">
              <p>+</p>
              <p className="text-[16px]">add a check</p>
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
            <img
              src={imagePreview}
              alt="Прев'ю зображення"
              className="max-w-xs rounded shadow"
            />
          </div>
          <Button
            className=" bg-black rounded-xl border-1 border-white/30 px-4 py-2 cursor-pointer"
          >
            Сalculate
          </Button>
        </div>
      )}
    </div>
  );
};

export default Home;
