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

    const isAnyRowCompletedByTheActivePlayer = () => {
        const rowStartIndexList = [0, 3, 6];
        const totalRows = 3;
        let isPlayerWin = false;

        for (let rowIndex = 0; rowIndex < totalRows; rowIndex++) {
            let rowStartIndex = rowStartIndexList[rowIndex];
            if (isRowCompletedByTheActivePlayer(rowStartIndex)) {
                isPlayerWin = true;
                break;
            }
        }

        return isPlayerWin;
    }

    const isRowCompletedByTheActivePlayer = () => {
        const squareButtonList = wrapper.find("ul li .square-button");
        const squareButton1 = squareButtonList.at(0);
        const squareButton2 = squareButtonList.at(1);
        const squareButton3 = squareButtonList.at(2);
        const squareButton4 = squareButtonList.at(3);
        const squareButton5 = squareButtonList.at(5);

        squareButton1.simulate('click');
        squareButton4.simulate('click');
        squareButton2.simulate('click');
        squareButton5.simulate('click');
        squareButton3.simulate('click');

        if (squareButton1.text() === squareButton2.text() &&
            squareButton1.text() === squareButton3.text()) {
                return true; 
            }
        
        return false;
    }

    const isColumnCompletedByTheActivePlayer = () => {
        const squareButtonList = wrapper.find("ul li .square-button");
        const squareButton1 = squareButtonList.at(0);
        const squareButton2 = squareButtonList.at(1);
        const squareButton4 = squareButtonList.at(3);
        const squareButton5 = squareButtonList.at(4);
        const squareButton7 = squareButtonList.at(6);
        
        squareButton1.simulate('click');
        squareButton2.simulate('click');
        squareButton4.simulate('click');
        squareButton5.simulate('click');
        squareButton7.simulate('click');

        if (squareButton1.text() === squareButton4.text() &&
            squareButton1.text() === squareButton7.text()) {
                return true; 
            }
        
        return false;
    }

    const isDiagonalCompletedByTheActivePlayer = () => {
        const squareButtonList = wrapper.find("ul li .square-button");
        const squareButton1 = squareButtonList.at(0);
        const squareButton2 = squareButtonList.at(1);
        const squareButton3 = squareButtonList.at(2);
        const squareButton4 = squareButtonList.at(4);
        const squareButton9 = squareButtonList.at(8);
        
        squareButton1.simulate('click');
        squareButton2.simulate('click');
        squareButton4.simulate('click');
        squareButton3.simulate('click');
        squareButton9.simulate('click');

        if (squareButton1.text() === squareButton4.text() &&
            squareButton1.text() === squareButton9.text()) {
                return true; 
            }
        
        return false;
    }

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

    it("Should check isAnyRowCompletedByActivePlayer", () => {
        const result = isAnyRowCompletedByTheActivePlayer();
        
        expect(result).toEqual(true);
    });

    it("Should check isColumnCompletedByTheActivePlayer", () => {
        const result = isColumnCompletedByTheActivePlayer();
        
        expect(result).toEqual(true);
    });

    it("Should check isDiagonalCompletedByTheActivePlayer", () => {
        const result = isDiagonalCompletedByTheActivePlayer();
        
        expect(result).toEqual(true);
    });

    it("Should not proceed the game further, if player wins", () => {
        isDiagonalCompletedByTheActivePlayer();

        const squaresList = wrapper.find(Square);

        squaresList.forEach(square => {
            expect(square.props().isDisabled).toBeTruthy();
        });
    });

});