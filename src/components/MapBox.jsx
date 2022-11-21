import React from 'react';
import Highcharts from "highcharts";
import HighchartsReact from "highcharts-react-official";
import highchartsMap from "highcharts/modules/map";
import proj4 from "proj4";
import mapDataIE from "@highcharts/map-collection/custom/world.topo.json";
import { Container } from 'react-bootstrap';
highchartsMap(Highcharts);

if (typeof window !== "undefined") {
    window.proj4 = window.proj4 || proj4;
}

export default function MapBox() {

    const data = [
        ['Beijing', 'China', '2008', 39.92, 116.38, 9, 3, 5, 1],
        ['London', 'Great Britain', '2012', 51.5, -0.12, 4, 2, 1, 1],
        ['Rio de Janeiro', 'Brazil', '2016', -22.91, -43.20, 4, 0, 0, 4]
    ];

    const mapOptions = {
        chart: {
            map: mapDataIE,
            width: 1280,
            height: 720
        },

        legend: {
            enabled: false
        },

        credits: {
            enabled: false
        },

        mapNavigation: {
            enabled: false,
            buttonOptions: {
                verticalAlign: 'bottom'
            }
        },

        title: {
            text: "Custom HighCharts"
        },

        tooltip: {
            headerFormat: '',
            pointFormat: '{point.city} ({point.country}, {point.year})<br/>' +
                'Total medals: {point.z}<br/>' +
                '<span style="color: #ffd700;">\u25CF</span> {point.gold}<br/>' +
                '<span style="color: #c0c0c0;">\u25CF</span> {point.silver}<br/>' +
                '<span style="color: #cd7f32;">\u25CF</span> {point.bronze}<br/>'
        },

        series: [{
            name: 'World map',
            nullColor: '#bee0ec',
            credits: false,
        }, {
            name: 'Olympic games',
            type: 'mapbubble',
            color: '#3ba1c5',
            lineWidth: 1,
            keys: ['city', 'country', 'year', 'lat', 'lon', 'z', 'gold', 'silver', 'bronze'],
            data: data,
            minSize: '5%',
            maxSize: '12.5%',
            accessibility: {
                point: {
                    valueDescriptionFormat: '{point.city}, {point.country}, {point.year}. Total medals: {point.z}. Gold: {point.gold}, silver: {point.silver}, bronze: {point.bronze}.'
                }
            }
        }]
    }

    return (
        <>
            <Container fluid className='m-3'>
                <HighchartsReact
                    constructorType={'mapChart'}
                    highcharts={Highcharts}
                    options={mapOptions}
                />
            </Container>
        </>
    );
}