
const MainButton = ({ style, text, onClick }) => {

    return (
        <button onClick={onClick}
            style={{
                width: '115px',
                height: '41px',
                left: '977px',
                top: '17px',
                background: '#134169',
                borderRadius: '8px',
                border: '0px',
                color: 'white',
                ...style
            }}
        >
        {text}
        </button>
    )
}

export default MainButton;