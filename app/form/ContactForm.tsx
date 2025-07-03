"use client";

import { JSX } from "react";
import ContactFormInputs from "../../components/ContactFormInputs";

interface ContactFormProps {
  contact: {
    name: string;
    email: string;
    phone: string;
  };
  setContact: (contact: { name: string; email: string; phone: string }) => void;
}

export default function ContactForm({
  contact,
  setContact,
}: ContactFormProps): JSX.Element {
  return (
    <div className="w-full bg-[#ff5c00]/10 p-3 rounded-[0.3rem] mt-3">
      <p className="text-[#292929] font-[500] text-[0.8rem]">
        Want a free assessment or simulation?
        <span className="text-[#525252] text-[0.7rem]">
          {" "}
          Leave your contact info.
        </span>
      </p>

      <ContactFormInputs
        label="Name:"
        id="name"
        name="name"
        type="text"
        placeholder="Enter your full name"
        value={contact.name}
        onChange={(e) => setContact({ ...contact, name: e.target.value })}
        className="mt-3"
      />

      <ContactFormInputs
        label="Email:"
        id="email"
        name="email"
        type="email"
        placeholder="Enter your email address"
        value={contact.email}
        onChange={(e) => setContact({ ...contact, email: e.target.value })}
        className="mt-2"
      />

      <ContactFormInputs
        label="Phone:"
        id="phone"
        name="phone"
        type="tel"
        placeholder="Enter your phone number"
        value={contact.phone}
        onChange={(e) => setContact({ ...contact, phone: e.target.value })}
        className="mt-2"
      />
    </div>
  );
}
