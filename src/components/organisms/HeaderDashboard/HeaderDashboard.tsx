import React, { Fragment } from "react";
import { Disclosure, Menu, Transition } from "@headlessui/react";
import { Bars3Icon, BellIcon, XMarkIcon } from "@heroicons/react/24/outline";
import { menuItem } from "@/utils/const";
import { SettingsIcon } from "@/components/atoms/SettingsIcon";
import { profileMenuItemData } from "@/types/types";
import { LogoutIcon } from "@/components/atoms/LogoutIcon";
import { NotificationIcon } from "@/components/atoms/NotificationIcon";
import Image from "next/image";

export const profileMenuItems: profileMenuItemData[] = [
  {
    name: "Notificações",
    href: "#notifications",
    icon: <NotificationIcon />,
    alt: "Notificações",
  },
  {
    name: "Perfil",
    href: "#profile",
    icon: <SettingsIcon />,
    alt: "Perfil",
  },
  {
    name: "Sair",
    href: "#logout",
    icon: <LogoutIcon />,
    alt: "Sair",
  },
];

const classNames = (...classes: string[]): string => {
  return classes.filter(Boolean).join(" ");
};

export const HeaderDashboard: React.FC = (): JSX.Element => {
  return (
    <Disclosure as="nav" className="bg-[#fff]">
      {({ open }): JSX.Element => (
        <>
          <div className="mx-auto max-w-7xl px-2 sm:px-6 lg:px-8">
            <div className="relative flex h-16 items-center justify-between">
              <div className="absolute inset-y-0 left-0 flex items-center sm:hidden">
                {/* Mobile menu button*/}
                <Disclosure.Button className="inline-flex items-center justify-center rounded-md p-2 text-gray-400 hover:bg-gray-700 hover:text-white focus:outline-none focus:ring-2 focus:ring-inset focus:ring-white">
                  <span className="sr-only">Open main menu</span>
                  {open ? (
                    <XMarkIcon className="block h-6 w-6" aria-hidden="true" />
                  ) : (
                    <Bars3Icon className="block h-6 w-6" aria-hidden="true" />
                  )}
                </Disclosure.Button>
              </div>
              <div className="flex flex-1 items-center justify-center sm:items-stretch sm:justify-start"></div>
              <div className="absolute inset-y-0 right-0 flex items-center pr-2 sm:static sm:inset-auto sm:ml-6 sm:pr-0">
                <button
                  type="button"
                  className="rounded-full bg-[#f0f0f080] p-1 text-gray-600 hover:text-black focus:outline-none focus:ring-2 focus:ring-white focus:ring-offset-2 focus:ring-offset-gray-800"
                >
                  <BellIcon className="h-6 w-6" aria-hidden="true" />
                </button>

                {/* Profile dropdown */}
                <Menu as="header" className="relative ml-3">
                  <>
                    <Menu.Button className="flex">
                      <Image
                        className="h-8 w-8 rounded-full"
                        width={32}
                        height={32}
                        src="https://media.licdn.com/dms/image/D4D03AQH3XhCLMfcx0w/profile-displayphoto-shrink_400_400/0/1668354197751?e=1689206400&v=beta&t=9jTu05zEYjo6WcK6NtCuCo0tI-deZtdHPS6mUENAduo"
                        alt="Profile Picture"
                      />
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        fill="none"
                        viewBox="0 0 24 24"
                        strokeWidth="1.5"
                        stroke="currentColor"
                        className="w-6 h-6"
                      >
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          d="M19.5 8.25l-7.5 7.5-7.5-7.5"
                        />
                      </svg>
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
                    <Menu.Items className="flex flex-col w-48 absolute  z-10 mt-2   rounded-md bg-white py-1 shadow-lg ring-1 ring-black ring-opacity-5 focus:outline-none">
                      {profileMenuItems.map((item) => (
                        <Menu.Item key={item.name}>
                          {({ active }): JSX.Element => (
                            <a
                              href={item.href}
                              className={classNames(
                                active
                                  ? "flex bg-[#f1f5f9] hover:text-[#8b00d1]"
                                  : "",
                                "flex px-4 py-2 text-sm "
                              )}
                            >
                              {item.icon}
                              {item.name}
                            </a>
                          )}
                        </Menu.Item>
                      ))}
                    </Menu.Items>
                  </Transition>
                </Menu>
              </div>
            </div>
          </div>

          <Disclosure.Panel className="sm:hidden">
            <div className="space-y-1 px-2 pb-3 pt-2">
              {menuItem.map((item) => (
                <Disclosure.Button
                  key={item.name}
                  as="a"
                  href={item.href}
                  className={classNames(
                    item.current
                      ? "bg-gray-900 text-white"
                      : "text-gray-300 hover:bg-gray-700 hover:text-white",
                    "block rounded-md px-3 py-2 text-base font-medium"
                  )}
                  aria-current={item.current ? "page" : undefined}
                >
                  {item.name}
                </Disclosure.Button>
              ))}
            </div>
          </Disclosure.Panel>
        </>
      )}
    </Disclosure>
  );
};
