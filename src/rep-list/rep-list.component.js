import React from 'react';
import Loader from 'src/common/loader.component.js';
import { getReps } from 'src/reps.resource.js';
import { upperFirst, partial } from 'lodash';
import Rep from './rep.component.js';
import CurrentRep from './current-rep.component.js';
import styles from './rep-list.styles.css';

export default class RepList extends React.Component {
	state = {
		loading: true,
		reps: null,
		currentRep: null,
	};
	componentWillMount() {
		this.getReps(this.props.repType, this.props.repState);
	}
	componentWillReceiveProps(nextProps) {
		const { repType, repState } = this.props;
		if (nextProps.repType !== repType || nextProps.repState !== repState) {
			this.getReps(nextProps.repType, nextProps.repState);
		}
	}
	render() {
		return (
			<div>
				<h3>
					List /&nbsp;
					<span className={'blue'}>
						{upperFirst(this.props.repType)}
					</span>
				</h3>
				<div className={`${styles.body}`}>
					{this.state.loading
						? <Loader />
						: <div className={`${styles.repList}`}>
								<div className={`${styles.repListHeader}`}>
									<div>Name</div><div>Party</div>
								</div>
								{this.state.reps.map(rep => (
									<Rep
										setCurrentRep={partial(this.setCurrentRep, rep)}
										key={rep.name + rep.district + rep.state}
										rep={rep}
									/>
								))}
							</div>}
					{this.state.currentRep && <CurrentRep rep={this.state.currentRep} />}
				</div>
			</div>
		);
	}
	setCurrentRep = rep => {
		console.log(rep);
		this.setState({
			currentRep: rep,
		});
	};
	getReps = (repType, repState) => {
		this.setState({
			loading: true,
		});
		getReps(this.props.repType, this.props.repState).subscribe(reps => {
			this.setState({
				reps,
				loading: false,
			});
		});
	};
}
