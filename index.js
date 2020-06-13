const sortNum = require ('./resources/num.js');
const sortWords = require ('./resources/words.js');
const sortTime = require ('./resources/time.js');

/**
 * This constructor is used to sort the elements of a table
 * @function
 * @name Sort
 * @constructs
 * @param {array} array
 * @param {string} mode
 */

module.exports.Sort = function Sort (array, mode) {
    this.array = array;
    this.mode = mode;

    if (!this.array) 
        throw new Error ('Missed parameter [array]');

    if (typeof this.array !== 'object') 
        throw new Error ('Invalid parameter type [array]');

    for (let k in this.array) {
        if (typeof this.array [k] === 'string') {
            this.array = this.array.map (elements => elements.toLowerCase ());
        }
    }

    if (!this.mode) 
        throw new Error ('Missed parameter [mode]');

    if (this.mode !== "numbers" && this.mode !== 'words' && this.mode !== 'time')
        throw new Error ('Unknown parameter [mode]');

    /**
     * This function is used to add an option for your sort
     * @function
     * @name sortOption
     * @param {string} option
     * @param {function} callback
     */

    this.sortOption = (option, callback) => {
        this.option = option;

        if (!this.option) 
            throw new Error ('You must put a sort option');

        if (typeof this.option !== 'string') 
            throw new Error ('Invalid parameter type [option]');

        if (!callback) throw new Error ('This method contains a callback');

        if (typeof callback !== 'function') 
            throw new Error ('This method contains a callback');

        if (this.mode === 'numbers') {
            for (let i in this.array) {
                if (typeof this.array [i] !== 'number') 
                    throw new Error ('Incorrect [array] content');
            }

            if (this.option !== 'descending' && this.option !== 'ascending') 
                throw new Error ('Unknown parameter [option]');

            this.array = sortNum (this.array, this.option);

        } else if (this.mode === 'words') {
            for (let i in this.array) {
                if (typeof this.array [i] !== 'string') 
                    throw new Error ('Incorrect [array] content');
            }

            if (this.option !== 'alphabetical' && this.option !== 'reverse alphabetical order')
                throw new Error ('Invalid parameter [option]');

            this.array = sortWords (this.array, this.option);

        } else if (this.mode === 'time') {
            for (let i in this.array) {
                if (typeof this.array [i] !== 'string') 
                    throw new Error ('Incorrect [array] content');
            }

            if (this.option !== 'ordered' && this.option !== 'reverse ordered')
                throw new Error ('Invalid parameter [option]');
            
            this.array = sortTime (this.array, this.option);
        }
        return callback (this.array);
    };
}