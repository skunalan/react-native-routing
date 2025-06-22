import { create } from "zustand";

type State = {
  loggedIn: boolean;
  setLoggedIn: (loggedIn: boolean) => void;
};

const useAuthStore = create<State>((set) => ({
  loggedIn: false,
  setLoggedIn(loggedIn) {
    set({ loggedIn });
  },
}));
export default useAuthStore;
