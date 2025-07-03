import ContactForm from "./ContactForm";

interface Props {
  currentQuestionIndex: number;
  currentQuestion: {
    id: string;
    label: string;
    options: string[];
  };
  answers: Record<string, string>;
  handleSelect: (option: string) => void;
  showContactForm: boolean;
  contact: {
    name: string;
    email: string;
    phone: string;
  };
  setContact: (contact: { name: string; email: string; phone: string }) => void;
}

export default function SurveyQuestionBlock({
  currentQuestion,
  answers,
  handleSelect,
  showContactForm,
  contact,
  setContact,
}: Props): JSX.Element {
  return (
    <div className="flex flex-col mt-6 h-full">
      <p className="text-[#292929] font-[500] text-[0.9rem]">
        {currentQuestion.label}
      </p>

      <div className="flex flex-col justify-start items-start">
        {currentQuestion.options.map((option) => (
          <button
            key={option}
            type="button"
            className={`border border-[#dcdcdc] rounded-[0.3rem] cursor-pointer transition-all duration-300 text-[#525252] font-[500] text-[0.75rem]
                    h-[2rem] mt-2 w-full text-left pl-3
      ${
        answers[currentQuestion.id] === option
          ? "bg-[#ff5c00] text-[#f9f9f9] border-[#ff5c00]"
          : "hover:bg-[#dcdcdc]"
      }`}
            onClick={() => handleSelect(option)}
          >
            {option}
          </button>
        ))}
      </div>

      {/* Showing the contact form on the last step */}
      {showContactForm && (
        <ContactForm contact={contact} setContact={setContact} />
      )}
    </div>
  );
}
