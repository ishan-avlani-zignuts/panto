import "./App.css";
import { ThemeProvider, createTheme } from "@mui/material";
import Experiences from "./views/Experiences";
import Home from "./views/Home";
import Materials from "./views/Materials";
import Products from "./views/Products";
import Testimonials from "./views/Testimonials";
import WhyChooseUS from "./views/WhyChooseus";

const theme = createTheme({
  typography: {
    fontFamily: "gilroy",
  },
});
function App() {
  return (
    <ThemeProvider theme={theme}>
      {/* <div className="App"> */}
      <Home />
      <WhyChooseUS />
      <Products />
      <Experiences />
      <Materials />
      <Testimonials />
      {/* </div> */}
    </ThemeProvider>
  );
}

export default App;
