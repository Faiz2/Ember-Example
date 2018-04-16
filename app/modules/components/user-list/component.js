import Component from '@ember/component';
import styles from '../../github-users/styles';
import { set, get } from '@ember/object';
import {  inject } from '@ember/service';
export default Component.extend({
  styles,
  isShowUsers: true,
  selectUser: null,
  userFollowings: [{
      id: 1,
      login: "“aaa”"
    },
    {
      id: 2,
      login: "“bbb”"
    },
    {
      id: 3,
      login: "ccc"
    }
  ],
  ajax: inject(),

  actions: {
    showUsers() {
      set(this, 'isShowUsers', true);
      set(this, 'selectUser', null);
    },
    getUserInfo(user) {
      console.info(user)
      set(this, 'isShowUsers', false);
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
        console.log("click2")
    },

  },
  onClick(name) {
      // console.log(this)
      console.log(name)
      this.get('ajax')
        .request('/users/' + name + '/following')
        .then((followings) => {
          set(this, 'userFollowings', followings)
        })
  },

    click(e) {
      // console.log(this);
      // console.log(e);
      e.preventDefault();
      // let a = "fuck0";
      // this.get('ajax')
      this.get('onClick')(name);
      // console.log('this was clicked');

    }
});
