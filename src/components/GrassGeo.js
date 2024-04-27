import React from 'react';
import { Plane } from '@react-three/drei';

const GrassGeo = () => {
    return (
        <Plane args={[1000, 1000]} rotation={[-Math.PI / 2, 0, 0]} position={[0, -1, 0]}>
            <meshBasicMaterial color="green" />
        </Plane>
    );
};

export default GrassGeo;