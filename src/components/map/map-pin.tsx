"use client"

import { Marker, Popup } from "react-leaflet"
import {MapPinProps} from "@/index";

import "leaflet/dist/leaflet.css"

const icon = new L.Icon({
    iconUrl: "/logo.svg",
    iconSize: [50, 50]
})

export default function MapPin({ location }: MapPinProps) {
    console.log("MapPin", location)
    return (
        <Marker
            position={[location.location.latitude, location.location.longitude]}
            icon={icon}
        >
            <Popup>
                <div className="p-1">
                    <h3 className="font-bold text-lg">{location.user}</h3>
                    <div className="text-xs text-gray-500 mt-2">
                        Coordinates: {location.location.latitude}, {location.location.longitude}
                    </div>
                </div>
            </Popup>
        </Marker>
    )
}
