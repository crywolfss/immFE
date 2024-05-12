import React from 'react'

export const Divider = ({ height, color }) => {
    return (
        <div
            style={{
                height: height,
                backgroundColor: color,
                width: '2px',
            }}
        ></div>
    )
}
