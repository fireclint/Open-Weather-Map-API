import styled from 'styled-components';

export const Container = styled.div`
  background-image: url('https://source.unsplash.com/1600x900/?sunny');
  background-size: cover;
  background-position: bottom;
  transition: 0.4 ease-out;
  text-align: center;
  font-family: 'Rubik', sans-serif;
`;

export const Main = styled.main`
  min-height: 100vh;
  background-image: linear-gradient(
    to bottom,
    rgba(0, 0, 0, 0.2),
    rgba(0, 0, 0, 0.75)
  );
  padding: 25px;
  color: whitesmoke;
`;

export const Search = styled.input`
  display: block;
  width: 100%;
  padding: 15px;
  appearance: none;
  background: none;
  border: none;
  outline: none;
  background-color: rgba(255, 255, 255, 0.55);
  border-radius: 8px;
  color: #313131;
  font-size: 20px;
  transition: 0.4s ease;
`;

export const WeatherDisplay = styled.div`
  margin-top: 8rem;
`;

export const WeatherLocation = styled.h2`
  font-size: 26px;
  margin: 0.6rem;
`

export const WeatherDescription = styled.p`
text-transform: capitalize;
font-size: 24px;
`

export const Temp = styled.h1`
  font-size: 84px;
  margin: 0.6rem;
`

export const TempRange = styled.div`
  display: flex;
  margin: auto;
  justify-content: center;
  margin-top: 0.5rem;
`

export const TempRangeTxt = styled.p`
  padding: 1rem;
`