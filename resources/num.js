module.exports = (list, mod) => {
    this.list = list;
    this.mod = mod;

    if (this.mod === 'descending') {
        this.list.sort ((a, b) => {
            return b - a;
        });

    } else if (this.mod === 'ascending') {
        this.list.sort ((a, b) => {
            return a - b;
        });
    }

    return this.list;
}