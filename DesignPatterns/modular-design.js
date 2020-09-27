var employee = function(){
    var name = "Bhaskar";
    var salary = 20000;
    function calculateBonus(amount){
        return salary + amount;
    }
    return {
        name: name,
        calculateBonus: calculateBonus
    }
}

var aman = new employee();
console.log('aman',aman.calculateBonus(1000),aman.salary);