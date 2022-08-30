import styled from 'styled-components';

export const CartItemContainer = styled.div`
  width: 100%;
  display: flex;
  height: 80px;
  margin-bottom: 15px;

  img {
    width: 30%;
  }
`;

export const ItemDetails = styled.div`
  width: 70%;
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  justify-content: center;
  padding: 10px 20px;

  .name {
    font-size: 16px;
  }
`;

export const Quantity = styled.span`
  width: 23%;
  display: flex;
`;

export const Arrow = styled.div`
  cursor: pointer;
  padding-left: 10px;
  padding-right: 10px;
`;

export const RemoveButton = styled.div`
  cursor: pointer;
`;
