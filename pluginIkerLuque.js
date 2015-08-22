
/*
 * PRUEBA DE CALIFICACION. Desarrollador frontend
 *  · 
 * PRUEBA DE CALIFICACION. Desarrollador PHP frontend
 * Iker Luque Michel - luquemichel@gmail.com
 * Codigo abierto. Dominio publico.
 * Codigo de dominio publico.
 *
 */


'use strict';

//punto y coma inicial protege de otros plugins o scripts mal cerrados

;(function ($) {
    var metodos = {
        porDefecto : function () {console.log("default")},
        texto : function () { console.log("texto")},
        fondo : function () {console.log("fondo")}

    }

    $.fn.cambiaColorIkerLuque = function (opciones) {
       
        console.log("in plugin");

        if ( metodos[opciones] ) {
            return metodos[ opciones ].call( this, Array.prototype.slice.call( arguments, 1 ));
        } else if ( typeof opciones === 'object' || ! opciones ) {
            // Default to "init"
            return metodos.init.apply( this, arguments );
        } else {
            $.error( 'el metodo ' +  opciones + ' no existe' );
        } 
    };
     

}(jQuery));
