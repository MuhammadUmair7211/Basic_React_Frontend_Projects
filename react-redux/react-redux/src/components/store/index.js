import { createStore } from "redux";

let INITIAL_COUNT = {
	count: 0,
};
const counterReducer = (store = INITIAL_COUNT, action) => {
	if (action.type === "INCREMENT") {
		return { count: store.count + 1 };
	} else if (action.type === "DECREMENT") {
		return { count: store.count - 1 };
	} else if (action.type === "ADD") {
		return { count: store.count + Number(action.payload.num) };
	} else if (action.type === "SUBTRACT") {
		return { count: store.count - Number(action.payload.num) };
	}
	return store;
};
const counterStore = createStore(counterReducer);
export default counterStore;
