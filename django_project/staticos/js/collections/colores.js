define([
    'underscore',
    'backbone',
    '../models/color'
], function (_, Backbone, ColorModel) {
    'use strict';

    var ColorCollection = Backbone.Collection.extend({
        model: ColorModel,

    	url:'/api/colores/',
    });

    return ColorCollection;
});
