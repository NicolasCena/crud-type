import { useContext } from 'react'
import { ReportContext } from '../context/ReportContext'

export const useReport = () => {

    const { state, addReport, deleteReport, updateReport } = useContext(ReportContext);
    const { } = state;
    
  return {
    state,
    addReport, 
    deleteReport, 
    updateReport
  }
}
