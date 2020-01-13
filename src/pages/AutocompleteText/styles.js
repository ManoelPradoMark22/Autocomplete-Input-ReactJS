import styled from 'styled-components';

export const Box = styled.div`
    
  display: flex;
  flex-direction: column;
  max-width: 600px;
  margin: 100px auto;

  input {
    background: rgba(0, 0, 0, 0.1);
      border: 0;
      border-radius: 4px;
      height: 44px;
      padding: 0 15px;
      color: #fff;

      &::placeholder {
        /*o styled components já converte o placeholder p/ cada
      navegador entender */
        color: #fff;
        font-weight: bold;
      }
  }

  ul {
    list-style-type: none;
    text-align: left;
    margin: 0;
    padding: 0;
    border-top: 1px solid rgba(0, 0, 0, 0.1);
  }

  ul::before {
    content: "";
  }

  li {
    padding: 10px 15px 0;
    cursor: pointer;
  }

  li:hover {
    text-decoration:underline;
  }
`;
