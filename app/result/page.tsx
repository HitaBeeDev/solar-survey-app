"use client";

import { useSearchParams } from "next/navigation";
import Image from "next/image";
import solarPanelImage from "../assets/solar-panels.webp";
import { IoCopyOutline } from "react-icons/io5";
import { useState } from "react";
import VoucherCode from "./VoucherCode";

export default function ResultPage(): JSX.Element {
  // grab URL params to show personalized results
  const searchParams = useSearchParams();
  const outcome = searchParams.get("outcome"); // "yes" or "no"
  const contacted = searchParams.get("contacted") === "true";
  const name: string | null = searchParams.get("name");

  // copy to clipboard state
  const [copied, setCopied] = useState<boolean>(false);

  // generating a random uppercase string for the voucher code
  const generateVoucherCode = (): string => {
    return Math.random().toString(36).substring(2, 8).toUpperCase();
  };

  const voucherCode = generateVoucherCode();

  // copy to clipboard function
  const handleCopy = () => {
    navigator.clipboard.writeText(voucherCode);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000); // remove "Copied!" after 2 sec
  };

  return (
    <div className="h-screen flex items-center justify-center bg-[#f9f9f9]">
      <div className="w-full max-w-[40rem] bg-[#efefef]/10 md:rounded-[0.8rem] md:shadow-lg p-6 md:grid md:grid-cols-2 md:gap-5">
        <div className="col-span-1 flex justify-center items-center">
          <Image
            src={solarPanelImage}
            alt="Schoenergie Logo"
            className="w-full"
          />
        </div>

        <div className="col-span-1 flex flex-col justify-center md:mt-0 mt-6">
          <p className="text-[#f05d06] font-[600] text-[0.9rem]">
            {name
              ? `Thank you, ${decodeURIComponent(
                  name
                )}, for completing the survey!`
              : "Thank you for completing the survey!"}
          </p>

          {outcome === "yes" ? (
            <p className="text-[#451505] font-[500] text-[0.8rem] mt-3">
              Great news! A solar panel system could be a smart and sustainable
              choice for your home.
            </p>
          ) : (
            <p className="text-[#451505] font-[500] text-[0.8rem] mt-3">
              While solar might not be the perfect fit now, exploring your
              energy options is a great first step.
            </p>
          )}

          {/* show this if user asked to be contacted */}
          {contacted && (
            <p className="text-[#451505] font-[500] text-[0.8rem] mt-3">
              We’ll contact you soon with more information.
            </p>
          )}

          {/* voucher code and copy-to-clipboard section */}
          <VoucherCode code={voucherCode} />
        </div>
      </div>
    </div>
  );
}
