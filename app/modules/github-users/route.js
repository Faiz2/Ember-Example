import Route from '@ember/routing/route';
import { inject } from '@ember/service';

export default Route.extend({
    ajax: inject(),
    withLayout: false,
    model() {
        // return [
        //     {id: 1, login: 'A'},
        //     {id: 2, login: 'B'},
        //     {id: 3, login: 'C'}
        // ];
        return this.get('ajax').request(`/users`)
    }
});
