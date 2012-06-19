$(function () {

    var allDevs = [];

    var Developer = function ( options ) {
        options = options || {};

        this.name     = options.name || '';
        this.yearsExp = options.yearsExp || 1;
        this.IDE      = options.IDE || 'vim';
        allDevs.push( this );
    };

    // Prototype object that every instance uses
    Developer.prototype = {
        makeCode : function () {
            console.log( this.name + ' is making code!' );
        },
        argueAboutIDE : function () {
            console.log( this.IDE + ' is the way to go.' );
        }
    };

    // Can also add static methods on the 'class' object
    Developer.get = function ( name ) {
        if (!name) { return allDevs; }

        for ( var i = allDevs.length; i--; ) {
            if ( allDevs[ i ].name === name ) { 
                return allDevs[ i ];
            }
        }
    };

    Developer.howMany = function () {
        return allDevs.length;
    };

    window.Developer = Developer;
});
