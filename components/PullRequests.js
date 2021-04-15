import { Box } from 'grommet'
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
      <Box>{openedRequests} opened pull requests. </Box>
      <Box>{closedRequests} closed pull requests. </Box>
    </Box>
  )
}

export default PullRequests
