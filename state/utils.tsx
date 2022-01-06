import { RootState } from ".";
import { SenateEntry } from "../models/data";

export const isLoading = (state: RootState) => {
  return state.house.loading || state.senate.loading;
};

export const hasData = (state: RootState) => {
  return !!state.house.data && !!state.senate.data;
};

export const hasError = (state: RootState) => {
  return !!state.house.error || !!state.senate.error;
};

export const hasSenateData = (state: RootState) => {
  return !!state.senate.data;
};
export const hasHouseData = (state: RootState) => {
  return !!state.house.data;
};
export const filterBySenator = (state: RootState, senatorName: string) => {
  return state.senate.data?.filter((elem) => {
    return elem.senator === senatorName;
  });
};
export const getPieChartData = (state: RootState) => {
  // {'name':senatorName, 'value':numberOfTransactions}
  let dataArr: { name: string; value: number | undefined }[] = [];

  if (state.senate.data) {
    let names = new Set<string>();
    state.senate.data.forEach((elem) => {
      names.add(elem.senator);
    });
    names.forEach((name: string) => {
      let numTransactions = filterBySenator(state, name)?.length;
      dataArr.push({ name, value: numTransactions });
    });
  }
  return dataArr;
};

export const getPieChartDataByDate = (state: RootState, date: Date) => {
  let dataArr: { name: string; value: number | undefined }[] = [];
  if (state.senate.data) {
    let todayTransactions = filterByDate(state, date);
    let names = new Set<string>();
    todayTransactions?.forEach((elem) => {
      names.add(elem.senator);
    });
    names.forEach((name) => {
      let numTransactions = todayTransactions?.filter(
        (elem: { senator: string }) => elem.senator == name
      )?.length;
      dataArr.push({ name, value: numTransactions });
    });
  }
  return dataArr;
};

export const getNamesByDate = (state: RootState, date: Date) => {
  const allTransArr = state.senate.data?.filter((elem) => {
    const tdate = new Date(elem.transaction_date);
    return (
      tdate.getFullYear() === date.getFullYear() &&
      tdate.getDate() === date.getDate() &&
      tdate.getMonth() === date.getMonth()
    );
  });
  return allTransArr?.reduce((prev: SenateEntry[], curr: SenateEntry) => {
    if (!prev.find((elem) => elem.senator == curr.senator)) prev.push(curr);
    return prev;
  }, []);
};

export const filterByDate = (state: RootState, date: Date) => {
  return state.senate.data?.filter((elem) => {
    const tdate = new Date(elem.transaction_date);
    return (
      tdate.getFullYear() === date.getFullYear() &&
      tdate.getDate() === date.getDate() &&
      tdate.getMonth() === date.getMonth()
    );
  });
};
