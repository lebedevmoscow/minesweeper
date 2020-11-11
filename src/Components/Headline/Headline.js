import React from 'react'

// Styles
import './Headline.sass'

// React components
import Difficult from './../Difficult/Difficult'
import Status from './../Status/Status'

const Headline = ({ difficult, onChangeDifficult }) => {
    return (
        <div className="headline">
            <Difficult
                difficult={difficult}
                onChangeDifficult={onChangeDifficult}
            />
            <Status difficult={difficult} />
        </div>
    )
}

export default Headline
