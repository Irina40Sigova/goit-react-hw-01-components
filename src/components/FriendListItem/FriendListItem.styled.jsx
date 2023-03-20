import styled from 'styled-components';

export const Item = styled.li`
  display: flex;
  align-items: center;
  gap: 12px;
  background-color: rgba(42, 212, 356, 0.22);
  width: 250px;
  border-radius: 4px;
  padding: 8px 16px;
  box-shadow: 0px 1px 3px rgba(0, 0, 0, 0.12), 0px 1px 1px rgba(0, 0, 0, 0.14);
`;
export const Status = styled.span`
  display: block;
  width: 12px;
  height: 12px;
  border-radius: 50%;
  background-color: ${props => (props.isOnline ? 'red' : 'green')};
`;
export const Img = styled.img`
  border-radius: 10px;
`;
export const Name = styled.p`
  font-size: 20px;
  font-weight: 500;
  margin-top: 0;
  margin-bottom: 6px;
`;
