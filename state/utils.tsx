import { RootState } from ".";
import {
  CongressData,
  HouseEntry,
  isHouseEntry,
  isSenateEntry,
  SenateEntry,
} from "../models/data";
import { PieChartData } from "../models/pie-chart";

/**
 * TODO: Consider moving some of these fuctions to api layer
 */
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
/**
 * Gets all transactions of a given member of congress
 * @param state
 * @param memberName
 * @returns
 */
export const filterByMember = (
  data: Array<CongressData>,
  memberName: string
) => {
  return data.filter((elem) => {
    if (isSenateEntry(elem)) return elem.senator === memberName;
    if (isHouseEntry(elem)) return elem.representative === memberName;
  });
};
/**
 * Returns the number of transactions for every senator
 * @param state
 * @returns
 */
export const getPieChartData = (data: Array<CongressData>) => {
  let dataArr: { name: string; value: number | undefined }[] = [];

  let names = new Set<string>();
  data.forEach((elem) => {
    isHouseEntry(elem)
      ? names.add(elem.representative)
      : names.add(elem.senator);
  });
  names.forEach((name: string) => {
    let numTransactions = filterByMember(data, name)?.length;
    dataArr.push({ name, value: numTransactions });
  });
  return dataArr;
};

/**
 * Gets the number of transactions that senators had on a given date
 * @param state
 * @param date
 * @returns PieChartData
 */
export const getPieChartDataByDate = (
  data: Array<CongressData>,
  date: Date
): PieChartData[] => {
  let dataArr: PieChartData[] = [];
  let todayTransactions = filterByDate(data, date);
  let names = new Set<string>();
  todayTransactions?.forEach((elem) => {
    isHouseEntry(elem)
      ? names.add(elem.representative)
      : names.add(elem.senator);
  });
  names.forEach((name) => {
    let numTransactions = todayTransactions?.filter((elem) => {
      return isHouseEntry(elem)
        ? elem.representative == name
        : elem.senator == name;
    })?.length;
    dataArr.push({ name, value: numTransactions });
  });
  return dataArr;
};

/**
 * Gets a list of senators that had a transaction on a given date. Each entry here is a unique senator
 * @param state
 * @param date
 * @returns CongressData[] // Should change to something else like string[]
 */
export const getMemberNamesByDate = (data: Array<CongressData>, date: Date) => {
  const allTransArr = data.filter((elem) => {
    const tdate = new Date(elem.transaction_date);
    return (
      tdate.getFullYear() === date.getFullYear() &&
      tdate.getDate() === date.getDate() &&
      tdate.getMonth() === date.getMonth()
    );
  });
  //
  return allTransArr?.reduce(
    (prev: Array<CongressData>, curr: CongressData) => {
      if (
        !prev.find((elem) => {
          if (isHouseEntry(elem) && isHouseEntry(curr)) {
            return elem.representative == curr.representative;
          } else if (isSenateEntry(elem) && isSenateEntry(curr)) {
            return elem.senator == curr.senator;
          }
        })
      )
        prev.push(curr);
      return prev;
    },
    []
  );
};

/**
 * Returns a list of SenateEntries whose transaction date is the same as the given date
 * @param state
 * @param date
 * @returns SenateEntry[]
 */
export const filterByDate = (data: Array<CongressData>, date: Date) => {
  return data.filter((elem) => {
    const tdate = new Date(elem.transaction_date);
    return (
      tdate.getFullYear() === date.getFullYear() &&
      tdate.getDate() === date.getDate() &&
      tdate.getMonth() === date.getMonth()
    );
  });
};
