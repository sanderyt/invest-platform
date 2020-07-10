import React, { useContext, useEffect } from "react";
import { AuthContext } from "../../context/auth";
import { useRouter } from "next/router";

export function ProtectedPage(Component) {
  return () => {
    const { user } = useContext(AuthContext);
    const router = useRouter();

    useEffect(() => {
      if (!user) router.push("/login");
    }, [user]);

    return <Component {...arguments} />;
  };
}
