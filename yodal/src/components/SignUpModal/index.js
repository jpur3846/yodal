import styled from "styled-components";
import { ButtonLarge } from "../shared/Button";
import InputStyles from "../shared/InputStyles";

const SignUpModalStyles = styled.div`
  display: ${props => (props.show ? "flex" : "none")};

  .modal-outer {
    position: absolute;
    top: 0;
    left: 0;
    height: 100vh;
    width: 100vw;
    background: rgba(0, 0, 0, 0.5);
    display: flex;
    justify-content: center;
  }

  .modal {
    margin-top: 5.1rem;
    padding: 30px;
    height: 40.8rem;
    width: 43.6rem;
    background-color: white;
    border-radius: 8px;
  }

  p,
  hr,
  input {
    margin-bottom: 2.5rem;
  }

  h4 {
    color: var(--primary);
    font-weight: bold;
  }

  h5 {
    margin-bottom: 1.2rem;
  }
`;

const SignUpModal = ({ show = false }) => {
  return (
    <SignUpModalStyles show={show}>
      <div className="modal-outer">
        <div className="modal">
          <h4>SIGN UP</h4>
          <p>
            Already have an account? <a href="/">Log in.</a>
          </p>
          <hr></hr>
          <h5>Email Address</h5>
          <InputStyles />

          <h5>Password</h5>
          <InputStyles />
          <ButtonLarge>Create Account</ButtonLarge>
        </div>
      </div>
    </SignUpModalStyles>
  );
};

export default SignUpModal;
