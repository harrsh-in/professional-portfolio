"use client";
import { useRef } from "react";

import { OrbitControls } from "@react-three/drei";
import {
    Canvas,
    ExtendedColors,
    MeshProps,
    NodeProps,
    Overwrite,
    useFrame,
} from "@react-three/fiber";
import * as THREE from "three";

function PixelatedSphere() {
    const sphereRef = useRef<THREE.Points>(null);

    useFrame(({ clock }) => {
        if (sphereRef.current) {
            sphereRef.current.rotation.y = clock.getElapsedTime() * 1.2;
            sphereRef.current.rotation.z = clock.getElapsedTime() * 0.7;
        }
    });

    const icosahedronProps: ExtendedColors<
        Overwrite<
            Partial<THREE.IcosahedronGeometry>,
            NodeProps<
                THREE.IcosahedronGeometry,
                typeof THREE.IcosahedronGeometry
            >
        >
    > = { args: [1, 4] };

    return (
        <points ref={sphereRef}>
            <icosahedronGeometry {...icosahedronProps} />
            <pointsMaterial
                color="gray"
                size={0.05}
            />
        </points>
    );
}

function Birds() {
    const groupRef = useRef<THREE.Group>(null);

    useFrame(({ clock }) => {
        if (!groupRef.current) return;
        const elapsedTime = clock.getElapsedTime();
        groupRef.current.children.forEach((bird: THREE.Object3D, index) => {
            const angle = (elapsedTime + index * 0.2) % (2 * Math.PI);
            const radius = 2.3 + Math.random() * 0.0001;
            bird.position.x =
                radius * Math.cos(angle) - Math.sin(elapsedTime * 0.5 + index);
            bird.position.y =
                radius * Math.sin(angle) * Math.sin(elapsedTime * 0.5 + index);
            bird.position.z = radius * Math.cos(elapsedTime * 0.5 + index);
        });
    });

    const birds = [...Array(48)].map((_, i) => {
        const size = i % 2 === 0 ? 0.03 : 0.05;
        const meshProps: MeshProps = {
            position: [1, 0, 0],
        };
        const planeGeometryProps: ExtendedColors<
            Overwrite<
                Partial<THREE.PlaneGeometry>,
                NodeProps<THREE.PlaneGeometry, typeof THREE.PlaneGeometry>
            >
        > = { args: [size, size] };

        return (
            <mesh
                key={i}
                {...meshProps}
            >
                <planeGeometry {...planeGeometryProps} />
                <meshBasicMaterial color="gray" />
            </mesh>
        );
    });

    return <group ref={groupRef}>{birds}</group>;
}

const FooterGraphic = () => {
    return (
        <Canvas
            camera={{
                fov: 40,
                position: [0, 0, 5],
            }}
            gl={{
                antialias: false,
            }}
        >
            <PixelatedSphere />
            <Birds />
            <OrbitControls enableZoom={false} />
        </Canvas>
    );
};

export default FooterGraphic;
