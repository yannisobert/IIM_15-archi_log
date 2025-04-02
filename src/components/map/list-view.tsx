"use client"
import {ListViewProps} from "@/index";
import Image from "next/image"

export default function ListView({ locations, onSelectLocation }: ListViewProps) {
    return (
        <div className="w-full h-full overflow-auto bg-white">
            <ul className="divide-y divide-gray-200">
                {locations.map((location) => (
                    <li
                        key={location.id}
                        className="p-4 hover:bg-gray-50 cursor-pointer transition-colors"
                        onClick={() => onSelectLocation?.(location)}
                    >
                        <div className="flex items-start gap-3">
                            <div className="mt-0.5 text-primary">
                                <Image
                                    src="/logo.svg"
                                    alt="Location Icon"
                                    width={50}
                                    height={50}
                                    className="w-12 h-12 rounded-full"
                                />
                            </div>
                            <div className="flex-1">
                                <h3 className="font-medium text-gray-900">{location.name}</h3>
                                <p className="text-sm text-gray-500 mt-1">{location.description}</p>
                                <div className="text-xs text-gray-400 mt-2">
                                    Coordinates: {location.lat.toFixed(4)}, {location.lng.toFixed(4)}
                                </div>
                            </div>
                        </div>
                    </li>
                ))}
            </ul>
        </div>
    )
}

