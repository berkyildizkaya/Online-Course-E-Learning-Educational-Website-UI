import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'

import { ChakraProvider, extendTheme } from '@chakra-ui/react'
import "@fontsource/be-vietnam-pro";
const theme = extendTheme({
  fonts:{
    Heading:'BeVietnamProMedium',
    Text:"BeVietnamProRegular"
  },
  components: {
    Button: {
      baseStyle: {
        color: '#262626',
      },
    },
    
  },
  colors: {
    orange:{
      100:"#FF9500",
      95 :"#FFF4E5",
      50: "#FF9500"
    },
    
    
  },
});

ReactDOM.createRoot(document.getElementById('root')).render(

  <ChakraProvider theme={theme}>
    <App  />
  </ChakraProvider>
)
