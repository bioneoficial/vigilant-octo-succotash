/* eslint-disable @typescript-eslint/no-unused-vars */
import { useState } from "react";
import { HeaderDashboard } from "@/components/organisms/HeaderDashboard";
import { SideMenuDashboard } from "@/components/organisms/SideMenuDashboard";
import { MainTemplateProps, MyError, modelTypeInterface } from "@/types/types";
import { Modal } from "@/components/organisms/Modal";
import {
  ModalState,
  closeModal,
  selectModal,
} from "@/Redux/Reducers/modalSlice";
import { useDispatch, useSelector } from "react-redux";
import {
  deletePrivacyItem,
  selectPrivacyItem,
} from "@/Redux/Reducers/privacySlice";
import { Button } from "@/components/atoms/Button";
import { PrivacyItemStatus, modalTypeEnum } from "@/utils/enums";
import { InputField } from "@/components/atoms/InputField";
import { clearCoupon, selectCoupon } from "@/Redux/Reducers/couponSlice";
import {
  PostCupom,
  UpdateCupomPayload,
  createCoupon,
  updateCoupon,
} from "@/api/coupon";
import { useMutation, useQueryClient } from "react-query";
import "react-toastify/dist/ReactToastify.css";
import toastService from "@/utils/toastService";
import { ToastContainer } from "react-toastify";
import { AppDispatch } from "@/Redux/store";

