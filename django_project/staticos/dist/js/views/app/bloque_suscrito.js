define(["jquery","underscore","backbone","swig"],function(e,t,n,r){var i=n.View.extend({tagName:"div",id:"",className:"",events:{"submit #submit_form_email":"validar_email"},initialize:function(){},render:function(){},validar_email:function(e){var t=this;e.preventDefault();var n=this.$("input[type=email]").val(),r='<p class="bg-success" >Gracias por suscribirte</p>';this.model.set({email:n}),this.model.save().always(function(e){t.$("#submit_form_email").hide(),t.$("#submit_email_wrapper").append(r)})}});return i});