import React, { useState, useEffect } from 'react'

// Styles
import './Cell.sass'

const Cell = ({ mine, length, reveal }) => {
    let classes = 'cell'
    let styles = {}

    if (mine.status === 'mined') classes += ' mined'
    if (mine.status === 'not-mined') classes += ' not-mined'

    if (length === 8) styles = { height: 61.5, width: 61.5 }
    if (length === 16) styles = { height: 31.25, width: 31.25 }
    if (length === 24) styles = { height: 20.8333, width: 20.8333 }

    // Handlers
    const onClickHandler = (e) => {
        if (mine.status === 'not-mined' && !classes.includes('uncovered')) {
            e.target.classList.add('uncovered')
        }
    }
    return (
        <div className={classes} style={styles} onClick={onClickHandler}></div>
    )
}

export default Cell
