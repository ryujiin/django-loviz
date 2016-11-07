define([
    'jquery',
    'backbone',
    '../views/cms/pagina',    
    '../views/catalogo/page_catalogo',    
], function ($, Backbone,PaginaView,CatalogoView) {
    'use strict';

    var AppRouter = Backbone.Router.extend({
        routes: {
            "":"root",
            'catalogo/:categoria/':'catalogo',
            '*notFound': 'notFound',
        },

        initialize:function(){
            //this.bind('all', this.trackPageview);
        },
        root:function(){
            PaginaView.buscar_page('home');
            console.log('primero');
        },
        catalogo:function (categoria) {
            var categoria_modelo = CatalogoView.get_categoria(categoria);
        },
        notFound:function () {
            $('body').removeClass();
            PaginaView.render_404();
        },
    });

    var rutas = new AppRouter();

    return rutas;
});
