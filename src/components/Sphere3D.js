import React from "react";
import { useSelector } from 'react-redux';

const Sphere3D = () => {
    const style = useSelector(state => state.ThemeChangeReducer);
    return (
        <mesh>
            <dodecahedronGeometry attach="geometry" args={[2, 3]} />
            <meshLambertMaterial wireframe color={style.color} />
            <mesh>
                <icosahedronGeometry attach="geometry" args={[1.5, 2]} />
                <meshNormalMaterial wireframe />
                {/* <meshLambertMaterial wireframe color={style.color} /> */}
                <mesh>
                    <sphereGeometry attach="geometry" args={[1, 30, 32]} />
                    <meshNormalMaterial wireframe />
                    {/* <meshLambertMaterial wireframe color={style.color} /> */}
                </mesh>
            </mesh>
        </mesh>
    )
}

export default Sphere3D;