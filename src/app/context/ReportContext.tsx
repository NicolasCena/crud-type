import { createContext  } from "react";
import { State, Report } from "../types/state.type";

export type ReportContextProps = {
    state: State;
    addReport: (payload: Report) => void;
    deleteReport: (payload: number) => void
    updateReport: (payload: Report) => void
} 

export const ReportContext = createContext<ReportContextProps>({} as ReportContextProps);
