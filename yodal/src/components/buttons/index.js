import { useState } from 'react';

const MainButton = ({ style, text, onClick, textColor, buttonColor, disabled, height }) => {

    const [hovered, setHovered] = useState(false);

    return (
        <button onClick={onClick}
            style={{
                minWidth: '115px',
                height: height ? height : '41px',
                background: hovered ? '#ACE3EF' : '#134169',
                borderRadius: '8px',
                border: '0px',
                color: textColor ? textColor : 'white',
                fontWeight: 'bold',
                ...style
            }}
            onMouseEnter={() => setHovered(true)} 
            onMouseLeave={() => setHovered(false)}
        >
            {text}
        </button>
    )
}

export default MainButton;