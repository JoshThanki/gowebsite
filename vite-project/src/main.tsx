import React from "react";
import ReactDOM from "react-dom/client";
import { ChakraProvider, ColorModeScript, extendTheme } from "@chakra-ui/react";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { ReactQueryDevtools } from "@tanstack/react-query-devtools";
import { RouterProvider } from "react-router-dom";
import router from "./routes";

const queryClient = new QueryClient();

// Create a Chakra UI theme extension
const theme = extendTheme({
  config: {
    initialColorMode: "light", // Default light mode, can change based on system preferences
    useSystemColorMode: true,  // Respect system-wide color scheme (dark or light)
  },
  styles: {
    global: {
      "html, body": {
        backgroundColor: "black",  // Set default background color (you can change this to any color)
        minHeight: "100vh",           // Ensure the page covers the full height of the viewport
      },
    },
  },
});



ReactDOM.createRoot(document.getElementById("root")!).render(
  <React.StrictMode>
    <ChakraProvider theme={theme}>
      <ColorModeScript initialColorMode={theme.config.initalColorMode} />
      <QueryClientProvider client={queryClient}>
        <RouterProvider router={router} />
        <ReactQueryDevtools />
      </QueryClientProvider>
    </ChakraProvider>
  </React.StrictMode>
);
