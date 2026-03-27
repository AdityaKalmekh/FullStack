import axios from "axios";
import { useEffect, useState } from "react";

const API_URL_Details = "http://localhost:5000/api/detail";

const Artist = ({ id }) => {

    const [artistDetails, setArtistDetails] = useState([]);
    const fetchDeatils = async () => {
        const response = await axios.get(`${API_URL_Details}/${id}`);
        const detailsData = response.data;
        return detailsData.data;
    }

    const loadData = async () => {
        const data = await fetchDeatils();
        console.log(data);
        setArtistDetails(data);
    }

    useEffect(() => {
        loadData();
    }, [])

    if (!artistDetails) return null
    return (
        <div>
            <h3>{artistDetails.title}</h3>
            <img
                src={`https://www.artic.edu/iiif/2/${artistDetails.image_id}/full/400,/0/default.jpg`}
                onError={(e) => {
                    e.target.src = "./src/assets/default.jpg";
                }}
            />
        </div>
    )
}

export default Artist