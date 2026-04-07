import { Route, Routes } from 'react-router-dom'
import Scene from './canvas/Scene'
import CardsInfo from './components/CardsInfo'

function App() {
    return (
        <div className="w-full h-screen overflow-hidden">
            <Routes>
                <Route path="/" element={<Scene />} />
                <Route path="/cardinfo" element={<CardsInfo />} />
            </Routes>
        </div>
    )
}

export default App
