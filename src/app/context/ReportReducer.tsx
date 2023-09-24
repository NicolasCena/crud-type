import { State, Report } from "../types/state.type";

type ReportActions =
  | { type: "ADD_REPORT"; payload: Report }
  | { type: "DELETE_REPORT"; payload: number }
  | { type: "UPDATE_REPORT"; payload: Report };

export const ReportReducer = (state: State, action: ReportActions): State => {
  switch (action.type) {
    case "ADD_REPORT":
      return {
        ...state,
        reports: [...state.reports, action.payload],
      };
    case "DELETE_REPORT":
      return {
        ...state,
        reports: state.reports.filter( item => item.id !== action.payload ),
      };
    case "UPDATE_REPORT":
      return {
        ...state,
        reports: [...state.reports, action.payload],
      };
    default:
      return state;
  }
};
