import { BrowserRouter } from "react-router-dom"
import { About, Navbar, Stacks } from "./components";

const App = () => {
  return(
    <BrowserRouter>
      <div className="relative z-0 bg-black">
        <div>
          <Navbar />
        </div>
        <div>
          <About />
        </div>
        <div>
          <Stacks />
        </div>
      </div>
    </BrowserRouter>
  )
}

export default App;