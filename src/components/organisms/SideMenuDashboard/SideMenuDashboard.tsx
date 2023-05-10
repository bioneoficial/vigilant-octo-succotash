import { menuItem } from "@/utils/const";
import { classNames } from "@/utils/utils";
import Image from "next/image";
import { Menu } from "@headlessui/react";

interface SideMenuDashboardProps {
  open: boolean;
}

export const SideMenuDashboard: React.FC<SideMenuDashboardProps> = ({
  open,
}): JSX.Element => {
  return (
    <>
      <aside
        className={`h-screen absolute bg-white w-60  top-0 left-0 overflow-auto shadow-custom transform transition-all ease-out duration-300 ${
          open ? "translate-x-0" : "-translate-x-full"
        } rounded-sm `}
      >
        <Menu as="nav" className="px-4">
          <a
            href="https://funktoon.com/"
            target="_blank"
            rel="noopener noreferrer"
          >
            <Image
              src="../images/logo-funktoon.svg"
              alt="Dropdown"
              height={32}
              width={180}
            />
          </a>
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
    </>
  );
};
