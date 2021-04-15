import { Box, Text } from 'grommet'
import { useEffect, useState } from 'react'

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
      <Text>{openedRequests} opened pull requests. </Text>
      <Text>{closedRequests} closed pull requests. </Text>
    </Box>
  )
}

export default PullRequests
