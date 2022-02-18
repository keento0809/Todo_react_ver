import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faInstagram } from "@fortawesome/free-brands-svg-icons";
import styled from "styled-components";

const FooterStyle = styled.div`
  background: #787878;
  padding: 1.5rem 0;
  margin-top: auto;
`;

const SocialMediaIcons = styled.div`
  display: flex;
  justify-content: center;
`;

const Footer = () => {
  return (
    <FooterStyle>
      <SocialMediaIcons>
        <FontAwesomeIcon icon={faInstagram} />
        <FontAwesomeIcon icon={faInstagram} />
        <FontAwesomeIcon icon={faInstagram} />
      </SocialMediaIcons>
      <div>
        <p>©︎2022 All Right Reserved.</p>
      </div>
    </FooterStyle>
  );
};

export default Footer;
