export const generateSeatNumbers = (capacity: number) => {
  const alphabet = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
  const seatNumbers = [];

  const rows = Math.ceil(capacity / 4); // Calculate the total number of rows

  let seatLetterIndex = 0;

  for (let row = 1; row <= rows; row++) {
    const seatLetter = alphabet.charAt(seatLetterIndex); // Get the corresponding letter from the alphabet

    for (let seat = 1; seat <= 4; seat++) {
      const seatNumber = `${seat}${seatLetter}`;
      seatNumbers.push(seatNumber);
    }

    seatLetterIndex = (seatLetterIndex + 1) % alphabet.length; // Increment the seatLetterIndex and wrap around if needed
  }

  return seatNumbers;
};
