import { Box, Text } from 'grommet'

const Comments = ({ data }) => {
  return (
    <Box>
      <Text>{data.length} comments. </Text>
    </Box>
  )
}

export default Comments
