import React, { createContext, useState, useEffect, ReactNode } from "react";

interface Props {
  children: ReactNode;
}

interface UserData {
  name: string;
  email: string;
  phone: string;
  isYearly: boolean;
  planType: "Arcade" | "Advanced" | "Pro";
  arcadePrice: number;
  advancedPrice: number;
  proPrice: number;
  onlineService: boolean;
  largerStorage: boolean;
  customizableProfile: boolean;
  onlineServicePrice: number;
  largerStoragePrice: number;
  customizableProfilePrice: number;
}
interface ContextData {
  userData: UserData;
  setUserData: ({}: UserData) => void;
  handleUserData: (e: React.ChangeEvent<HTMLInputElement>) => void;
}

export const FormDataContext = createContext({} as ContextData);

export const FormDataProvider: React.FC<Props> = ({ children }) => {
  const [userData, setUserData] = useState<UserData>({
    name: "",
    email: "",
    phone: "",
    isYearly: true,
    planType: "Arcade",
    arcadePrice: 9,
    advancedPrice: 12,
    proPrice: 15,
    onlineService: false,
    largerStorage: false,
    customizableProfile: false,
    onlineServicePrice: 1,
    largerStoragePrice: 2,
    customizableProfilePrice: 2,
  });
  console.log(userData);

  const handleUserData = (e: React.ChangeEvent<HTMLInputElement>) => {
    console.log(e.target.name);

    setUserData({
      ...userData,
      [e.target.name]:
        e.target.type === "checkbox" ? e.target.checked : e.target.value,
    });
  };

  return (
    <FormDataContext.Provider value={{ userData, setUserData, handleUserData }}>
      {children}
    </FormDataContext.Provider>
  );
};
