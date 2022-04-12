// useGoogleAddress.js

import { useState, useEffect } from 'react';
import axios from 'axios';
import config from '../config';

const getCoordinates = async (api) => {
	const response = await axios(api);
	return response
}

const useGoogleAddress = address => {
	const [map, setMap] = useState({});
	const API = `https://maps.googleapis.com/maps/api/geocode/json?address=${address}&key=${config.googleMapsKey}`;
		
	useEffect( async () => {
		const res = await getCoordinates(API);
		setMap(res.data.results[0].geometry.location);
	}, []);
	return map;
}

export default useGoogleAddress;