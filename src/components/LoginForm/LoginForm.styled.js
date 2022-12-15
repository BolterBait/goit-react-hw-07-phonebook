import styled from 'styled-components';

export const Form = styled.form`
  display: flex;
  flex-direction: column;
  align-items: center;
`;

export const InputWrapp = styled.div`
height: 45px;
margin-bottom: 30px;
`;

export const Input = styled.input`
  width: 300px;
  font-family: inherit;
  height: 40px;
  display: block;

  color: #fff;
  font-weight: 400;
  font-size: 20px;
  padding-left: 15px;

  border-radius: 5px;
  background-color: rgba(255, 255, 255, 0.3);

  &:hover,
  &:focus {
    background-color: rgba(0, 0, 0, 0.1);
  }
  
`;

export const Label = styled.label`
  font-weight: 700;
  font-size: 15px;
  margin: 5px;
`;


export const BtnLogIn = styled.button`
  font-family: inherit;
  font-weight: 700;
  font-size: 20px;

  cursor: pointer;
  min-width: 120px;
  padding: 10px 15px;
  background-color: rgba(0, 0, 0, 0.3);

  border-radius: 5px;
  margin: 10px;
  border: none;
  transition: color 300ms cubic-bezier(0.445, 0.05, 0.55, 0.95),
    transform 300ms cubic-bezier(0.445, 0.05, 0.55, 0.95);
  &:focus,
  &:hover {
    color: #fff;
    transform: scale(0.8);
  }
`;