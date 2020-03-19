import React from 'react';
import { shallow } from 'enzyme';
import { Game } from '../component/Game';
import { constants } from '../constants';

describe('Game component', () => {
    let wrapper;

    beforeEach(() => {
        wrapper = shallow(<Game />);
    });

    it("should have the player X as default active player", () => {
        expect(wrapper.find("h4").text()).toEqual(constants.PLAYER_NEXT + " " + constants.PLAYER_X);
    });
});