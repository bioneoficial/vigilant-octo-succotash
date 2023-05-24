import { MainTemplate } from "@/components/templates/MainTemplate";
import { useQuery } from "react-query";
import { MyError } from "@/types/types";
// import { fetchPing } from "@/api/ping";
import { UserRequest, getAllUsers } from "@/api/usuario";

export default function DashboardPage(): JSX.Element {
  // const { isLoading, error, data } = useQuery<string, MyError>(
  //   "ping",
  //   fetchPing
  // );
  const { isLoading, error, data } = useQuery<Array<UserRequest>, MyError>(
    "getAllUsers",
    getAllUsers
  );
  console.log(data, typeof data);

  if (isLoading) return <div>Carregando...</div>;

  if (error) return <div>Ocorreu um erro: {error.message} </div>;
  return (
    <MainTemplate>
      <div className=" text-black">Vamos comecar </div>
    </MainTemplate>
  );
}
