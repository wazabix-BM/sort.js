module.exports = (array, mode) => {
    this.array = array;
    this.mode = mode;

    const output = [];

    for (let i in this.array) {
        if (this.array [i].toLowerCase () === 'early morning') output [0] = this.array [i];
        if (this.array [i].toLowerCase () === 'dawn') output [1] = this.array [i];
        if (this.array [i].toLowerCase () === 'morning') output [2] = this.array [i];
        if (this.array [i].toLowerCase () === 'noon') output [3] = this.array [i];
        if (this.array [i].toLowerCase () === 'early afternoon') output [4] = this.array [i];
        if (this.array [i].toLowerCase () === 'afternoon') output [5] = this.array [i];
        if (this.array [i].toLowerCase () === 'late afternoon') output [6] = this.array [i];
        if (this.array [i].toLowerCase () === 'early evening') output [7] = this.array [i];
        if (this.array [i].toLowerCase () === 'dusk') output [8] = this.array [i];
        if (this.array [i].toLowerCase () === 'evening') output [9] = this.array [i];
        if (this.array [i].toLowerCase () === 'late evening') output [10] = this.array [i];
        if (this.array [i].toLowerCase () === 'night') output [11] = this.array [i];
        if (this.array [i].toLowerCase () === 'midnight') output [12] = this.array [i];
        if (this.array [i].toLowerCase () === 'middle of the night') output [13] = this.array [i];
    }

    if (this.mode === 'ordered') return output.filter (elements => elements);
            else return output.reverse ().filter (elements => elements);
}