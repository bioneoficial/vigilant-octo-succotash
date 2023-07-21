import { setShowBanner } from "@/Redux/Reducers/cookieBannerSlice";
import { Button } from "@/components/atoms/Button";
import { InputField } from "@/components/atoms/InputField";
import Link from "next/link";
import React, { useState } from "react";
import { useDispatch } from "react-redux";

type CookieBannerProps = {
  // add props here
};

const CookieBanner: React.FC<CookieBannerProps> = () => {
  const dispatch = useDispatch();
  const [aceitarTodosCookies, setAceitarTodosCookies] =
    useState<boolean>(false);

  const handleOnClose = (): void => {
    dispatch(setShowBanner(false));
    window.localStorage.setItem("funktoon-cookies-banner", "false");
  };
  return (
    <div
      id="cookie-banner-shadow"
      className="fixed z-99  w-full h-full bg-gray-500 bg-opacity-75 transition-opacity"
    >
      <div className="fixed top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 flex flex-col p-6 justify-center z-50 rounded-md text-sm bg-white">
        <Button
          title=""
          status={true}
          onClick={handleOnClose}
          className={[
            "absolute top-1 right-1  bg-slate-100 rounded-full shadow-sm",
          ]}
          icon={{ src: "/images/x-mark.svg", alt: "x-mark" }}
        />
        <div aria-label="Cookie banner" className="pb-3">
          Ao clicar em <b>&quot;Aceitar todos os cookies&quot;</b>, você
          concorda com o armazenamento de cookies no seu dispositivo para
          melhorar a navegação no site, analisar o uso do site e auxiliar em
          nossos esforços de marketing.
          <p>
            <Link href="/politica-de-cookie" className=" text-blue-500">
              Política de Cookies.
            </Link>
          </p>
        </div>
        <div className="flex flex-col gap-2 px-4 pb-4 justify-center">
          <InputField
            name="cookies-necessarios"
            type="checkbox"
            label="Cookies Estritamente Necessários"
            initialValue={"true"}
            classNameInput={["mr-3 w-4 h-4"]}
          />
          <InputField
            name="aceitar-todos-cookies"
            type="checkbox"
            label="Aceitar todos os cookies"
            initialValue={aceitarTodosCookies.toString()}
            classNameInput={["mr-3 w-4 h-4 bg-blue-500"]}
            onChange={(): void => setAceitarTodosCookies(!aceitarTodosCookies)}
          />
        </div>
        <Button
          title="Salvar Configurações"
          status={true}
          className={[
            "w-1/3 mb-4 bg-green-500 rounded-md fold:max-md:w-full self-center",
          ]}
          onClick={handleOnClose}
        />
      </div>
    </div>
  );
};

export default CookieBanner;
