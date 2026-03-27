import { useEffect, useState } from "react";
import axios from 'axios'
import Artist from "./Artist";

const API_URL = 'http://localhost:5000/api/artword';

function App() {
    const [artistIds, setArtistIds] = useState([]);

    const fetchData = async () => {
        const response = await axios.get(API_URL);
        const artistData = response.data.data;
        const artistIds = artistData.map(dt => dt.artist_id);
        setArtistIds(artistIds);
    }

    useEffect(() => {
        fetchData();
    }, [])

    return (
        <div>
            {artistIds.map(id => (
                <Artist id = {id} />
            ))}
        </div>
    )
}

export default App;
