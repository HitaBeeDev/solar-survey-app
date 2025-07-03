export interface SurveyQuestion {
  id: string;
  label: string;
  options: string[];
}

export const surveyQuestions: SurveyQuestion[] = [
  {
    id: "propertyType",
    label: "What type of property do you own?",
    options: ["Single-family home", "Multi-family home", "Commercial property"],
  },
  {
    id: "roofDirection",
    label: "What is your roof orientation?",
    options: ["South", "West", "East", "North", "No answer"],
  },
  {
    id: "roofAge",
    label: "How old is your roof?",
    options: ["Under 5 years", "5–15 years", "Over 15 years", "No answer"],
  },
  {
    id: "electricityUsage",
    label: "What is your annual electricity usage?",
    options: [
      "Under 3,000 kWh",
      "3,000–5,000 kWh",
      "Over 5,000 kWh",
      "No answer",
    ],
  },
  {
    id: "interestedInOther",
    label: "Are you interested in other energy solutions?",
    options: ["Yes", "No", "Not sure"],
  },
];
