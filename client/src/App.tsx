import { Route, BrowserRouter as Router, Routes } from "react-router-dom"
import GitHubCorner from "./components/GitHubCorner"
import Toast from "./components/toast/Toast"
import EditorPage from "./pages/EditorPage"
import HomePage from "./pages/HomePage"
import Landingpage from "./pages/Landingpage"
import ContactPage from "./pages/ContactPage"
import AboutPage from "./pages/AboutPage"

const App = () => {
    return (
        <>
            <Router>
                <Routes>
                    <Route path="/" element={<Landingpage />} />
                    <Route path="/homepage" element={<HomePage />} />
                    <Route path="/contact" element={< ContactPage />} />
                    <Route path="/about" element={< AboutPage />} />
                    <Route path="/editor/:roomId" element={<EditorPage />} />
                </Routes>
            </Router>
            <Toast /> {/* Toast component from react-hot-toast */}
            <GitHubCorner />
        </>
    )
}

export default App
