import React from 'react';
import { shallow } from 'enzyme';
import App from '../App';

describe("App component", () => {
  const wrapper = shallow(<App />);

  it("Should have the application title", () => {
      expect(wrapper.find("h1").text()).toEqual('Tic Tac Toe');
  });
});
