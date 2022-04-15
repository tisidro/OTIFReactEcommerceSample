import React from "react";
import CardWithBotBar from "../base/CardWithBotBar";
import Highcharts from 'highcharts';
import HighchartsReact from 'highcharts-react-official';

export default function Savings() {

    const options = {
        chart: {
            type: 'column',
            height: 250,
        },
        title: {
            text: null,
        },
        legend: {
            enabled: false,
        },
        credits: {
            enabled: false,
        },
        color: ['#F2EFFF'],
        xAxis: {
            categories: [
                'Jan',
                'Feb',
                'Mar',
                'Apr',
                'May',
                'Jun',
                'Jul',
                'Aug',
                'Sep',
                'Oct',
                'Nov',
                'Dec'
            ],
            crosshair: true,
        },
        yAxis: {
            title: null,
        },
        tooltip: {
            headerFormat: '<span style="font-size:10px">{point.key}</span><table>',
            pointFormat: '<tr><td style="color:{series.color};padding:0">{series.name}: </td>' +
                '<td style="padding:0"><b>{point.y:.1f} mm</b></td></tr>',
            footerFormat: '</table>',
            shared: true,
            useHTML: true
        },
        plotOptions: {
            column: {
                pointWidth: 16,
                borderWidth: 0,
                borderRadius: 8,
                width: 5
            }
        },
        series: [{
            name: 'Tokyo',
            data: [49.9, 71.5, 106.4, 129.2, 144.0, 176.0, 135.6, 148.5, 216.4, 194.1, 95.6, 54.4],
            color: '#F2EEFF',
            states: {
                hover: {
                    color: '#5932EA',
                }
            },
        }]
    }

    const savingChart = <HighchartsReact
        highcharts={Highcharts}
        options={options}
        style={{width: '100%'}}
    />

    return <CardWithBotBar title={"Savings"} content={savingChart}/>

}