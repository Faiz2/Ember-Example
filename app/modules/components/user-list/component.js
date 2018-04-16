import Component from '@ember/component';
import styles from '../../github-users/styles';
import { set, get } from '@ember/object';
import {  inject } from '@ember/service';

import item from 'ember-bootstrap/components/base/bs-accordion/item';

export default item.extend({
    styles,
    selectUser: null,
    ajax: inject(),
    // toggleCollapsed: true, //一个按钮全部显示设置

    actions: {
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
        getDetails(fun, index, user) {
            fun(index);
            // 你的逻辑
            // this.toggleProperty('toggleCollapsed') //一个按钮全部显示设置
        }
    }
});
