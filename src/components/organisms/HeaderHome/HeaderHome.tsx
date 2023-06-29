import React, { SetStateAction, useState } from "react";
import Image from "next/image";
import { Button } from "@/components/atoms/Button";
import Link from "next/link";

export const HeaderHome: React.FC = (): JSX.Element => {
  const [isOpen, setIsOpen] = useState(false); // For mobile dropdown menu

  return (
    <header
      className={`bg-[#fff] shadow-md transform transition-all ease-out duration-300 z-10`}
    >
      <div className="mx-auto max-w-7xl px-2 sm:px-6 lg:px-8">
        <div className="relative flex items-center justify-between h-16">
          <div className="absolute inset-y-0 right-0 flex items-center ">
            <Button
              title={isOpen ? "CLOSE" : "MENU"}
              status={true}
              className={[
                "inline-flex",
                "items-center",
                "px-4",
                "py-2",
                "border",
                "border-transparent",
                "text-base",
                "font-medium",
                "rounded-md",
                "text-[#8b00d1]",
                "bg-white",
                "hover:bg-[#f9fafb]",
                "mr-4",
                "md:hidden",
                "uppercase",
                "hover:bg-purple-500",
                "hover:text-white",
              ]}
              onClick={(): SetStateAction<void> => setIsOpen(!isOpen)}
            />
          </div>
          <div className="flex-1 flex items-center justify-start ">
            <Image
              src={"/images/logo-funktoon.svg"}
              width={250}
              height={200}
              alt="logo"
              className="h-160 w-160 rounded-sm"
              quality={100}
            />
          </div>
          <div className="hidden md:block md:ml-10 md:pr-4 md:space-x-8">
            <Link href={"/agenda"}>
              <Button
                title="AGENDA"
                status={true}
                className={[
                  "font-medium",
                  "text-[#8b00d1]",
                  "uppercase",
                  "hover:bg-purple-500",
                  "hover:text-white",
                ]}
              />
            </Link>
            <Link href={"/selos"}>
              <Button
                title="SELOS"
                status={true}
                className={[
                  "font-medium",
                  "text-[#8b00d1]",
                  "uppercase",
                  "hover:bg-purple-500",
                  "hover:text-white",
                ]}
              />{" "}
            </Link>
            <Link href={"/colecoes"}>
              <Button
                title="COLEÇÕES"
                status={true}
                className={[
                  "font-medium",
                  "text-[#8b00d1]",
                  "uppercase",
                  "hover:bg-purple-500",
                  "hover:text-white",
                ]}
              />
            </Link>
            <Link href={"/login"}>
              <Button
                title="LOGIN"
                status={true}
                className={[
                  "font-medium",
                  "text-[#8b00d1]",
                  "uppercase",
                  "hover:bg-purple-500",
                  "hover:text-white",
                ]}
              />
            </Link>
          </div>
        </div>
        <div
          className={`${
            isOpen ? "block" : "hidden"
          } absolute top-16 right-0 md:hidden bg-white shadow-lg rounded-md `}
        >
          <div className="px-2 pt-2 pb-3 space-y-1 sm:px-3">
            <Link href={"/agenda"}>
              <Button
                title="AGENDA"
                status={true}
                className={[
                  "block",
                  "px-3",
                  "py-2",
                  "rounded-md",
                  "text-base",
                  "font-medium",
                  "text-[#8b00d1]",
                  "uppercase",
                  "hover:bg-purple-500",
                  "hover:text-white",
                ]}
              />
            </Link>
            <Link href={"/selos"}>
              <Button
                title="SELOS"
                status={true}
                className={[
                  "block",
                  "px-3",
                  "py-2",
                  "rounded-md",
                  "text-base",
                  "font-medium",
                  "text-[#8b00d1]",
                  "uppercase",
                  "hover:bg-purple-500",
                  "hover:text-white",
                ]}
              />{" "}
            </Link>
            <Link href={"/colecoes"}>
              <Button
                title="COLEÇÕES"
                status={true}
                className={[
                  "block",
                  "px-3",
                  "py-2",
                  "rounded-md",
                  "text-base",
                  "font-medium",
                  "text-[#8b00d1]",
                  "uppercase",
                  "hover:bg-purple-500",
                  "hover:text-white",
                ]}
              />
            </Link>
            <Link href={"/login"}>
              <Button
                title="LOGIN"
                status={true}
                className={[
                  "block",
                  "px-3",
                  "py-2",
                  "rounded-md",
                  "text-base",
                  "font-medium",
                  "text-[#8b00d1]",
                  "uppercase",
                  "hover:bg-purple-500",
                  "hover:text-white",
                ]}
              />
            </Link>
          </div>
        </div>
      </div>
    </header>
  );
};
