import { useRouter } from "next/router";
import { useEffect } from "react";
import { useSelector } from "react-redux";
import { RootState } from "../../../state";
import { hasData, isLoading } from "../../../state/utils";

export const RouteGuard = () => {
  const router = useRouter();
  const state = useSelector((state: RootState) => state);

  useEffect(() => {
    if (!hasData(state) && !isLoading(state)) {
      router.push("/");
    }
  }, [router.asPath]);
  return <></>;
};
