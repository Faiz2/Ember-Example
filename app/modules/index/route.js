import Route from '@ember/routing/route';
import { inject } from '@ember/service';

export default Route.extend({
    ajax: inject(),
    beforeModel(transition) {
        const ajax = this.get('ajax');
        ajax.host = 'https://api.github.com';
        const { queryParams } = transition;
        this.remindAuth = null;
        let token  = window.localStorage.getItem('github_api_oauth');
        if (token) {
            ajax.headers['Authorization'] = `token ${token}`;
        } else {
            this.remindAuth = "还没有OAurh认证";
        }
    },
    setupController(controller, model) {
        this._super(controller, model);
        controller.set('remindAuth', this.remindAuth);
    }
});
