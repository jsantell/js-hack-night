$(function () {

    // Let's make a namespace, CUPCAKE, which will contain some methods
    var CUPCAKE = {};

    // And some values that will stay wrapped in this closure
    var cupcakeAmount = 0;

    // Add a method that will return the variable cupcakeAmount
    // since cupcakeAmount is a number, it'll just return the value, not the reference.
    // If we wanted to return an object, we'd have to make sure modifying the return
    // value doesn't change the value wrapped in closure.
    CUPCAKE.howMany = function () {
        return cupcakeAmount;
    };

    // This increments our wrapped variable.
    CUPCAKE.moreCupcakes = function () {
        cupcakeAmount++;
    };

    // Now exposing our namespace to the global scope -- only our CUPCAKE
    // object is exposed to the global scope -- cupcakeAmount is only accessible
    // indirectly through the CUPCAKE methods.
    window.CUPCAKE = CUPCAKE;
});
