import { menuItem } from "@/utils/const";
import { classNames } from "@/utils/utils";
import { Menu } from "@headlessui/react";
import Image from "next/image";

export const SideMenuDashboard: React.FC = (): JSX.Element => {
  return (
    <aside className="h-screen bg-gray-200 w-64 fixed top-0 left-0 overflow-auto">
      <Menu as="nav" className="px-4">
        <Image
          src="../images/logo-funktoon.svg"
          alt="Dropdown"
          height={32}
          width={180}
        />
        <div className="space-y-1 px-2 pb-3 pt-2">
          {menuItem.map((item) => (
            <Menu.Button
              key={item.name}
              as="a"
              href={item.href}
              className={classNames(
                item.current
                  ? "bg-gray-900 text-white"
                  : " hover:bg-gray-700 hover:text-white",
                "block rounded-md px-3 py-2 text-base font-medium"
              )}
              aria-current={item.current ? "page" : undefined}
            >
              {item.name}
            </Menu.Button>
          ))}
        </div>
      </Menu>
    </aside>
  );
};
