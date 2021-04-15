import Head from 'next/head'
import { fetchActivity } from './api/activity'
import { useEffect } from 'react'

const Home = () => {
  useEffect(async () => {
    const data = await fetchActivity()
    console.log(data)
  })
  
  return (
    <div>
      <Head>
        <title>Create Next App</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main>
        This is the main section.
      </main>
    </div>
  )
}

export default Home
