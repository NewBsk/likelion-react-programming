import { useAuth } from "@/contexts/Auth";
import { element } from "prop-types";
import { useEffect, useState } from "react";
import toast from "react-hot-toast";
import { useLocation, useNavigate } from "react-router-dom";
import Spinner from "./Spinner";

// 인증 여부를 모른채 보호된 루트로 사용자가 URL을 직접 입력 접근 시도
// 인증 여부 확인
// 1. 인증 사용자 -> children
// 2. 비인증 사용자 -> 로그인
// 사용자 로그인 시도
// 가입된 사용자의 경우 로그인 성공(인증)
// 사용자의 기대사항 (아마 접속하려던 주소로 이동하길 원할 것?)
// 사용자가 본래 접속하려던 주소로 페이지를 전환 한다

// globalThis.location.href

function ProtectRoute({ children }) {
  const { isAuth } = useAuth();
  const navigate = useNavigate();

  const { pathname, search, hash } = useLocation();

  const [isLoading, setIsLoading] = useState(true);

  const wishLocationPath = `${pathname}${search}${hash}`;

  useEffect(() => {
    if (!isLoading && !isAuth) {
      import.meta.env.MODE === "development" && toast.dismiss();

      toast("로그인 된 사용자만 이용 가능한 페이지입니다.", {
        position: "top-center",
        icon: "🚨",
        ariaProps: {
          role: "alert",
          "aria-live": "polite",
        },
      });

      return navigate("/signin", { state: { wishLocationPath } });
    }

    const cleanup = setTimeout(() => setIsLoading(false));

    return () => {
      clearTimeout(cleanup);
    };
  }, [isLoading, isAuth, navigate, wishLocationPath]);

  if (isLoading) {
    return <Spinner size={200} />;
  }

  return children;
}

ProtectRoute.propTypes = {
  children: element,
};

export default ProtectRoute;
