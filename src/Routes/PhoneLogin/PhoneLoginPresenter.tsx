import React from "react";
import Helmet from 'react-helmet';
import BackArrow from '../../Components/BackArrow';
import Input from '../../Components/Input';
import countries from '../../countries';
import styled from '../../typed-components';

const Container = styled.div`
  margin-top: 30px;
  padding: 50px 20px;
`;

const BackArrowExtended = styled(BackArrow)`
  position: absolute;
  top: 20px;
  left: 20px;
`;

const Title = styled.h2`
  font-size: 25px;
  margin-bottom: 40px;
`;

const CountrySelect = styled.select`
  font-size: 20px;
  color: "#2c3e50";
  -webkit-appearance: none;
  -moz-appearance: none;
  appearance: none;
  background-color: white;
  border: 0;
  font-family: "maven Pro";
  margin-bottom: "20px";
  width: 90%;
`;

const CountryOption = styled.option``;

const Form =  styled.form``;

const Button = styled.button`

`;

interface IProps{
  countryCode: string;
  phoneNumber: string;
  onInputChange: (
    event: React.ChangeEventHandler<HTMLInputElement | HTMLSelectElement>
  ) => void;
}
const PhoneLoginPresenter: React.SFC<IProps> = ({
  countryCode,
  phoneNumber
}) => (
  <Container>
    <Helmet>
      <title>Phone Login | Nuber</title>
    </Helmet>
    <BackArrowExtended backTo={"/"} />
    <Title>enter your mobile number</Title>
      <CountrySelect value={countryCode} name={"countryCode"}>
      {countries.map((country, index) => (
        <CountryOption key={index} value={country.dial_code}>
          {country.flag} {country.name} ({country.dial_code})
        </CountryOption>
      ))}
    </CountrySelect>
    <Form>
      <Input 
        placeholder={"010 1234 1234"} 
        value={phoneNumber} 
        name={"phoneNumber"}
        onChange={onInputChange}
      />
      <Button>
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width="24"
          height="24"
          viewBox="0 0 24 24"
          fill={"white"}
        >
          <path d="M7.33 24l-2.83-2.829 9.339-9.175-9.339-9.167 2.83-2.829 12.17 11.996z" />
        </svg>
      </Button>
    </Form>
  </Container>
);

export default PhoneLoginPresenter;
