import React from "react";

interface LoginTemplateProps {
  children: React.ReactNode;
}

export const LoginTemplate: React.FC<LoginTemplateProps> = ({
  children,
}): JSX.Element => {
  return (
    <div className="min-h-screen flex items-center">
      <div
        className="hidden md:block w-1/2 min-h-screen bg-no-repeat bg-clip-border bg-origin-border bg-cover"
        style={{
          backgroundImage: "url('/images/TeladeLogin.png')",
        }}
      ></div>
      {children}
    </div>
  );
};

export default LoginTemplate;
