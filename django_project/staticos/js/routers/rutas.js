define([
    'jquery',
    'backbone',
    '../views/cms/pagina',    
    '../views/catalogo/page_catalogo',
    '../views/productoSingle/page_producto'   
], function ($, Backbone,PaginaView,CatalogoView,PageProductoSingle) {
    'use strict';

    var AppRouter = Backbone.Router.extend({
        routes: {
            "":"root",
            'catalogo/:categoria/':'catalogo',
            "producto/:slug/":'productoSingle',            
            '*notFound': 'notFound',
        },

        initialize:function(){
        },
        root:function(){
            PaginaView.buscar_page('home');
            console.log('primero');
        },
        catalogo:function (categoria) {
            var categoria_modelo = CatalogoView.get_categoria(categoria);
        },
        productoSingle:function (slug) {
            var producto = new PageProductoSingle(slug);
        },
        notFound:function () {
            $('body').removeClass();
            PaginaView.render_404();
        },
    });

    var rutas = new AppRouter();

    return rutas;
});
