const fakeObs = {
	fromPromise() {
		return fakeObs;
	},
	subscribe() {},
	pluck() {
		return fakeObs;
	},
};
export const Observable = {
	fromPromise() {
		return fakeObs;
	},
};
