import styled from 'styled-components';

const ImageStyles = styled.div`
    img {
        height: 75px;
    }

    img: hover {
        -webkit-transform: scale(1.25);
        transform: scale(1.2);
        -webkit-transition: .3s ease-in-out;
        transition: .1s ease-in-out;
    }
`

const AvatarSelect = ({ avatar }) => {

    return (
        <ImageStyles>
            <img src={avatar} alt="Avatar"/>
        </ImageStyles>
    );
}

export default AvatarSelect;