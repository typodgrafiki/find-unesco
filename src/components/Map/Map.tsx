"use client"
import { useRef, useEffect, useState } from 'react'
import mapboxgl from '!mapbox-gl'
import 'mapbox-gl/dist/mapbox-gl.css'

mapboxgl.accessToken = 'pk.eyJ1IjoiZ2swMDciLCJhIjoiY2xrbDcwaXF6MThmMjNka2d6bTN5NDdkOCJ9.8RDUIT-Twn5-a_UEwCjsaw'


const Map = () => {
    
    const [footerVisible, setFooterVisible] = useState(0)
    
    const mapContainer = useRef(null);
    const map = useRef(null);
    const [lng, setLng] = useState(16.92);
    const [lat, setLat] = useState(52.41);
    const [zoom, setZoom] = useState(9);
    
    useEffect(() => {
        const handleScroll = () => {
            const footerHeight = document.querySelector('#footer').getBoundingClientRect().height
            const bottomOfViewport = window.innerHeight + window.scrollY
            const visibleFooter = bottomOfViewport - document.body.scrollHeight + footerHeight
            setFooterVisible(visibleFooter > 0 ? visibleFooter + 10 : 10 )
        }
        
        handleScroll();
    
        window.addEventListener('scroll', handleScroll)
        window.addEventListener('resize', handleScroll)
        
        
        if (map.current) return; // initialize map only once
            map.current = new mapboxgl.Map({
            container: mapContainer.current,
            style: 'mapbox://styles/mapbox/streets-v12',
            center: [lng, lat],
            zoom: zoom
        });
        
        map.current.on('move', () => {
            setLng(map.current.getCenter().lng.toFixed(4));
            setLat(map.current.getCenter().lat.toFixed(4));
            setZoom(map.current.getZoom().toFixed(2));
        });
    
        return () => {
            window.removeEventListener('scroll', handleScroll)
            window.removeEventListener('resize', handleScroll)
        }
    }, [])

    return (
        <>
            <div className="sidebar">Longitude: {lng} | Latitude: {lat} | Zoom: {zoom}</div>
            <div id="map" style={{ bottom: `${footerVisible}px`}} ref={mapContainer} className="map-container">    
                       
            </div>    
        </>
    )
}

export default Map