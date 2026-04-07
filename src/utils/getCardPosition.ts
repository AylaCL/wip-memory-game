export function getCardPosition(
    index: number,
    rows: number,
    cols: number,
    gap: number,
    cardWidth: number,
    cardDepth: number
) {
    const spacingX = cardWidth + gap
    const spacingZ = cardDepth + gap

    const col = index % cols
    const row = Math.floor(index / cols)

    const offsetX = (cols - 1) * spacingX * 0.5
    const offsetZ = (rows - 1) * spacingZ * 0.5

    const x = col * spacingX - offsetX
    const z = row * spacingZ - offsetZ

    return { x, z }
}
