import zooTheme from '@zooniverse/grommet-theme'
import { base as baseTheme } from 'grommet'
import merge from 'lodash/merge'
import { Grommet } from 'grommet'
import { createGlobalStyle } from 'styled-components'

const GlobalStyle = createGlobalStyle`
  body {
    margin: 0;
  }
`

const theme = merge({}, baseTheme, zooTheme)

function MyApp({ Component, pageProps }) {
  return (
    <Grommet theme={theme}>
      <GlobalStyle />
      <Component {...pageProps} />
    </Grommet>
  )
}

export default MyApp
