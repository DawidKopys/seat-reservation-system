import { createStore, applyMiddleware } from 'redux';
import thunk from 'redux-thunk';

export const setSeats = (seats) => ({
  type: 'SET_SEATS',
  payload: seats,
});

export const getSeats = () => {
  return (dispatch) => {
    fetch('http://localhost:3000/seats')
      .then((response) => response.json())
      .then((seats) => dispatch(setSeats(seats)));
  };
};

export const selectSeat = (seatId) => ({
  type: 'SELECT_SEAT',
  payload: seatId,
});

export const deselectSeat = (seatId) => ({
  type: 'DESELECT_SEAT',
  payload: seatId,
});

const initialState = {
  seats: [],
  loading: true,
  selectedSeats: ['s46', 's47'],
};

const seatsReducer = (state = initialState, action) => {
  switch (action.type) {
    case 'SET_SEATS': {
      return { ...state, seats: action.payload, loading: false };
    }
    case 'SELECT_SEAT': {
      const currSelectedSeats = state.selectedSeats;
      const newSelectedSeatId = action.payload;
      if (currSelectedSeats.length < 2) {
        return {
          ...state,
          selectedSeats: [...currSelectedSeats, newSelectedSeatId],
        };
      }
      return state;
    }
    case 'DESELECT_SEAT': {
      const currSelectedSeats = state.selectedSeats;
      const seatIdToDeselect = action.payload;
      const newSelectedSeats = currSelectedSeats.filter(
        (seatId) => seatId !== seatIdToDeselect
      );
      return { ...state, selectedSeats: newSelectedSeats };
    }
    default: {
      return state;
    }
  }
};

const store = createStore(seatsReducer, applyMiddleware(thunk));

store.subscribe(() => {
  console.log('store:', store.getState());
});

export default store;
