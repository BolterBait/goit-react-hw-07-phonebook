import styled from 'styled-components';

export const Profile = styled.div`
  margin-top: 20px;
  display: flex;
  flex-direction: column;
  align-items: center;
`;

export const Text = styled.p`
  font-weight: 600;
  font-size: 17px;

  color: orange;

  text-align: center;
  margin-top: ${p => {
        if (!p.isOpen) {
            return '5px';
        }
        return '0';
    }};
  margin-left: ${p => {
        if (!p.isOpen) {
            return '0';
        }
        return '10px';
    }};
`;

export const UserName = styled.span`
  color: rgba(0, 0, 0, 0.6);
`;

export const ButtonLogOut = styled.button`
  cursor: pointer;
font-weight: 700;
font-size: 16px;
  background-color: transparent;
  padding: 10px;
  outline: none;
  border-radius: 5px;
  border: none;
  display: flex;
  align-items: center;
 
  &:hover,
  &:focus {
    background-color: rgba(0, 0, 0, 0.6);
  }
`;
