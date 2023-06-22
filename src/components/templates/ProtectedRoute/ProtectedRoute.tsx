import React, { useEffect } from "react";
import { useSelector } from "react-redux";
import { UserRole } from "@/utils/enums";
import { useRouter } from "next/router";
import { RootState } from "@/Redux/store";

type ProtectedRouteProps = {
  children: React.ReactNode;
};

const ProtectedRoute = ({ children }: ProtectedRouteProps): JSX.Element => {
  const user = useSelector((state: RootState) => state.sessionManagement.user);
  const token = useSelector(
    (state: RootState) => state.sessionManagement.token
  );
  const router = useRouter();

  useEffect(() => {
    if (
      !user ||
      (user.role !== UserRole.admin && user.role !== UserRole.root) ||
      !token
    ) {
      router.push("/");
    }
  }, [router, token, user]);

  return <>{children}</>;
};

export default ProtectedRoute;
