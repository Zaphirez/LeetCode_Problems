const addTwoNumbers = (l1, l2) => {
    n1 = parseInt(l1.reverse().join(""))
    n2 = parseInt(l2.reverse().join(""))

    newnum = n1 + n2

    return newnum.toString().split("").reverse()
};