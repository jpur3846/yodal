import styled from "styled-components";
import { ButtonLarge } from "../components/shared/Button";
import HeroImage from "../static/imgs/hero.png";

const HeroStyles = styled.section`
  min-height: 80vh;

  display: flex;
  justify-content: center;
  align-items: center;

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

function Hero() {
  return (
    <HeroStyles>
      <div className="inner">
        <div className="content">
          <h1>
            Stop venting.
            <br /> Start <span class="highlight">Yodalling.</span>
          </h1>
          <ButtonLarge>Sign Up Today</ButtonLarge>
        </div>

        <div className="image">
          <img src={HeroImage} alt="Hero" />
        </div>
      </div>
    </HeroStyles>
  );
}

export default Hero;
