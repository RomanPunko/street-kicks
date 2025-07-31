"use client";

import React, { type FC, type ReactNode } from "react";

interface ButtonProps {
  children?: ReactNode;
  className?: string;
  onClick?: () => void;
  onDrop?: (e: React.DragEvent<HTMLButtonElement>) => void;
  onDragOver?: (e: React.DragEvent<HTMLButtonElement>) => void;
  onDragLeave?: (e: React.DragEvent<HTMLButtonElement>) => void;
}

const Button: FC<ButtonProps> = ({
  children,
  className,
  onClick,
  onDrop,
  onDragOver,
  onDragLeave,
}) => {
  return (
    <button
      className={className}
      onClick={onClick}
      onDrop={onDrop}
      onDragOver={onDragOver}
      onDragLeave={onDragLeave}
    >
      {children}
    </button>
  );
};

export default Button;
