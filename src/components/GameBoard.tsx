import { useRef } from 'react'
import { flipCardAnimation } from '../animations/cardAnimations'
import Card from '../canvas/Card'
import { CardObject, useGameStore } from '../stores/gameStore'
import { getCardPosition } from '../utils/getCardPosition'

export default function GameBoard() {
    const cards: CardObject[] = useGameStore((state) => state.cards)
    const flipCard = useGameStore((state) => state.flipCard)
    const meshRefs = useRef<{ [key: string]: any }>({})

    function handleCardFlip(cardId: string, isFlipped: boolean) {
        flipCard(cardId)

        const meshRef = meshRefs.current[cardId]
        if (meshRef) {
            flipCardAnimation({ current: meshRef }, !isFlipped)
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
