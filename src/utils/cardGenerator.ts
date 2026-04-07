import { CardObject } from '../stores/gameStore'

const colors: string[] = [
    'red',
    'blue',
    'green',
    'yellow',
    'purple',
    'orange',
    'pink',
    'brown',
    'black',
    'white',
]

export function generateInitialCards(): CardObject[] {
    const colorsCopy = [...colors]
    const selectedColors = getSelectedColorsArray(colorsCopy, 4)

    const cards: CardObject[] = createCardObjectsWithDoubles(selectedColors)

    const shuffledCards = shuffle<CardObject>(cards)

    return shuffledCards
}

// Source - https://stackoverflow.com/a/2450976
// Posted by ChristopheD, modified by community. See post 'Timeline' for change history
// Retrieved 2026-04-06, License - CC BY-SA 4.0
function shuffle<T>(array: T[]): T[] {
    let currentIndex = array.length

    while (currentIndex != 0) {
        let randomIndex = Math.floor(Math.random() * currentIndex)
        currentIndex--
        ;[array[currentIndex], array[randomIndex]] = [
            array[randomIndex],
            array[currentIndex],
        ]
    }

    return array
}

function createCardObjectsWithDoubles(colors: string[]): CardObject[] {
    const cards: CardObject[] = []
    let idCounter = 0

    for (const color of colors) {
        // The original card
        cards.push({
            id: `${idCounter++}`,
            color: color,
            isFlipped: false,
            isMatched: false,
        })

        // The matching card with different id
        cards.push({
            id: `${idCounter++}`,
            color: color,
            isFlipped: false,
            isMatched: false,
        })
    }
    return cards
}

function getSelectedColorsArray(
    colorsArray: string[],
    numberOfColors: number
): string[] {
    const selectedColors: string[] = []

    for (let i = 0; i < numberOfColors; i++) {
        const color = getRandomColor(colorsArray)
        selectedColors.push(color)
        removeColorFromArray(colorsArray, color)
    }
    return selectedColors
}

function getRandomColor(colorsArray: string[]): string {
    const randomIndex = Math.floor(Math.random() * colorsArray.length)
    const color = colorsArray[randomIndex]
    return color
}

function removeColorFromArray(colorsArray: string[], color: string) {
    const indexOfColor = colorsArray.indexOf(color)
    colorsArray.splice(indexOfColor, 1)
}
