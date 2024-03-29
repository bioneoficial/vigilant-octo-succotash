import { useRouter } from "next/router";
import { menuItem } from "@/utils/const";
import { classNames } from "@/utils/utils";
import Image from "next/image";
import { Menu } from "@headlessui/react";
import { SideMenuDashboardProps } from "@/types/types";
import Link from "next/link";

export const SideMenuDashboard: React.FC<SideMenuDashboardProps> = ({
  open,
}): JSX.Element => {
  const router = useRouter();

  return (
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
            src="/images/logo-funktoon.svg"
            alt="Dropdown"
            height={32}
            width={180}
            priority={true}
          />
        </a>
        <div className="space-y-1 px-2 pb-3 pt-2">
          {menuItem.map((item) => (
            <Link
              key={item.name}
              href={item.href}
              className={classNames(
                router.pathname === item.href
                  ? " bg-gray-500 text-white"
                  : "hover:bg-gray-700 hover:text-white",
                "flex gap-2 rounded-md px-3 py-2 text-base font-medium"
              )}
              aria-current={item.current ? "page" : undefined}
            >
              <Image src={item.icon} alt="Dropdown" height={24} width={24} />
              {item.name}
            </Link>
          ))}
        </div>
      </Menu>
    </aside>
  );
};
