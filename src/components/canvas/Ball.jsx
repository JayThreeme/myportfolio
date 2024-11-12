/* eslint-disable react/no-unknown-property */
import { Suspense } from "react";
import { Canvas } from "@react-three/fiber";
import {
  Decal,
  Float,
  OrbitControls,
  Preload,
  useTexture,
} from "@react-three/drei";
import PropTypes from "prop-types";

import CanvasLoader from "../Loader";

// The Ball component, which represents the 3D ball with a texture.
const Ball = (props) => {
  const [decal] = useTexture([props.imgUrl || "/path/to/fallback-image.png"]); // Fallback image

  return (
    <Float speed={1.75} rotationIntensity={1} floatIntensity={2}>
      {/* Lighting */}
      <ambientLight intensity={0.25} />
      <directionalLight intensity={1} position={[0, 0, 0.05]} />

      {/* Mesh with shadow and scale */}
      <mesh castShadow receiveShadow scale={2.75}>
        {/* Icosahedron geometry */}
        <icosahedronGeometry args={[1, 1]} />

        {/* Material with shading and offset */}
        <meshStandardMaterial
          color="#fff8eb"
          flatShading={true}
          polygonOffset={true}
          polygonOffsetFactor={-5}
        />

        {/* Decal to apply texture */}
        <Decal
          position={[0, 0, 1]}
          rotation={[2 * Math.PI, 0, 6.25]}
          scale={1}
          map={decal}
          flatShading={true}
        />
      </mesh>
    </Float>
  );
};

// Prop validation for the Ball component
Ball.propTypes = {
  imgUrl: PropTypes.string.isRequired, // imgUrl should be a required string
};

// The BallCanvas component, which sets up the 3D scene and renders the Ball component.
const BallCanvas = ({ icon }) => {
  return (
    <Canvas dpr={[1, 2]} gl={{ preserveDrawingBuffer: true }}>
      <Suspense fallback={<CanvasLoader />}>
        <OrbitControls enableZoom={false} />
        <Ball imgUrl={icon} />
      </Suspense>

      <Preload all />
    </Canvas>
  );
};

// Prop validation for the BallCanvas component
BallCanvas.propTypes = {
  icon: PropTypes.string.isRequired, // icon is expected to be a string and required
};

export default BallCanvas;
