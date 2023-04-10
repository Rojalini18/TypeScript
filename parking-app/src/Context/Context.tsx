import { createContext, useState } from "react";

export const Context = createContext({
  parkingSlot: [],
  setParkingSlot: {},
});

export const ContextProvider = (props: any) => {
  const [parkingSlot, setParkingSlot] = useState<Array<any>>([]);

  const context: any = {
    parkingSlot,
    setParkingSlot,
  };
  return (
    <div>
      <Context.Provider value={context}>{props.children}</Context.Provider>
    </div>
  );
};
