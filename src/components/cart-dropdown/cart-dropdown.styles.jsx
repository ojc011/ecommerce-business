import styled from 'styled-components';

export const CartDropdownContainer = styled.div`
  position: absolute;
  width: 300px;
  height: 400px;
  display: flex;
  flex-direction: column;
  padding: 15px;
  border: 1px solid black;
  background-color: white;
  top: 90px;
  right: 40px;
  z-index: 5;
`;

export const EmptyMessage = styled.div`
    font-size: 18px;
    margin: 50px auto;
  }
`;

export const CartItems = styled.div`
    height: 340px;
    display: flex;
    flex-direction: column;
    overflow: scroll;
  }
`;

export const Total = styled.span`
  margin-top: 5px;
  margin-left: auto;
  font-weight: bold;
  font-size: 14px;

`;

