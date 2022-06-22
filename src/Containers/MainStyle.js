import styled from 'styled-components';
import Devices from '../Config/Devices';

export const Background = styled.div`
  padding:10px;
  height: 100vh;
  background: lightgray;
`;

export const FormBackground = styled.div`
  width: 70%;
  height:500px;
  background: white;
  padding:20px;
  display:flex;
  flex-direction: column;

`;

export const SectionBackground = styled.div`
  background:#F5F5F5;
  padding:20px;
  display:flex;
  flex-direction:column;
  justify-content:space-between;
  
  @media ${Devices.tablet} {
    flex-direction:column;
   }
  @media ${Devices.laptop} {
    flex-direction:row;
  }
`;

export const Button = styled.button`
  width:150px;
  background: white; 
  border: 1px solid black;
  border-radius: 5px;
  height:30px;
`; 

export const ButtonContainer = styled.div`
  justify-content:flex-end;
  display:flex;
  margin:20px 0px 20px 0px;
`;

export const InputContainer = styled.div`
    display:flex;
    flex-direction:row;
    justify-content:space-between;
    width: 400px;
    margin-bottom:20px;
`;
