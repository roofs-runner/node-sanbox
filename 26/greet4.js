function Greetr() {
    this.greeting = 'Hello ggg';
    this.greet = function () {
        console.log(this.greeting);
    }
}

module.exports = Greetr;