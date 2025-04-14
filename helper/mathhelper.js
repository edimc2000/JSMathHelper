/**
 * Math Helper by Eddie C. randomNumberGenerator
 * @param {*} start an integer 
 * @param {*} end an integer 
 * @returns a number between start and end, start and end numbers are included
 */

function randomNumberGenerator (start, end) {
    if( typeof start === 'number'){
        return Math.floor(Math.random() * (end - start + 1 ) + start);
    }   else {
        throw new Error('Invalid input(s), start and end parameters accepts numbersd only. Try again')
    }
}

module.exports = {
    randomNumberGenerator,

} 

