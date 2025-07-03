import { JSX } from "react";

interface ContactFormInputsProps {
  label: string;
  id: string;
  name: string;
  type?: "text" | "email" | "tel";
  placeholder?: string;
  value: string;
  onChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
  className?: string;
}

export default function ContactFormInputs({
  label,
  id,
  name,
  type = "text",
  placeholder = "",
  value,
  onChange,
  className = "",
}: ContactFormInputsProps): JSX.Element {
  return (
    <div className={`flex flex-col items-start gap-1 ${className}`}>
      <label htmlFor={id} className="text-[#292929] font-[500] text-[0.75rem]">
        {label}
      </label>
      <input
        className="border border-[#dcdcdc] rounded-[0.2rem] w-full text-[0.7rem] pl-2 h-[1.6rem] outline-none focus:ring-0"
        id={id}
        name={name}
        type={type}
        placeholder={placeholder}
        value={value}
        onChange={onChange}
      />
    </div>
  );
}
