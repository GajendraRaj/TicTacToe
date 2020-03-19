import React from 'react';
import { shallow, mount } from 'enzyme';
import { Game } from '../component/Game';
import { constants } from '../constants';
import { Square } from '../component/Square';

describe('Game component', () => {
    let wrapper;

    beforeEach(() => {

        wrapper = shallow(<Game />);
    });

    it("should have the player X as default active player", () => {
        expect(wrapper.find("h4").text()).toEqual(constants.PLAYER_NEXT + " " + constants.PLAYER_X);
    });

    it("Should render the <Square /> component", () => {
        expect(wrapper.find(Square).length).toEqual(9);
    });

    it("Should have 9 squares in the board", () => {
        expect(wrapper.find('ul li').length).toEqual(9);
    });
   
});

describe('Game component', () => {
    let wrapper;

    beforeEach(() => {
        wrapper = mount(<Game />);
    });

    it("Should update the filledSquares list with player 'X' for the first time", () => {
        const squareButtonList = wrapper.find("ul li .square-button");
        
        wrapper.find("ul li .square-button").at(1).simulate("click");
        
        expect(squareButtonList.at(1).text()).toEqual(constants.PLAYER_X);
    });

    it("Should display the square text as X on first click of square", () => {
        const squareButton = wrapper.find("ul li .square-button").at(5);

        squareButton.simulate("click");

        expect(squareButton.text()).toEqual(constants.PLAYER_X);
    });

    it("Should update the filled square with active player", () => {
        const squareButton1 = wrapper.find("ul li button").at(0);
        const squareButton4 = wrapper.find("ul li button").at(4);

        squareButton1.simulate("click");
        squareButton4.simulate("click");

        expect(squareButton1.text()).toEqual(constants.PLAYER_X);
        expect(squareButton4.text()).toEqual(constants.PLAYER_O);
    });

});