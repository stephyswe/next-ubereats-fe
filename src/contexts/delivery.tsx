import {
  createContext,
  Dispatch,
  SetStateAction,
  useContext,
  useState,
} from 'react';

interface DeliveryState {
  activeItem: any;
  setActiveItem: Dispatch<SetStateAction<undefined>>;
  hoverItem: any;
  setHoverItem: Dispatch<SetStateAction<undefined>>;
  isComplete: boolean;
  setComplete: Dispatch<SetStateAction<boolean>>;
}

const DeliveryContext = createContext<undefined | DeliveryState>(undefined);

const DeliveryProvider = ({ children }: any) => {
  const [activeItem, setActiveItem] = useState();
  const [hoverItem, setHoverItem] = useState();
  const [isComplete, setComplete] = useState<boolean>(false);

  return (
    <DeliveryContext.Provider
      value={{
        activeItem,
        setActiveItem,
        hoverItem,
        setHoverItem,
        isComplete,
        setComplete,
      }}
    >
      {children}
    </DeliveryContext.Provider>
  );
};

export function useDelivery() {
  const context = useContext(DeliveryContext);
  if (context === undefined) {
    throw new Error('useDelivery must be used within a DeliveryProvider');
  }
  return context;
}

export { DeliveryContext, DeliveryProvider };
