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
  selectedSeats: [
    { id: 's46', row: 5, col: 7 },
    { id: 's47', row: 5, col: 8 },
  ],
};

const seatsReducer = (state = initialState, action) => {
  switch (action.type) {
    case 'SET_SEATS': {
      return { ...state, seats: action.payload, loading: false };
    }
    case 'SELECT_SEAT': {
      const selectedSeatId = action.payload;
      const selectedSeat = state.seats.find(
        (seat) => seat.id === selectedSeatId
      );

      const newSelectedSeat = {
        id: selectedSeat.id,
        row: selectedSeat.cords.x + 1,
        col: selectedSeat.cords.y + 1,
      };

      if (state.selectedSeats.length < 2) {
        return {
          ...state,
          selectedSeats: [...state.selectedSeats, newSelectedSeat],
        };
      }
      return state;
    }
    case 'DESELECT_SEAT': {
      const seatIdToDeselect = action.payload;
      const newSelectedSeats = state.selectedSeats.filter(
        (seat) => seat.id !== seatIdToDeselect
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
