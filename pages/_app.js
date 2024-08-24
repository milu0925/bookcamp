import "@/styles/globals.scss";
import "@/styles/input.scss"
import "@/styles/animation.scss";

import { AuthContext } from "/hooks/auth-context";
import { CartContext } from "/hooks/cart-context";

import MainLayout from "@/components/layout/main-layout";

export default function App({ Component, pageProps }) {
  return (
    <AuthContext>
      <CartContext>
        <MainLayout>
          <Component {...pageProps} />
        </MainLayout>
      </CartContext>
    </AuthContext>
  );
}
