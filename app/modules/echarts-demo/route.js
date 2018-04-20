import EmberObject from '@ember/object';
import Route from '@ember/routing/route';
const echartData = EmberObject.extend({
    BarSeriesData: [10, 52, 200, 334, 390, 330, 220],
    BarxAxisData: ['Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat', 'Sun']
});

export default Route.extend({
    withLayout: false,
    model() {
        let data = echartData.create();
        let option = {
            color: ['#3398DB'],
            tooltip : {
                trigger: 'axis',
                axisPointer : {            // 坐标轴指示器，坐标轴触发有效
                    type : 'shadow'        // 默认为直线，可选为：'line' | 'shadow'
                }
            },
            grid: {
                left: '3%',
                right: '4%',
                bottom: '3%',
                containLabel: true
            },
            xAxis : [
                {
                    type : 'category',
                    data : data.get('BarxAxisData'),
                    axisTick: {
                        alignWithLabel: true
                    }
                }
            ],
            yAxis : [
                {
                    type : 'value'
                }
            ],
            series : [
                {
                    name:'直接访问',
                    type:'bar',
                    barWidth: '60%',
                    data: data.get('BarSeriesData')
                }
            ]
        };

        return option;
    }
});
