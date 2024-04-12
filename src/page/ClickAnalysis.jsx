import React, { useState, useEffect } from 'react';
import Chart from 'chart.js/auto';
import Plotly from 'plotly.js-dist-min';
import Headers from '../component/Header';

export const ClickAnalysis = () => {
    const [accuracy, setAccuracy] = useState(null);
    const [confusionMatrix, setConfusionMatrix] = useState(null);
    const [correlationMatrix, setCorrelationMatrix] = useState(null); // Fixed variable name
    const [error, setError] = useState(null);

    const fetchAccuracy = async () => {
        try {
            const response = await fetch('http://127.0.0.1:5000/getdata');
            if (!response.ok) {
                throw new Error('Failed to fetch accuracy');
            }
            const data = await response.json();
            console.log(data);
            setAccuracy(data.Accuracy);
            setConfusionMatrix(data.Confusion_Matrix);
            setCorrelationMatrix(data.Correlation_Matrix); // Fixed variable name
        } catch (error) {
            setError(error.message);
        }
    };

    useEffect(() => {
        fetchAccuracy();
    }, []);

    useEffect(() => {
        if (confusionMatrix !== null) {
            renderConfusionMatrixChart();
        }
        if (correlationMatrix !== null) {
            renderCorrelationMatrixHeatmap();
        }
    }, [confusionMatrix, correlationMatrix]);

    const renderConfusionMatrixChart = () => {
        const labels = ['True Negative', 'False Positive', 'False Negative', 'True Positive'];
        const data = {
            labels: labels,
            datasets: [
                {
                    label: 'Confusion Matrix',
                    data: confusionMatrix.flat(),
                    backgroundColor: ['#FF6384', '#36A2EB', '#FFCE56', '#4BC0C0'], // Example colors

                    borderColor: ['rgba(255, 99, 132, 1)', 'rgba(54, 162, 235, 1)', 'rgba(255, 206, 86, 1)', 'rgba(75, 192, 192, 1)'],
                    borderWidth: 1,
                },
            ],
        };
    
        const existingChart = Chart.getChart('confusionMatrixChart');
        if (existingChart) {
            existingChart.destroy();
        }
    
        const ctx = document.getElementById('confusionMatrixChart');
        new Chart(ctx, {
            type: 'bar',
            data: data,
            options: {
                scales: {
                    y: {
                        beginAtZero: true,
                    },
                },
            },
        });
    };

    const renderCorrelationMatrixHeatmap = () => {
        if (correlationMatrix !== null) { // Fixed variable name
            const columns = Object.keys(correlationMatrix);
            const values = columns.map(column => columns.map(col => correlationMatrix[column][col])); // Fixed variable name
            
            const data = [{
                z: values,
                x: columns,
                y: columns,
                type: 'heatmap',
                colorscale: 'Plasma'
            }];

            const layout = {
                title: 'Correlation Matrix',
                xaxis: {
                    title: 'Features'
                },
                yaxis: {
                    title: 'Features'
                }
            };

            Plotly.newPlot('correlationMatrixChart', data, layout);
        }
    };

    return (
        <>
        <Headers/>
        <div className=' p-28'>
        <div>
            {error && <p>Error: {error}</p>}
            {accuracy !== null ? (
                <div className='flex-col'>
                    <p>Accuracy: {accuracy}</p>
                    <div className='flex gap-4'>
                    <p className='font-bold'>Confusion matrix:</p>
                    <p className=''>
    {confusionMatrix.map((row, rowIndex) => (
        <div key={rowIndex}>
            {row.map((cell, colIndex) => (
                <span key={colIndex}>{cell}&nbsp;</span>
            ))}
            <br />
        </div>
    ))}
</p>

                    </div>
                    <canvas id="confusionMatrixChart" className=''></canvas>
                    <div id="correlationMatrixChart" className=' w-[60rem] h-[40rem]'></div> {/* Added a div for Plotly chart */}
                </div>
            ) : (
                <p>Loading ...</p>
            )}
        </div>
        </div>
        </>
    );
};
