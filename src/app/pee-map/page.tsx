"use client"

import {useState} from "react";
import MapView from "@/components/map/map-view"
import ListView from "@/components/map/list-view"
import ViewSwitcher from "@/components/map/view-switcher"
import {useMediaQuery} from "@/hooks/use-media-query"



export default function PeeMap() {

    const [currentView, setCurrentView] = useState<"map" | "list">("map")
    const [selectedLocation, setSelectedLocation] = useState<Location | null>(null)

    // Check if we're on mobile
    const isMobile = useMediaQuery("(max-width: 768px)")

    const handleLocationSelect = (location: Location) => {
        setSelectedLocation(location)
        // On mobile, switch to map view when a location is selected
        if (isMobile) {
            setCurrentView("map")
        }
    }
    // Sample location data - you can replace this with your actual data
    const locations = [
        {
            id: 1,
            name: "Point A",
            lat: 51.505,
            lng: -0.09,
            description: "This is point A with some details about the location.",
        },
        {
            id: 2,
            name: "Point B",
            lat: 51.51,
            lng: -0.1,
            description: "This is point B with information about what can be found here.",
        },
        {
            id: 3,
            name: "Point C",
            lat: 51.515,
            lng: -0.08,
            description: "This is point C with a description of this interesting place.",
        },
        { id: 4, name: "Point D", lat: 51.52, lng: -0.12, description: "This is point D, a notable landmark in the area." },
        {
            id: 5,
            name: "Point E",
            lat: 51.498,
            lng: -0.05,
            description: "This is point E, worth visiting for its unique features.",
        },
    ]

    return (
        <main className="flex min-h-screen flex-col">
            {/* Header - visible on desktop */}
            <header className="hidden md:flex items-center justify-between p-4 border-b">
                <h1 className="text-2xl font-bold">Interactive Map</h1>
                <ViewSwitcher currentView={currentView} onViewChange={setCurrentView}/>
            </header>

            {/* Main content */}
            <div className="flex-1 relative">
                <div
                    className={`absolute inset-0 transition-opacity duration-300 ${currentView === "map" ? "opacity-100 z-10" : "opacity-0 z-0"}`}
                >
                    <MapView locations={locations} selectedLocation={selectedLocation}/>
                </div>
                <div
                    className={`absolute inset-0 transition-opacity duration-300 ${currentView === "list" ? "opacity-100 z-10" : "opacity-0 z-0"}`}
                >
                    <ListView locations={locations} onSelectLocation={handleLocationSelect}/>
                </div>
            </div>

            {/* Bottom bar - visible on mobile */}
            <div className="md:hidden fixed bottom-0 left-0 right-0 bg-white border-t p-3 flex justify-center z-20">
                <ViewSwitcher currentView={currentView} onViewChange={setCurrentView}/>
            </div>
        </main>
    )
}
