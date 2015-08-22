/*
 * PRUEBA DE CALIFICACION. Desarrollador frontend
 *  · Cambia el color de texto o el background del texto
 *  · Respeta chainability
 * PRUEBA DE CALIFICACION. Desarrollador PHP frontend
 * Iker Luque Michel - luquemichel@gmail.com
 * Codigo abierto. Dominio publico.
 * Codigo de dominio publico.
 *
 */

// punto y coma inicial protege de otros plugins o scripts mal cerrados
;(function ($) {
    'use strict';
    $.fn.cambiaColorIkerLuque = function (queCambiar, aQueColor) {
        var that=this;  //guardamos contexto
        return this.each(function(){  //mantenemos chainability

            if ( queCambiar === "texto"){
                that.css("color", aQueColor);
            }else if (queCambiar === "fondo"){
                    that.css("backgroundColor", aQueColor);
            }
            else {
                //console.log("$.fn.cambiaColor: arg#0 no valido");
                 return this;
            }

        }) //each
       
    };
      

}(jQuery));