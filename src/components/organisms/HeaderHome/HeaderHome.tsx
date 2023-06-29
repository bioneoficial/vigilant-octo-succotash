import React from "react";
import Image from "next/image";
import { Button } from "@/components/atoms/Button";
import { abrirSite } from "@/utils/utils";
import Link from "next/link";

export const HeaderHome: React.FC = (): JSX.Element => {
  return (
    <header
      className={`bg-[#fff] shadow-md transform transition-all ease-out duration-300 z-10`}
    >
      <div className="mx-auto max-w-7xl px-2 sm:px-6 lg:px-8">
        <div className="relative flex h-16 items-center justify-between">
          <div className="flex flex-1 items-center justify-center sm:items-stretch sm:justify-start">
            <Image
              src={"/images/logo-funktoon.svg"}
              width={250}
              height={200}
              alt="logo"
              className="h-160 w-160 rounded-sm"
              quality={100}
            />
          </div>
          <div className="flex flex-1 items-center justify-center sm:items-stretch sm:justify-start">
            <Link href={"/agenda"}>
              <Button
                title="Agenda"
                status={true}
                className={[
                  "flex",
                  "items-center",
                  "mr-4",
                  "text-[#8b00d1] font-medium",
                ]}
                onClick={abrirSite}
              />
            </Link>
            <Link href={"/selos"}>
              <Button
                title="Selos"
                status={true}
                className={[
                  "flex",
                  "items-center",
                  "mr-4",
                  "text-[#8b00d1] font-medium",
                ]}
                onClick={abrirSite}
              />{" "}
            </Link>
            <Link href={"/colecoes"}>
              <Button
                title=" Coleções"
                status={true}
                className={[
                  "flex",
                  "items-center",
                  "mr-4",
                  "text-[#8b00d1] font-medium",
                ]}
                onClick={abrirSite}
              />
            </Link>
          </div>
          <div className="absolute inset-y-0 right-0 flex items-center pr-2 sm:static sm:inset-auto sm:ml-6 sm:pr-0">
            <Button
              title="Login"
              status={true}
              className={[
                "flex",
                "items-center",
                "mr-4",
                "text-[#8b00d1] font-medium",
              ]}
              onClick={abrirSite}
            />
          </div>
        </div>
      </div>
    </header>
  );
};
