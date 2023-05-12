import { useEffect, useState } from "react";
import { HeaderDashboard } from "@/components/organisms/HeaderDashboard";
import { SideMenuDashboard } from "@/components/organisms/SideMenuDashboard";
import { MainTemplateProps } from "@/types/types";
import { Modal } from "@/components/organisms/Modal";
import { Button } from "@/components/atoms/Button";
import { closeModal, selectModalIsOpen } from "@/Redux/Reducers/modalSlice";
import { useDispatch, useSelector } from "react-redux";
import { selectPrivacyItem } from "@/Redux/Reducers/privacySlice";

export const MainTemplate: React.FC<MainTemplateProps> = ({
  children,
}): JSX.Element => {
  const [openMenu, setOpenMenu] = useState<boolean>(true);
  const modalState: boolean = useSelector(selectModalIsOpen);
  const [modalIsOpen, setModalIsOpen] = useState<boolean>(false);
  const dispatch = useDispatch();
  const privacyItem = useSelector(selectPrivacyItem);

  useEffect(() => {
    setModalIsOpen(modalState);
  }, [modalState]);

  const toggleMenu = (): void => {
    setOpenMenu(!open);
  };

  const handleDeleteConfirmation = (): void => {
    if (privacyItem) {
      console.log("Deleting item with id", privacyItem);

      dispatch(closeModal());
    }
  };

  return (
    <div className="flex">
      {modalIsOpen && (
        <Modal
          title="Deletar ?"
          description={`${privacyItem?.name} será excluida! Deseja continuar?`}
          isOpen={modalIsOpen}
        >
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
        </Modal>
      )}
      <SideMenuDashboard open={openMenu} />
      <div
        className={`flex flex-col w-full ${
          openMenu ? "lg:w-4/5" : "lg:w-full"
        }`}
      >
        <HeaderDashboard open={openMenu} toggleMenu={toggleMenu} />
        <main
          className={`transition-all duration-300 transform ${
            openMenu ? "translate-x-60" : "translate-x-0"
          }`}
        >
          {children}
        </main>
      </div>
    </div>
  );
};
