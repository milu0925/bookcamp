import "@/styles/globals.scss";
import "@/styles/input.scss";
import "@/styles/animation.scss";

import "@/styles/manage.scss";

import { AuthContext } from "/hooks/auth-context";
import { CartContext } from "/hooks/cart-context";
import { appWithTranslation } from "next-i18next";

const App = ({ Component, pageProps }) => {
  return (
    <AuthContext>
      <CartContext>
        <Component {...pageProps} />
      </CartContext>
    </AuthContext>
  );
};

export default appWithTranslation(App);
