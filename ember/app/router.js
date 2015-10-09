import Ember from 'ember';
import config from './config/environment';

var Router = Ember.Router.extend({
  location: config.locationType
});

Router.map(function() {
  this.resource('label_types', function() {
    this.route('new');
    this.route('show', { path: ':label_type_id'});
    this.route('edit', { path: ':label_type_id/edit'});
   });
});

export default Router;