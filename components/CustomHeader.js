import { Box, Image } from 'grommet'

const CustomHeader = () => {
  return (
    <Box background='brand' height="50px" width="100%">
      <Image src='/favicon.png' alt='zooniverse logo' height="100%" width="50px" />
    </Box>
  )
}

export default CustomHeader
