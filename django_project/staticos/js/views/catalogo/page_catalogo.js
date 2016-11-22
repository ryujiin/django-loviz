/*global define*/

/*global define*/

define([
    'jquery',
    'underscore',
    'backbone',
    'swig',
    '../../collections/categorias',
    '../../views/catalogo/catalogo',
    '../../views/cms/breadcrumb',
    'headModel'
], function ($, _, Backbone, swig,CategoriaCollection,CatalogoView,BreadcumbView,HeadModel) {
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
            this.crear_catalogo();
            this.crear_breadcrum();
            this.header();
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
        },
        crear_catalogo:function () {
            this.catalogo = new CatalogoView({
                el:this.$('.catalogo_productos'),
            });
            this.catalogo.buscar(this.model.toJSON().slug);
        },
        crear_breadcrum:function () {
            this.breadcrumb = new BreadcumbView({
                el:this.$('.nav-breadcrumb'),
                collection:this.collection,
                model:this.model,
            });
        },
        header:function () {
            var titulo,descripcion;
            if (this.model.toJSON().titulo_seo) {
                titulo = this.model.toJSON().titulo_seo;
            }else{
                titulo = this.model.toJSON().nombre;
            }
            HeadModel.set({
                titulo:titulo,
                descripcion:this.model.toJSON().descripcion,
            })
        }
    });

    var catalogopage = new PageCatalogoView();

    return catalogopage;
});
