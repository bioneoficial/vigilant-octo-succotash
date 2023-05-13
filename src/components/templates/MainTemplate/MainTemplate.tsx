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
import { selectPrivacyItem } from "@/Redux/Reducers/privacySlice";
import { Button } from "@/components/atoms/Button";

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

        dispatch(closeModal());
      }
    };

    switch (modalType) {
      case "deleteConfirmation":
        return (
          <div className="flex justify-between">
            <Button
              title="Sim, deletar!"
              status={true}
              onClick={handleDeleteConfirmation}
            />
            <Button
              title="Cancelar"
              status={true}
              onClick={(): unknown => dispatch(closeModal())}
            />
          </div>
        );

      default:
        return null;
    }
  };

  return (
    <div className="flex">
      {modalContent.isOpen && (
        <Modal
          title="Deletar ?"
          description={`${privacyItem?.name} será excluida! Deseja continuar?`}
          isOpen={modalContent.isOpen}
        >
          <ModalContent modalType={modalContent.modalType} />
        </Modal>
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
