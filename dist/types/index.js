export {};
/** Sorts the users by date and time.
 *
 * @param {TimeUser} a - A TimeUser object.
 * @param {TimeUser} b - A TimeUser object.
 * @returns {number} The difference between the two dates.
 * @example
 * const sortF: SortFunction = (a,b) => {
 * 	return (
 * 	 	Number(a.dt.toFormat("yyyymmddHH")) - Number(b.dt.toFormat("yyyymmddHH"))
 * 	);
 */
