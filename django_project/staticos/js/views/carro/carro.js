/*global define*/

define([
    'jquery',
    'underscore',
    'backbone',
    'swig',
], function ($, _, Backbone, swig) {
    'use strict';

    var MiniCarroView = Backbone.View.extend({
        el:$(".mini-cart"),
        template: swig.compile($('#mini_carro_template').html()),

        tagName: 'div',

        id: '',

        className: '',

        events: {
        },

        initialize: function () {
            this.render();
            this.listenTo(this.model, 'change', this.render);
        },

        render: function () {
            this.$el.html(this.template(this.model.toJSON()));
        },
    });

    return MiniCarroView;
});
