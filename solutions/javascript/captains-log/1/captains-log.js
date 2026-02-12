// @ts-check

/**
 * Generates a random starship registry number.
 *
 * @returns {string} the generated registry number.
 */
export function randomShipRegistryNumber() {
  let randomNumber = Math.floor(1000 + Math.random() * (9999 - 1000));
  return `NCC-${randomNumber}`;
}

/**
 * Generates a random stardate.
 *
 * @returns {number} a stardate between 41000 (inclusive) and 42000 (exclusive).
 */
export function randomStardate() {
  let randomStardateNumber = 41000 + Math.random() * (42000 - 41000) ;
  return randomStardateNumber;
}

/**
 * Generates a random planet class.
 *
 * @returns {string} a one-letter planet class.
 */
export function randomPlanetClass() {
  let randomArray = ['D', 'H', 'J', 'K', 'L', 'M', 'N', 'R', 'T', 'Y'];
  let randomLetter = randomArray[Math.floor(Math.random() * randomArray.length)];
  return `${randomLetter}`;
}
