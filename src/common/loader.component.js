import React from 'react';
import styles from './loader.styles.css';

export default class Loader extends React.Component {
	componentDidMount() {
		this.loadingInterval = setInterval(() => {
			if (this.loader.textContent.length >= 10) {
				this.loader.textContent = 'Loading';
			} else {
				this.loader.textContent += '.';
			}
		}, 600);
	}
	componentWillUnmount() {
		clearInterval(this.loadingInterval);
	}
	render() {
		return (
			<h3 ref={ref => (this.loader = ref)} className={`${styles.loader}`}>
				Loading
			</h3>
		);
	}
}
