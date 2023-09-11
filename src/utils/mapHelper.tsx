import mapboxgl from "!mapbox-gl"
import "mapbox-gl/dist/mapbox-gl.css"

export function mapChange(elements) {
    const allMarkersPosition = elements.map((obj) => [
        obj.longitude,
        obj.latitude,
    ])

    const bounds = new mapboxgl.LngLatBounds()
    allMarkersPosition.forEach((coord) => {
        bounds.extend(coord)
    })

    map.current.fitBounds(bounds, {
        maxZoom: 14,
        padding: 30,
    })

    for (const element of elements) {
        const marker = new mapboxgl.Marker()
            .setLngLat([element.longitude, element.latitude])
            .addTo(map.current)
    }
}
