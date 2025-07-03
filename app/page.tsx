import Link from "next/link";
import Image from "next/image";
import logo from "./assets/logo-schoenergie.svg";
import "./globals.css";
import Button from "./ui/Button";

export default function Home(): JSX.Element {
  return (
    <div className="h-screen flex items-center justify-center bg-[#f9f9f9]">
      <div className="w-full max-w-md bg-[#efefef]/10 md:rounded-[0.8rem] md:shadow-lg p-6">
        <div className="w-[6rem]">
          <Image src={logo} alt="Schoenergie Logo" />
        </div>

        <div className="mt-6">
          <h1 className="text-[#525252] font-[400] text-[0.75rem]">
            Welcome to Our Quick Survey!
          </h1>

          <h2 className="text-[#292929] font-[600] text-[0.9rem] mt-1 mb-5">
            Is a solar panel system worth it for your roof?
          </h2>

          <div className="mt-3">
            <p className="text-[#525252] font-[400] text-[0.7rem]">
              Answer five simple questions and get your personalized result
              instantly. At the end, you can optionally provide your contact
              details for more info or a free energy simulation.
            </p>

            <p className="text-[#525252] font-[400] text-[0.7rem] mt-3">
              Complete the survey and claim a{" "}
              <span className="text-[#ff760a] font-semibold">
                25% discount voucher
              </span>{" "}
              on your solar installation!
            </p>
          </div>
        </div>

        <div className="mt-6 flex justify-end">
          <Link href="/form">
            <Button>Let’s get started!</Button>
          </Link>
        </div>
      </div>
    </div>
  );
}
