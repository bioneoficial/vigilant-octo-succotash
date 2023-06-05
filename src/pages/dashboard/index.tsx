import { MainTemplate } from "@/components/templates/MainTemplate";
import { useQuery } from "react-query";
import { MyError } from "@/types/types";
import { fetchPing } from "@/api/ping";

export default function DashboardPage(): JSX.Element {
  const { isLoading, error, data } = useQuery<string, MyError>(
    "fetchPing",
    fetchPing
  );

  if (isLoading) return <div>Carregando...</div>;

  if (error) return <div>Ocorreu um erro: {error.message} </div>;
  return (
    <MainTemplate>
      <div className=" text-black">
        Vamos comecar.
        {data}
      </div>
    </MainTemplate>
  );
}
