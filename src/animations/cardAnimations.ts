import gsap from 'gsap'

export function flipCardAnimation(meshRef: any, isFlipped: boolean) {
    let targetRotation = 0;
    let targetY = 0;

    if (isFlipped) {
        targetRotation = -Math.PI;
        targetY = 0.5;
        flipCardUp(meshRef, targetRotation, targetY)
    } else {
        targetRotation = 0;
        targetY = 0;
        flipCardDown(meshRef, targetRotation, targetY)
    }
}

function flipCardUp(
    meshRef: any,
    targetRotation: number,
    targetY: number
) {
    const tl = gsap.timeline();

    tl.to(meshRef.current.position, {
        y: targetY,
        duration: 0.4,
        ease: "power2.out"
    });

    tl.to(meshRef.current.rotation, {
        z: targetRotation,
        duration: 0.4,
        ease: "back.out(0.5)"
    }, "-=0.3");
}

function flipCardDown(
    meshRef: any,
    targetRotation: number,
    targetY: number
) {
    const tl = gsap.timeline();
    
    tl.to(meshRef.current.rotation, {
        z: targetRotation,
        duration: 0.4,
        ease: "back.out(0.5)"
    });

    tl.to(meshRef.current.position, {
        y: targetY,
        duration: 0.4,
        ease: "power2.out"
    }, "-=0.3");

}