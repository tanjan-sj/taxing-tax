import '@fontsource/roboto/300.css';
import '@fontsource/roboto/400.css';
import '@fontsource/roboto/500.css';
import '@fontsource/roboto/700.css';
import '../styles/globals.css';
import DefaultLayout from "../components/layout/DefaultLayout";

function MyApp({Component, pageProps}) {
  // Use the layout defined at the page level, if available
  const getLayout = Component.getLayout || ((page) => <DefaultLayout>{page}</DefaultLayout>)

  return (
    getLayout(<Component {...pageProps} />)
  )
}

export default MyApp
