"use client"

import {useEffect, useState, useRef} from "react"
import {MapContainer, TileLayer, useMap} from "react-leaflet"
import MapPin from "@/components/map/map-pin"
import {MapViewProps} from "@/index";

import "leaflet/dist/leaflet.css"

function MapController({center, zoom}: { center: [number, number]; zoom: number }) {
    const map = useMap()

    useEffect(() => {
        map.setView(center, zoom)
    }, [center, zoom, map])

    return null
}


export default function MapView({
        locations,
        initialZoom = 13,
        initialCenter = [51.505, -0.09],
        selectedLocation = null,
    }: MapViewProps) {
    const [isMounted, setIsMounted] = useState(false)
    const mapRef = useRef(null)

    const center = selectedLocation ? ([selectedLocation.lat, selectedLocation.lng] as [number, number]) : initialCenter

    const zoom = selectedLocation ? 15 : initialZoom

    useEffect(() => {
        setIsMounted(true)
    }, [])

    if (!isMounted) {
        return (
            <div className="w-full h-full flex items-center justify-center bg-gray-100">
                <p>Loading map...</p>
            </div>
        )
    }

    return (
        <MapContainer
            center={initialCenter}
            zoom={initialZoom}
            scrollWheelZoom={true}
            style={{ height: "100%", width: "100%" }}
            ref={mapRef}
        >
            <MapController center={center} zoom={zoom} />
            <TileLayer
                attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
                url="https://{s}.basemaps.cartocdn.com/light_all/{z}/{x}/{y}{r}.png"
            />

            {locations.map((location) => (
                <MapPin key={location.id} location={location} />
            ))}
        </MapContainer>
    )
}
