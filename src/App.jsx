import { BrowserRouter, Route } from "react-router-dom"
import { NotFound } from "./pages/NotFound"

function App() {
  return (
    <>
      <BrowserRouter>
        <Route>
          <Route index element={<Home />}/>
          <Route path="*" element={<NotFound />} />
        </Route>
      </BrowserRouter>
    </>
  )
}

export default App
