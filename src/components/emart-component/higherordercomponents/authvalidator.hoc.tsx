"use client";
import { redirect, useRouter } from "next/navigation";
import { useEffect, useState } from "react";
import LoadingIndicator from "../loadingIndicator.component";

const withAuthentication = (Component: React.ComponentType) => {
  return function AuthValidator(props: any) {
    const router = useRouter();
    const [token, setToken] = useState<string | null>(null);
    useEffect(() => {
      setToken(localStorage.getItem("token"));
      if (token == null || token === "") {
        redirect("/en/auth/login");
      }
    }, []);
    if (!token) {
      return <LoadingIndicator />;
    }

    return <Component {...props} />;
  };
};

export default withAuthentication;
