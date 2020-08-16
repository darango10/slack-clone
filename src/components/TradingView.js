import React from 'react';
import TradingViewWidget, {RangeTypes, BarStyles} from 'react-tradingview-widget';
import '../styles/tradingview.css'

const TradingView = () => {
    return (
        <div className="tradingView">
            <TradingViewWidget
                symbol="NASDAQ:AAPL"
                style={BarStyles.BARS}
                locale="es"
                timezone="America/Bogota"
                interval={'M'}
                range={RangeTypes.ALL}
                autosize
                hide_side_toolbar={false}
                withdateranges={true}
            />
        </div>
    );
};

export default TradingView;