export const MainTemplate: React.FC<MainTemplateProps> = ({
  children,
}): JSX.Element => {
  const dispatch: AppDispatch = useDispatch();
  const privacyItem = useSelector(selectPrivacyItem);
  const modalContent: ModalState = useSelector(selectModal);
  const coupon = useSelector(selectCoupon);
  const { success, error } = toastService();

  const [openMenu, setOpenMenu] = useState<boolean>(false);

  const toggleMenu = (): void => {
    setOpenMenu(!openMenu);
  };

  const ModalContent = ({
    modalType,
  }: modelTypeInterface): JSX.Element | null => {
    const storedData = JSON.parse(
      localStorage.getItem("funktoonToken") ||
        sessionStorage.getItem("funktoonToken") ||
        "{}"
    );
    const token = storedData.token || "";
    const queryClient = useQueryClient();
    const [updatedCouponData, setUpdatedCouponData] =
      useState<UpdateCupomPayload>({
        nome: coupon?.nome,
        codigo: coupon?.codigo,
        limite_uso: coupon?.usoLimite,
        qtd_dias: coupon?.diaQtd,
        data_validade: coupon?.validade,
        ativo: coupon?.status === PrivacyItemStatus.Ativo ? 1 : 0,
        data_alteracao: new Date(),
      });
    const [createCouponData, setCreateCouponData] = useState<PostCupom>({
      nome: "",
      codigo: "",
      limite_uso: 1,
      qtd_dias: 1,
      data_validade: "",
      ativo: 1,
    });

    const updateCouponMutation = useMutation(
      ({
        token,
        id,
        updatedCouponData,
      }: {
        token: string;
        id: number;
        updatedCouponData: UpdateCupomPayload;
      }) => updateCoupon(token, id, updatedCouponData),
      {
        onSuccess: (data) => {
          success(data.message);
          queryClient.invalidateQueries("getAllCoupon");
        },
        onError: (error) => {
          window.alert(error);
        },
      }
    );

    const createCouponMutation = useMutation(
      (createCouponData: PostCupom) => createCoupon(token, createCouponData),
      {
        onSuccess: () => {
          success("Cupom criado com sucesso!");
          queryClient.invalidateQueries("getAllCoupon");
        },
        onError: (error) => {
          window.alert(error);
        },
      }
    );

    const handleDeleteConfirmation = (): void => {
      if (privacyItem) {
        dispatch(deletePrivacyItem(token, privacyItem.id, success, error));
        dispatch(closeModal());
        setTimeout(() => {
          queryClient.invalidateQueries("getAllPrivacy");
        }, 2000);
      }
    };
    let title = "";
    let description = "";
    let content: JSX.Element | null = null;

    const handleEditConfirmation = (): void => {
      updateCouponMutation.mutate({
        token,
        id: coupon?.id as number,
        updatedCouponData,
      });
    };

    switch (modalType) {
      case modalTypeEnum.delete:
        title = "Deletar ?";
        description = `${privacyItem?.nome} será excluida! Deseja continuar?`;
        content = (
          <div className="flex justify-between">
            <Button
              title="Sim, deletar!"
              status={true}
              onClick={handleDeleteConfirmation}
              className={[
                "flex items-center mt-2 py-2 px-4 bg-[#8b00d1] text-white rounded hover:bg-[#8b0099]",
              ]}
            />
            <Button
              title="Cancelar"
              status={true}
              onClick={(): unknown => dispatch(closeModal())}
              className={[
                "flex items-center mt-2 py-2 px-4 bg-[#8b00d1] text-white rounded hover:bg-[#8b0099]",
              ]}
            />
          </div>
        );
        break;

      case modalTypeEnum.CREATE_COUPON:
        title = "Adicionar novo cupom";
        description = "Preencha os campos abaixo para adicionar um novo cupom";
        content = (
          <div className="flex flex-col justify-between">
            <Button
              title=""
              status={true}
              onClick={(): unknown => dispatch(closeModal())}
              className={["fixed float-right top-2 right-2 "]}
              icon={{ src: "/images/x-mark.svg", alt: "x-mark" }}
            />
            <InputField
              label="Nome:"
              name="nomeCreateCoupon"
              placeholder="Insira o nome"
              classNameInput={[
                "border border-gray-400 p-2 rounded-lg ml-2 mt-4",
              ]}
              initialValue={createCouponData.nome}
              onChange={(e): void =>
                setCreateCouponData({
                  ...createCouponData,
                  nome: e.target.value,
                })
              }
            />
            <InputField
              label="Código:"
              name="codigoCreateCoupon"
              placeholder="Insira Codigo"
              classNameInput={[
                "border border-gray-400 p-2 rounded-lg ml-2 mt-4",
              ]}
              initialValue={createCouponData.codigo}
              onChange={(e): void =>
                setCreateCouponData({
                  ...createCouponData,
                  codigo: e.target.value,
                })
              }
            />
            <InputField
              label="Limite de uso"
              name="limiteCreateCoupon"
              type="number"
              classNameInput={[
                "border border-gray-400 p-2 rounded-lg ml-2 mt-4",
              ]}
              initialValue={createCouponData.limite_uso}
              onChange={(e): void =>
                setCreateCouponData({
                  ...createCouponData,
                  limite_uso: Number(e.target.value),
                })
              }
            />
            <InputField
              label="Qtd Dias Premium"
              name="qtdDiasCreateCoupon"
              type="number"
              classNameInput={[
                "border border-gray-400 p-2 rounded-lg ml-2 mt-4",
              ]}
              initialValue={createCouponData.qtd_dias}
              onChange={(e): void =>
                setCreateCouponData({
                  ...createCouponData,
                  qtd_dias: Number(e.target.value),
                })
              }
            />
            <InputField
              label="Validade"
              name="validadeCreateCoupon"
              type="date"
              classNameInput={[
                "border border-gray-400 p-2 rounded-lg ml-2 mt-4",
              ]}
              initialValue={String(createCouponData.data_validade)}
              onChange={(e): void =>
                setCreateCouponData({
                  ...createCouponData,
                  data_validade: e.target.value,
                })
              }
            />
            <InputField
              label="Cupom Ativo"
              name="statusCreateCoupon"
              type="checkbox"
              classNameInput={[" w-4 h-4 mt-4 rounded-lg ml-2"]}
              initialValue={createCouponData.ativo ? "true" : "false"}
              onChange={(e): void =>
                setCreateCouponData({
                  ...createCouponData,
                  ativo: e.target.checked ? 1 : 0,
                })
              }
            />
            <Button
              title="Salvar"
              status={true}
              onClick={(): void => {
                createCouponMutation.mutate(createCouponData);
                dispatch(closeModal());
              }}
              className={[
                "flex self-center mt-2 py-2 px-4 bg-[#8b00d1] text-white rounded hover:bg-[#8b0099]",
              ]}
            />
          </div>
        );
        break;

      case modalTypeEnum.EDIT_USER:
        title = "Gerenciar Usuário";
        content = (
          <Button
            title=""
            status={true}
            onClick={(): unknown => dispatch(closeModal())}
            className={["fixed float-right top-2 right-2 "]}
            icon={{ src: "/images/x-mark.svg", alt: "x-mark" }}
          />
        );
        break;

      case modalTypeEnum.EDIT_COUPON:
        title = "Editar Cupom";
        content = (
          <div className="flex flex-col justify-between">
            <Button
              title=""
              status={true}
              onClick={(): unknown => dispatch(closeModal())}
              className={["fixed float-right top-2 right-2 "]}
              icon={{ src: "/images/x-mark.svg", alt: "x-mark" }}
            />
            <InputField
              label="Nome:"
              name="nomeCreateCoupon"
              placeholder="Insira o nome"
              classNameInput={[
                "border border-gray-400 p-2 rounded-lg ml-2 mt-4",
              ]}
              initialValue={updatedCouponData.nome}
              onChange={(e): void =>
                setUpdatedCouponData({
                  ...updatedCouponData,
                  nome: e.target.value,
                })
              }
            />
            <InputField
              label="Código:"
              name="codigoCreateCoupon"
              placeholder="Insira Codigo"
              classNameInput={[
                "border border-gray-400 p-2 rounded-lg ml-2 mt-4",
              ]}
              initialValue={updatedCouponData.codigo}
              onChange={(e): void =>
                setUpdatedCouponData({
                  ...updatedCouponData,
                  codigo: e.target.value,
                })
              }
            />
            <InputField
              label="Limite de uso"
              name="limiteCreateCoupon"
              type="number"
              initialValue={updatedCouponData.limite_uso}
              classNameInput={[
                "border border-gray-400 p-2 rounded-lg ml-2 mt-4",
              ]}
              onChange={(e): void =>
                setUpdatedCouponData({
                  ...updatedCouponData,
                  limite_uso: Number(e.target.value),
                })
              }
            />
            <InputField
              label="Qtd Dias Premium"
              name="qtdDiasCreateCoupon"
              type="number"
              initialValue={updatedCouponData.qtd_dias}
              classNameInput={[
                "border border-gray-400 p-2 rounded-lg ml-2 mt-4",
              ]}
              onChange={(e): void =>
                setUpdatedCouponData({
                  ...updatedCouponData,
                  qtd_dias: Number(e.target.value),
                })
              }
            />
            <InputField
              label="Validade"
              name="validadeCreateCoupon"
              type="date"
              classNameInput={[
                "border border-gray-400 p-2 rounded-lg ml-2 mt-4",
              ]}
              initialValue={String(updatedCouponData.data_validade)}
              onChange={(e): void =>
                setUpdatedCouponData({
                  ...updatedCouponData,
                  data_validade: e.target.value,
                })
              }
            />
            <InputField
              label="Cupom Ativo"
              name="statusCreateCoupon"
              type="checkbox"
              classNameInput={[" w-4 h-4 mt-4 rounded-lg ml-2"]}
              initialValue={updatedCouponData.ativo ? "true" : "false"}
              onChange={(e): void =>
                setUpdatedCouponData({
                  ...updatedCouponData,
                  ativo: e.target.checked ? 1 : 0,
                })
              }
            />
            <Button
              title="Salvar"
              status={true}
              onClick={(): void => {
                handleEditConfirmation();
                dispatch(clearCoupon());
                dispatch(closeModal());
              }}
              className={[
                "flex self-center mt-2 py-2 px-4 bg-[#8b00d1] text-white rounded hover:bg-[#8b0099]",
              ]}
            />
          </div>
        );
        break;

      default:
        break;
    }
    return (
      <Modal
        title={title}
        description={description}
        isOpen={modalContent.isOpen}
      >
        {content}
      </Modal>
    );
  };

  return (
    <div className="flex">
      {modalContent.isOpen && (
        <ModalContent modalType={modalContent.modalType} />
      )}
      <SideMenuDashboard open={openMenu} />
      <div className={`flex flex-col  ${openMenu ? "lg:w-4/5" : "lg:w-full"}`}>
        <HeaderDashboard open={openMenu} toggleMenu={toggleMenu} />
        <main
          className={`transition-all duration-300 transform ${
            openMenu ? "lg:translate-x-60 translate-x-0" : "translate-x-0"
          }`}
        >
          {children}
        </main>
      </div>
      <ToastContainer
        position="top-right"
        autoClose={5000}
        hideProgressBar={false}
        newestOnTop
        closeOnClick
        rtl={false}
        pauseOnFocusLoss
        draggable
        pauseOnHover
        theme="light"
      />
    </div>
  );
};
