import { MainTemplate } from "@/components/templates/MainTemplate";
import { useQuery } from "react-query";
import { MyError } from "@/types/types";
import { fetchPing } from "@/api/ping";
// import { GetServerSideProps } from 'next';
// import { UserRole } from "@/utils/enums";

export default function DashboardPage(): JSX.Element {
  const { isLoading, error, data } = useQuery<string, MyError>(
    "fetchPing",
    fetchPing
  );

  // if (!isAdmin) return <div>You are not authorized to view this page</div>;
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

// export const getServerSideProps: GetServerSideProps = async (context) => {

//   if (localStorage.getItem("funktoonToken")) {
//     const { user, token } = JSON.parse(localStorage.getItem("funktoonToken"));
//   } else if(sessionStorage.getItem("funktoonToken"))){
//     const { user, token } = JSON.parse(sessionStorage.getItem("funktoonToken"));
//   }
//   const isAdmin = user && (user.role === UserRole.admin || user.role === UserRole.root);

//   if (!isAdmin) {
//     return {
//       redirect: {
//         destination: '/',
//         permanent: false,
//       },
//     }
//   }

//   return {
//     props: { isAdmin },
//   }
// }
