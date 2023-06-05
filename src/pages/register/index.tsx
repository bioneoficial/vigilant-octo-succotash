import React from "react";
import LoginTemplate from "@/components/templates/LoginTemplate/LoginTemplate";
import Register from "@/components/organisms/Register/Register";

function RegisterPage(): JSX.Element {
  return (
    <LoginTemplate>
      <Register />
    </LoginTemplate>
  );
}

export default RegisterPage;
