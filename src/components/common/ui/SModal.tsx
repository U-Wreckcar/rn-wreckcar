'use client';
import React, { SetStateAction, useState } from 'react';
interface ModalType {
  width?: string;
  height?: string;
  openBtnName?: string;
  closeBtnName?: string;
  onClick?: () => void;
  children?: React.ReactElement;
  iso: boolean;
  setIso: (value: boolean) => void;
}
export const SModal: React.FC<ModalType> = (props) => {
  const {
    width = 600,
    height = 400,
    openBtnName,
    closeBtnName,
    onClick,
    children,
    iso,
    setIso,
  } = props;
  const [isOpen, setIsOpen] = useState(false);

  //   const sizeModal = ` w-[${width}px] h-[${height}px]`;
  const sizeModal = ` ${width} ${height}`;
  console.log(sizeModal);
  const openModal = () => {
    setIsOpen(true);
  };

  const closeModal = () => {
    // setIsOpen(false);
    setIso(!iso);
  };

  const handleOverlayClick = () => {
    closeModal();
    setIso(!iso);
  };

  const baseStyleModal = ` z-60 absolute left-[50%]  top-[50%] translate-x-[-50%] translate-y-[-50%] rounded-sm bg-white opacity-100`;
  return (
    <>
      <button onClick={openModal}>Open Modal</button>
      {iso && (
        <>
          <div
            className="modal-overlay bg-urc-gray-700 absolute bottom-0 left-0 right-0 top-0 z-50 opacity-80 "
            onClick={handleOverlayClick}
          ></div>
          <div className={` ${baseStyleModal} ${sizeModal}`}>
            contente
            <button onClick={closeModal}>Close Modal</button>
          </div>
          <dialog className=" bg-urc-gray-700 relative left-1 top-3 z-20 h-2 w-3"></dialog>
        </>
      )}
    </>
  );
};
