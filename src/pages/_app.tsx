import { ChakraProvider } from "@chakra-ui/react"
import { AppProps } from "next/app"
import { QueryClient, QueryClientProvider } from "react-query"
import { SidebarDrawerProvider } from "../hooks/SidebarDraweContext"
import { makeServer } from "../services/mirage"
import { theme } from "../styles/theme"

function MyApp({ Component, pageProps }: AppProps) {

  if (process.env.NODE_ENV === "development") {
    makeServer()
  }

  const client = new QueryClient()

  return (
    <QueryClientProvider client={client}>
      <ChakraProvider theme={theme}>
        <SidebarDrawerProvider>
          <Component {...pageProps} />
        </SidebarDrawerProvider>
      </ChakraProvider>
    </QueryClientProvider>
  )
}

export default MyApp
