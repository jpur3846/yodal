
const MainButton = ({ style, text, onClick }) => {

    return (
        <button onClick={onClick}
            style={{
                minWidth: '115px',
                height: '41px',
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