import { Box } from 'grommet'

const PullRequests = ({ data }) => {
  return <Box>{data.length} pull requests. </Box>
}

export default PullRequests
