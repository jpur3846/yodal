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
                    <Col className="d-flex justify-content-end align-items-center">
                        <div className="px-5">
                        Login
                        </div>
                        <div className="px-1">
                            <MainButton text='Sign Up' />
                        </div>
                    </Col>
                </Row>
            </Col>
        </Row>
    )

}

export default NavBar;