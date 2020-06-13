module.exports = (list, type) => {
    this.list = list;
    this.type = type;

    if (this.type === 'alphabetical') {
        return this.list.sort ();

    } else if (this.type === 'reverse alphabetical order') {
        this.list.sort ();
        
        return this.list.reverse ();
    }
}