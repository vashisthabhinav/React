import './SeasonDisplay.css';
import React from "react";


const seasonConfig = {
    summer : {
        text : 'Let\'s hit the beach',
        iconName :  'sun'
    },
    winter : {
        text : 'Burr it is cold',
        iconName :  'snowflake'
    }
};

const  getSeason = (lat,month) => {
    if(month>2 && month<9){
        return lat > 0 ? 'summer': 'winter';//Ternary operator
    }else{
        return lat > 0 ? 'winter': 'summer';//Ternary operator
    }
}

const SeasonDisplay = (props) => {
    // console.log(props.lat);
    const season = getSeason(props.lat, new  Date().getMonth());
    // const text = season === 'winter' ? 'It is chilly!!': 'Lets hit the beach';
    // const icon = season === 'winter' ? 'snowflake': 'sun';


    //Or instead we can now use seasonConfig which will give the text and the iconName
    const {text,iconName} = seasonConfig[season];


    // console.log(season);

    return(
        <div className={`season-display ${season}`}>
            <i className={`icon-left massive ${iconName} icon`}/>
            <h1>{text}</h1>
            <i className={`icon-right massive ${iconName} icon`}/>
        </div>
    );
};
export default SeasonDisplay;