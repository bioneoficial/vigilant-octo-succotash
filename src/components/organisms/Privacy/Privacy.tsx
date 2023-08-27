import {
  selectPrivacyItem,
  setPrivacyItem,
} from "@/Redux/Reducers/privacySlice";
import { getAllPrivacy, getAllPrivacyResponse } from "@/api/privacy";
import { MyError, PrivacyItem } from "@/types/types";
import { PrivacyItemType } from "@/utils/enums";
import { handleDeletePrivacy, handleEditPrivacy } from "@/utils/utils";
import Image from "next/image";
import { useRouter } from "next/router";
import { useEffect, useState } from "react";
import { useQuery } from "react-query";
import { useDispatch, useSelector } from "react-redux";
import secureLocalStorage from "react-secure-storage";

export const Privacy: React.FC = () => {
  const router = useRouter();
  const dispatch = useDispatch();
  const privacyItem = useSelector(selectPrivacyItem);
  const [previousPrivacyItem, setPreviousPrivacyItem] =
    useState<PrivacyItem | null>(null);

  const storedData: any = secureLocalStorage.getItem("funktoonToken") || "{}";

  const token = storedData.token || "";
  const { data } = useQuery<getAllPrivacyResponse, MyError>(
    "getAllPrivacy",
    () => getAllPrivacy(token),
    { enabled: !!token }
  );

  useEffect(() => {
    setPreviousPrivacyItem(privacyItem);
  }, [privacyItem, previousPrivacyItem]);

  const handleCreatePrivacy = (): Promise<boolean> => {
    dispatch(setPrivacyItem(null));
    return router.push("/dashboard/privacy/create");
  };

  return (
    <section className="p-4">
      <div className="mx-auto">
        <div className="my-5 flex items-center">
          <h2 className="text-2xl font-bold">Políticas e termos</h2>
          <div>
            <button
              onClick={handleCreatePrivacy}
              className="flex items-center ml-5 py-2 px-4 bg-[#8b00d1] text-white rounded hover:bg-[#8b0099]"
            >
              <Image src="/images/plus.svg" width={19} height={19} alt="plus" />
              Nova
            </button>
          </div>
        </div>
        <div className="bg-white shadow-md rounded my-6">
          <table className="min-w-max w-full table-auto">
            <thead>
              <tr className="bg-gray-200 text-gray-600 uppercase text-sm leading-normal">
                <th className="py-3 px-6 text-left">Name</th>
                <th className="py-3 px-6 text-left">Status</th>
                <th className="py-3 px-6 text-left">Tipo</th>
                <th className="py-3 px-6 text-center">Versão</th>
                <th className="py-3 px-6 text-center">Data</th>
                <th className="py-3 px-6 text-center">Ações</th>
              </tr>
            </thead>
            <tbody className="text-gray-600 text-sm font-light">
              {data &&
                data.map((item) => (
                  <tr
                    className="border-b border-gray-200 hover:bg-gray-100"
                    key={item.id + item.nome}
                  >
                    <td className="py-3 px-6 text-left">{item.nome}</td>
                    <td
                      className={`py-3 px-6 text-left font-normal ${
                        item.ativo === 1 ? "text-green-600" : "text-red-600"
                      }`}
                    >
                      {item.ativo}
                    </td>
                    <td className="py-3 px-6 text-left">
                      {((): string => {
                        switch (item.id_tipo_politica) {
                          case 1:
                            return PrivacyItemType.PoliticaPrivacidade;
                          case 2:
                            return PrivacyItemType.TermosUso;
                          case 3:
                            return PrivacyItemType.PoliticaTermoAutor;
                          default:
                            return "";
                        }
                      })()}
                    </td>
                    <td className="py-3 px-6 text-center">{item.versao}</td>
                    <td className="py-3 px-6 text-center">
                      {item.data_inclusao}
                    </td>
                    <td className="py-3 px-6 text-center">
                      <div className="flex item-center justify-center">
                        <button
                          onClick={(): void =>
                            handleEditPrivacy(item, dispatch, router)
                          }
                          className="w-4 mr-2 transform hover:text-purple-500 hover:scale-110"
                        >
                          <Image
                            src="/images/pencil.svg"
                            width={19}
                            height={19}
                            alt="plus"
                          />
                        </button>
                        <button
                          onClick={(): void =>
                            handleDeletePrivacy(item, dispatch)
                          }
                          className="w-4 mr-2 transform hover:text-red-500 hover:scale-110"
                        >
                          <Image
                            src="/images/trash.svg"
                            width={19}
                            height={19}
                            alt="plus"
                          />
                        </button>
                      </div>
                    </td>
                  </tr>
                ))}
            </tbody>
          </table>
        </div>
      </div>
    </section>
  );
};
