import React, {Component} from 'react';
import TrackStorage from "./TrackStorage";
import './App.css';
import TracksPage from "./TracksPage";

class App extends Component {

    render() {

        let trackStorage = new TrackStorage();

        return (
            <div className="App">
                <TracksPage
                    tracks={trackStorage.getTracks()}
                    artists={trackStorage.getArtists()}
                    genres={trackStorage.getGenres()}
                    years={trackStorage.getYears()}
                />
            </div>
        );
    }
}

export default App;
