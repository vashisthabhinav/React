import React from 'react';
import Unsplash from '../api/Unsplash';
import SearchBar from './SearchBar';
import ImageList from './ImageList';


class App extends React.Component {
    //Initializing state component
    state = { images: [] };//[]--> Empty Array
    onSearchSubmit =  async (term) => {

        // console.log(term);
        //The get function is going to take two separate arguments.
        //The first argument is going to be the address that we want to make a request to.
        //The second argument is going to be an object that will have a bunch of options that will customize this request.

        const response = await
            Unsplash.get('/search/photos', {
                //Params specifies the different query string parameters we want to add into this request.
                params: { query: term },
            });
        // console.log(response.data.results);
        /*
        Whenever we make a request with Axios, it returns an object called a promise.
        A promise is an object that will essentially give us a little notification when some amount of work like a network request is completed. 
        In order to get a little tap-on the shoulder when the request is  completed, we chain on a .then function
        The arrow function inside .then() is going to be called at some point in the future 

        //Remove async before
        .then((response) => {
                    console.log(response.data.results);
                });
        
        */
        this.setState({ images: response.data.results });
    }

    render() {
        return (
            <div className="ui container" style={{ marginTop: '10px' }}>
                <SearchBar onSubmit={this.onSearchSubmit}
                // Any time that we pass a prop down into a component that we are creating, 
                // we refer to that prop with onSubmit name

                />
                <ImageList  images = {this.state.images}/>
            </div>
        );
    }
}

export default App;
