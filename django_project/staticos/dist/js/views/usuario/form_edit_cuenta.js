define(["jquery","underscore","backbone","swig","../../models/user"],function(e,t,n,r,i){var s=n.View.extend({template:r.compile(e("#usuario_edit_tpl").html()),id:"",className:"",events:{},initialize:function(){this.render()},render:function(){this.$el.html(this.template(this.model.toJSON()))}});return s});