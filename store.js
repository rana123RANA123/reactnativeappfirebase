import { create } from 'zustand'
import { persist, createJSONStorage } from 'zustand/middleware'

const useFishStore = create(
  persist(
    (set, get) => ({
      user:{},
      
      addUser: (item) => set({ user:item}),
    }),

    {
      name: 'food-storage',
      storage: createJSONStorage(() => sessionStorage), 
    },
  ),
)

export default useFishStore