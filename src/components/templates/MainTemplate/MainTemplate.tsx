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
    <>
      <HeaderDashboard />
      <SideMenuDashboard open={open} toggleMenu={toggleMenu} />
      <main className={`ml-${open ? "60" : "0"} transition-all duration-300`}>
        {children}
      </main>
    </>
  );
};
