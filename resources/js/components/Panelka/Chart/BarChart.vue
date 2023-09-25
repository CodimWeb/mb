<template>
    <div>
        <Bar
            id="my-chart-id"
            :options="options"
            :data="chartData"
            :height="360"
        />
    </div>
</template>

<script>
import {
    Chart as ChartJS,
    Title,
    Tooltip,
    Legend,
    BarElement,
    CategoryScale,
    LinearScale
} from 'chart.js'
import { Bar } from 'vue-chartjs'

ChartJS.register(Title, Tooltip, Legend, BarElement, CategoryScale, LinearScale)

ChartJS.defaults.borderColor = '#dfe2e5'
// ChartJS.defaults.backdropColor = '#fff'
// ChartJS.defaults.backgroundColor = '#fff'
ChartJS.defaults.color = '#EDEEF6'
// ChartJS.defaults.borderSkipped = false
// ChartJS.defaults.minBarLength = 300


export default {
    name: 'BarChart',
    components: { Bar },
    props: {
        chartData: {
            type: Object,
            required: true
        },
    },
    data() {
        return {
            options: {
                responsive: true,
                maintainAspectRatio: false,
                maxBarThickness: 30,
                backgroundColor: '#26d1a1',
                hoverBackgroundColor: '#26d1a1',
                color: '#fff',
                scales: {
                    x: {
                        grid: {
                            display: false
                        }
                    }
                },

                plugins: {
                    // layout: {
                    //     padding: {
                    //         top: 50
                    //     }
                    // },
                    legend: {
                        title: {
                            display: false,
                            padding: 20
                        },

                        labels: {
                            // This more specific font property overrides the global property
                            // padding: {
                            //     top: 50
                            // },
                            font: {
                                size: 16
                            }
                        }
                    }
                }

            }
        }
    }

}
</script>