import { Suspense } from "react";
import ResultPage from "./ResultPage";

export default function Page() {
  return (
    <Suspense fallback={<div>Loading result...</div>}>
      <ResultPage />
    </Suspense>
  );
}
