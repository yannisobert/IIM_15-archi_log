"use client"

import { useState, useEffect } from "react"

export function useMediaQuery(query: string): boolean {
    const [matches, setMatches] = useState(false)
    const [mounted, setMounted] = useState(false)

    useEffect(() => {
        setMounted(true)

        // Only run on the client side
        if (typeof window !== "undefined") {
            const media = window.matchMedia(query)

            // Update the state with the current value
            const updateMatches = () => {
                setMatches(media.matches)
            }

            // Set the initial value
            updateMatches()

            // Add the change listener
            media.addEventListener("change", updateMatches)

            // Clean up
            return () => {
                media.removeEventListener("change", updateMatches)
            }
        }
    }, [query])

    // While not mounted (during SSR), return false
    if (!mounted) return false

    return matches
}

