/* eslint-disable @next/next/no-img-element */
import React, { SetStateAction, useState } from "react";
import { Button } from "@/components/atoms/Button";
import { LinkButton } from "@/components/molecules/LinkButton";
import Link from "next/link";
import { UserRole } from "@/utils/enums";

const links = [
  { href: "/agenda", title: "AGENDA" },
  { href: "/selos", title: "SELOS" },
  { href: "/colecoes", title: "COLEÇÕES" },
  { href: "/login", title: "LOGIN" },
];

const userLinks = [
  { href: "/", title: "INICIO" },
  { href: "/agenda", title: "AGENDA" },
  { href: "/seja-autor", title: "SEJA UM AUTOR" },
  { href: "/minha-conta", title: "MINHA CONTA" },
];

const authorLinks = [{ href: "/dashboard-author", title: "DASHBOARD" }];
const adminLinks = [
  { href: "/", title: "INICIO" },
  { href: "/dashboard", title: "DASHBOARD" },
];

export const HeaderHome: React.FC = (): JSX.Element => {
  const [isOpen, setIsOpen] = useState(false);
  const storedData = JSON.parse(
    localStorage.getItem("funktoonToken") ||
      sessionStorage.getItem("funktoonToken") ||
      "{}"
  );
  const role: keyof typeof navigationMap = storedData.user.role || "";

  const navigationMap = {
    [UserRole.usuario]: userLinks,
    [UserRole.admin]: adminLinks,
    [UserRole.root]: adminLinks,
    [UserRole.autor]: authorLinks,
  };

  const navigationLinks = navigationMap[role] || links;

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
          <div className="flex flex-1 items-center justify-start ">
            <Link href="/">
              <img
                src={"/images/logo-funktoon.svg"}
                alt="logo"
                className=" fold:w-32 sm:w-36 md:w-52 lg:w-56 xl:w-64 2xl:w-92"
              />
            </Link>
          </div>
          <div className="hidden md:block md:ml-10 md:pr-4 md:space-x-8">
            {navigationLinks.map((link) => (
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
            {navigationLinks.map((link) => (
              <LinkButton
                key={link.href}
                {...link}
                className={"px-3 py-2 rounded-md fold:text-base 2xl:text-2xl"}
                isBlock={true}
                id="ButtonHeaderHome"
              />
            ))}
          </div>
        </div>
      </div>
    </header>
  );
};
