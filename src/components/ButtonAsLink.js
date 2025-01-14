import styled from 'styled-components';

const ButtonAsLink = styled.button`
  background: none;
  color: #0077cc;
  border: none !important;
  padding: 0;
  font: inherit;
  text-decoration: underline;
  cursor: pointer;

  :hover,
  :active {
    color: #004499;
  }
`;

export default ButtonAsLink;
