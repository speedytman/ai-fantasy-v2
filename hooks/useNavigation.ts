import { create } from 'zustand'

interface NavigationStore {
  isOpen: boolean;
  onOpen: () => void;
  onClose: () => void;
}

const useNavigation = create<NavigationStore>((set) => ({
  isOpen: true,
  onOpen: () => set({ isOpen: true }),
  onClose: () => set({ isOpen: false }),
}))

export default useNavigation;