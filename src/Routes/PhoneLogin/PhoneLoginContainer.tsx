import React from "react";
import { RouteComponentProps } from 'react-router-dom';
import PhoneLoginPresenter from "./PhoneLoginPresenter";

interface IState {
  countryCode: string;
  phoneNumber: string;
}
class PhoneLoginContainer extends React.Component<RouteComponentProps<any>, IState> {
  public state = {
    countryCode: '+82',
    phoneNumber: ''
  };

  public render() {
    const { countryCode, phoneNumber } = this.state;
    return (
      <PhoneLoginPresenter 
        countryCode={countryCode} 
        phoneNumber={phoneNumber} 
        onInputChange={this.onInputChange}
      />
    );
  }

  public onInputChange: React.ChangeEventHandler<
    HTMLInputElement | HTMLSelectElement
  > = event => {
    const {
      target: { name, value }
    } = event;
    this.setState({
      [name]: value
    } as any);
  };
}
export default PhoneLoginContainer;