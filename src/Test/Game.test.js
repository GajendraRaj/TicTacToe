import React from 'react';
import { shallow } from 'enzyme';
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
