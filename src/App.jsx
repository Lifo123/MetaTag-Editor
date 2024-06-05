import { BrowserRouter } from "react-router-dom"
import GlobalContext from "./Context/GlobalContext"
import AppRoutes from "./Routes/AppRoutes"


function App() {


  return (
    <GlobalContext>
      <BrowserRouter>
        <AppRoutes />
      </BrowserRouter>
    </GlobalContext>
  )
}

export default App
