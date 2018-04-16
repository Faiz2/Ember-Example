import Route from '@ember/routing/route';
import { inject } from '@ember/service';
import { set } from '@ember';

export default Route.extend({
    ajax: inject(),

    beforeModel(transition) {
        const ajax = this.get('ajax');
        ajax.host = 'http://127.0.0.1:9999';
        const { queryParams } = transition;
        if (queryParams.code) {
          ajax
            .request(`http://127.0.0.1:9999/authenticate/${queryParams.code}`)
            .then(response => {
              set(ajax, 'headers', { 'Authorization': `token ${response.token}` });
              window.localStorage.setItem('github_api_oauth', response.token);
              this.controllerFor('application').set('remindAuth', null);
              this.transitionTo('index')
            })
        } else {
          this.transitionTo('index')
        }
    },

});
