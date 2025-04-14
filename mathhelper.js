/**
 * Math Helper by Eddie C. randomNumberGenerator
 * @param {*} start an integer 
 * @param {*} end an integer 
 * @returns a number between start and end, start and end numbers are included
 */

function randomNumberGenerator (start, end) {
    return Math.floor(Math.random() * (end - start + 1 ) + start);
}

module.exports = {
    randomNumberGenerator,

} 

