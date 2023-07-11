/* eslint-disable @next/next/no-img-element */
import React, { SetStateAction, useState } from "react";
import { Button } from "@/components/atoms/Button";
import { LinkButton } from "@/components/molecules/LinkButton";
import Link from "next/link";

const links = [
  { href: "/agenda", title: "AGENDA" },
  { href: "/selos", title: "SELOS" },
  { href: "/colecoes", title: "COLEÇÕES" },
  { href: "/login", title: "LOGIN" },
];

export const HeaderHome: React.FC = (): JSX.Element => {
  const [isOpen, setIsOpen] = useState(false);

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
            <Link href="/">
              <img
                src={"/images/logo-funktoon.svg"}
                alt="logo"
                className=" fold:w-32 sm:w-36 md:w-52 lg:w-56 xl:w-64 2xl:w-96"
              />
            </Link>
          </div>
          <div className="hidden md:block md:ml-10 md:pr-4 md:space-x-8">
            {links.map((link) => (
              <LinkButton key={link.href} {...link} className={""} />
            ))}
          </div>
        </div>
        <div
          className={`${
            isOpen ? "block" : "hidden"
          } absolute top-16 right-0 md:hidden bg-white shadow-lg rounded-md`}
        >
          <div className="px-2 pt-2 pb-3 space-y-1 sm:px-3">
            {links.map((link) => (
              <LinkButton
                key={link.href}
                {...link}
                className={"px-3 py-2 rounded-md text-base"}
                isBlock={true}
              />
            ))}
          </div>
        </div>
      </div>
    </header>
  );
};
