import Mixin from '@ember/object/mixin';

export default Mixin.create({
    firstStep: 'active',
    secondStep: null,
    thirdStep: null,
    fourthStep: null,
    actions: {
        nextClick(num) {
            switch(num) {
                case 1:
                    this.set('firstStep', 'active');
                    this.set('secondStep', 'noactive');
                    this.set('thirdStep', 'noactive');
                    this.set('fourthStep', 'noactive');
                    break;
                case 2:
                    this.set('firstStep', 'noactive');
                    this.set('secondStep', 'active');
                    this.set('thirdStep', 'noactive');
                    this.set('fourthStep', 'noactive');
                    break;
                case 3:
                    this.set('firstStep', 'noactive');
                    this.set('secondStep', 'noactive');
                    this.set('thirdStep', 'active');
                    this.set('fourthStep', 'noactive');
                    break;
                case 4:
                    this.set('firstStep', 'noactive');
                    this.set('secondStep', 'noactive');
                    this.set('thirdStep', 'noactive');
                    this.set('fourthStep', 'active');
                    break;
                default:
                    console.warn("没你的数字");
            }

        }
    }
});
