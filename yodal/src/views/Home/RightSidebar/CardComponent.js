import React, { useState, useEffect } from "react";
import styled from "styled-components";
import RightArrowBlue from "./RightArrowBlue";
import LeftArrowBlue from "./LeftArrowBlue";
import circle from "../../../static/imgs/New_Quote_Circle.png";

const CardComponentStyles = styled.div`
  background: #ffffff;
  box-shadow: 0px 1px 2px rgba(43, 71, 139, 0.15),
    0px 7px 15px 3px rgba(19, 65, 105, 0.04);
  border-radius: 10px;

  padding: 15px;

  subheading {
    font-family: SF Pro Display;
    font-style: normal;
    font-weight: 400;
    font-size: 16px;
    line-height: 20px;
    color: #134169;
  }

  caption {
    padding-right: 8px;
  }

  .quote {
    display: flex;
    flex-direction: row;
    align-items: center;
    padding-bottom: 14px;
  }
  .arrows {
    padding-top: 15px;
    display: flex;
    flex-direction: row;
    cursor: pointer;
  }
`;

const fetchQuotes = (setQuoteText) => {
  fetch("https://type.fit/api/quotes")
    .then(function (response) {
      return response.json();
    })
    .then(function (data) {
      setQuoteText(data[Math.floor(Math.random() * (1000 - 0) + 0)].text);
    });
};

function CardComponent(props) {
  const [quoteText, setQuoteText] = React.useState();
  useEffect(() => {
    fetchQuotes(setQuoteText);
  }, []);
  return (
    <CardComponentStyles>
      <div className="quote">
        <caption>{props.type}</caption>
        <hr style={{ color: "#D9E0E7", height: "1", width: "154px" }}></hr>
      </div>
      <subheading>{quoteText}</subheading>
      <div className="arrows">
        <img
          src={circle}
          alt="logo"
          style={{ width: "22px" }}
          onClick={() => fetchQuotes(setQuoteText)}
        ></img>
      </div>
    </CardComponentStyles>
  );
}

export default CardComponent;
