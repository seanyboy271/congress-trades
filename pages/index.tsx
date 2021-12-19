import type { NextPage } from 'next'
import { useEffect, useState } from 'react'
import Head from 'next/head'
import Image from 'next/image'
import styles from '../styles/Home.module.css'

const Home: NextPage = () => {

  const [senateData,setSenateData] = useState<any[]>()

  useEffect(() => {
    getData();
    console.log('here')
  }, []);

  const getData = async () => {
    const response = await fetch('http://localhost:8080/get_senate_data');
    const data = await response.json();
    console.log(data)
    setSenateData(data.entries)
  }

  return (
    <div>
      {
        senateData && senateData.map(elem => {
          return (
            <div key={elem.senator}>
              {elem.amount}
            </div>
          )
        })
      }
    </div>
  )
}

export default Home
