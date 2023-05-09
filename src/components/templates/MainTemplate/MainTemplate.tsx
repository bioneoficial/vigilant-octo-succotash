import { HeaderDashboard } from "@/components/organisms/HeaderDashboard";
import { SideMenuDashboard } from "@/components/organisms/SideMenuDashboard";

export const MainTemplate: React.FC = (): JSX.Element => {
  return (
    <>
      <HeaderDashboard />
      <SideMenuDashboard />
      <div>main template</div>
    </>
  );
};
