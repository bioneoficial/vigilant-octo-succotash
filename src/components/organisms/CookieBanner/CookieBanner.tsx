import React from "react";

type CookieBannerProps = {};

const CookieBanner: React.FC<CookieBannerProps> = () => {
  return (
    <div
      className="fixed top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 flex items-center justify-center z-50"
      style={{
        backgroundColor: "#FFFFFF",
        color: "#343434",
        lineHeight: 1.375,
        boxShadow: "0 0 18px rgba(0,0,0,.2)",
        maxWidth: "650px",
        maxHeight: "80%",
        overflowY: "auto",
        width: "60%",
        borderRadius: "2.5px",
        fontSize: "14px",
      }}
    >
      <div aria-label="Cookie banner">
        centralizado, bora criar o componente
      </div>
    </div>
  );
};

export default CookieBanner;
