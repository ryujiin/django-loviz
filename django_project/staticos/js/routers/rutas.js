define([
    'jquery',
    'backbone',
    '../views/cms/pagina',    
    '../views/catalogo/page_catalogo',
    '../views/productoSingle/page_producto',
    '../views/carro/page_carro',
    '../views/procesar/page_procesar',    
], function ($, Backbone,PaginaView,CatalogoView,PageProductoSingle,PageCarro,PageProcesar) {
    'use strict';

    var AppRouter = Backbone.Router.extend({
        routes: {
            "":"root",
            'catalogo/:categoria/':'catalogo',
            "producto/:slug/":'productoSingle',            
            'carro/':'carro_page',            
            'procesar-compra/':'procesar_compra',            
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
            PageProductoSingle.get_modelo(slug);
        },
        carro_page:function () {
            PageCarro.render();
        },
        procesar_compra:function () {
            PageProcesar.verificar_render();
        },
        notFound:function () {
            $('body').removeClass();
            PaginaView.render_404();
        },
    });

    var rutas = new AppRouter();

    return rutas;
});
