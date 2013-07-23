var AppView = Backbone.View.extend({
  el: 'body',

  initialize: function() {
    var data = [
      {title: 'About Giraffes'},
      {title: 'What Giraffes Eat'}
    ];

    new SlidesView({
      collection: new SlidesCollection(data)
    });
  }
});