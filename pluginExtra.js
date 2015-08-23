/*
 * PRUEBA DE CALIFICACION. Desarrollador frontend
 *  · Cambia el color de texto o el background del texto
 *  · Respeta chainability
 *  · DIFERENTES MÉTODOS para cada accion.
 *  · Estado más basico posible del plugin, sin aceptar opciones etc
 *
 * Iker Luque Michel - luquemichel@gmail.com
 * Codigo abierto. Dominio publico.
 *
 */

// punto y coma inicial protege de otros plugins o scripts mal cerrados
;(function ($,undefined) {
    'use strict';
    $.fn.cambiaColorIkerLuque = function () {
        //llamamos a metodos_separados con el elemento_actual -this-
             return new metodos_separados(this);
    };
        function metodos_separados(elemento_actual){
            //metodo .texto(color)
            this.texto = function (color){
                return $(elemento_actual).each( function () {
                    elemento_actual.css("color",color);
                })
             }
            //metodo .fondo(color)
            this.fondo = function(color){
                return $(elemento_actual).each( function () {
                    elemento_actual.css("backgroundColor",color);
                })
            }
    }
}(jQuery));