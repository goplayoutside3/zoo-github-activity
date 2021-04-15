import { Text } from 'grommet'

const ListItem = ({ num, text }) => {
  return <Text as="li" size="1rem">{num} {text}</Text>
}

export default ListItem
