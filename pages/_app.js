import '../styles/globals.css'
import zooTheme from '@zooniverse/grommet-theme'
import { base as baseTheme } from 'grommet'
import merge from 'lodash/merge'
import { Grommet } from 'grommet'

const theme = merge({}, baseTheme, zooTheme)

function MyApp({ Component, pageProps }) {
  return (
    <Grommet theme={theme}>
      <Component {...pageProps} />
    </Grommet>
  )
}

export default MyApp
