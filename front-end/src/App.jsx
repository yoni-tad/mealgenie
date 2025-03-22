import { useState, useEffect } from "react";
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
import { getResponseFromAI, generateMealPlan } from "./ai";
import AllMealPlans from "./components/AllMealPlans";
import { toast, ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

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
    caloryAmount: "",
  });
  const [steps, setSteps] = useState(
    localStorage.getItem("Nav") != null ? localStorage.getItem("Nav") : "step-1"
  );
  const [progress, setProgress] = useState(
    localStorage.getItem("Progress")
      ? JSON.parse(localStorage.getItem("Progress"))
      : 16.6
  );
  const [onLoading, setOnLoading] = useState(false);

  const showToastMessage = (text, type = "error") => {
    toast[type](text, {
      position: "top-right",
      autoClose: 5000,
      hideProgressBar: false,
      closeOnClick: true,
      pauseOnHover: true,
      draggable: true,
      progress: undefined,
      theme: "light",
    });
  };

  useEffect(() => {
    localStorage.setItem("Data", JSON.stringify(userData));
    localStorage.setItem("Nav", steps);
    localStorage.setItem("Progress", JSON.stringify(progress));
  }, [steps]);

  async function getData() {
    setOnLoading(true);
    const generatedData = await getResponseFromAI(userData);
    const calorieIntake = parseInt(generatedData.match(/\d+/)?.[0] || "0", 10);
    if (calorieIntake) {
      setUserData((prevData) => ({
        ...prevData,
        caloryAmount: calorieIntake,
      }));
      setSteps("finished");
    } else {
      showToastMessage("Error on response, Try again!", "error");
      console.log("Error on response, Try again!");
    }
    setOnLoading(false);
  }

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
        setSteps("step-4");
        setProgress(66.7);

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
        if (userData.weightGoal) {
          userData.caloryAmount && setSteps("finished");
        }
        console.log(userData);
        break;
      case "finished":
        userData.caloryAmount;
        setSteps("home");
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

  function clearData() {
    localStorage.clear();
    setSteps("step-1");
    setProgress(16.6);
  }
  // clearData()

  async function getMealPlan() {
    setOnLoading(true);

    const rawData = await generateMealPlan();
    const jsonMatch = rawData.match(/```json\s*([\s\S]*?)\s*```/);

    if (jsonMatch) {
      const jsonString = jsonMatch[1].trim();
      try {
        const jsonData = JSON.parse(jsonString);
        localStorage.setItem("MealPlan", JSON.stringify(jsonData));
        setSteps("home");
      } catch (error) {
        showToastMessage("JSON Parsing Error, Try again!", "error");
        console.error("JSON Parsing Error:", error);
      }
    } else {
      showToastMessage("No valid JSON found in response, Try again!", "error");
      console.error("No valid JSON found in response.");
    }
    setOnLoading(false);
  }

  return (
    <main className="flex flex-col h-screen py-10 px-4">
      <ToastContainer />
      {steps != "home" ? <Header clearData={clearData} /> : null}
      {steps != "home" ? <Progress progress={progress} /> : null}
      {steps === "step-1" ? <StepOne handleChanges={handleChanges} /> : null}
      {steps === "step-2" ? (
        <StepTwo selectedAge={userData.age} setAge={handleChanges} />
      ) : null}
      {steps === "step-3" ? <StepThree handleChanges={handleChanges} /> : null}
      {steps === "step-4" ? <StepFour handleChanges={handleChanges} /> : null}
      {steps === "step-5" ? <StepFive handleChanges={handleChanges} /> : null}
      {steps === "step-6" ? <StepSix handleChanges={handleChanges} /> : null}
      {steps === "finished" ? (
        <FinalStep caloryAmount={userData.caloryAmount} />
      ) : null}
      {steps == "home" ? <Home userData={userData} clearData={clearData} /> : null}
      {steps != "home" ? (
        <NavBtn
          onloading={onLoading}
          btnText={
            steps === "step-6"
              ? "Finished"
              : steps == "finished"
              ? "Get start!"
              : "Next"
          }
          handleNav={
            steps == "step-6"
              ? () => getData()
              : steps == "finished"
              ? () => getMealPlan()
              : () => handleNav(steps)
          }
        />
      ) : null}
      {steps == "allMealPlan" ? <AllMealPlans /> : null}
    </main>
  );
}
