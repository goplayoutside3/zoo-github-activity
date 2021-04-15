import { Box, Text } from 'grommet'
import { useEffect, useState } from 'react'
import ListItem from './ListItem'

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

  return (
    <Box>
      <ListItem num={numCommits} text={'commits'} />
    </Box>
  )
}

export default Commits
