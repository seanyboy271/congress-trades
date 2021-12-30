import type { NextPage } from "next";
import React, { useEffect, useState } from "react";
import { loadHouseData } from "../state/house/house.actions";
import { RootState } from "../state";
import { useDispatch, useSelector } from "react-redux";
import { LoadingScreen } from "../components/shared/loading-screen.component";
import { loadSenateData } from "../state/senate/senate.actions";
import { ErrorModal } from "../components/shared/error-modal.component";
import { Home } from "../components/home/home.component";

const Index: NextPage = () => {
  const state = useSelector((state: RootState) => state);
  const dispatch = useDispatch();

  const [loading, setLoading] = useState<boolean>(true);

  useEffect(() => {
    if (shouldLoadSenate(state)) dispatch(loadSenateData());
    if (shouldLoadHouse(state)) dispatch(loadHouseData());
  }, []);

  useEffect(() => {
    setLoading(isLoading(state));
  }, [state]);

  return (
    <React.Fragment>
      {/* Loading screen */}
      {loading && <LoadingScreen></LoadingScreen>}

      {/* Home screen */}
      {!loading && <Home></Home>}

      {/* Error modals */}
      {(state.house.error || state.senate.error) && <ErrorModal></ErrorModal>}
    </React.Fragment>
  );
};

const isLoading = (state: RootState) => {
  return (
    !(!!state.house.data || !!state.house.data) &&
    !(!!state.senate.error || !!state.house.data)
  );
};

const shouldLoadSenate = (state: RootState) => {
  return !state.senate.data;
};
const shouldLoadHouse = (state: RootState) => {
  return !state.house.data;
};

export default Index;
