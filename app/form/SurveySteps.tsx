"use client";

interface SurveyStepsProps {
  currentStep: number;
  totalSteps: number;
}

export default function SurveySteps({
  currentStep,
  totalSteps,
}: SurveyStepsProps): JSX.Element {
  return (
    <div className="flex flex-row items-center justify-center gap-3">
      {Array.from({ length: totalSteps }).map((_, index) => (
        <p
          key={index}
          className={`w-[2rem] h-[2rem] flex items-center justify-center rounded-full border text-[0.85rem] font-[500]
            ${
              index === currentStep
                ? "bg-[#ff5c00] text-[#f9f9f9] border-[#ff5c00]"
                : "text-[#656565] border-[#dcdcdc]"
            }`}
        >
          {index + 1}
        </p>
      ))}
    </div>
  );
}
