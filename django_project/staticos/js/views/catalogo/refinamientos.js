/*global define*/

define([
    'jquery',
    'underscore',
    'backbone',
    '../../views/catalogo/bloque_categorias',            
    '../../views/catalogo/bloque_colores',    
    '../../views/catalogo/bloque_tallas',
], function ($, _, Backbone,CategoriaBlock,ColorBlock,TallaBlock) {
    'use strict';

    var RefinamientoCatalogoView = Backbone.View.extend({

        tagName: 'div',

        id: '',

        className: '',

        events: {
            'click .refinar':'mostrar_cuadro',
            'click .fondo_refinamiento':'ocultar_cuadro',
            'click .link_refinamiento':'refinar_busqueda',
        },

        initialize: function () {
        },
        render:function (categoria) {
            this.bloque_categoria= new CategoriaBlock({
                el:this.$('.categoria'),
                model:this.model,
                collection: categoria,
            });
            this.bloque_talla = new TallaBlock({
                el:this.$('.tallas'),
                collection:this.collection,
            });
            this.bloque_color= new ColorBlock({
                el:this.$('.colores'),
                collection:this.collection,
            });
        },
        mostrar_cuadro:function () {
            this.$el.addClass('activate');
        },
        ocultar_cuadro:function () {
            this.$el.removeClass('activate');            
        },
        refinar_busqueda:function (e) {
            var filtro = e.currentTarget.dataset.filtro;
            var valor = e.currentTarget.dataset.valor;
            $(e.currentTarget).removeClass('link_refinamiento').addClass('refinado_link');
            this.collection.add({'filtro':filtro,'valor':valor});
        }
    });

    return RefinamientoCatalogoView;
});
