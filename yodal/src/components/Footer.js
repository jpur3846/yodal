import { Row, Col } from 'react-bootstrap';

const Footer = () => {

    return (
        <Row style={{ height: '80px', marginLeft: '100px', marginRight: '100px' }} 
            className="d-flex align-items-center fixed-bottom"
        >
            <Col>
            This is the footer.
            </Col>
        </Row>
    )

}

export default Footer;