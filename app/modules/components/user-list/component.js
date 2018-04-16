import Component from '@ember/component';
import styles from '../../github-users/styles';
import { set, get } from '@ember/object';
import {  inject } from '@ember/service';

import { getOwner } from '@ember/application';

import item from 'ember-bootstrap/components/base/bs-accordion/item';

export default item.extend({
    styles,
    isShowUsers: true,
    selectUser: null,
    ajax: inject(),

    userInfo: null,

    actions: {
        showUsers() {
          set(this, 'isShowUsers', true);
          set(this, 'selectUser', null);
        },
        getUserInfo(user) {
          // console.info(user)
          // set(this, 'isShowUsers', false);
          set(this, 'selectUser', user);
        },
        getUserFollowings(user) {
          let userFollowingsData = this.get('ajax')
            .request('/users/' + user.login + '/following')
            .then((followings) => {
              set(this, 'userFollowings', followings)
            })
        },
        onClick() {
            this._super(...arguments)
            console.info('fuck')
        }
    },
    // onClick() {
    //     console.info('aa')
    // }
    // click(e) {
    //     this._super(...arguments);
    //     console.log(this.get('isSelected'));
    //
    //   // let a = "fuck0";
    //   // this.get('ajax')
    //   // this.get('onClick')(name);
    //   // console.log('this was clicked');
    //
    // }
});
