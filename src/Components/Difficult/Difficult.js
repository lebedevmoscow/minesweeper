import React, { useEffect } from 'react'

// Styles
import './Difficult.sass'

const Difficult = ({ difficult, onChangeDifficult }) => {
    const additionalClass = 'difficults__item-clicked'

    return (
        <div className="difficults">
            <div className="difficults__inner">
                <div
                    className={`difficults__item ${
                        difficult === 'Easy' ? additionalClass : ''
                    }`}
                    onClick={(e) => onChangeDifficult(e)}
                >
                    Easy
                </div>
                <div
                    className={`difficults__item ${
                        difficult === 'Hard' ? additionalClass : ''
                    }`}
                    onClick={(e) => onChangeDifficult(e)}
                >
                    Hard
                </div>
                <div
                    className={`difficults__item ${
                        difficult === 'Expert' ? additionalClass : ''
                    }`}
                    onClick={(e) => onChangeDifficult(e)}
                >
                    Expert
                </div>
            </div>
        </div>
    )
}

export default Difficult
