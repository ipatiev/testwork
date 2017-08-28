import React, {Component} from 'react';
import './App.css';
import FilterableTable from "./FilterableTable";

class App extends Component {

    render() {
        let tracks = [
            {
                "id": 1,
                "artist": "Test",
                "name": "Track 1",
                "genre": "Folk",
                "year": "2005",
                "duration": "3:22",
            },
            {
                "id": 2,
                "artist": "Test",
                "name": "Track 2",
                "genre": "Folk",
                "year": "2005",
                "duration": "2:12",
            },
            {
                "id": 3,
                "artist": "Test 1",
                "name": "Track 3",
                "genre": "Folk",
                "year": "2005",
                "duration": "2:12",
            },
            {
                "id": 4,
                "artist": "Test",
                "name": "Track 4",
                "genre": "Folk",
                "year": "2005",
                "duration": "2:12",
            },
            {
                "id": 5,
                "artist": "Test",
                "name": "Track 5",
                "genre": "Folk",
                "year": "2005",
                "duration": "2:12",
            },
            {
                "id": 6,
                "artist": "Test",
                "name": "Track 6",
                "genre": "Folk",
                "year": "2005",
                "duration": "2:12",
            },
            {
                "id": 7,
                "artist": "Test",
                "name": "Track 7",
                "genre": "Folk",
                "year": "2002",
                "duration": "2:12",
            },
            {
                "id": 8,
                "artist": "Test",
                "name": "Track 8",
                "genre": "Folk",
                "year": "2005",
                "duration": "2:12",
            },
            {
                "id": 9,
                "artist": "Test",
                "name": "Track 9",
                "genre": "Folk",
                "year": "2005",
                "duration": "2:12",
            },
            {
                "id": 10,
                "artist": "Test",
                "name": "Track 10",
                "genre": "Folk",
                "year": "2004",
                "duration": "2:12",
            }
        ];
        return (
            <div className="App">
                <FilterableTable tracks={tracks}/>
            </div>
        );
    }
}

export default App;
