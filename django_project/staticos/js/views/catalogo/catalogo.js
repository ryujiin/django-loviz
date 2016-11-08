/*global define*/

define([
    'jquery',
    'underscore',
    'backbone',
    '../../collections/productos',
    '../../views/catalogo/producto_lista',
    '../../views/cms/ajaxloader'
], function ($, _, Backbone,ProductoCollection,ProductoLista,AjaxLoaderView) {
    'use strict';

    var CatalogoView = Backbone.View.extend({

        id: '',

        className: '',

        events: {},

        initialize: function () {
            this.collection = new ProductoCollection();
            this.listenTo(this.collection, 'add', this.addOne);
        },

        render: function () {
            this.$el.empty();
        },

        addOne:function (modelo) {
            modelo.set({visible:true});
            var producto = new ProductoLista({model:modelo});
            this.$el.append(producto.$el);
            producto.$el.addClass('col-md-3 col-sm-6 col-xs-6')
        },
        buscar:function (slug) {
            var ajaxloader = new AjaxLoaderView();
            this.$el.append(ajaxloader.$el);
            this.collection.fetch({
                data:$.param({categoria:slug})
            }).done(function () {
                ajaxloader.$el.fadeOut();
            })
        }
    });

    return CatalogoView;
});