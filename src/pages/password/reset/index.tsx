import React from "react";
import LoginTemplate from "@/components/templates/LoginTemplate/LoginTemplate";
import ResetPassword from "@/components/organisms/ResetPassword/ResetPassword";

function ResetPasswordPage(): JSX.Element {
  return (
    <LoginTemplate>
      <ResetPassword />
    </LoginTemplate>
  );
}

export default ResetPasswordPage;
