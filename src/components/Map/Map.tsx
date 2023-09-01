"use client"
import { useRef, useEffect, useState } from 'react'
import mapboxgl from '!mapbox-gl'
import 'mapbox-gl/dist/mapbox-gl.css'
import { listItems, toArray } from "@/utils/filteredPlaces"

mapboxgl.accessToken = 'pk.eyJ1IjoiZ2swMDciLCJhIjoiY2xrbDcwaXF6MThmMjNka2d6bTN5NDdkOCJ9.8RDUIT-Twn5-a_UEwCjsaw'


const Map = ({ country, types }) => {
    
    const [footerVisible, setFooterVisible] = useState(0)
    
    const filteredElements = listItems(country, types)
    const mapContainer = useRef(null);
    const map = useRef(null);
    const [lng, setLng] = useState(3.82);
    const [lat, setLat] = useState(47.31);
    const [zoom, setZoom] = useState(3.82);
    
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
        
        
        
        // const top = () => {
                
        //     for (const element of filteredElements) {
        //         const longitude = 
        //         console.log(element.longitude)
        //     }
                
        // }
        
        // top()
        
        // console.log(filteredElements)
        
        
        // const v1 = new mapboxgl.LngLatBounds(
        //     new mapboxgl.LngLat(30.9876, 40.7661),
        //     new mapboxgl.LngLat(30.9397, 40.8002)
        // )
        
        
        
        if (map.current) return; // initialize map only once
        map.current = new mapboxgl.Map({
            container: mapContainer.current,
            style: 'mapbox://styles/mapbox/streets-v12',
            center: [lng, lat],
            zoom: zoom
        });

        
        const allMarkersPosition = filteredElements.map(obj => [obj.longitude, obj.latitude]);
        
        const bounds = new mapboxgl.LngLatBounds();
        allMarkersPosition.forEach(coord => {
            bounds.extend(coord);
        })
        
        map.current.fitBounds(bounds, {
            maxZoom: 14,
            padding: 30,
        });
        
        
        
    

        
        for (const element of filteredElements) {
            const marker = new mapboxgl.Marker()
              .setLngLat([element.longitude, element.latitude])
              .addTo(map.current);
        }
        
        
        

        
        // const v2 = new mapboxgl.LngLatBounds([-73.9876, 40.7661], [-73.9397, 40.8002]);
        
        // Funkcja odpowiedzialna za wycentrowanie mapy po załadowaniu
        
        // Funkcja odpowiedzialna za wycentrowanie mapy jeśli uzytkownik kliknie na item w liscie
        
        // Funkcja odpowiedzialna za podswietlenie i wycentrowanie jesli uzytkownik kliknie na maker
        
        
        
        
        
        
        map.current.on('move', () => {
            setLng(map.current.getCenter().lng.toFixed(4))
            setLat(map.current.getCenter().lat.toFixed(4))
            setZoom(map.current.getZoom().toFixed(2))
        })
    
        return () => {
            window.removeEventListener('scroll', handleScroll)
            window.removeEventListener('resize', handleScroll)
        }
        
    }, [])

    return (
        <>
            <div className="sidebar">Longitude: {lng} | Latitude: {lat} | Zoom: {zoom}</div>
            
            <div id="map" style={{ bottom: `${footerVisible}px`}} ref={mapContainer} className="map-container"></div>    
        </>
    )
}

export default Map