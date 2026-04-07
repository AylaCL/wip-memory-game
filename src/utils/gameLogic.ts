import { CardObject, useGameStore } from '../stores/gameStore'

export function checkMatch(
    cards: CardObject[],
    id1: string,
    id2: string
): boolean {
    const card1 = cards.find((c) => c.id === id1)
    const card2 = cards.find((c) => c.id === id2)

    return card1?.color === card2?.color
}
