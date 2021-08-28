import styled from 'styled-components';

const ImageStyles = styled.div`
    img {
        height: 75px;
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