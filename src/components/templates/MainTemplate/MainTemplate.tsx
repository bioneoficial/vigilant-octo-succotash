import { useState } from "react";
import { HeaderDashboard } from "@/components/organisms/HeaderDashboard";
import { SideMenuDashboard } from "@/components/organisms/SideMenuDashboard";

interface MainTemplateProps {
  children: React.ReactNode;
}

export const MainTemplate: React.FC<MainTemplateProps> = ({
  children,
}): JSX.Element => {
  const [open, setOpen] = useState(true);

  const toggleMenu = (): void => {
    setOpen(!open);
  };

  return (
    <div className="flex">
      <SideMenuDashboard open={open} />
      <div className="flex flex-col w-full">
        <HeaderDashboard open={open} toggleMenu={toggleMenu} />
        <main
          className={`transition-all duration-300 z-10 transform ${
            open ? "translate-x-60" : "translate-x-0"
          }`}
        >
          {children}
        </main>
      </div>
    </div>
  );
};
