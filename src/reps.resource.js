import axios from 'axios';
import { Observable } from 'rx';

export function getReps(type, state) {
	return Observable.fromPromise(axios.get(`/${type}/${state}`)).pluck(
		'data',
		'results'
	);
}
