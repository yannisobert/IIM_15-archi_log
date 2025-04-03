
interface MapPinProps {
    location: Location
}

// Define the location type
export interface Location {
    id: number
    name: string
    lat: number
    lng: number
}

interface MapViewProps {
    locations: Location[]
    initialZoom?: number
    initialCenter?: [number, number]
    selectedLocation?: Location | null
}

interface PeeData {
    id: string;
    location: {
        latitude: number;
        longitude: number;
    };
    date: Date;
    user: string;
}

interface MapPinProps {
    location: Location
}

interface ListViewProps {
    locations: Location[]
    onSelectLocation?: (location: Location) => void
}

interface AddPeeButtonProps {
    onAddPee?: (pee: Omit<Location, "id">) => void
    className?: string
}