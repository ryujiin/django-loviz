define([
    'jquery',
    'underscore',
    'backbone',
    'swig',
    '../../collections/productos',
    'headModel',
    '../../views/cms/breadcrumb',
    '../../views/productoSingle/galeria_full',
    '../../views/productoSingle/galeria_movil',
    '../../views/productoSingle/estrellas',
    '../../views/productoSingle/add_to_cart',
], function ($, _, Backbone,swig,ProductoCollection,HeadModel,Breadcrumb,Galeria_full,Galeria_mobil,Estrellas,AddToCart) {
    'use strict';

    var ProductoView = Backbone.View.extend({
        el:$('#contenido'),

        template: swig.compile($('#productoSingles_tlp').html()),                

        className: '',

        collection: new ProductoCollection(),

        events: {
            'click .tallas_elegibles .en_stock':'cambiar_talla',            
            'click #agregar_alCarro':'compra_producto',            
        },

        initialize: function (slug) {
            this.model = this.get_modelo(slug);
        },
        render:function () {
            this.$el.html(this.template(this.model.toJSON()));
            this.changeHead();
            this.addbread();
            this.add_galleria();
            this.add_estrellas();        
            this.add_to_cart();
        },
        get_modelo:function (slug) {
            var self = this;            
            this.collection.fetch({
                data:$.param({slug:slug})
            }).done(function (e) {
                var coincidencia = self.collection.findWhere({slug:slug});
                if (coincidencia) {
                    self.model = coincidencia;
                    self.render();
                }else{
                    Backbone.history.navigate('error404',{trigger:true})
                }
            }).fail(function () {
                Backbone.history.navigate('error404',{trigger:true});
            })
        },
        changeHead:function () {
            HeadModel.set({
                titulo:this.model.toJSON().full_name,
                descripcion : this.model.toJSON().descripcion,
            })
        },
        addbread:function () {
            var bread = new Breadcrumb({
                model:this.model,
                el:this.$('.nav-breadcrumb'),
            })
        },
        add_galleria:function () {
            var galeria_full = new Galeria_full({
                model:this.model,
                el:$(this.$('#galeria_full')),
            });
            var galeria_mobil = new Galeria_mobil({
                model:this.model,
                el:$(this.$("#galeria_movil")),
            })
        },
        add_estrellas:function () {
            var estrellas = new Estrellas({
                el:this.$('.estrellas'),
                model:this.model
            });
            estrellas.render(this.model.toJSON().valoracion)
        },
        add_to_cart:function () {
            this.boton_add_cart = new AddToCart({
                el:this.$('#addtocart')
            });
        },
        cambiar_talla:function (e) {
            this.$('.tallas_elegibles .talla_seleccion').removeClass('seleccionado');
            var talla = e.target.dataset.valor;
            this.$('.precios .precio_variacion.mostrar').removeClass('mostrar');
            this.$('.precios .precio_variacion.'+talla).addClass('mostrar');
            $(e.target).addClass('seleccionado');
            this.boton_add_cart.model.set({
                variacion:talla,
                producto:this.model.id,
            });
        },
        compra_producto:function () {
            this.boton_add_cart.verificar_compra(this);            
        }
    });

    return ProductoView;
});