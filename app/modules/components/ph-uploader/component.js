import Component from '@ember/component';
import { A } from '@ember/array';
import styles from '../../example-file-upload/styles';

const { set,get } = Ember

export default Component.extend({
    styles,
    imageArray: [],
    actions: {
        uploadProof(file) {
          let asset = {
            filename: get(file, 'name'),
            file
          };

          return file.upload('/photos/new').then(({ body: { filename, url, type } }) => {
              debugger
              this.get('imageArray').pushObject({
                  filename,
                  preview: url,
                  type,
                  file: null
              });
              set(this, 'imageArray', this.get('imageArray'));
          }, () => {});
      }
    }
});
