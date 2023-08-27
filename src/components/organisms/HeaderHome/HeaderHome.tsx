/* eslint-disable @next/next/no-img-element */
import React, { Fragment, SetStateAction, useEffect, useState } from "react";
import { Button } from "@/components/atoms/Button";
import { LinkButton } from "@/components/molecules/LinkButton";
import Link from "next/link";
import { UserRole } from "@/utils/enums";
import { Menu, Transition } from "@headlessui/react";
import { profileMenuItemData } from "@/types/types";
import { NotificationIcon } from "@/components/atoms/NotificationIcon";
import { LogoutIcon } from "@/components/atoms/LogoutIcon";
import { useDispatch } from "react-redux";
import { logout } from "@/Redux/Reducers/sessionSlice";
import Image from "next/image";

const links = [
  { href: "/agenda", title: "AGENDA" },
  { href: "/selos", title: "SELOS" },
  { href: "/login", title: "LOGIN" },
];

const userLinks = [
  { href: "/", title: "INICIO" },
  { href: "/agenda", title: "AGENDA" },
  { href: "/colecoes", title: "COLEÇÕES" },
  { href: "/seja-autor", title: "SEJA UM AUTOR" },
  { href: "/minha-conta", title: "MINHA CONTA" },
];

const authorLinks = [
  { href: "/agenda", title: "AGENDA" },
  { href: "/colecoes", title: "COLEÇÕES" },
  { href: "/minha-conta", title: "MINHA CONTA" },
  { href: "/dashboard-author", title: "DASHBOARD" },
];
const adminLinks = [
  { href: "/", title: "INICIO" },
  { href: "/agenda", title: "AGENDA" },
  { href: "/colecoes", title: "COLEÇÕES" },
  { href: "/dashboard", title: "DASHBOARD" },
];

export const HeaderHome: React.FC = (): JSX.Element => {
  const [isOpen, setIsOpen] = useState(false);
  const [previewImageUrl, setPreviewImageUrl] = useState<string | null>(null);
  const storedData = JSON.parse(
    localStorage.getItem("funktoonToken") ||
      sessionStorage.getItem("funktoonToken") ||
      "{}"
  );
  const role: keyof typeof navigationMap = storedData?.user?.role || "";
  const dispatch = useDispatch();

  useEffect(() => {
    if (storedData?.token) {
      setPreviewImageUrl(storedData.user.fotoPath);
    }
  }, [storedData?.token, storedData?.user?.fotoPath]);

  const profileMenuItems: profileMenuItemData[] = [
    {
      name: "Notificações",
      href: "#notifications",
      icon: <NotificationIcon />,
      alt: "Notificações",
    },
    {
      name: "Sair",
      href: "/",
      icon: <LogoutIcon />,
      alt: "Sair",
      onClick: (): void => {
        dispatch(logout());
      },
    },
  ];

  const navigationMap = {
    [UserRole.usuario]: userLinks,
    [UserRole.admin]: adminLinks,
    [UserRole.root]: adminLinks,
    [UserRole.autor]: authorLinks,
    "": links,
  };

  const navigationLinks = navigationMap[role];

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
          <div className="hidden md:flex md:items-center md:space-x-8">
            {navigationLinks.map((link) => (
              <LinkButton key={link.href} {...link} className={""} />
            ))}
            {storedData.user && (
              <div className="relative inline-block text-left">
                <Menu as="nav" className="relative">
                  <>
                    <Menu.Button className="flex items-center">
                      <Image
                        className="h-8 w-8 rounded-full"
                        width={32}
                        height={32}
                        src={previewImageUrl || "/images/profile-photo.svg"}
                        alt="Profile Picture"
                      />
                      <Image
                        src="/images/down-arrow.svg"
                        alt="Dropdown"
                        height={32}
                        width={32}
                      />
                    </Menu.Button>
                  </>
                  <Transition
                    as={Fragment}
                    enter="transition ease-out duration-100"
                    enterFrom="transform opacity-0 scale-95"
                    enterTo="transform opacity-100 scale-100"
                    leave="transition ease-in duration-75"
                    leaveFrom="transform opacity-100 scale-100"
                    leaveTo="transform opacity-0 scale-95"
                  >
                    <Menu.Items className="absolute mt-2 w-40 rounded-md shadow-lg py-1 bg-white ring-1 ring-black ring-opacity-5 focus:outline-none -left-1/2">
                      {profileMenuItems.map((item) => (
                        <Menu.Item key={item.name}>
                          {({ active }): JSX.Element => (
                            <Link
                              href={item.href}
                              className={`
                            ${active ? "bg-gray-100" : ""}
                            block px-4 py-2 text-sm text-gray-700 hover:bg-[#4a6cf70d] hover:text-[#8b00d1]`}
                              onClick={item.onClick}
                            >
                              {item.icon}
                              {item.name}
                            </Link>
                          )}
                        </Menu.Item>
                      ))}
                    </Menu.Items>
                  </Transition>
                </Menu>
              </div>
            )}
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
