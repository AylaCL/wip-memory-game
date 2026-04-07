import { useThree } from '@react-three/fiber'
import { RefObject, useEffect } from 'react'
import * as THREE from 'three'
import { OrbitControls } from 'three/examples/jsm/Addons.js'

export function useFitCameraToModel(
    modelRef: RefObject<THREE.Group | null>,
    options?: {
        distanceMultiplier: number
        offsetY: number
    }
) {
    const { camera, controls } = useThree()
    const { distanceMultiplier = 2.5, offsetY = 0.5 } = options || {}

    useEffect(() => {
        if (!modelRef.current) return

        const box = new THREE.Box3().setFromObject(modelRef.current)
        const center = box.getCenter(new THREE.Vector3())
        const size = box.getSize(new THREE.Vector3())

        const maxDim = Math.max(size.x, size.y, size.z)
        const distance = maxDim * distanceMultiplier

        camera.position.set(
            center.x,
            center.y + size.y * offsetY,
            center.z + distance
        )

        if (controls) {
            ;(controls as OrbitControls).target.copy(center)
            ;(controls as OrbitControls).update()
        }
    }, [modelRef, camera, controls, offsetY, distanceMultiplier])
}
