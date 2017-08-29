import React, {Component} from 'react';
import TrackTable from "./TrackTable";
import TrackStorage from "./TrackStorage";
import './App.css';

class App extends Component {

    render() {

        let trackStorage = new TrackStorage();

        return (
            <div className="App">
                <TrackTable
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
