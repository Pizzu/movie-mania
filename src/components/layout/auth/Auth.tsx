import { useSession } from "next-auth/react";
import { useRouter } from "next/router";
import { useEffect, useState } from "react";

// Check page authorizations
//  - if page requires user to be authenticated && user is signed in =>
//      - check page authorization level
//        - if match user group => render page
//        - if doesn't => render unauthorized page
//      - send user to login page
//  - if page does not require auth
//      - render page

export interface IAuth {
  children: React.ReactNode;
}

const Auth: React.FC<IAuth> = ({ children }) => {
  const router = useRouter();
  const [showPage, setShowPage] = useState(false);
  const { data, status } = useSession();

  useEffect(() => {
    const checkPageAuth = () => {
      if (status === "authenticated" && data.user) {
        setShowPage(true);
      } else {
        setShowPage(true);
        void router.push("/");
      }
    };

    if (status !== "loading") {
      checkPageAuth();
    }
  }, [status, router, data]);

  if (status === "loading") {
    return <div></div>;
  } else if (showPage) {
    return <>{children}</>;
  }
  return <div></div>;
};

export default Auth;
