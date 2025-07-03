"use client";
import { JSX } from "react";
import { ReactNode } from "react";

interface ButtonProps {
  children: ReactNode;
  onClick?: () => void;
  type?: "button" | "submit";
  disabled?: boolean;
  className?: string;
}

export default function Button({
  children,
  onClick,
  type = "button",
  disabled = false,
  className = "",
}: ButtonProps): JSX.Element {
  const baseStyles =
    "h-[1.9rem] px-4 flex justify-center items-center rounded-[0.3rem] text-[0.75rem] font-[500] transition-all duration-300 cursor-pointer";

  const enabledStyles =
    "bg-[#ff5c00] text-[#f9f9f9] border border-[#ff5c00] hover:bg-[#ff760a] cursor-pointer";

  const disabledStyles =
    "border border-[#dcdcdc] bg-transparent text-[#292929] cursor-pointer";

  return (
    <button
      type={type}
      disabled={disabled}
      onClick={onClick}
      className={`${baseStyles} ${
        disabled ? disabledStyles : enabledStyles
      } ${className}`}
    >
      {children}
    </button>
  );
}
