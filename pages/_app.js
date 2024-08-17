import "@/styles/globals.scss";
import "@/styles/header.scss";
import "@/styles/navbar.scss";
import "@/styles/button.scss";
import "@/styles/animation.scss";
import "@/styles/input.scss";
import "@/styles/decorate.scss";
import "@/styles/pixelStyle.scss";

import { AuthContext } from "/hooks/auth-context";
import { CartContext } from "/hooks/cart-context";

import MainLayout from "@/components/layout/main-layout";

export default function App({ Component, pageProps }) {
  return (
    <AuthContext>
      <CartContext>
        {/* <MainLayout> */}
          <Component {...pageProps} />
        {/* </MainLayout> */}
      </CartContext>
    </AuthContext>
  );
}
