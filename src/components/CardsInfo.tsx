import { CardObject, useGameStore } from '../stores/gameStore'

export default function CardsInfo() {
    const cards: CardObject[] = useGameStore((state) => state.cards)

    return (
        <div>
            <h2>Card Info ({cards.length} cards)</h2>
            <ul>
                {cards.map((card, index) => (
                    <li key={card.id}>
                        Index: {index} | ID: {card.id} | Color: {card.color} |
                        Flipped: {card.isFlipped ? 'Yes' : 'No'} | Matched:{' '}
                        {card.isMatched ? 'Yes' : 'No'}
                    </li>
                ))}
            </ul>
        </div>
    )
}
