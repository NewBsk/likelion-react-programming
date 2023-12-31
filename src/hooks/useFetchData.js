import { useEffect, useState } from "react";

// 컴포넌트 간 로직(logic) 공유
// 사용자 정의 훅(함수)을 작성
const defaultOptions = {
  method: "GET",
};

function useFetchData(endpoint, options = {}) {
  // 훅의 규칙 (컴포넌트 또는 다른 훅 내부에서만 사용 가능)
  // custom hook 내부에서 built-in hook 사용 가능
  const [data, setData] = useState(null);
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState(null);

  useEffect(() => {
    const controller = new AbortController();

    setIsLoading(true);

    async function fetchData() {
      try {
        const response = await fetch(endpoint, {
          ...defaultOptions,
          ...options,
          signal: controller.signal,
        });
        const responseData = await response.json();
        setData(responseData);
      } catch (error) {
        if (!(error instanceof DOMException)) {
          setError(error);
        }
      } finally {
        setIsLoading(false);
      }
    }

    fetchData();

    // StrictMode(x2, detect impure function component)
    // mount(1, 요청 1) → unmount (취소 1) → mount(2, 요청 1) -> 응답 1
    return () => {
      controller.abort();
    };
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [endpoint]);

  return { data, isLoading, error };
}

export default useFetchData;
