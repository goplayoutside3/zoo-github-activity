import { Box, Text } from 'grommet'
import ListItem from './ListItem'

const Comments = ({ data }) => {
  return (
    <Box>
      <ListItem num={data.length} text='comments' />
    </Box>
  )
}

export default Comments
