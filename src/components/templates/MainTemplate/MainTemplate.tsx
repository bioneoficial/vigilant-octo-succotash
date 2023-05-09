import { HeaderDashboard } from "@/components/organisms/HeaderDashboard";
import { SideMenuDashboard } from "@/components/organisms/SideMenuDashboard";

export function MainTemplate() {
  return (
    <>
      <HeaderDashboard />
      <SideMenuDashboard />
      <div>main template</div>
    </>
  );
}
