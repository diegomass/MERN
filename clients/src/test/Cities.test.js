import React from 'react';
import {shallow} from 'enzyme';

import Cities from '../comp/Cities';

it('should render correctly with no props', () => {
    const component = shallow(<Cities/>);
    
    expect(component).toMatchSnapshot();
  });
  it('should render banner text correctly with given strings', () => {
    const strings = ['Cities', 'Madrid', 'Nueva York', 'Milan'];
    const component = shallow(<Cities list={strings} />);
    expect(component).toMatchSnapshot();
  });