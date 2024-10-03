import { BrowserRouter } from "react-router-dom"
import { Presentation, About, Navbar, Stacks } from "./components";

const App = () => {
  return(
    <BrowserRouter>
      <div className="relative z-0 bg-black">
        <div>
          <Navbar />
        </div>
        <div>
          <Presentation />
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