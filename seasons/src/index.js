import React from 'react';
import ReactDOM from 'react-dom';
import SeasonDisplay from './SeasonDisplay';
import Loader from './Loader';

// const App = () => {//Functional Component

//     //Calling the Geo-location API
//     window.navigator.geolocation.getCurrentPosition(
//         (position) => console.log(position),
//         //Callback-1
//         //This is the success callback anytime everything goes as planned

//         (err) => console.log(err)
//         //Callback-2
//         //If the user do not allow the location to be shared, we will get this error
//     );

//     return (
//         <div>Hi there!</div>
//     );
// };  

class App extends React.Component {//Class Component

    // constructor(props) {
    //     super(props);
    //     //Our app component is extending or borrowing functionality from the React componenet based class
    //     //This base class has a constructor function of its own that goes through some amount of setup or has 
    //     //some code inside of it to set up a react component for us

    //     //Now we can initialize our state object

    //     //THIS IS THE ONLY TIME WE DO DIRECT ASSIGNMENT TO this.state 
    //     this.state = { lat : null , errorMessage : ''};//This object is our state object, 
    //     //it is going to eventually contain some pieces of data, some different properties that are very important and relevant to our component that we are putting together. 
    //     //Latitude for example in this case
    //     //The value of null means essentially we don't know what the latitude is yet, we know eventually but we don't know what it is right now.

    //     //Now we can use this state object and the properties inside of it from any function inside of our app component.


    // }

    //Alternate State Initialization
    state = { lat: null, errorMessage: '' };//No need of constructor


    componentDidMount() {
        // console.log("My component was rendered to the screen.");
        /*
        We never want to initialize some work or request or anything like that from a call in the render method.
        And the reason for that is that the render method is going to be called a lot of times.
        So, rather than leaving the current position call in the render method, we add it into the componentDidMount method.
        */

        //Calling the Geo-location API
        window.navigator.geolocation.getCurrentPosition(
            (position) => {
                // console.log(position)

                //we called setState to update our state object
                this.setState({ lat: position.coords.latitude });
                //setState is a function taht gets put on our app component automatically when we extend react component.

                /*
                We cannot write something like this
                this.state.lat = position.coords.latitude
                The one single exception to this rule is when we initialize our state inside the constructor function.
                */

            },
            //Callback-1
            //This is the success callback anytime everything goes as planned

            (err) => {
                // console.log(err)
                this.setState({ errorMessage: err.message });
                //When we call setState, we are only adding or changing properties on our state
                //never removing or deleting properties
            }
            //Callback-2
            //If the user do not allow the location to be shared, we will get this error

            /*
            The callback function right here is not going to be invoked until we eventually return from the constructor
            We are going to run supr(props) --> then run the assignment (this.state) --> then run getCurrentPosition and then giving the callback
            --> Then we will return from the constructor function 
            But this callback here is not going to run until some point in time in the future when we finally successfully fetch our position 
            So, this setState call here does not actually occur while we are running the constructor.
            It is going to run at some point in the future.
            */
        );


    }

    // componentDidUpdate(){
    //     console.log("My component was just updated -  rerendered")
    //     //Everytime the component update is called, the render method will be called again.
    // }


    renderContent() {
        // Helper function is going to contain all of the code that is currently inside the render method 

        if (this.state.errorMessage && !this.state.lat) {
            return (
                <div>
                    Error : {this.state.errorMessage}
                </div>
            );
        }

        if (this.state.lat && !this.state.errorMessage) {

            return <SeasonDisplay lat={this.state.lat} />
            {/* 
            Adding on a new prop with a name of lat and assigning it this.state.lat
            So, we are taking a property from the state component and passing it as a prop down into the SeasonDisplay 
            We can take a state from one component and pass it as a prop down to the child(SeasonDisplay)
            */}
        }
        return (
            <div>
                <Loader message="Please Except Location Request" />
            </div>
        );

    }

    render() {
        return (
            <div className="border red">
                {this.renderContent()}
            </div>

        );
    };
}

ReactDOM.render(
    <App />,
    document.querySelector('#root')
);