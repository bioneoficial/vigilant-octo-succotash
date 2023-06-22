import React, { useState } from "react";
import Image from "next/image";

import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import ResetPasswordFirstStep from "@/components/molecules/ResetPasswordFirstStep/ResetPasswordFirstStep";
import ResetPasswordSecondStep from "@/components/molecules/ResetPasswordSecondStep/ResetPasswordSecondStep";
import ResetPasswordThirdStep from "@/components/molecules/ResetPasswordThirdStep/ResetPasswordThirdStep";

function ResetPassword(): JSX.Element {
  const [currentStep, setCurrentStep] = useState<number>(1);

  const handleSuccess = (): void => {
    setCurrentStep((prevStep) => prevStep + 1);
  };

  return (
    <div className="w-1/2 max-w-xs mx-auto">
      <div>
        <Image
          src={"/images/logo-funktoon.svg"}
          width={250}
          height={200}
          alt="logo"
          className="h-160 w-160 rounded-sm"
          quality={100}
        />
      </div>
      {currentStep === 1 && (
        <ResetPasswordFirstStep onSuccess={handleSuccess} />
      )}
      {currentStep === 2 && (
        <ResetPasswordSecondStep onSuccess={handleSuccess} />
      )}
      {currentStep === 3 && <ResetPasswordThirdStep />}

      <ToastContainer
        position="top-right"
        autoClose={5000}
        hideProgressBar={false}
        newestOnTop
        closeOnClick
        rtl={false}
        pauseOnFocusLoss
        draggable
        pauseOnHover
        theme="light"
      />
    </div>
  );
}

export default ResetPassword;
