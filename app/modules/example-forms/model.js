import DS from 'ember-data';

export default DS.Model.extend({
    firstName: DS.attr('string'),
    lastName: DS.attr('string'),
    age: DS.attr('number'),
    company: DS.attr('string'),
    favicon: DS.attr('string'),
    email: DS.attr('string'),
});
