const createCounter = init => {
    returnObj = {
        _origin: init,
        counting: init,

        increment() {
            this.counting ++;
            return this.counting;
        },

        decrement() {
            this.counting --;
            return this.counting;
        },

        reset() {
            this.counting = this._origin;
            return this.counting;
        }
    }
    return returnObj;
}