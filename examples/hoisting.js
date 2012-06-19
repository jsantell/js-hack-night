$(function () {
    // Due to hoisting, it is as if these variables are just declared at the top
    // var string1, fn2, fn1 = function fn1(){ return 'I am function 1'; };

    // string1 is moved to the top of the function scope
    // but not yet assigned, so it's undefined
    console.log( string1 ); // undefined

    // If a function is defined via function declaration (like fn1 is)
    // then the entire body is moved to the top
    console.log( fn1 ); // function fn1 () { return 'I am function 1'; }

    // However if a function is defined as a variable declaration,
    // then just the name is moved to the top
    console.log( fn2 ); // undefined

    // If a variable is declared nowhere within the scope,
    // it is never hoisted upwards and using it will result in an error,
    // not an undefined value
    console.log( notdeclared ); // Error!

    var string1 = 'I am string';

    function fn1 () {
        return 'I am function 1';
    }

    var fn2 = function () {
        return 'I am function 2';
    }

});
