import { createTheme, Grid, makeStyles, ThemeProvider } from "@material-ui/core";
import Mainpage from "./components/Mainpage/Mainpage";
import Navbar from "./components/Navbar/Navbar";

const theme = createTheme({
  typography:{
    body2:{
      fontFamily: 'Sansita Swashed'
    }
  },
  shape:{
    borderRadius: '10px'
  },
})

function App() {

  return (

    <div className="App">
      <ThemeProvider theme={theme}>
        <Navbar/>
        <Mainpage/>
      </ThemeProvider>
    </div>
  );
}

export default App;
