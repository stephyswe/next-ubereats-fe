import {
  createContext,
  Dispatch,
  SetStateAction,
  useContext,
  useState,
} from 'react';

interface ModalState {
  modalBody: any;
  setModalBody: Dispatch<SetStateAction<undefined>>;
  modalIsOpen: boolean;
  setIsOpen: Dispatch<SetStateAction<boolean>>;
}

const ModalContext = createContext<undefined | ModalState>(undefined);

const ModalProvider = ({ children }: any) => {
  const [modalIsOpen, setIsOpen] = useState<boolean>(false);
  const [modalBody, setModalBody] = useState();

  return (
    <ModalContext.Provider
      value={{
        modalIsOpen,
        setIsOpen,
        setModalBody,
        modalBody,
      }}
    >
      {children}
    </ModalContext.Provider>
  );
};

export function useModal() {
  const context = useContext(ModalContext);
  if (context === undefined) {
    throw new Error('useModal must be used within a ModalProvider');
  }
  return context;
}

export { ModalContext, ModalProvider };
