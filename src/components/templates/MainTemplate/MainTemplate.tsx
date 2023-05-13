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
