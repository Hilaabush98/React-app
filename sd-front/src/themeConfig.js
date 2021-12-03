//import { deepmerge } from '@mui/utils';

import { createTheme } from '@mui/material/styles';
import { purple } from '@mui/material/colors';
import { pink } from '@mui/material/colors';
import { grey } from '@mui/material/colors';

const theme = createTheme({
  palette: {
    purpura: {

      main: purple[500],
      light: '#42a5f5',
      dark: '#1565c0'

    },
    gris: {
      main: grey[500],

    },
    rosa: {
      main: pink[500]

    }
  },
  text: {
    blanco: '#FFFF',

  }
}

)

export default theme;
//module.exports= theme;