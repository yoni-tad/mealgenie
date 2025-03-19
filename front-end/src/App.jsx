import { useState } from "react";
import StepOne from "./components/forms/StepOne";
import Header from "./components/forms/Header";
import StepTwo from "./components/forms/StepTwo";
import StepThree from "./components/forms/StepThree";
import StepFour from "./components/forms/StepFour";
import StepFive from "./components/forms/StepFive";
import StepSix from "./components/forms/StepSix";
import FinalStep from "./components/forms/FinalStep";
import Progress from "./components/Progress";
import Home from "./components/Home";

export default function App() {
  const [selectedAge, setSelectedAge] = useState("21");

  return (
    <main className="flex flex-col h-screen py-10">
      {/* <Header /> */}
      {/* <Progress /> */}
      {/* <StepOne /> */}
      {/* <StepTwo selectedAge={selectedAge} setSelectedAge={setSelectedAge}/> */}
      {/* <StepThree /> */}
      {/* <StepFour /> */}
      {/* <StepFive /> */}
      {/* <StepSix /> */}
      {/* <FinalStep /> */}
      <Home />
    </main>
  );
}
