import React from 'react';
import { shallow } from 'enzyme';
import { Square } from '../component/Square';

describe('Square component', () => {
    const wrapper = shallow(<Square />);

    it('Should have square button', () => {
        expect(wrapper.find('button').length).toEqual(1);
    });
});