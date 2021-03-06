import styled from "styled-components";
import { ButtonLarge } from "../shared/Button";
import InputStyles from "../shared/InputStyles";
import { useState } from "react";
import { Link } from "react-router-dom";
import avatar1 from "../../static/imgs/avatar1.png";
import avatar2 from "../../static/imgs/avatar2.png";
import avatar3 from "../../static/imgs/avatar3.png";
import avatar4 from "../../static/imgs/avatar4.png";
import AvatarSelect from "./AvatarSelect";
import { useAuth } from "../../context/AuthContext";

const SignUpModalStyles = styled.div`
  display: ${props => (props.show ? "flex" : "none")};

  .modal-outer {
    position: absolute;
    top: 0;
    left: 0;
    height: 100%;
    width: 100vw;
    background: rgba(0, 0, 0, 0.5);
    display: flex;
    justify-content: center;
  }

  .modal {
    padding: 30px;
    margin-top: 20rem;
    height: 40.8rem;
    width: 43.6rem;
    background-color: white;
    border-radius: 8px;
  }

  .sep {
    margin-bottom: 2rem;
  }

  h4,
  a {
    color: var(--primary);
    font-weight: bold;
  }

  h5 {
    font-size: 12px;
    margin-bottom: 1.2rem;
    font-weight: bold;
  }

  p {
    font-size: 12px;
  }

  .disclaimer-text {
    font-size: 10px;
    color: #d9e0e7;
    line-height: 1.25;
    margin-top: 1rem;
    margin-bottom: 1rem;
  }

  .avatars {
    display: flex;
    justify-content: space-between;
  }

  .disclaimer-text {
    font-size: 11px;
  }
`;

const PageOne = ({ setPage, userDetails, setUserDetails }) => {
  return (
    <div className="modal-outer">
      <div className="modal">
        <h4>SIGN UP</h4>
        <p className="sep">
          Already have an account?{" "}
          <u>
            <a href="/">Log in.</a>
          </u>
        </p>
        <hr className="sep"></hr>
        <h5>Email Address</h5>
        <InputStyles
          className="sep"
          onChange={e =>
            setUserDetails({ ...userDetails, emailAddress: e.target.value })
          }
          required
        />
        <h5>Password</h5>
        <InputStyles
          className="sep"
          type="password"
          onChange={e =>
            setUserDetails({ ...userDetails, password: e.target.value })
          }
          required
        />
        <ButtonLarge onClick={() => {
          if (userDetails.emailAddress && userDetails.password) {
            setPage("PageTwo");
          }
        }}>
          Create Account
        </ButtonLarge>
      </div>
    </div>
  );
};

const PageTwo = ({ setPage }) => {
  return (
    <div className="modal-outer">
      <div className="modal">
        <h4>Welcome To Yodal!</h4>
        <p className="sep">Let's get you set up with a simple profile!</p>
        <hr className="sep"></hr>
        <h5>First Name</h5>
        <InputStyles className="sep" name="fName" />
        <h5>Last Name</h5>
        <InputStyles name="lName" />
        <p className="disclaimer-text">
          Your personal information will not be shared with anyone. You can
          choose to remain anonymous when posting or replying to threads
        </p>
        <ButtonLarge onClick={() => setPage("PageThree")}>Next</ButtonLarge>
      </div>
    </div>
  );
};

const PageThree = ({ setPage, userDetails }) => {
  const { signup } = useAuth();

  return (
    <div className="modal-outer">
      <div className="modal">
        <h4>A little more about yourself</h4>
        <p className="sep">
          Add an avatar and a bio, you can update this later.
        </p>
        <hr className="sep"></hr>
        <h5>Add an avatar</h5>
        <div className="avatars">
          <AvatarSelect avatar={avatar1} />
          <AvatarSelect avatar={avatar2} />
          <AvatarSelect avatar={avatar3} />
          <AvatarSelect avatar={avatar4} />
        </div>
        <h5>Add a short bio</h5>
        <InputStyles className="sep" />
        <Link to={{ pathname: "/home" }}>
          <ButtonLarge
            onClick={() =>
              signup(userDetails.emailAddress, userDetails.password)
            }
          >
            Finish!
          </ButtonLarge>
        </Link>
      </div>
    </div>
  );
};

const SignUpModal = ({ show = false }) => {
  const [page, setPage] = useState("PageOne");
  const [userDetails, setUserDetails] = useState({});
  return (
    <SignUpModalStyles show={show}>
      {page === "PageOne" ? (
        <PageOne
          setPage={setPage}
          userDetails={userDetails}
          setUserDetails={setUserDetails}
        />
      ) : page === "PageTwo" ? (
        <PageTwo setPage={setPage} />
      ) : (
        <PageThree setPage={setPage} userDetails={userDetails} />
      )}
    </SignUpModalStyles>
  );
};

export default SignUpModal;
