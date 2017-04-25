import React from 'react';
import { map, startCase } from 'lodash';
import styles from './current-rep.styles.css';

export default class CurrentRep extends React.Component {
	render() {
		const { rep } = this.props;
		return (
			<div className={`${styles.currentRep}`}>
				<div className={`${styles.header}`}>Info</div>
				{map(rep, (value, key) => {
					if (!value) return null;
					return (
						<div className={`${styles.detail}`} key={key + value}>
							<div className={`${styles.key}`}>
								{startCase(key)}
							</div>
							<div className={`${styles.value}`}>
								{value}
							</div>
						</div>
					);
				})}
			</div>
		);
	}
}
