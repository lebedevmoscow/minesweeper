import React, { useEffect } from 'react'

// Styles
import './Status.sass'

// Images
import SmileyFace from './../../assets/minesweeper-smiley-face.png'

// React Components
import Cell from './../Cell/Cell'

const Status = ({ setMines, difficult }) => {
    return (
        <div className="status">
            <div className="status_inner">
                <div className="status__mines">099</div>
                <div className="status__face">
                    <img src={SmileyFace}></img>
                </div>
                <div className="status__timer">002</div>
            </div>
        </div>
    )
}

export default Status
