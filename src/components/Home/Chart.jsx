
import React, { useState, useEffect } from 'react';
import { Chart } from 'primereact/chart';
import gunDetayData from '../../data/testDB.gunDetay.json';


export default function ChartCustom() {
    const [chartData, setChartData] = useState({});
    const [chartOptions, setChartOptions] = useState({});


    useEffect(() => {
        const getRandomSubarray = (arr, size) => {
            let shuffled = arr.slice(0), i = arr.length, temp, index;
            while (i--) {
                index = Math.floor((i + 1) * Math.random());
                temp = shuffled[index];
                shuffled[index] = shuffled[i];
                shuffled[i] = temp;
            }
            return shuffled.slice(0, size);
        }
        
        const selectedCompanies = getRandomSubarray(gunDetayData, 10);
        
        const labels = selectedCompanies.map(company => company["sirketId: "].trim());
        const data1 = selectedCompanies.map(company => company["deger: "]);
        
        const documentStyle = getComputedStyle(document.documentElement);
        const textColor = documentStyle.getPropertyValue('--text-color');
        const textColorSecondary = documentStyle.getPropertyValue('--text-color-secondary');
        const surfaceBorder = documentStyle.getPropertyValue('--surface-border');
        const data2 = {
            labels: labels, // Şirket ID'leri
            datasets: [
                {
                    label: 'Gün Detay',
                    backgroundColor: documentStyle.getPropertyValue('--blue-500'),
                    borderColor: documentStyle.getPropertyValue('--blue-500'),
                    data: data1 // Şirket değerleri
                },
            ]
        };
        
        const options = {
            maintainAspectRatio: false,
            aspectRatio: 0.8,
            plugins: {
                legend: {
                    labels: {
                        fontColor: textColor
                    }
                }
            },
            scales: {
                x: {
                    ticks: {
                        color: textColorSecondary,
                        font: {
                            weight: 500
                        }
                    },
                    grid: {
                        display: false,
                        drawBorder: false
                    }
                },
                y: {
                    ticks: {
                        color: textColorSecondary
                    },
                    grid: {
                        color: surfaceBorder,
                        drawBorder: false
                    }
                }
            }
        };

        setChartData(data2);
        setChartOptions(options);
    }, []);

    return (
        <div className="card">
            <Chart type="bar" data={chartData} options={chartOptions} />
        </div>
    )
}
        