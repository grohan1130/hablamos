import { BrowserRouter as Router, Routes, Route } from "react-router-dom"
import CreateAccount from "./pages/CreateAccount"
import Home from "./pages/Home"

function App() {

  return (
    <Router>
      <Routes>
        <Route path="/create-account" element={<CreateAccount />} />
        <Route path="/" element={<Home />} />
        {/* Add other routes here as needed */}
      </Routes>
    </Router>
  )
}

export default App
