/**
 * Create a function that takes a number (step) as an argument and returns the number of matchsticks in that step.
 * A house uses six matchsticks and adjacent houses share exactly one matchstick with each other.
 * https://edabit.com/challenge/tYHkTdFrEmWfxpPKF
 * @param {number} step the number of houses
 * @returns {number} the number of matchsticks used
 */
function matchHouses(step) {
  if (step === 0) return 0;
	return (step * 5 + 1)
}