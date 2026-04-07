import { create } from 'zustand'
import { generateInitialCards } from '../utils/cardGenerator'

export type CardObject = {
    id: string
    color: string
    isFlipped: boolean
    isMatched: boolean
}

type GameStore = {
    cards: CardObject[]
    flipCard: (id: string) => void
    matchCard: (id: string) => void
}

export const useGameStore = create<GameStore>((set) => ({
    cards: generateInitialCards(),
    flipCard: (id) =>
        set((state) => ({
            cards: state.cards.map((card) =>
                card.id === id ? { ...card, isFlipped: !card.isFlipped } : card
            ),
        })),
    matchCard: (id) =>
        set((state) => ({
            cards: state.cards.map((card) =>
                card.id === id
                    ? { ...card, isMatched: true, isFlipped: false }
                    : card
            ),
        })),
}))
