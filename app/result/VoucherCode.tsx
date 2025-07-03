"use client";
import { JSX } from "react";
import { IoCopyOutline } from "react-icons/io5";
import { useState } from "react";

interface VoucherCodeProps {
  code: string;
}

export default function VoucherCode({ code }: VoucherCodeProps): JSX.Element {
  const [copied, setCopied] = useState(false);

  const handleCopy = () => {
    navigator.clipboard.writeText(code);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  return (
    <div className="flex flex-row items-center gap-2 mt-6">
      <p className="text-[#292929] text-[0.8rem]">Your discount code:</p>

      <div className="flex items-center gap-2 px-3 py-1 rounded-md bg-white border border-[#dcdcdc] text-[#ff5c00] font-mono text-[0.8rem] tracking-wide">
        <p>{code}</p>

        <button
          onClick={handleCopy}
          className={`transition-colors ${
            copied ? "text-green-600" : "text-[#ff5c00] hover:text-[#ff760a]"
          }`}
          aria-label="Copy Code"
        >
          <IoCopyOutline size={16} />
        </button>
      </div>

      {copied && (
        <p className="text-[#525252] font-[400] text-[0.65rem]">Copied!</p>
      )}
    </div>
  );
}
