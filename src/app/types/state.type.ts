export type State = {
    reports: Report[] | [],
    flag: boolean
};

export type Report = {
    id: number,
    title: string,
    description: string,
    priority: boolean,
    createdAt: string
};

export type ReportActions = "ADD_REPORT" | "DELETE_REPORT" | "UPDATE_REPORT";
