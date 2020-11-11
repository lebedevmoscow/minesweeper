import React, { useState, useEffect } from 'react'

// Styles
import './App.sass'

// React Components
import Headline from './Components/Headline/Headline'
import Minefield from './Components/Minefield/Minefield'
import Cell from './Components/Cell/Cell'

const App = () => {
    // State
    const [difficult, setDifficult] = useState('Hard')
    const [status, setStatus] = useState('smile')
    const [timer, setTimer] = useState(0)
    const [remainMines, setRemainMines] = useState(99)

    // Handlers
    const onChangeDifficult = (e) => {
        // Change the difficult
        setDifficult(e.target.innerText)
    }

    return (
        <div className="app">
            <h1 className="copyright">Fully made by Boris Lebedev.</h1>
            <Headline
                difficult={difficult}
                onChangeDifficult={onChangeDifficult}
            />
            <Minefield difficult={difficult} />
        </div>
    )
}

export default App
