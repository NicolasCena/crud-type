import React, { useReducer } from "react";
import { ReportReducer } from "./ReportReducer";
import { ReportContext } from "./ReportContext";
import { ReportActions, State, Report } from "../types/state.type";

type Props = {
  children: JSX.Element | JSX.Element[];
};

const INITIAL_STATE: State = {
  reports: [],
  flag: true,
};

export const ReportProvider = ({ children }: Props) => {
  const [state, dispatch] = useReducer(ReportReducer, INITIAL_STATE);

  const addReport = (payload: Report) => {
    dispatch({ type: "ADD_REPORT", payload })
  };

  const deleteReport = (payload: number) => {
    dispatch({ type: "DELETE_REPORT", payload })
  };

  const updateReport = (payload: Report) => {
    dispatch({ type: "UPDATE_REPORT", payload })
  };

  const contextValue = {
    state,
    addReport,
    updateReport,
    deleteReport
  };

  return (
    <ReportContext.Provider value={contextValue}>
      {children}
    </ReportContext.Provider>
  );
};
