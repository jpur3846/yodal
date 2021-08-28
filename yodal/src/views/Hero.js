import { useState } from "react";
import styled from "styled-components";
import { ButtonLarge } from "../components/shared/Button";
import SignUpModal from "../components/SignUpModal";
import HeroImage from "../static/imgs/hero.png";
import { Link } from 'react-router-dom';

const HeroStyles = styled.section`
  height: calc(100vh - 80px);

  position: relative;
  display: flex;
  justify-content: center;
  align-items: center;
  overflow: hidden;

  .inner {
    margin: 0 auto;
    display: flex;
    justify-content: space-between;
    align-items: center;
    width: var(--maxWidth);
  }

  .content {
    display: flex;
    flex-direction: column;
    justify-content: flex-start;
    align-items: flex-start;

    h1 {
      --lineHeight: calc(var(--h1) * 1.25);
      font-weight: 700;
      margin-bottom: 33px;
    }
  }

  img {
    max-width: 600px;
  }

  .highlight {
    color: var(--primary);
  }
`;

// TODO: fix modal thingo
function Hero() {
  const [showSignUpModal, setShowSignUpModal] = useState(false);
  return (
    <HeroStyles>
      <SignUpModal show={showSignUpModal}></SignUpModal>
      <div className="inner">
        <div className="content">
          <h1>
            Stop venting.
            <br /> Start <span class="highlight">Yodalling.</span>
          </h1>
          <ButtonLarge onClick={() => setShowSignUpModal(true)}>
              Sign Up Today
          </ButtonLarge>
        </div>

        <div className="image">
          <img src={HeroImage} alt="Hero" />
        </div>
      </div>
    </HeroStyles>
  );
}

export default Hero;
