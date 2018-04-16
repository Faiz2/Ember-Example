import Component from '@ember/component';
import styles from '../../github-users/styles';
import {set} from '@ember/object';
import { inject } from '@ember/service';

export default Component.extend({
    ajax: inject(),
    followers: [
        {id:1,login:"“aaa”"},
        {id:2,login:"“bbb”"},
        {id:3,login:"ccc"}
    ],

});
