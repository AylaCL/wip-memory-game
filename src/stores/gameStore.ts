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
    selectedCardIds: string[]
    selectCard: (id: string) => void
    flipCard: (id: string) => void
    matchCard: (id: string) => void
    clearSelectedCardIds: () => void
}

export const useGameStore = create<GameStore>((set, get) => ({
    cards: generateInitialCards(),
    selectedCardIds: [],

    selectCard: (id) => {
        const state = get()
        const card = state.cards.find((card) => card.id === id)

        if (
            !card ||
            card.isMatched ||
            state.selectedCardIds.length >= 2 ||
            state.selectedCardIds.includes(id)
        ) {
            return
        }

        set({ selectedCardIds: [...state.selectedCardIds, id] })
        state.flipCard(id)
    },
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
    clearSelectedCardIds: () => {
        set({ selectedCardIds: [] })
    },
}))
