define(["jquery","underscore","backbone","swig","../../views/app/header"],function(e,t,n,r,i){var s=n.View.extend({el:e("#contenido"),template:r.compile(e("#page_error_template").html()),tagName:"div",id:"",className:"",events:{},initialize:function(){},render:function(){this.$el.html(this.template()),this.change_head(),this.finalizo()},change_head:function(){var e="Opps No se encontro lo que buscabas, | Loviz DelCarpio® :: lovizdc.com",t="Ups no se encontro lo que buscabas, nuestro error.",n=i;n.render(e,t)},finalizo:function(){window.prerenderReady=!0}}),o=new s;return o});