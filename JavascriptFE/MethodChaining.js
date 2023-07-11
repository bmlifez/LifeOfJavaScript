const calculateAmount = () => {
    return {
        amount: 0,
        lacs: function(val){
            this.amount += val * Math.pow(10, 5)
            return this;
        },
        crore: function(val){
            this.amount += val * Math.pow(10, 7)
            return this;
        },
        value: function(){
            return this.amount;
        }
    }
}

console.log(calculateAmount().lacs(3).crore(7).value());