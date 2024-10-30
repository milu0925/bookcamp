import { useState, useEffect } from "react";
import { useRouter } from "next/router";
import style from "./loading.module.scss";

export default function Loading() {
  const [loading, setLoading] = useState(false);
  const router = useRouter();

  useEffect(() => {
    const handleStart = () => setLoading(true);
    const handleComplete = () => setLoading(false);

    router.events.on("routeChangeStart", handleStart);
    router.events.on("routeChangeComplete", handleComplete);
    router.events.on("routeChangeError", handleComplete);

    return () => {
      router.events.off("routeChangeStart", handleStart);
      router.events.off("routeChangeComplete", handleComplete);
      router.events.off("routeChangeError", handleComplete);
    };
  }, [router]);

  return (
    <>
      {loading && (
        <div className={style.l_loading}>
          <div className={style["sk-fading-circle"]}>
            <div
              className={`${style["sk-circle1"]} ${style["sk-circle"]}`}
            ></div>
            <div
              className={`${style["sk-circle2"]} ${style["sk-circle"]}`}
            ></div>
            <div
              className={`${style["sk-circle3"]} ${style["sk-circle"]}`}
            ></div>
            <div
              className={`${style["sk-circle4"]} ${style["sk-circle"]}`}
            ></div>
            <div
              className={`${style["sk-circle5"]} ${style["sk-circle"]}`}
            ></div>
            <div
              className={`${style["sk-circle6"]} ${style["sk-circle"]}`}
            ></div>
            <div
              className={`${style["sk-circle7"]} ${style["sk-circle"]}`}
            ></div>
            <div
              className={`${style["sk-circle8"]} ${style["sk-circle"]}`}
            ></div>
            <div
              className={`${style["sk-circle9"]} ${style["sk-circle"]}`}
            ></div>
            <div
              className={`${style["sk-circle10"]} ${style["sk-circle"]}`}
            ></div>
            <div
              className={`${style["sk-circle11"]} ${style["sk-circle"]}`}
            ></div>
            <div
              className={`${style["sk-circle12"]} ${style["sk-circle"]}`}
            ></div>
          </div>
        </div>
      )}
    </>
  );
}
