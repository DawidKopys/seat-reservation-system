export const suggestSeats = ({ seats, numberOfSeats, adjecent = false }) => {
  return adjecent
    ? findAdjecentSeats(seats, numberOfSeats)
    : findSeats(seats, numberOfSeats);
};

const findSeats = (seats, nrOfSeatsToFind) => {
  let suggestedSeats = [];
  let i = 0;
  while (suggestedSeats.length < nrOfSeatsToFind) {
    if (seats[i].reserved === false) {
      suggestedSeats.push(seats[i]);
    }
    i++;

    /* not enough available seats */
    if (i >= seats.length) {
      return [];
    }
  }
  return suggestedSeats;
};

const findAdjecentSeats = (seats, nrOfSeatsToFind) => {
  let i = 0;
  let j = 0;
  do {
    /* if there is no enough adjecent seats in the current row - move to the next one */
    if (seats[j].cords.x !== seats[i].cords.x) {
      i = j;
      j = i + 1;
    }

    /* if seat is reserved or there is a corridor between the seats - keep looking*/
    if (seats[j].reserved === true) {
      i = j + 1;
      j = i;
    } else if (i !== j && seats[j].cords.y - seats[j - 1].cords.y > 1) {
      i = j;
    } else {
      j++;
    }

    /* no result found */
    if (j >= seats.length) {
      return [];
    }
  } while (
    j - i <
    nrOfSeatsToFind
  ); /* finish looking if we found enough  adjecent available seats */

  return seats.slice(i, j);
};
