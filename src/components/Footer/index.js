import { CompFooter, Update, SearchBox } from './styles';
import { useClime } from '../../context';
import React from 'react';

const Footer = () => {

    const {
        setUni,
        setCurrent,
        setTemp,
        weather,
        setCount,
        setMonth,
        setDay,
        setDesc,
        setDescription,
        setShowPopup,
    } = useClime();

    const changeDefault = () => {
        setTemp(weather.temp);
        setCurrent('Agora');
        setUni('°C');

        clearDay();
    };

    const clearDay = () => {
        setDesc(true);
        setDescription(weather.description);
        setCount(0);
        setDay(weather.forecast.map(item => item.weekday)[0]);
        setMonth(weather.date.slice(0, 5));
    };

    return (
        <CompFooter>
            <div>
                <button onClick={() => setShowPopup(true)}>
                    <SearchBox />
                </button>
            </div>

           {/* <div>
                <button>
                    <Ther />
                </button>
            </div>

            <div>
                <button>
                    <Light />
                </button>
            </div>*/}

            <div>
                <button onClick={changeDefault}>
                    <Update />
                </button>
            </div>
        </CompFooter>
    );
};

export default Footer;