import { RootState } from ".";

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
