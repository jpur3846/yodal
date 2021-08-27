import { Row, Col } from 'react-bootstrap';
import MainButton from '../components/buttons';

import logo from '../static/imgs/logo.png';

const NavBar = ({}) => {
    return (
        <Row style={{ height: '80px' }} className="d-flex align-items-center">
            <Col xs={6} lg={3} className="justify-content-start align-items-center">
                <img src={logo} alt="Yodal Logo" height="40px" width="auto" />
            </Col>
            <Col xs={6} lg={9}>
                <Row className="d-flex justify-content-end align-items-center">
                    <Col xs={4} lg={2} className="d-flex justify-content-end">
                        Login
                    </Col>
                    <Col xs={4} lg={2} className="d-flex justify-content-end">
                        <MainButton text='Sign Up' />
                    </Col>
                </Row>
            </Col>
        </Row>
    )

}

export default NavBar;