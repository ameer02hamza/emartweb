"use client";
import { useRouter } from "next/navigation";
import React, { useEffect } from "react";
import { Lang } from "../../../getlang.locale";
/**
 *
 * @param children components to be rendered
 * @param params locale localization language required
 * @returns
 */
function Home({
  children,
  params,
}: {
  children: React.ReactNode;
  params: { locale: Lang };
}) {
  const router = useRouter();
  useEffect(() => {
    console.log(Object.values(Lang).includes(params.locale));

    if (Object.values(Lang).includes(params.locale)) {
      router.push(`/${params.locale}/home`);
    } else {
      router.push(`/${Lang.en}/home`);
    }
  }, []);
  return <>{children}</>;
}

export default Home;
