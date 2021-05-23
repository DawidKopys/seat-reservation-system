import { createStore, applyMiddleware } from 'redux';
import thunk from 'redux-thunk';

export const populateSeats = (seats) => ({
  type: 'POPULATE_SEATS',
  payload: seats,
});

export const getSeats = () => {
  return (dispatch) => {
    fetch('http://localhost:3000/seats')
      .then((response) => response.json())
      .then((seats) => dispatch(populateSeats(seats)));
  };
};

const initialSeats = {
  seats: [],
  loading: true,
};

const seatsReducer = (seats = initialSeats, action) => {
  switch (action.type) {
    case 'POPULATE_SEATS':
      return { seats: action.payload, loading: false };

    default:
      return seats;
  }
};

const store = createStore(seatsReducer, applyMiddleware(thunk));

store.subscribe(() => {
  console.log('store:', store.getState());
});

export default store;
