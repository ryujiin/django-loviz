/*global define*/

define([
    'jquery',
    'underscore',
    'backbone',
    'swig',
    'paginaTotal',
    '../../collections/paginas',
    '../../models/modeloclean',
    '../../views/cms/bloque',
    '../../views/cms/carrusel',
], function ($, _, Backbone, swig,PaginasCollection,CollectionPage,ModeloClean,BloqueView,CarruselView) {
    'use strict';

    var PageView = Backbone.View.extend({
        el:$('#contenido'),
        id: '',

        className: '',

        collection: PaginasCollection,

        events: {},

        initialize: function () {
        },

        render: function (modelo) {        
            this.template= swig.compile($('#page_tema1_template').html());
            this.$el.html(this.template(modelo.toJSON()));
            this.head(modelo.toJSON().titulo,modelo.toJSON().descripcion);
            this.rellenar(modelo);
        },
        buscar_page:function(slug){
            var self = this;
            var coincidencia = this.collection.findWhere({'slug':slug})
            if (coincidencia === undefined) {
                var pagina = new CollectionPage();
                pagina.fetch({
                    data:$.param({slug:slug})
                }).done(function (e) {
                    self.collection.add(e);
                    self.buscar_page(slug);
                }).fail(function () {
                    debugger;
                })
            }else{
                debugger;
                this.render(coincidencia);
            }
        },
        head:function (titulo,descripcion) {
            $('title').empty().append(titulo);
            if (descripcion) {
                this.$('meta[name=description]').remove();
                this.$el.append('<meta name="description" content="'+descripcion+'">')    
            }else{
                this.$('meta[name=description]').remove();
                this.$el.append('<meta name="description" content="'+descripcion+'">')
            }
        },
        rellenar:function (modelo) {
            if (modelo.toJSON().bloques) {
                modelo.toJSON().bloques.forEach(this.crear_bloque,this);
            }
            if (modelo.toJSON().carruseles) {
                modelo.toJSON().carruseles.forEach(this.crear_carrusel,this);
            };
        },
        crear_bloque:function (modelo) {
            var modeloclean = new ModeloClean(modelo);
            var bloque = new BloqueView({
                model:modeloclean
            });
            this.$(modeloclean.toJSON().seccion).append(bloque.$el);
        },
        crear_carrusel:function (modelo) {
            var modeloclean = new ModeloClean(modelo);
            var carrusel = new CarruselView({
                model:modeloclean
            });
            this.$(modeloclean.toJSON().seccion).append(carrusel.$el);
        },
        render_404:function () {
            this.template = swig.compile($('#page_error_template').html());
            this.$el.html(this.template());            
        }
    });

    var vista = new PageView();

    return vista;
});