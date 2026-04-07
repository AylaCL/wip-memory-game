import { useEffect } from 'react'
import { useGameStore } from '../stores/gameStore'
import { checkMatch } from '../utils/gameLogic'
import { flipCardDown2 } from '../animations/cardAnimations'
import { delay } from '../utils/delay'

export function useGameLogic(
    meshRefs: React.RefObject<{ [key: string]: any }>
) {
    const cards = useGameStore((state) => state.cards)
    const selectedCardIds = useGameStore((state) => state.selectedCardIds)
    const matchCard = useGameStore((state) => state.matchCard)
    const flipCard = useGameStore((state) => state.flipCard)
    const clearSelectedCardIds = useGameStore(
        (state) => state.clearSelectedCardIds
    )

    useEffect(() => {
        const handleMatching = async () => {
            if (selectedCardIds.length !== 2) return

            const [id1, id2] = selectedCardIds

            const isMatch = checkMatch(cards, id1, id2)

            await delay(800)

            if (isMatch) {
                matchCard(id1)
                matchCard(id2)
                clearSelectedCardIds()
            } else {
                const meshRef1 = meshRefs.current[id1]
                const meshRef2 = meshRefs.current[id2]

                if (meshRef1) {
                    flipCardDown2({ current: meshRef1 })
                }
                if (meshRef2) {
                    flipCardDown2({ current: meshRef2 })
                }
                flipCard(id1)
                flipCard(id2)
                clearSelectedCardIds()
            }
        }

        handleMatching()
    }, [selectedCardIds])
}
