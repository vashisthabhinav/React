import React from "react";

class SearchBar extends React.Component{
    // onInputChange(event){//Uncontrolled Form
    //     // event is a normal JavaScript object that contains a bunch of information about the event that just occurred.
    //     // In the case of a user typing something, there's usually just one property inside of this entire object. 

    //     console.log(event.target.value);//This will contain the text that the user just added to our input
    // }

    // onInputClick(){
    //     console.log("Input was clicked.")
    // }


    state = {term:''};

    onFormSubmit = (event) => {//Arrow function
        event.preventDefault();

        // console.log(this.state.term);
        
        /*
        When not using arraw function and directly assigning this.state.term
        This will give an error that "Cannot read property 'state' of undefined" 
        Because we cannot access the property state on the value undefined. 
        undefined is a value inside of JavaScript, if we ever try to access a property on undefined, 
        such as undefined state, we are going ot get the error.
        So, the root issue here is that JavaScript thinks that inside of this onFormSubmit function, 
        'this' is not equal to our instance of SearchBbar class instead is equal to valeu undefined.

        When we pass that callback sown into the form element, st some point of time, we are going to call our callback of onFormSubmit  
        And when it actually gets invoked, there is no this.onFormSubmit in the SearchBar.
        At some point of time, when the form actually calls that function, it rips that function off of that object or whatever object it shows up inside that form element and it calls that function on its own.
        And so, when the function is invoked, the value of 'this' inside of it is equal to undefined. 

        To remove this error,
        - either use a constructor with bind
        - Turn the function into an arrow function instead
        - Rather than defining a method on our class, using an arrow function, we just pass the arrow function directly into the props like we have done in the input tag.
        Ex - onSubmit = {(event) => this.onFormSubmit()}
        */


        this.props.onSubmit(this.state.term);
        // To get the access to the callback that we passed from the app down to the search bar, 
        // we would reference this.props on the onSubmit 
    }


    render(){
        return(
            <div className="ui segment">
                <form onSubmit={this.onFormSubmit} className="ui form">
                    <div className="field">
                        <label htmlFor=""> Image Search</label>

                        {/* Uncontrolled Form */}
                        {/* <input  type="text" onChange={(event) => console.log(event.target.value)}/> */}
                        {/* <input  type="text" onChange={this.onInputChange}/> */}

                        {/* Controlled Form */}
                        <input 
                            type="text" 
                            value={this.state.term}
                            // When the component rerenders after the user has entered any value, 
                            // we take that value of that input in this.state.term and we assign it to the value prop of the input.
                            // The value prop is going to essentially override whatever text is already present inside of the input.
                            onChange={(e) => this.setState({term : e.target.value})} 
                        />
                      
                        {/* Whwn we pass onInputChange to a prop like this called onChange, onInputChange is a function.
                        It is a callback function, but we do not use a set of parentheses at the end of it. If you put on a set of parentheses right there, 
                        that mens that the onInputChange is going to be automatically called whenever the componenet is rendered.
                        We don't want to call onInputChange when our component is rendered. Instead, we want to call this function at some point in time in the future.
                        So, rather than calling this function with a set of parentheses, we would leave the parentheses off. By leaving of the parentheses,
                         we are passing a reference to this function, to the input element so that input can call that function at some point in time in future.  */}
                    </div>
                </form>
            </div>
        );
    }
} 
export default SearchBar;