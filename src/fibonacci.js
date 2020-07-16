class Fibonacci {

    static get(n) {
        return n == 0 || n == 1 ? 1 : Fibonacci.get(n-2) + Fibonacci.get(n-1)
    }

}

module.exports = Fibonacci
