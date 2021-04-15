import { Box } from 'grommet'
import { useEffect, useState } from 'react'

const Commits = ({ data }) => {
  const [numCommits, setNumCommits] = useState(0)

  useEffect(() => {
    if (!data) return
    let newNumCommits = 0

    data.forEach(item => {
      newNumCommits += item.payload.size
    })
    
    setNumCommits(newNumCommits)
  }, [data])

  return <Box>{numCommits} commits.</Box>
}

export default Commits
