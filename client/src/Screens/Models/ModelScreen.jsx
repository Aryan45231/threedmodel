import React from "react";
import { Canvas } from "@react-three/fiber"
import useRenderViewModel from "./modelViewModel";
import { useGLTF, Stage, PresentationControls, Shadow } from "@react-three/drei"

const Model = (props) => {
  const {fileurl} = useRenderViewModel()
      const { scene } = useGLTF(fileurl)
      return <primitive object={scene} {...props} />
    }
export default  ()=>{
    return (
        <Canvas dpr={[1,5]} shadows camera={{ fov: 80 }} style={{ position: "absolute" }}>
      <color attach="background" args={["#433546"]} />
      <PresentationControls speed={1.5} global zoom={1} polar={[-0.1, Math.PI / 4]}>
        <Stage environment={null}>
          <Model scale={0.1} />
        </Stage>
      </PresentationControls>
    </Canvas>
    )
}