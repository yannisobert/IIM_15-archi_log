"use client"

import { useEffect, useState } from "react"
import { MapContainer, TileLayer } from "react-leaflet"
import MapPin from "@/components/map/map-pin"
import {MapViewProps} from "@/index";

import "leaflet/dist/leaflet.css"



export default function MapView({ locations, initialZoom = 13, initialCenter = [51.505, -0.09] }: MapViewProps) {
    const [isMounted, setIsMounted] = useState(false)

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
        >
            <TileLayer
                attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
                url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
            />

            {locations.map((location) => (
                <MapPin key={location.id} location={location} />
            ))}
        </MapContainer>
    )
}

