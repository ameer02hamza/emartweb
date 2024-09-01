"use client";
import { redirect, useRouter } from "next/navigation";
import { useEffect } from "react";
import LoadingIndicator from "../loadingIndicator.component";

const withAuthentication = (Component: React.ComponentType) => {
  return function AuthValidator(props: any) {
    const router = useRouter();
    const token = localStorage.getItem("token");
    useEffect(() => {
      if (!token) {
        router.push("/auth/login");
      } 
      // else {
      //   router.push("/home");
      // }
    }, []);
    if (!token) {
      return <LoadingIndicator />;
    }

    return <Component {...props} />;
  };
};

export default withAuthentication;
