"use client"

import type React from "react"

import { useState } from "react"
import { Plus } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Dialog, DialogContent, DialogHeader, DialogTitle, DialogFooter } from "@/components/ui/dialog"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import {AddPeeButtonProps} from "@/index"


export default function AddPeeButton({className = "" }: AddPeeButtonProps) {
    const [isOpen, setIsOpen] = useState(false)
    const [isLoading, setIsLoading] = useState(false)
    const [newPee, setNewPee] = useState({
        name: "",
        lat: "",
        lng: "",
    })

    const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
        const { name, value } = e.target
        setNewPee((prev) => ({ ...prev, [name]: value }))
    }

    const handleSubmit = async (e: React.FormEvent) => {
        e.preventDefault()
        setIsLoading(true)

        if (!newPee.name || !newPee.lat || !newPee.lng) {
            return
        }

        try {
            const res = await fetch('/api/pee/new', {
                method: 'POST',
                headers: { 'Content-Type': 'application/json' },
                body: JSON.stringify({
                    location: {
                        latitude: parseFloat(newPee.lat),
                        longitude: parseFloat(newPee.lng),
                    },
                    user: newPee.name,
                }),
            });

            if (!res.ok) {
                throw new Error('Failed to add pee');
            }

            const getNewPee = await res.json();
            console.log("New pee added:", getNewPee);

        } catch (error) {
            console.error("Error adding pee:", error)
        } finally {
            setIsLoading(false)
        }

        // Reset form and close dialog
        setNewPee({ name: "", lat: "", lng: "" })
        setIsOpen(false)
    }


    return (
        <>
            <Button className={`rounded-full w-14 h-14 shadow-lg ${className}`} onClick={() => setIsOpen(true)}>
                <Plus size={24} />
            </Button>

            <Dialog open={isOpen} onOpenChange={setIsOpen}>
                <DialogContent className="sm:max-w-[425px]">
                    <DialogHeader>
                        <DialogTitle>Add New Pee</DialogTitle>
                    </DialogHeader>
                    <form onSubmit={handleSubmit}>
                        <div className="grid gap-4 py-4">
                            <div className="grid gap-2">
                                <Label htmlFor="name">Name</Label>
                                <Input
                                    id="name"
                                    name="name"
                                    value={newPee.name}
                                    onChange={handleChange}
                                    placeholder="Enter pee name"
                                    required
                                />
                            </div>
                            <div className="grid grid-cols-2 gap-4">
                                <div className="grid gap-2">
                                    <Label htmlFor="lat">Latitude</Label>
                                    <Input
                                        id="lat"
                                        name="lat"
                                        type="number"
                                        step="any"
                                        value={newPee.lat}
                                        onChange={handleChange}
                                        placeholder="51.505"
                                        required
                                    />
                                </div>
                                <div className="grid gap-2">
                                    <Label htmlFor="lng">Longitude</Label>
                                    <Input
                                        id="lng"
                                        name="lng"
                                        type="number"
                                        step="any"
                                        value={newPee.lng}
                                        onChange={handleChange}
                                        placeholder="-0.09"
                                        required
                                    />
                                </div>
                            </div>
                        </div>
                        <DialogFooter>
                            <Button type="button" variant="outline" onClick={() => setIsOpen(false)}>
                                Cancel
                            </Button>
                            <Button type="submit">Add Pee</Button>
                        </DialogFooter>
                    </form>
                </DialogContent>
            </Dialog>
        </>
    )
}

