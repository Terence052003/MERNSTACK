import {create}from 'zustand';
import {useState} from "react";

export const useFruitStore = create(set => ({
    fruits: [],
    setFruits: fruits => set({ fruits }),
    createFruit: async(newFruit) => {
        if(!newFruit.name || !newFruit.color || !newFruit.taste || !newFruit.isHealthy){
             return {success: false, msg: 'Please provide all the required fields'}
         }
         const res = await fetch('/api/fruit', {
             method: 'POST',
             headers: {
                 'Content-Type': 'application/json'
             },
             body: JSON.stringify(newFruit)
         })
        const data = await res.json();
        set((state) => ({fruits: [...state.fruits, data.data]}))
        return {success: true, msg: 'Fruit added successfully'}
    },
    fetchFruits: async () => {
        const res = await fetch('/api/fruit')
        const data = await res.json();
        set({fruits: data.data})
    },
    deleteFruit: async (pid) => {
        const res = await fetch(`/api/fruit/${pid}`, {
            method: 'DELETE'
        })
        const data = await res.json();
        set((state) => ({fruits: state.fruits.filter(fruit => fruit._id !== pid)}))
        return {success: true, msg: 'Fruit deleted successfully'}
    }
}))
