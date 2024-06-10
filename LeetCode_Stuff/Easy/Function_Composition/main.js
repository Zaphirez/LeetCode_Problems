const compose = fns => {
    return function(x) {
        for (let i = fns.length -1; i >= 0; --i) {
            x = fns[i](x);
        }
        return x;
    }
};