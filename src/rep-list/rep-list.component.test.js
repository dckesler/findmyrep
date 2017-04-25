import React from 'react';
import { shallow } from 'enzyme';
import RepList from './rep-list.component.js';
import Loader from 'src/common/loader.component.js';
import Rep from './rep.component.js';
import CurrentRep from './current-rep.component.js';

//Here's some basic enzyme stuff

describe('rep-list.component.js', () => {
	describe('loading', () => {
		it('should display the loader component on start', () => {
			const wrapper = shallow(
				<RepList repType={'representatives'} repState={'UT'} />
			);
			expect(wrapper.find(Loader).length).toBe(1);
		});
		it('should remove loader on state change', () => {
			const wrapper = shallow(
				<RepList repType={'representatives'} repState={'UT'} />
			);
			wrapper.setState({ loading: false, reps: [] });
			expect(wrapper.find(Loader).length).toBe(0);
		});
	});
	describe('rep list', () => {
		it('should render each rep when loading is false', () => {
			const wrapper = shallow(
				<RepList repType={'representatives'} repState={'UT'} />
			);
			wrapper.setState({ loading: false, reps: [{}, {}] });
			expect(wrapper.find(Rep).length).toBe(2);
		});
	});
	describe('current rep', () => {
		it('should not load current rep info if there is no current rep', () => {
			const wrapper = shallow(
				<RepList repType={'representatives'} repState={'UT'} />
			);
			expect(wrapper.find(CurrentRep).length).toBe(0);
		});
		it('should load current rep info when there is a current rep in state', () => {
			const wrapper = shallow(
				<RepList repType={'representatives'} repState={'UT'} />
			);
			wrapper.setState({ currentRep: {} });
			expect(wrapper.find(CurrentRep).length).toBe(1);
		});
	});
});
