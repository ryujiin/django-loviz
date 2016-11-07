/*global define*/

define([
    'jquery',
    'underscore',
    'backbone',
    '../views/carro/carro',
    'carro_main'
], function ($, _, Backbone,CarroView,CarroModel) {
    'use strict';

    var AppView = Backbone.View.extend({
        el:$('body'),
        className: '',
        events: {
            'click .link' : 'navegar',
            'click .menu-mobil-icono': 'mostrar_navegador_mobil',
        },

        initialize: function () {
            //var user_link = new UserLinkView({
                //model:UserModel
            //})
            var mini_carro = new CarroView({
                model:CarroModel
            });
        },
        mostrar_navegador_mobil:function (e) {
            $('#navigation').toggleClass('is_activo');
        },
        addBloqueSuscrito:function () {
            var bloque_suscrito = new BloqueSuscrito({
                el:$('#suscribirse'),
                model:new ModelSuscrito(),
            })
        },
        navegar:function(e){
            e.preventDefault();
            var link = e.currentTarget.pathname;
            Backbone.history.navigate(link, {trigger:true});
            $('#navigation').removeClass('is_activo');
            $('body').animate({scrollTop:0}, 'slow');
        },
    });

    return AppView;
});