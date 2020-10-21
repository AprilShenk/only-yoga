import React from 'react';
import { Link } from 'react-router-dom';
import styled from 'styled-components';

const StyledDiv = styled.div`
  display: flex;
  justify-content: space-around;
  padding: 1.5rem;
`;
const StyledLink = styled(Link)`
  text-decoration: none;
  color: #32292F;
  font-weight: bold;
  :hover {
    color: #32292F;
  }
`;

const Nav = () => {
  return (
    <StyledDiv>
      <StyledLink to='/'>Home</StyledLink>
      <StyledLink to='/poses'>Poses</StyledLink>
      <StyledLink to='/logs'>Logs</StyledLink>
    </StyledDiv>
  );
};

export default Nav;