import { BrowserRouter } from "react-router-dom"
import { About, Navbar } from "./components";

const App = () => {
  return(
    <BrowserRouter>
      <div className="relative z-0">
        <div className="z-2" >
          <Navbar />
        </div>
        <div className="z-1">
          <About />
        </div>
      </div>
    </BrowserRouter>
  )
}

export default App;