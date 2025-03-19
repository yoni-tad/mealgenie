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
import NavBtn from "./components/ui/NavBtn";

export default function App() {
  const [userData, setUserData] = useState({
    name: "",
    age: "21",
    goal: "",
    height: "",
    heightMeasurement: "cm",
    weight: "",
    weightMeasurement: "kg",
    weightGoal: "",
  });
  // console.log(userData);
  const [steps, setSteps] = useState("step-1");
  const [progress, setProgress] = useState(16.6);
  // console.log("current step: " + steps);

  function handleNav(step) {
    switch (step) {
      case "step-1":
        if (userData.name) {
          setSteps("step-2");
          setProgress(33.3);
        }
        break;

      case "step-2":
        if (userData.age) {
          setSteps("step-3");
          setProgress(50);
        }
        break;
      case "step-3":
        if (userData.goal) {
          setSteps("step-4");
          setProgress(66.7);
        }
        break;
      case "step-4":
        if (userData.height) {
          setSteps("step-5");
          setProgress(83.4);
        }
        break;
      case "step-5":
        if (userData.weight) {
          setSteps("step-6");
          setProgress(100);
        }
        break;
      case "step-6":
        userData.weightGoal && setSteps("finished");
        console.log(userData);
        break;

      default:
        setSteps("step-1");
        break;
    }
  }

  function handleChanges(event) {
    if (event.currentTarget) {
      const { name, value } = event.currentTarget;
      setUserData((prevData) => ({
        ...prevData,
        [name]: value,
      }));
    } else if (event.age) {
      setUserData((prevData) => ({
        ...prevData,
        age: event.age,
      }));
    }
  }

  return (
    <main className="flex flex-col h-screen py-10 px-4">
      <Header />
      <Progress progress={progress} />
      {steps === "step-1" ? <StepOne handleChanges={handleChanges} /> : null}
      {steps === "step-2" ? (
        <StepTwo selectedAge={userData.age} setAge={handleChanges} />
      ) : null}
      {steps === "step-3" ? <StepThree handleChanges={handleChanges} /> : null}
      {steps === "step-4" ? <StepFour handleChanges={handleChanges} /> : null}
      {steps === "step-5" ? <StepFive handleChanges={handleChanges} /> : null}
      {steps === "step-6" ? <StepSix handleChanges={handleChanges} /> : null}
      {steps === "finished" ? <FinalStep /> : null}
      {/* <Home /> */}
      <NavBtn
        btnText={
          steps === "step-6"
            ? "Finished"
            : steps == "finished"
            ? "Get start!"
            : "Next"
        }
        handleNav={() => handleNav(steps)}
      />
    </main>
  );
}
