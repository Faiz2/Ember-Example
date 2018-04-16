import EmberObject, { computed } from '@ember/object';

export default EmberObject.extend({
    firstName: '',
    lastName: '',
    fullName: computed('firstName', 'lastName' , function() {
        return `${this.get('firstName')} ${this.get('lastName')}`;
    }),
    age: '',
    company: '',
    favicon: '',
    email: ''
});
