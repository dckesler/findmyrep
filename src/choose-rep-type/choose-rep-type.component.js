import React from 'react';

export default class ChooseRepType extends React.Component {
	render() {
		return (
			<div>
				<h4>What type of politician are you looking for?</h4>
				<select onChange={e => this.props.updateRepType(e.target.value)}>
					<option value={null} />
					<option value="senators">Senator</option>
					<option value="representatives">Representative</option>
				</select>
			</div>
		);
	}
}
