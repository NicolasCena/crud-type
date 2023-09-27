'use client'
import { URL_BASE } from '@/app/utils/constants'
import axios from 'axios'
import { useEffect } from 'react'

const page = () => {

  const getReport = async () => {
    try {
      const dataPath = window.location.pathname.split('/');
      const numInforme = dataPath[dataPath.length - 1]; 
      const response = await axios.get(URL_BASE + '/api/report/' + numInforme)
      console.log(response.data)
    } catch (error) {
      console.log(error)
    }
  }

  useEffect(() => {
    getReport()
  }, [])
  
  return (
    <div>page1</div>
  )
}

export default page