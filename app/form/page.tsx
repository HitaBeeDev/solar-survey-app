"use client";

import { useState } from "react";
import { surveyQuestions } from "./surveyQuestions";
import { useRouter } from "next/navigation";
import { IoAlertCircle } from "react-icons/io5";
import Button from "../ui/Button";
import SurveySteps from "./SurveySteps";
import SurveyQuestionBlock from "./QuestionsOptionsSection";

interface ContactInfo {
  name: string;
  email: string;
  phone: string;
}

export default function FormPage(): JSX.Element {
  const router = useRouter();

  // Keeps track of which question we’re showing right now
  const [currentQuestionIndex, setCurrentQuestionIndex] = useState<number>(0);

  // Saving answers using the question id as the key
  const [answers, setAnswers] = useState<Record<string, string>>({});

  // Get the current question based on the current index
  const currentQuestion = surveyQuestions[currentQuestionIndex];

  // Store contact information form data
  const [contact, setContact] = useState<ContactInfo>({
    name: "",
    email: "",
    phone: "",
  });

  //   Check if the optional contact info is valid (email, phone, name)
  const isValidContact = (): boolean => {
    const isEmailValid =
      contact.email === "" || /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(contact.email);
    const isPhoneValid =
      contact.phone === "" || /^[0-9+\-\s]{6,}$/.test(contact.phone);
    const isNameValid = contact.name === "" || contact.name.trim().length > 1;
    return isEmailValid && isPhoneValid && isNameValid;
  };

  // Error messages for contact form validation
  const [errorMessage, setErrorMessage] = useState<string>("");

  // Handle when the user picks an option
  const handleSelect = (option: string): void => {
    setAnswers((prev) => ({
      ...prev,
      [currentQuestion.id]: option,
    }));
  };

  // Move to the next question
  const handleNext = (): void => {
    if (currentQuestionIndex < surveyQuestions.length - 1) {
      setCurrentQuestionIndex((prev) => prev + 1);
    }
  };

  // Handle form submission
  const handleSubmit = async (): Promise<void> => {
    // check if user wrote something in name, email, or phone fields
    const hasContactInfo = contact.name || contact.email || contact.phone;

    if (!isValidContact()) {
      setErrorMessage("Please check your contact information.");
      return;
    }

    setErrorMessage("");

    // Merge survey answers with contact data
    const finalData = {
      ...answers,
      ...contact,
    };

    // Send data to internal API endpoint
    const res = await fetch("/api/submit", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(finalData),
    });

    // Get the simulated response: { result: "yes" | "no" }
    const data = await res.json();

    // Navigate to result page with outcome in query string
    router.push(`/result?outcome=${data.result}`);

    // Navigate to the result page and let it know whether the user shared contact info
    router.push(
      `/result?outcome=${data.result}&contacted=${
        hasContactInfo ? "true" : "false"
      }&name=${encodeURIComponent(contact.name)}`
    );
  };

  return (
    <div className="h-screen flex items-center justify-center bg-[#f9f9f9]">
      <div className="w-full max-w-md bg-[#efefef]/10 md:rounded-[0.8rem] md:shadow-lg p-6">
        {/* Show the steps and highlight the current question number */}
        <SurveySteps
          currentStep={currentQuestionIndex}
          totalSteps={surveyQuestions.length}
        />

        {/* Show the current question and list all its options – highlight selected one */}
        <SurveyQuestionBlock
          currentQuestionIndex={currentQuestionIndex}
          currentQuestion={currentQuestion}
          answers={answers}
          handleSelect={handleSelect}
          showContactForm={currentQuestionIndex === surveyQuestions.length - 1}
          contact={contact}
          setContact={setContact}
        />

        {/* Show error message if any contact field is invalid */}
        {errorMessage && (
          <div className="flex flex-row items-center mt-2 gap-1">
            <IoAlertCircle className="text-[#ff9737]" />

            <p className="text-[#f05d06] font-[500] text-[0.75rem]">
              {errorMessage}
            </p>
          </div>
        )}

        {/* Show "Submit" button on the last question, otherwise show "Next" */}
        {currentQuestionIndex === surveyQuestions.length - 1 ? (
          <div className="mt-6 flex justify-end">
            <Button
              onClick={handleSubmit}
              disabled={!!errorMessage}
              type="submit"
            >
              Submit
            </Button>
          </div>
        ) : (
          <div className="mt-6 flex justify-end">
            <Button
              onClick={handleNext}
              disabled={!answers[currentQuestion.id]}
            >
              Next
            </Button>
          </div>
        )}
      </div>
    </div>
  );
}
