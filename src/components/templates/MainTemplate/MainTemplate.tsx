import { useState } from "react";
import { HeaderDashboard } from "@/components/organisms/HeaderDashboard";
import { SideMenuDashboard } from "@/components/organisms/SideMenuDashboard";
import { MainTemplateProps, modelTypeInterface } from "@/types/types";
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
import { modalTypeEnum } from "@/utils/enums";
import { InputField } from "@/components/atoms/InputField";

export const MainTemplate: React.FC<MainTemplateProps> = ({
  children,
}): JSX.Element => {
  const dispatch = useDispatch();
  const privacyItem = useSelector(selectPrivacyItem);
  const modalContent: ModalState = useSelector(selectModal);

  const [openMenu, setOpenMenu] = useState<boolean>(false);

  const toggleMenu = (): void => {
    setOpenMenu(!openMenu);
  };

  const ModalContent = ({
    modalType,
  }: modelTypeInterface): JSX.Element | null => {
    const handleDeleteConfirmation = (): void => {
      if (privacyItem) {
        console.log("Deleting item with id", privacyItem);
        dispatch(deletePrivacyItem());
        dispatch(closeModal());
      }
    };
    let title = "";
    let description = "";
    let content: JSX.Element | null = null;

    switch (modalType) {
      case modalTypeEnum.delete:
        title = "Deletar ?";
        description = `${privacyItem?.name} será excluida! Deseja continuar?`;
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
            />
            <InputField
              label="Código:"
              name="codigoCreateCoupon"
              placeholder="Insira Codigo"
              classNameInput={[
                "border border-gray-400 p-2 rounded-lg ml-2 mt-4",
              ]}
            />
            <InputField
              label="Limite de uso"
              name="limiteCreateCoupon"
              type="number"
              initialValue={1}
              classNameInput={[
                "border border-gray-400 p-2 rounded-lg ml-2 mt-4",
              ]}
            />
            <InputField
              label="Qtd Dias Premium"
              name="qtdDiasCreateCoupon"
              type="number"
              initialValue={1}
              classNameInput={[
                "border border-gray-400 p-2 rounded-lg ml-2 mt-4",
              ]}
            />
            <InputField
              label="Validade"
              name="validadeCreateCoupon"
              type="date"
              classNameInput={[
                "border border-gray-400 p-2 rounded-lg ml-2 mt-4",
              ]}
            />
            <InputField
              label="Cupom Ativo"
              name="statusCreateCoupon"
              type="checkbox"
              classNameInput={[" w-4 h-4 mt-4 rounded-lg ml-2"]}
            />
            <Button
              title="Salvar"
              status={true}
              onClick={(): unknown => dispatch(closeModal())}
              className={[
                "flex self-center mt-2 py-2 px-4 bg-[#8b00d1] text-white rounded hover:bg-[#8b0099]",
              ]}
            />
          </div>
        );
        break;

        case modalTypeEnum.EDIT_USER:
          title = "Gerenciar Usuário";
          <Button
          title=""
          status={true}
          onClick={(): unknown => dispatch(closeModal())}
          className={["fixed float-right top-2 right-2 "]}
          icon={{ src: "/images/x-mark.svg", alt: "x-mark" }}
        />

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
    </div>
  );
};
