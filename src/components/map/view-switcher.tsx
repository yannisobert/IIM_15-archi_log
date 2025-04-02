"use client"

import { List, Map } from "lucide-react"
import { Button } from "@/components/ui/button"

interface ViewSwitcherProps {
    currentView: "map" | "list"
    onViewChange: (view: "map" | "list") => void
    className?: string
}

export default function ViewSwitcher({ currentView, onViewChange, className = "" }: ViewSwitcherProps) {
    return (
        <div className={`flex items-center gap-2 ${className}`}>
            <Button
                variant={currentView === "map" ? "default" : "outline"}
                size="sm"
                onClick={() => onViewChange("map")}
                className="flex items-center gap-2"
            >
                <Map size={16} />
                <span className="hidden sm:inline">Map</span>
            </Button>
            <Button
                variant={currentView === "list" ? "default" : "outline"}
                size="sm"
                onClick={() => onViewChange("list")}
                className="flex items-center gap-2"
            >
                <List size={16} />
                <span className="hidden sm:inline">List</span>
            </Button>
        </div>
    )
}
