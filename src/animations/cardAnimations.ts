import gsap from 'gsap'

export function flipCardAnimation(
    meshRef: any,
    isFlipped: boolean,
    onComplete?: () => void
) {
    gsap.killTweensOf(meshRef.current)

    const targetRotation = isFlipped ? -Math.PI : 0

    gsap.to(meshRef.current.rotation, {
        z: targetRotation,
        duration: 0.4,
        ease: 'power2.out(0.5)',
        onComplete: onComplete,
    })
}
