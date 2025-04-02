"use client"

import { Marker, Popup } from "react-leaflet"
import {MapPinProps} from "@/index";

import "leaflet/dist/leaflet.css"

const icon = new L.Icon({
    iconUrl: "/logo.svg",
    iconSize: [50, 50]
})

export default function MapPin({ location }: MapPinProps) {

    return (
        <Marker
            position={[location.lat, location.lng]}
            icon={icon}
        >
            <Popup>
                <div className="p-1">
                    <h3 className="font-bold text-lg">{location.name}</h3>
                    <p className="text-sm text-gray-600">{location.description}</p>
                    <div className="text-xs text-gray-500 mt-2">
                        Coordinates: {location.lat.toFixed(4)}, {location.lng.toFixed(4)}
                    </div>
                </div>
            </Popup>
        </Marker>
    )
}

