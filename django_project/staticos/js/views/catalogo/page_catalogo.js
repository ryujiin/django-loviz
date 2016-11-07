/*global define*/

/*global define*/

define([
    'jquery',
    'underscore',
    'backbone',
    'swig',
    '../../collections/categorias',    
], function ($, _, Backbone, swig,CategoriaCollection) {
    'use strict';

    var PageCatalogoView = Backbone.View.extend({
        el:$('#contenido'),
        template: swig.compile($('#page_catalogo_template').html()),        

        tagName: 'div',

        id: '',

        className: '',

        collection: new CategoriaCollection(),

        events: {            
        },

        initialize: function () {
        },
        render:function () {
            this.$el.html(this.template(this.model.toJSON()));
        },
        get_categoria:function (categoria) {
            var self = this;
            var coincidencia = this.collection.findWhere({slug:categoria})
            if (coincidencia === undefined) {
                this.collection.fetch().done(function (e) {
                    var encontrado = false;
                    e.forEach(function(e,i){
                        if (e.slug === categoria) {
                            encontrado = true;
                            self.get_categoria(categoria);
                        };
                    });
                    if (encontrado === false){
                        Backbone.history.navigate('error404',{trigger:true})
                    }
                })
            }else{
                this.model = coincidencia;
                this.render();
            }
        }
    });

    var catalogopage = new PageCatalogoView();

    return catalogopage;
});
