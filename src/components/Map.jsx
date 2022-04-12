import React from 'react';
import { GoogleMap, useJsApiLoader } from '@react-google-maps/api';
import config from '../config';

const Map = ({ data }) => {
	const containerStyle = {
		width: '400px',
		height: '400px'
	};

	const center = {
		lat: data.lat,
		lng: data.lng
	};

	const { isLoaded } = useJsApiLoader({
		id: 'google-map-script',
		googleMapsApiKey: config.googleMapsKey
	})

	const [map, setMap] = React.useState(null)

	const onLoad = React.useCallback(function callback(map) {
		const bounds = new window.google.maps.LatLngBounds();
		map.fitBounds(bounds);
		setMap(map)
	}, [])

	const onUnmount = React.useCallback(function callback(map) {
		setMap(null)
	}, [])

	return (
		isLoaded ? (
			<GoogleMap
				mapContainerStyle={containerStyle}
				center={center}
				zoom={10}
				onLoad={onLoad}
				onUnmount={onUnmount}
			>
				{ /* Child components, such as markers, info windows, etc. */ }
				<></>
			</GoogleMap>
		) : <></>
	);
}

export default Map;