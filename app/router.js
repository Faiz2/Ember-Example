import EmberRouter from '@ember/routing/router';
import config from './config/environment';

const Router = EmberRouter.extend({
  location: config.locationType,
  rootURL: config.rootURL
});

Ember.Route.reopen({
    withLayout: true,
    setupController() {
        this._super(...arguments);
        this.controllerFor('application').set('showNavbar', this.get('withLayout'));
    }
});

Router.map(function() {
  this.route('oauth-callback');
  this.route('github-users', function() {});
  this.route('example-file-upload');
  this.route('example-forms');
  this.route('page-not-found', {path: '/*path'});
  this.route('max-demo');
});

export default Router;
