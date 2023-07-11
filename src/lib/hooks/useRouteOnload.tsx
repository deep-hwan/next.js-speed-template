import { NextRouter, useRouter } from "next/router";
import { EventHandler, useEffect } from "react";

export function useOnloadState(handleOnLoad: EventHandler<any>) {
  const router: NextRouter = useRouter();

  useEffect(() => {
    router.events.on("routeChangeComplete", handleOnLoad);
    return () => {
      router.events.off("routeChangeComplete", handleOnLoad);
    };
  }, [handleOnLoad, router.events]);
}
