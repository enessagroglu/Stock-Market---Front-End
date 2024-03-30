import React, { useEffect, useRef } from 'react';
import { createChart } from 'lightweight-charts';

export const CandleChart = ({ candleData }) => {
    const chartContainerRef = useRef(null);

    useEffect(() => {
        if (chartContainerRef.current === null) return;
        
        // Chart'ı belirtilen div içerisine yerleştir
        const chart = createChart(chartContainerRef.current, {
            width: chartContainerRef.current.clientWidth,
            height: 300,
        });
        
        const candleSeries = chart.addCandlestickSeries();
        candleSeries.setData(candleData);

        // Dinamik boyutlandırma ve temizlik işlemleri için
        return () => chart.remove();
    }, [candleData]); // candleData değiştiğinde useEffect tekrar çalışır

    // Bu fonksiyonlar artık kullanılmayacak, çünkü statik veri seti üzerinde çalışıyoruz.
    // Dinamik güncelleme veya "simülasyon" için farklı bir yaklaşım gerekebilir.
    
    return <div ref={chartContainerRef} style={{ width: '1000px', height: '300px', position:'relative'}} />;
};
