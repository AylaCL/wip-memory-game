import { create } from "zustand";
import { generateInitialCards } from "../utils/cardGenerator";

export type Card = {
    id: string;
    color: string;
    isFlipped: boolean;
    isMatched: boolean;
}

type GameStore = {
    cards: Card[];
}

export const useGameStore = create<GameStore>(() => ({
    cards: generateInitialCards()
}))