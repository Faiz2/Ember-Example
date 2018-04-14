import Component from '@ember/component';
import styles from '../../github-users/styles';
// import set from 'ember-metal/set';

const { set,get } = Ember

export default Component.extend({
    styles,
    isShowUsers: true,
    selectUser: null,
    actions: {
        showUsers() {
            set(this, 'isShowUsers', true);
            set(this, 'selectUser', null);
        },
        getUserInfo(user) {
            console.info(user)
            set(this, 'isShowUsers', false);
            set(this, 'selectUser', user);
        }
    }
});
