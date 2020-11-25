import {GoogleMap, withScriptjs, withGoogleMap, Marker, InfoWindow, Polyline, DirectionsRenderer} from "react-google-maps"
import MapRoute from "./MapRoute"
const WrappedMap = withScriptjs(withGoogleMap(MapRoute))
const Map = () => {
  return (
    <>
    <h1>CREATE YOUR ROUTE</h1>

    <div style={{width: '800px', height: '500px'}}>
          <WrappedMap 
    googleMapURL={`https://maps.googleapis.com/maps/api/js?v=3.exp&libraries=geometry,drawing,places&key=${process.env.REACT_APP_GOOGLE_KEY}`}
    loadingElement={<div style={{height: '100%'}}/> }
    containerElement={<div style={{height:"100%"}}/>}
    mapElement={<div style={{height: "100%"}}/>}
    >
    </WrappedMap>
    </div>

    </>
  );
}