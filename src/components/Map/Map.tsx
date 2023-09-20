"use client"
import { useRef, useEffect, useState } from 'react'
import { useSearchParams } from "next/navigation"
import { useGlobalContext } from "@/context/ThemeContext"
import mapboxgl from 'mapbox-gl'
import "mapbox-gl/dist/mapbox-gl.css"
import listPlaces from "@/lib/listPlacesUnesco.json"
import { FormResults } from "@/context/ThemeContext"

mapboxgl.accessToken =
    "pk.eyJ1IjoiZ2swMDciLCJhIjoiY2xrbDcwaXF6MThmMjNka2d6bTN5NDdkOCJ9.8RDUIT-Twn5-a_UEwCjsaw"

const Map = () => {
    const searchParams = useSearchParams()
    const types = searchParams.get("types")
    const country = searchParams.get("locations")

    const mapContainer = useRef(null)
    const map = useRef<mapboxgl.Map | null>(null)
    const { formResults, setFormResults, selectItemIndex } = useGlobalContext()

    const typesInArray = (types && types.split(",")) || []
    const locationsInArray = (country && country.split(",")) || []

    function removeAllMarkers() {
        const markers = document.querySelectorAll(".mapboxgl-marker")

        markers.forEach((marker) => {
            marker.remove()
        })
    }

    function mapChange(elements: Array<any>) {
        removeAllMarkers()
        if (elements.length) {
            const bounds = new mapboxgl.LngLatBounds()

            elements.forEach((element) => {
                const { longitude, latitude } = element
                bounds.extend([longitude, latitude])
            })

            if (map.current) {
                map.current.fitBounds(bounds, {
                    maxZoom: 9,
                    padding: 80,
                })
            }

            elements.forEach((element, index) => {
                const myMarker = document.createElement("img")
                myMarker.className = "custom-marker"
                myMarker.src = "/marker.svg"
                myMarker.id = `marker${index}`
                myMarker.height = 38
                myMarker.width = 28

                if (map.current) {
                    const marker = new mapboxgl.Marker({
                        element: myMarker,
                    })
                        .setLngLat([element.longitude, element.latitude])
                        .addTo(map.current)

                    marker.getElement().addEventListener("click", (el) => {
                        // Pobieranie współrzędnych klikniętego markera
                        if (el.target instanceof HTMLElement) {
                            el.target.classList.add("active")
                        }

                        const lngLat = marker.getLngLat()

                        // Wycentrowanie mapy na kliknięty marker (możesz użyć flyTo lub setCenter)
                        if (map.current) {
                            map.current.flyTo({
                                center: lngLat,
                            })
                        }
                    })
                }
            })
        }
    }

    const filteredElements2 = (country: string[], types: string[]) => {
        const result = listPlaces.filter((element) => {
            const isInCountryArray = country.some((countryEl) =>
                element.states_name_en.includes(countryEl)
            )

            const isInTypesArray = types.some((typeEl) =>
                element.category.includes(typeEl)
            )

            if (types.length > 0) {
                return isInCountryArray && isInTypesArray
            } else {
                return isInCountryArray
            }
        })

        return result
    }

    useEffect(() => {
        if (map.current) return // initialize map only once
        if (mapContainer.current) {
            map.current = new mapboxgl.Map({
                container: mapContainer.current, // Poprawny element HTML lub identyfikator
                style: "mapbox://styles/mapbox/navigation-day-v1",
                center: [3.82, 47.31],
                zoom: 3.82,
            })
        }

        const result2: FormResults[] = filteredElements2(
            locationsInArray,
            typesInArray
        )

        console.log(result2)

        setFormResults(result2)

        mapChange(result2)
    }, [locationsInArray, typesInArray, mapChange])

    useEffect(() => {
        mapChange(formResults)
    }, [formResults])

    useEffect(() => {
        if (selectItemIndex !== null) {
            const marker = document.querySelector(`#marker${selectItemIndex}`)
            const markers = document.querySelectorAll(`.custom-marker`)

            if (marker) {
                markers.forEach((element) => {
                    element.classList.remove("active")
                })

                if (marker instanceof HTMLElement) {
                    marker.dispatchEvent(new Event("click"))
                }
            }
        }
    }, [selectItemIndex])

    return (
        <>
            <div
                id="map"
                ref={mapContainer}
                className="map-container"
            ></div>
        </>
    )
}

export default Map