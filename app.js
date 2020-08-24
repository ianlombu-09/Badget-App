let budgetController = (function() {
    let x = 5

    let add = function(a) {
        return x + a
    }

    return {
        publicTest: function(b) {
            return (add(b));
        }
    }
})()

let UIController = (function() {
    // 
})()

let controller = (function(budgetCtrl, UICtrl) {
    let z = budgetCtrl.publicTest(10)

    return {
        anotherPublic: function() {
            console.log(z);
        }
    }
})(budgetController, UIController)
