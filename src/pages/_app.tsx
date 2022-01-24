import { ChakraProvider } from "@chakra-ui/react"
import { AppProps } from "next/app"
import { QueryClient, QueryClientProvider } from "react-query"
import {ReactQueryDevtools} from 'react-query/devtools'
import { SidebarDrawerProvider } from "../contexts/SidebarDrawerContext"
import { makeServer } from "../services/mirage"
import { theme } from "../styles/theme"

const client = new QueryClient()

function MyApp({ Component, pageProps }: AppProps) {

  if (process.env.NODE_ENV === "development") {
    makeServer()
  }

  return (
    <QueryClientProvider client={client}>
      <ChakraProvider theme={theme}>
        <SidebarDrawerProvider>
          <Component {...pageProps} />
        </SidebarDrawerProvider>
      </ChakraProvider>
      <ReactQueryDevtools/>
    </QueryClientProvider>
  )
}

export default MyApp
