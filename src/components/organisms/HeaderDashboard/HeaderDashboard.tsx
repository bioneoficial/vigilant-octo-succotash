import React, { Fragment, useEffect, useState } from "react";
import { Menu, Transition } from "@headlessui/react";
import { Bars3Icon, BellIcon, XMarkIcon } from "@heroicons/react/24/outline";
import { HeaderDashboardProps, profileMenuItemData } from "@/types/types";
import { SettingsIcon } from "@/components/atoms/SettingsIcon";
import { LogoutIcon } from "@/components/atoms/LogoutIcon";
import { NotificationIcon } from "@/components/atoms/NotificationIcon";
import Image from "next/image";
import { Button } from "@/components/atoms/Button";
import { abrirSite, classNames } from "@/utils/utils";
import Link from "next/link";
import { useDispatch } from "react-redux";
import { logout } from "@/Redux/Reducers/sessionSlice";
import secureLocalStorage from "react-secure-storage";

export const HeaderDashboard: React.FC<HeaderDashboardProps> = ({
  open,
  toggleMenu,
}): JSX.Element => {
  const [previewImageUrl, setPreviewImageUrl] = useState<string | null>(null);
  const profileMenuItems: profileMenuItemData[] = [
    {
      name: "Notificações",
      href: "#notifications",
      icon: <NotificationIcon />,
      alt: "Notificações",
    },
    {
      name: "Perfil",
      href: "/dashboard/meu-perfil",
      icon: <SettingsIcon />,
      alt: "Perfil",
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
  const dispatch = useDispatch();

  useEffect(() => {
    const token: any = secureLocalStorage.getItem("funktoonToken");

    if (token) {
      const parsedToken = token;
      if (parsedToken) {
        setPreviewImageUrl(parsedToken.user.fotoPath);
      }
    }
  }, []);

  return (
    <header
      className={`bg-[#fff] shadow-md transform transition-all ease-out duration-300 ${
        open ? "translate-x-60" : "translate-x-0"
      } z-10`}
    >
      <div className={`absolute top-2 left-0 flex items-center`}>
        <button
          onClick={toggleMenu}
          className="inline-flex items-center justify-center rounded-md p-2 text-gray-800 hover:bg-gray-700 hover:text-white focus:outline-none focus:ring-2 focus:ring-inset focus:ring-white"
        >
          <span className="sr-only">Open main menu</span>
          {open ? (
            <XMarkIcon className="block h-6 w-6" aria-hidden="true" />
          ) : (
            <Bars3Icon className="block h-6 w-6" aria-hidden="true" />
          )}
        </button>
      </div>

      <div className="mx-auto max-w-7xl px-2 sm:px-6 lg:px-8">
        <div className="relative flex h-16 items-center justify-between">
          <div className="flex flex-1 items-center justify-center sm:items-stretch sm:justify-start"></div>
          <div className="absolute inset-y-0 right-0 flex items-center pr-2 sm:static sm:inset-auto sm:ml-6 sm:pr-0">
            <Button
              title="Abrir Site"
              status={true}
              className={[
                "flex",
                "items-center",
                "mr-4",
                "text-[#8b00d1] font-medium",
              ]}
              onClick={abrirSite}
            />
            <button
              type="button"
              className="rounded-full bg-[#f0f0f080] mr-4 p-1 text-gray-600 hover:text-black focus:outline-none focus:ring-2 focus:ring-white focus:ring-offset-2 focus:ring-offset-gray-800"
            >
              <BellIcon className="h-6 w-6" aria-hidden="true" />
            </button>

            {/* Profile dropdown */}
            <Menu as="nav" className=" relative ml-3">
              <>
                <Menu.Button className="flex">
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
                <Menu.Items className=" origin-top-right absolute right-0 mt-2 w-48 rounded-md shadow-lg py-1 bg-white ring-1 ring-black ring-opacity-5  focus:outline-none">
                  {profileMenuItems.map((item) => (
                    <Menu.Item key={item.name}>
                      {({ active }): JSX.Element => (
                        <Link
                          href={item.href}
                          className={classNames(
                            active ? "bg-gray-100" : "",
                            "block px-4 py-2 text-sm text-gray-700 hover:bg-[#4a6cf70d] hover:text-[#8b00d1]"
                          )}
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
        </div>
      </div>
    </header>
  );
};
