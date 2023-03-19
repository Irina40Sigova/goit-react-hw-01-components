import styled from 'styled-components';

export const ProfileWrapper = styled.div`
  margin: auto;
  margin-top: 50px;
  width: min-content;
  display: flex;
  flex-direction: column;
  align-items: center;
  border-radius: 18px;
  background: linear-gradient(
    180deg,
    transparent 50%,
    rgba(42, 212, 356, 0.22) 50%
  );
`;

export const Description = styled.div`
  width: 100%;
  padding: 16px;
  position: relative;
  text-align: center;
  border-radius: 28px;
  background: #ffffff;
  box-shadow: 0px 10px 30px rgba(89, 213, 189, 0.45);
`;

export const UserAvatar = styled.img`
  max-height: 92px;
  border-radius: 50%;
  background: #d9d9d9;
  border: 6px solid #ffffff;
`;

export const Name = styled.p`
  font-weight: 700;
  line-height: 1.187;
  margin-top: 49px;
  margin-bottom: 0;
  color: #000000;
`;

export const Tag = styled.p`
  font-size: 12px;
  margin-top: 6px;
  margin-bottom: 0;
  color: #969696;
`;

export const Location = styled.p`
  font-weight: 700;
  font-size: 12px;
  margin-top: 6px;
  margin-bottom: 0;
  color: #000000;
`;

export const Stats = styled.ul`
  display: flex;
  padding: 12px;
  margin: 0;
`;

export const StatsList = styled.li`
  display: grid;
  width: 100px;
  justify-items: center;
  :not(:last-child) {
    border-right: 1px solid #000000;
  }
`;

export const Label = styled.span`
  color: #5d7791;
  font-size: 12px;
`;

export const Quantity = styled.span`
  font-size: 16px;
  font-weight: 700;
`;
