import { BrowserRouter, HashRouter } from "react-router-dom"
import GlobalContext from "./Context/GlobalContext"
import AppRoutes from "./Routes/AppRoutes"


function App() {


  return (
    <GlobalContext>
      <HashRouter>
        <AppRoutes />
      </HashRouter>
    </GlobalContext>
  )
}

export default App
