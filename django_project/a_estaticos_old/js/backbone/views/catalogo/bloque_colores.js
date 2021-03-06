define([
    'jquery',
    'underscore',
    'backbone',
    'swig',
    '../../views/catalogo/categorias_link',    
    '../../collections/colores',
], function ($, _, Backbone, swig,CateLink,ColoresCollection) {
    'use strict';

    var CatalogoBloqueColorView = Backbone.View.extend({

        template: swig.compile($('#categoria_bloque_tlp').html()),                        

        id: '',

        className: '',

        events: {
            'click a.no_activo':'filtrar_color',
            'click a.activo':'rm_filtrar_color',
        },

        initialize: function () {
            this.render();
        },

        render: function () {
            var dato = {nombre:'Colores'}
            this.$el.html(this.template(dato));
            this.addLink();
        },
        addLink:function () {
            debugger;
        }
    });

    return CatalogoBloqueColorView;
});
