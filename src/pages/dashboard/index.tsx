import { MainTemplate } from "@/components/templates/MainTemplate";
import { apiConfig } from "@/api/apiConfig";
import { useQuery } from "react-query";
import { MyError } from "@/types/types";

export default function DashboardPage(): JSX.Element {
  const { isLoading, error, data } = useQuery<string, MyError>("ping", () =>
    fetch(apiConfig.pingApiUrl).then((res) => res.text())
  );

  if (isLoading) return <div>Carregando...</div>;

  if (error) return <div>Ocorreu um erro: {error.message} </div>;
  return (
    <MainTemplate>
      <div className=" text-black">Vamos comecar {data} </div>
    </MainTemplate>
  );
}
