import React, { createContext, useState, useEffect, useContext } from "react";
import axios from "axios";
import { useRouter } from "next/router";

export const CreateCart = createContext([]);

export const CartContext = ({ children }) => {
  const domain = process.env.NEXT_PUBLIC_DOMAIN;
  const router = useRouter();

  const [cart, setCart] = useState([]);

  useEffect(() => {
    getdata();
  }, []);
  const getdata = async () => {
    try {
      const { data } = await axios.get(`${domain}/cart`, { ithCredentials: true });
      console.log(data, "購物車");
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <CreateCart.Provider
      value={{
        cart,
        setCart,
      }}
    >
      {children}
    </CreateCart.Provider>
  );
};

// 輸出
export const useCart = () => useContext(createCart);
