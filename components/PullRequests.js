import { Box, Text } from 'grommet'
import { useEffect, useState } from 'react'
import ListItem from './ListItem'

const PullRequests = ({ data }) => {
  const [openedRequests, setOpenedRequests] = useState(0)
  const [closedRequests, setClosedRequests] = useState(0)

  useEffect(() => {
    if (!data) return
    let opened = 0
    let closed = 0
    
    data.forEach(item => {
      if (item.payload.action === "opened") opened++
      if (item.payload.action === "closed") closed++
    });

    setOpenedRequests(opened)
    setClosedRequests(closed)
  }, [data])

  return (
    <Box>
      <ListItem num={openedRequests} text='opened pull requests' />
      <ListItem num={closedRequests} text='closed pull requests' />
    </Box>
  )
}

export default PullRequests
