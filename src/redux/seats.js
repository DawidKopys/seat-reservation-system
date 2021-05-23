import { createStore, applyMiddleware } from 'redux';
import thunk from 'redux-thunk';

import { suggestSeats } from '../utils/suggestSeats';

export const setSeats = (seats) => ({
  type: 'SET_SEATS',
  payload: seats,
});

export const getSeats = () => {
  return (dispatch) => {
    fetch('http://localhost:3000/seats')
      .then((response) => response.json())
      .then((seats) => {
        dispatch(setSeats(seats));
        dispatch(suggestSelectedSeats());
      });
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

export const suggestSelectedSeats = () => ({
  type: 'SUGGEST_SELECTED_SEATS',
});

export const setNumberOfSeats = (numberOfSeats) => ({
  type: 'SET_NUMBER_OF_SEATS',
  payload: numberOfSeats,
});

export const setAdjecent = (adjecent) => ({
  type: 'SET_ADJECENT',
  payload: adjecent,
});

const initialState = {
  seats: [],
  loading: true,
  numberOfSeats: 0,
  adjecent: false,
  selectedSeats: [],
};

const seatsReducer = (state = initialState, action) => {
  switch (action.type) {
    case 'SET_SEATS': {
      return { ...state, seats: action.payload, loading: false };
    }
    case 'SET_NUMBER_OF_SEATS': {
      return { ...state, numberOfSeats: action.payload };
    }
    case 'SET_ADJECENT': {
      return { ...state, adjecent: action.payload };
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

      if (state.selectedSeats.length < state.numberOfSeats) {
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
    case 'SUGGEST_SELECTED_SEATS': {
      const suggestedSeats = suggestSeats({
        seats: state.seats,
        numberOfSeats: state.numberOfSeats,
        adjecent: state.adjecent,
      });

      const selectedSeats = suggestedSeats.map((seat) => ({
        id: seat.id,
        row: seat.cords.x + 1,
        col: seat.cords.y + 1,
      }));

      return { ...state, selectedSeats: selectedSeats };
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
