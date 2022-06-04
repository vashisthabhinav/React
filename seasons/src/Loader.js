import React from "react";

const Loader = (props) =>{
    return (
        <div className="ui active dimmer">
            <div className="ui big text loader">
                {props.message}
                {/* 
                for default message:

                {props.message || 'Loading'}
                
                */}
            </div>
        </div>
    );
};

Loader.defaultProps = {
    //Another method for default message

    message : 'Loading...'

}
export default Loader;