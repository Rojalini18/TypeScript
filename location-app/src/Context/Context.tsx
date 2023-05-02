import { createContext, useState } from "react";
import { ILocationData } from "../Components/Home";

interface Ilocation {
  location: ILocationData[];
  setLocation: React.Dispatch<React.SetStateAction<ILocationData[]>>;
}

export const Context = createContext<Ilocation>({
  location: [],
  setLocation: () => null,
});

export const ContextProvider: React.FC<{ children: React.ReactNode }> = ({
  children,
}) => {
  const [location, setLocation] = useState<ILocationData[]>([]);
  const value = { location, setLocation };
  return <Context.Provider value={value}>{children}</Context.Provider>;
};
