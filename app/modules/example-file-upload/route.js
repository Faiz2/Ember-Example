import Route from '@ember/routing/route';
// import { task } from 'ember-concurrency';



// const {get, set} = Ember;

export default Route.extend({
    withLayout: false,
    // uploadPhoto: task(function * (file) {
    //     // let product = this.modelFor('product');
    //     let photo = this.store.createRecord('photo', {
    //         // product,
    //         filename: get(file, 'name'),
    //         filesize: get(file, 'size')
    //     });
    //     try {
    //         file.readAsDataURL().then((url) => {
    //             if (get(photo, 'url') == null) {
    //                 set(photo, 'url', url);
    //             }
    //         });
    //
    //         let response = yield file.upload('/api/image/upload');
    //         set(photo, 'url', response.headers.Location);
    //         yield photo.save();
    //     } catch (e) {
    //         // console.info(e)
    //         photo.rollback();
    //     }
    // }).maxConcurrency(3).enqueue(),
    actions: {
        // uploadImage(file) {
        //     get(this, 'uploadPhoto').perform(file);
        // },

    }
});
