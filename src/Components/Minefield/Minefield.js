import React, { useEffect, useState } from 'react'

// Styles
import './Minefield.sass'

// React Components
import Cell from './../Cell/Cell'

const Minefield = ({ difficult }) => {
    // If mines has not been setted

    const [mines, setMines] = useState(null)
    const [rendered, setRendered] = useState(null)

    useEffect(() => {
        let length

        if (difficult === 'Easy') length = 8
        if (difficult === 'Hard') length = 16
        if (difficult === 'Expert') length = 24

        // Generate the matrix of mines
        let minesList = []
        for (let i = 0; i < length; i++) {
            minesList[i] = []
            for (let j = 0; j < length; j++) {
                const rand = Math.floor(Math.random() * 5)
                if (rand === 0) {
                    minesList[i].push({ status: 'mined' })
                }

                if (rand !== 0) {
                    minesList[i].push({ status: 'not-mined' })
                }
            }
        }

        setMines(minesList)
    }, [difficult])

    useEffect(() => {
        // Render the mines
        const render = []
        if (mines) {
            for (let i = 0; i < mines.length; i++) {
                const row = []
                for (let j = 0; j < mines.length; j++) {
                    row.push(
                        <Cell
                            mine={mines[i][j]}
                            length={mines.length}
                            reveal={false}
                            x={i}
                            y={j}
                            key={Math.random() * Math.random()}
                        />
                    )
                }
                render.push(
                    <div
                        className="minefield__row"
                        key={Math.random() * Math.random()}
                    >
                        {row}
                    </div>
                )
            }
        }
        setRendered(render)
    }, [mines])

    return <div className="minefield">{rendered}</div>
}

export default Minefield
