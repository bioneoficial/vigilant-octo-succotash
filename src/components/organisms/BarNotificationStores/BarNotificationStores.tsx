import React, { useEffect, useState } from "react";
import Image from "next/image";
import { Button } from "@/components/atoms/Button";
import secureLocalStorage from "react-secure-storage";

const BarNotificationStores: React.FC = () => {
  const [isClosed, setIsClosed] = useState(false);

  const handleOnClose = (): void => {
    secureLocalStorage.setItem("isBarNotificationClosed", true);
    setIsClosed(true);
  };

  useEffect(() => {
    const isBarNotificationClosed: boolean = secureLocalStorage.getItem(
      "isBarNotificationClosed"
    ) as boolean;
    if (isBarNotificationClosed) {
      setIsClosed(isBarNotificationClosed);
    }
  }, []);

  if (isClosed) {
    return null;
  }

  return (
    <div className="fixed bottom-0 w-full backdrop-filter backdrop-blur-sm bg-white bg-opacity-80 shadow z-50 py-4">
      <Button
        title=""
        status={true}
        onClick={handleOnClose}
        className={[
          "absolute top-1 right-1  bg-slate-100 rounded-full shadow-sm",
        ]}
        icon={{ src: "/images/x-mark.svg", alt: "x-mark" }}
      />
      <div className="mx-auto flex space-x-2 items-center justify-center">
        <h2 className="font-extrabold text-xs fold:text-sm sm:text-base md:text-lg lg:text-xl">
          Baixe o app para melhor usabilidade.{" "}
        </h2>
        <a
          href="https://apps.apple.com/us/app/funktoon/id6444811852"
          target="_blank"
          rel="noopener noreferrer"
        >
          <Image
            width={120}
            height={45}
            src="/images/apple.svg"
            alt="Baixar funktoon na apple"
          />
        </a>
        <a
          href="https://play.google.com/store/apps/details?id=com.funktoon"
          target="_blank"
          rel="noopener noreferrer"
        >
          <Image
            width={120}
            height={45}
            src="/images/google.png"
            alt="Baixar funktoon no Google"
          />
        </a>
      </div>
    </div>
  );
};

export default BarNotificationStores;
