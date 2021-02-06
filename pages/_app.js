import "../styles/globals.scss"
import PropTypes from "prop-types"
import { ThemeProvider } from "../contexts/theme-context"

function MyApp({ Component, pageProps }) {
  return (
    <ThemeProvider>
      <Component {...pageProps} />
    </ThemeProvider>
  )
}

MyApp.propTypes = {
  Component: PropTypes.func,
  pageProps: PropTypes.object,
}

export default MyApp
