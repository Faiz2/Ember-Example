import Route from '@ember/routing/route';
import Person from './person';
import {set, get} from '@ember/object';

export default Route.extend({
    person: new Person(),
    setupController() {
        this._super(...arguments);
        this.controllerFor('example-forms').set('person', get(this, 'person'));
    },
    actions: {
        btnSubmit: function() {
            console.info(get(this, 'person'))
        }
    }
});
