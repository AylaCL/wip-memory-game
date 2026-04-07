import { useRef } from 'react'
import { flipCardUp2 } from '../animations/cardAnimations'
import Card from '../canvas/Card'
import { CardObject, useGameStore } from '../stores/gameStore'
import { getCardPosition } from '../utils/getCardPosition'
import { useGameLogic } from '../hooks/useGameLogic'

export default function GameBoard() {
    const cards: CardObject[] = useGameStore((state) => state.cards)
    const selectCard = useGameStore((state) => state.selectCard)
    const selectedCardIds = useGameStore((state) => state.selectedCardIds)
    const meshRefs = useRef<{ [key: string]: any }>({})

    useGameLogic(meshRefs)

    useGameStore.subscribe((state) => {
        console.log('selectedCardIds:', state.selectedCardIds)
    })

    function handleCardFlip(cardId: string, isFlipped: boolean) {
        if (isFlipped || selectedCardIds.length >= 2) return

        selectCard(cardId)

        const meshRef = meshRefs.current[cardId]
        if (meshRef) {
            flipCardUp2({ current: meshRef })
        }
    }

    return (
        <group>
            {cards.map((card, index) => {
                const { x, z } = getCardPosition(index, 2, 4, 0.2, 1, 1.5)
                return (
                    <mesh
                        key={card.id}
                        ref={(el) => (meshRefs.current[card.id] = el)}
                        position={[x, 0, z]}
                        onClick={() => handleCardFlip(card.id, card.isFlipped)}
                    >
                        <Card color={card.color} />
                    </mesh>
                )
            })}
        </group>
    )
}
