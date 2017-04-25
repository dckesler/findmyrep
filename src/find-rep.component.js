import React from 'react';
import ReactDOM from 'react-dom';
import ChooseRepType from './choose-rep-type/choose-rep-type.component.js';
import SelectState from './select-state/select-state.component.js';
import styles from './find-rep.styles.css';
import { partial } from 'lodash';
import RepList from './rep-list/rep-list.component.js';

export default class FindRep extends React.Component {
	state = {};
	render() {
		return (
			<div className={`${styles.findMyRep}'`}>
				<h1 className={`blue`}>Who's my Representative?</h1>
				<ChooseRepType updateRepType={partial(this.updateState, 'type')} />
				{this.state.type &&
					<SelectState updateState={partial(this.updateState, 'state')} />}
				{this.state.type &&
					this.state.state &&
					<RepList repState={this.state.state} repType={this.state.type} />}
			</div>
		);
	}
	updateState = (field, data) => {
		this.setState({
			[field]: data,
		});
	};
}

ReactDOM.render(<FindRep />, document.getElementById('app'));
