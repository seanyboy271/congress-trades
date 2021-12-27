import type { NextPage } from "next";
import { useEffect } from "react";
import { loadHouseData } from "../state/house/house.actions";
import { RootState } from "../state";
import { useDispatch, useSelector } from "react-redux";

const Home: NextPage = () => {
  const dispatch = useDispatch();
  const state = useSelector((state: RootState) => state);

  useEffect(() => {
    dispatch(loadHouseData());
  }, []);

  return (
    <div>
      {state.house.data.length > 0 &&
        state.house.data.map((elem) => {
          return <div key={elem.amount}>{elem.amount}</div>;
        })}
    </div>
  );
};

export default Home;
