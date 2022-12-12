import React from "react";
import { useGLTFLoader } from "@react-three/drei/loaders/useGLTFLoader";

export default function Model(props) {
  const { nodes, materials } = useGLTFLoader("/CarModel.glb");
  return (
    <group {...props} dispose={null}>
      {/* front brand */}
      <mesh
        geometry={nodes.Circle046.geometry}
        // material={materials["Metal-Black-Rough"]}
        position={[0, 0, 4.07]}
        material-color="#dfa492"
      />
      <mesh
        geometry={nodes.Plane082.geometry}
        material={materials["Amg-Word"]}
        position={[0.01, 0, 0.13]}
        rotation={[Math.PI, 0, Math.PI]}
      />
      <mesh
        geometry={nodes.Plane073.geometry}
        material={materials["Amg-Word"]}
        position={[0.01, 0, 3.09]}
        rotation={[Math.PI, 0, Math.PI]}
      />
      <mesh
        geometry={nodes.Plane072.geometry}
        material={materials["Amg-Word"]}
        position={[0, 0, -2.96]}
      />
      <mesh
        geometry={nodes.Plane059.geometry}
        // material={materials["Amg-Word"]}
        material-color="#ffceb8"
      />
      <mesh
        geometry={nodes.Plane081.geometry}
        material={materials["Amg-Word-Black"]}
        position={[0.01, 0, 0.13]}
        rotation={[Math.PI, 0, Math.PI]}
      />
      <mesh
        geometry={nodes.Plane074.geometry}
        material={materials["Amg-Word-Black"]}
        position={[0.01, 0, 3.09]}
        rotation={[Math.PI, 0, Math.PI]}
      />
      <mesh
        geometry={nodes.Plane071.geometry}
        material={materials["Amg-Word-Black"]}
        position={[0, 0, -2.96]}
      />
      <mesh
        geometry={nodes.Plane058.geometry}
        material={materials["Amg-Word-Black"]}
      />
      {/* right back wheel */}
      <mesh
        geometry={nodes.Circle044.geometry}
        // material={materials["Metal-Silver-Rim"]}
        position={[0.01, 0, 0.13]}
        rotation={[Math.PI, 0, Math.PI]}
        material-color="#e3c9ce"
      />
      {/* right front wheel */}
      <mesh
        geometry={nodes.Circle023.geometry}
        // material={materials["Metal-Silver-Rim"]}
        position={[0.01, 0, 3.09]}
        rotation={[Math.PI, 0, Math.PI]}
        material-color="#e3c9ce"
      />
      {/* left back wheel */}
      <mesh
        geometry={nodes.Circle022.geometry}
        // material={materials["Metal-Silver-Rim"]}
        position={[0, 0, -2.96]}
        material-color="#e3c9ce"
      />
      {/* left front wheel */}
      <mesh
        geometry={nodes.Circle.geometry}
        // material={materials["Metal-Silver-Rim"]}
        material-color="#e3c9ce"
      />
      <mesh
        geometry={nodes.Circle043.geometry}
        material={materials["Metal-Chrome-Rough-Bolts"]}
        position={[0.01, 0, 0.13]}
        rotation={[Math.PI, 0, Math.PI]}
      />
      <mesh
        geometry={nodes.Circle024.geometry}
        material={materials["Metal-Chrome-Rough-Bolts"]}
        position={[0.01, 0, 3.09]}
        rotation={[Math.PI, 0, Math.PI]}
      />
      <mesh
        geometry={nodes.Circle021.geometry}
        material={materials["Metal-Chrome-Rough-Bolts"]}
        position={[0, 0, -2.96]}
      />
      <mesh
        geometry={nodes.Circle001.geometry}
        material={materials["Metal-Chrome-Rough-Bolts"]}
      />
      <mesh
        geometry={nodes.Circle042.geometry}
        material={materials["Metal-Chrome-Rough-Bolts"]}
        position={[0.01, 0, 0.13]}
        rotation={[Math.PI, 0, Math.PI]}
      />
      <mesh
        geometry={nodes.Circle025.geometry}
        material={materials["Metal-Chrome-Rough-Bolts"]}
        position={[0.01, 0, 3.09]}
        rotation={[Math.PI, 0, Math.PI]}
      />
      <mesh
        geometry={nodes.Circle020.geometry}
        material={materials["Metal-Chrome-Rough-Bolts"]}
        position={[0, 0, -2.96]}
      />
      <mesh
        geometry={nodes.Circle002.geometry}
        material={materials["Metal-Chrome-Rough-Bolts"]}
      />
      <mesh
        geometry={nodes.Circle041.geometry}
        material={materials["Metal-Chrome-Rough-Bolts"]}
        position={[0.01, 0, 0.13]}
        rotation={[Math.PI, 0, Math.PI]}
      />
      <mesh
        geometry={nodes.Circle026.geometry}
        material={materials["Metal-Chrome-Rough-Bolts"]}
        position={[0.01, 0, 3.09]}
        rotation={[Math.PI, 0, Math.PI]}
      />
      <mesh
        geometry={nodes.Circle019.geometry}
        material={materials["Metal-Chrome-Rough-Bolts"]}
        position={[0, 0, -2.96]}
      />
      <mesh
        geometry={nodes.Circle003.geometry}
        material={materials["Metal-Chrome-Rough-Bolts"]}
      />
      <mesh
        geometry={nodes.Circle040.geometry}
        material={materials["Metal-Chrome-Rough-Bolts"]}
        position={[0.01, 0, 0.13]}
        rotation={[Math.PI, 0, Math.PI]}
      />
      <mesh
        geometry={nodes.Circle027.geometry}
        material={materials["Metal-Chrome-Rough-Bolts"]}
        position={[0.01, 0, 3.09]}
        rotation={[Math.PI, 0, Math.PI]}
      />
      <mesh
        geometry={nodes.Circle018.geometry}
        material={materials["Metal-Chrome-Rough-Bolts"]}
        position={[0, 0, -2.96]}
      />
      <mesh
        geometry={nodes.Circle004.geometry}
        material={materials["Metal-Chrome-Rough-Bolts"]}
      />
      <mesh
        geometry={nodes.Circle039.geometry}
        material={materials["Metal-Chrome-Rough-Bolts"]}
        position={[0.01, 0, 0.13]}
        rotation={[Math.PI, 0, Math.PI]}
      />
      <mesh
        geometry={nodes.Circle028.geometry}
        material={materials["Metal-Chrome-Rough-Bolts"]}
        position={[0.01, 0, 3.09]}
        rotation={[Math.PI, 0, Math.PI]}
      />
      <mesh
        geometry={nodes.Circle017.geometry}
        material={materials["Metal-Chrome-Rough-Bolts"]}
        position={[0, 0, -2.96]}
      />
      <mesh
        geometry={nodes.Circle005.geometry}
        material={materials["Metal-Chrome-Rough-Bolts"]}
      />
      <mesh
        geometry={nodes.Circle038.geometry}
        material={materials["Metal-Silver-Rim"]}
        position={[0.01, 0, 0.13]}
        rotation={[Math.PI, 0, Math.PI]}
      />
      <mesh
        geometry={nodes.Circle029.geometry}
        material={materials["Metal-Silver-Rim"]}
        position={[0.01, 0, 3.09]}
        rotation={[Math.PI, 0, Math.PI]}
      />
      <mesh
        geometry={nodes.Circle016.geometry}
        material={materials["Metal-Silver-Rim"]}
        position={[0, 0, -2.96]}
      />
      <mesh
        geometry={nodes.Circle006.geometry}
        material={materials["Metal-Silver-Rim"]}
      />
      {/* right back outer wheel */}
      <mesh
        geometry={nodes.Plane080.geometry}
        // material={materials.Tire}
        position={[0.01, 0, 0.13]}
        rotation={[Math.PI, 0, Math.PI]}
        material-color="#ffceb8"
      />
      {/* right front outer wheel */}
      <mesh
        geometry={nodes.Plane075.geometry}
        // material={materials.Tire}
        position={[0.01, 0, 3.09]}
        rotation={[Math.PI, 0, Math.PI]}
        material-color="#ffceb8"
      />
      {/* left back outer wheel */}
      <mesh
        geometry={nodes.Plane070.geometry}
        // material={materials.Tire}
        position={[0, 0, -2.96]}
        material-color="#ffceb8"
      />
      {/* left front outer wheel */}
      <mesh
        geometry={nodes.Plane045.geometry}
        // material={materials.Tire}
        material-color="#ffceb8"
      />
      <mesh
        geometry={nodes.Circle036.geometry}
        material={materials["Brake-Disk"]}
        position={[0.01, 0, 0.13]}
        rotation={[Math.PI, 0, Math.PI]}
      />
      <mesh
        geometry={nodes.Circle030.geometry}
        material={materials["Brake-Disk"]}
        position={[0.01, 0, 3.09]}
        rotation={[Math.PI, 0, Math.PI]}
      />
      <mesh
        geometry={nodes.Circle014.geometry}
        material={materials["Brake-Disk"]}
        position={[0, 0, -2.96]}
      />
      <mesh
        geometry={nodes.Circle008.geometry}
        material={materials["Brake-Disk"]}
      />
      <mesh
        geometry={nodes.Circle035.geometry}
        material={materials["Brake-Disk"]}
        position={[0.01, 0, 0.13]}
        rotation={[Math.PI, 0, Math.PI]}
      />
      <mesh
        geometry={nodes.Circle031.geometry}
        material={materials["Brake-Disk"]}
        position={[0.01, 0, 3.09]}
        rotation={[Math.PI, 0, Math.PI]}
      />
      <mesh
        geometry={nodes.Circle013.geometry}
        material={materials["Brake-Disk"]}
        position={[0, 0, -2.96]}
      />
      <mesh
        geometry={nodes.Circle010.geometry}
        material={materials["Brake-Disk"]}
      />
      <mesh
        geometry={nodes.Circle037.geometry}
        // material={materials["Brake-Disk"]}
        position={[0.01, 0, 0.13]}
        rotation={[Math.PI, 0, Math.PI]}
        material-color="#ffceb8"
      />
      <mesh
        geometry={nodes.Circle032.geometry}
        // material={materials["Brake-Disk"]}
        position={[0.01, 0, 3.09]}
        rotation={[Math.PI, 0, Math.PI]}
        material-color="#ffceb8"
      />
      <mesh
        geometry={nodes.Circle015.geometry}
        // material={materials["Brake-Disk"]}
        position={[0, 0, -2.96]}
        material-color="#ffceb8"
      />
      <mesh
        geometry={nodes.Circle007.geometry}
        // material={materials["Brake-Disk"]}
        material-color="#ffceb8"
      />
      {/* right inner wheel engine */}
      <mesh
        geometry={nodes.Plane078.geometry}
        // material={materials["Brake-Hub"]}
        position={[0.01, 0, 0.13]}
        rotation={[Math.PI, 0, Math.PI]}
        material-color="#ffceb8"
      />
      <mesh
        geometry={nodes.Plane077.geometry}
        // material={materials["Brake-Hub"]}
        position={[0.01, 0, 3.09]}
        rotation={[Math.PI, 0, Math.PI]}
        material-color="#ffceb8"
      />
      {/* left inner wheel engine */}
      <mesh
        geometry={nodes.Plane009.geometry}
        // material={materials["Brake-Hub"]}
        position={[0, 0, -2.96]}
        material-color="#ffceb8"
      />
      <mesh
        geometry={nodes.Plane047.geometry}
        // material={materials["Brake-Hub"]}
        material-color="#ffceb8"
      />
      <mesh
        geometry={nodes.Circle034.geometry}
        material={materials["Brake-Hub"]}
        position={[0.01, 0, 0.13]}
        rotation={[Math.PI, 0, Math.PI]}
      />
      <mesh
        geometry={nodes.Circle033.geometry}
        material={materials["Brake-Hub"]}
        position={[0.01, 0, 3.09]}
        rotation={[Math.PI, 0, Math.PI]}
      />
      <mesh
        geometry={nodes.Circle012.geometry}
        material={materials["Brake-Hub"]}
        position={[0, 0, -2.96]}
      />
      <mesh
        geometry={nodes.Circle009.geometry}
        // material={materials["Brake-Hub"]}
        material-color="#ffceb8"
      />
      <mesh
        geometry={nodes.Plane008.geometry}
        material={materials.Ground}
        position={[0.32, -1.03, 0.09]}
        scale={69.9}
      />
      <mesh
        geometry={nodes.BackLeftWindow.geometry}
        // material={materials["Glass-Tinted"]}
        material-color="#fff0ea"
      />
      <mesh
        geometry={nodes.Plane060.geometry}
        material={materials["Windows-Blac- Broder"]}
        position={[0, -0.01, 0]}
      />
      <mesh
        geometry={nodes.Circle011.geometry}
        material={materials["Car-Paint-Red"]}
        scale={0.02}
      />
      <mesh
        geometry={nodes.Plane043.geometry}
        material={materials["Back-Bottom-Paint"]}
        position={[-0.21, -0.4, -2.39]}
        rotation={[Math.PI / 2, 0, Math.PI]}
        scale={-0.07}
      />
      <mesh
        geometry={nodes.Plane042.geometry}
        material={materials["Back-Bottom-Paint"]}
        position={[0.19, -0.4, -2.39]}
        rotation={[Math.PI / 2, 0, Math.PI]}
        scale={-0.07}
      />
      <mesh
        geometry={nodes.Plane041.geometry}
        material={materials["Back-Bottom-Paint"]}
        position={[0, -0.4, -2.4]}
        rotation={[Math.PI / 2, 0, Math.PI]}
        scale={-0.07}
      />
      <mesh
        geometry={nodes.Plane040.geometry}
        material={materials["Back-Bottom-Paint"]}
        rotation={[Math.PI / 2, 0, Math.PI]}
        scale={0.06}
      />
      <mesh
        geometry={nodes.Plane039.geometry}
        material={materials["Back-Bottom-Paint"]}
        rotation={[Math.PI / 2, 0, Math.PI]}
        scale={0.06}
      />
      {/* back bumper */}
      <mesh
        geometry={nodes.Plane038.geometry}
        // material={nodes.Plane038.material}
        rotation={[Math.PI / 2, 0, Math.PI]}
        scale={-0.07}
        material-color="#dd5a56"
      />
      <mesh
        geometry={nodes.Plane036.geometry}
        // material={materials["Back-Bottom-Paint"]}
        position={[0.61, -0.41, -2.39]}
        rotation={[1.52, -0.02, -3.04]}
        scale={[0.05, 0.05, 0.04]}
        material-color="#dd5a56"
      />
      <mesh
        geometry={nodes.Plane037.geometry}
        // material={materials["Back-Bottom-Paint"]}
        position={[0.5, -0.41, -2.42]}
        rotation={[1.52, -0.02, -3.04]}
        scale={[0.05, 0.05, 0.04]}
        material-color="#dd5a56"
      />
      <mesh
        geometry={nodes.Plane035.geometry}
        // material={materials["Number-Plate"]}
        position={[0, -0.21, -2.46]}
        rotation={[1.53, 0, Math.PI]}
        scale={[0.17, 0.05, 0.05]}
        material-color="#55010d"
      />
      <mesh
        geometry={nodes.Plane034.geometry}
        // material={materials["Number-Plate"]}
        position={[0, -0.21, -2.46]}
        rotation={[Math.PI / 2, 0, Math.PI]}
        scale={[0.17, 0.05, 0.05]}
        material-color="#55010d"
      />
      {/* front number plate */}
      <mesh
        geometry={nodes.Plane033.geometry}
        // material={materials["Number-Plate"]}
        position={[0, -0.31, 2.51]}
        rotation={[Math.PI / 2, 0, 0]}
        scale={[0.17, 0.05, 0.05]}
        material-color="#ffceb8"
      />
      <mesh
        geometry={nodes.Plane032.geometry}
        // material={materials["Number-Plate"]}
        position={[0, -0.31, 2.51]}
        rotation={[Math.PI / 2, 0, 0]}
        scale={[0.17, 0.05, 0.05]}
        material-color="#ffceb8"
      />
      {/* front horizontal nose */}
      <mesh
        geometry={nodes.Plane031.geometry}
        // material={materials["Metal-Black-Rough"]}
        position={[0, -0.1, -0.06]}
        material-color="#d9a997"
      />
      <mesh
        geometry={nodes.Plane026.geometry}
        // material={materials["Metal-Black-Rough"]}
        position={[0, -0.04, -0.06]}
        material-color="#dfa492"
      />
      <mesh
        geometry={nodes.Plane025.geometry}
        // material={materials["Metal-Black-Rough"]}
        position={[0, 0.01, -0.06]}
        material-color="#dfa492"
      />
      {/* front left vertical nose */}
      <mesh
        geometry={nodes.Plane030.geometry}
        // material={materials["Metal-Black-Rough"]}
        rotation={[Math.PI / 2, 0, 0]}
        material-color="#dfa492"
      />
      <mesh
        geometry={nodes.Plane027.geometry}
        // material={materials["Metal-Black-Rough"]}
        rotation={[Math.PI / 2, 0, 0]}
        material-color="#dfa492"
      />
      <mesh
        geometry={nodes.Plane024.geometry}
        // material={materials["metal-Chrome-rough"]}
        rotation={[Math.PI / 2, 0, 0]}
        material-color="#dfa492"
      />
      <mesh
        geometry={nodes.Plane022.geometry}
        // material={materials["Metal-Black-Rough"]}
        rotation={[Math.PI / 2, 0, 0]}
        material-color="#dfa492"
      />
      <mesh
        geometry={nodes.Plane017.geometry}
        // material={materials["Metal-Black-Rough"]}
        rotation={[Math.PI / 2, 0, 0]}
        material-color="#dfa492"
      />
      <mesh
        geometry={nodes.Plane020.geometry}
        // material={materials["Metal-Black-Rough"]}
        rotation={[Math.PI / 2, 0, 0]}
        material-color="#dfa492"
      />
      <mesh
        geometry={nodes.Plane015.geometry}
        // material={materials["Metal-Black-Rough"]}
        rotation={[Math.PI / 2, 0, 0]}
        material-color="#dfa492"
      />
      {/* left front bottom nose */}
      <mesh
        geometry={nodes["Guide-Mesh-Car026"].geometry}
        // material={materials["Rubber-Black"]}
        material-color="#e3a496"
      />
      <mesh
        geometry={nodes["Guide-Mesh-Car025"].geometry}
        // material={materials["Rubber-Black-Deep"]}
        material-color="#d69d8c"
      />
      <mesh
        geometry={nodes.Plane014.geometry}
        // material={materials["Metal-Black-Rough"]}
        rotation={[Math.PI / 2, 0, 0]}
        material-color="#e3a496"
      />
      <mesh
        geometry={nodes.Plane013.geometry}
        // material={materials["Metal-Black-Rough"]}
        position={[0.1, -0.37, 2.33]}
        rotation={[Math.PI / 2, 0, 0]}
        material-color="#bb897a"
      />
      <mesh
        geometry={nodes.Plane012.geometry}
        // material={materials["Metal-Black-Rough"]}
        position={[0.6, -0.37, 2.33]}
        rotation={[Math.PI / 2, 0, 0]}
        material-color="#e3a496"
      />
      <mesh
        geometry={nodes.Plane011.geometry}
        // material={materials["Metal-Black-Rough"]}
        position={[0.35, -0.37, 2.35]}
        rotation={[Math.PI / 2, 0, 0]}
        material-color="#bb897a"
      />
      <mesh
        geometry={nodes["Guide-Mesh-Car021"].geometry}
        // material={materials["Metal-Black-Rough"]}
        material-color="#d2978a"
      />
      <mesh
        geometry={nodes["Guide-Mesh-Car014"].geometry}
        // material={materials["Glass-Red"]}
        material-color="#d11f1f"
      />
      {/* car left front light */}
      <mesh
        geometry={nodes["Guide-Mesh-Car008"].geometry}
        material={materials["Glass-Clear"]}
      />
      {/* front left door */}
      <mesh
        geometry={nodes["Guide-Mesh-Car050"].geometry}
        // material={materials["Car-Paint-Red"]}
        material-color="#ffceb8"
      />
      <mesh
        geometry={nodes.BackRightCover.geometry}
        // material={materials["Car-Paint-Red"]}
        rotation={[-Math.PI, 0, 0]}
        scale={[-1.01, -1, -1]}
        material={materials.metal}
        material-color="#fff0ea"
      />
      {/* top left front cover */}
      <mesh
        geometry={nodes.TopLeftCover.geometry}
        // material={materials["Glass-Tinted"]}
        material-color="#fff0ea"
      />
      {/* upfront left mirror */}
      <mesh
        geometry={nodes.FrontLeftWindow.geometry}
        // material={materials["Glass-Tinted"]}
        material-color="#fff0ea"
      />
      <mesh
        geometry={nodes["Guide-Mesh-Car033"].geometry}
        // material={nodes["Guide-Mesh-Car033"].material}
        position={[0, -0.03, 0]}
        material-color="#ffceb8"
      />
      <mesh
        geometry={nodes["Guide-Mesh-Car032"].geometry}
        // material={nodes["Guide-Mesh-Car032"].material}
        position={[0, -0.01, 0]}
        material-color="#ffceb8"
      />
      {/* back left bumper */}
      <mesh
        geometry={nodes["Guide-Mesh-Car031"].geometry}
        // material={materials["Glass-Red"]}
        position={[0, 0, -0.01]}
        rotation={[-Math.PI, 0, 0]}
        scale={[-1.01, -1, -1]}
        material-color="#800113"
      />
      <mesh
        geometry={nodes["Guide-Mesh-Car030"].geometry}
        // material={materials["Back-Bottom-Paint"]}
        material-color="#67000d"
      />
      <mesh
        geometry={nodes["Guide-Mesh-Car028"].geometry}
        // material={materials["Car-Paint-Red"]}
        material-color="#67000d"
      />
      {/* front left nose */}
      <mesh
        geometry={nodes["Guide-Mesh-Car027"].geometry}
        // material={materials["Rubber-Black-Deep"]}
        material-color="#ffceb8"
      />
      {/* front left bottom bumper */}
      <mesh
        geometry={nodes["Guide-Mesh-Car020"].geometry}
        // material={materials["Car-Paint-Red"]}
        material-color="#e3a496"
      />
      <mesh
        geometry={nodes["Guide-Mesh-Car022"].geometry}
        // material={materials["Rubber-Black"]}
      />
      <mesh
        geometry={nodes["Guide-Mesh-Car012"].geometry}
        // material={materials["Rubber-Black"]}
      />
      <mesh
        geometry={nodes["Guide-Mesh-Car013"].geometry}
        material={materials["Glass-Clear"]}
      />
      {/* <mesh
        geometry={nodes["Guide-Mesh-Car011"].geometry}
        // material={materials["Metal-Chrome-SideLogo"]}
        material-color="#d9a997"
      /> */}
      <mesh
        geometry={nodes.LeftTrunk.geometry}
        // material={materials["Car-Paint-Red"]}
        material-color="#67000d"
      />
      {/* the ass */}
      <mesh
        geometry={nodes["Guide-Mesh-Car006"].geometry}
        // material={materials["Car-Paint-Red"]}
        material-color="#55010d"
      />
      {/* left front corner */}
      <mesh
        geometry={nodes["Guide-Mesh-Car002"].geometry}
        // material={materials["Car-Paint-Red"]}
        material-color="#ffceb8"
      />
      <mesh
        geometry={nodes["Guide-Mesh-Car005"].geometry}
        // material={materials["Car-Paint-Red"]}
        material-color="#d08873"
      />
      <mesh
        geometry={nodes["Guide-Mesh-Car004"].geometry}
        // material={materials["Car-Paint-Red"]}
        material-color="#fca588"
      />
      <mesh
        geometry={nodes["Guide-Mesh-Car001"].geometry}
        // material={materials["Car-Paint-Red"]}
        material-color="#eeb9a6"
      />
      <mesh
        geometry={nodes.FrontLeftCover.geometry}
        // material={materials["Car-Paint-Red"]}
        material-color="#fedccd"
      />
      <mesh
        geometry={nodes.Plane048.geometry}
        material={materials["Metal-Chrome-SideLogo"]}
        position={[0, 0, -3.79]}
      />
      <mesh
        geometry={nodes.Plane049.geometry}
        // material={materials["Metal-Chrome-SideLogo"]}
        position={[0, 0, -3.06]}
        material-color="#fedccd"
      />
      <mesh
        geometry={nodes.Plane055.geometry}
        material={materials["Metal-Chrome-SideLogo"]}
        position={[0.95, -0.06, 1]}
        rotation={[Math.PI / 2, 0, -Math.PI / 2]}
        scale={0.19}
      />
      <mesh
        geometry={nodes.Circle047.geometry}
        material={materials["Metal-Chrome-SideLogo"]}
        position={[0, 0, -3.73]}
      />
      <mesh
        geometry={nodes.Plane084.geometry}
        material={materials["Metal-Chrome-SideLogo"]}
        position={[1.36, 0, 0]}
        rotation={[Math.PI / 2, 0, -Math.PI / 2]}
      />
      <mesh
        geometry={nodes.Circle048.geometry}
        material={nodes.Circle048.material}
        position={[0, 0.1, 2.42]}
        scale={0.12}
      />
      <mesh
        geometry={nodes.FrontRightCover.geometry}
        // material={materials["Car-Paint-Red.002"]}
        rotation={[-3.14, 0, 0]}
        scale={[-1.01, -1, -1]}
        material-color="#fedccd"
      />
      <mesh
        geometry={nodes.FrontRightWindow.geometry}
        // material={materials["Glass-Tinted.001"]}
        rotation={[-Math.PI, 0, 0]}
        scale={[-1.01, -1, -1]}
        material-color="#ffede5"
      />
      <mesh
        geometry={nodes.TopRightCover.geometry}
        // material={materials["Glass-Tinted.002"]}
        rotation={[-Math.PI, 0, 0]}
        scale={[-1.01, -1, -1]}
        material-color="#fff5f0"
      />
      <mesh
        geometry={nodes.BackLeftCover.geometry}
        // material={materials["Car-Paint-Red.003"]}
        material-color="#fff5f0"
      />
      <mesh
        geometry={nodes.RightTrunk.geometry}
        // material={materials["Car-Paint-Red.004"]}
        rotation={[-Math.PI, 0, 0]}
        scale={[-1.01, -1, -1]}
        material-color="#800113"
      />
      <mesh
        geometry={nodes["Guide-Mesh-Car003"].geometry}
        material={materials["Glass-Clear.001"]}
        rotation={[-Math.PI, 0, 0]}
        scale={[-1.01, -1, -1]}
      />
      <mesh
        geometry={nodes["Guide-Mesh-Car010"].geometry}
        // material={materials["Car-Paint-Red.005"]}
        rotation={[-Math.PI, 0, 0]}
        scale={[-1.01, -1, -1]}
        material-color="#800113"
      />
      <mesh
        geometry={nodes["Guide-Mesh-Car015"].geometry}
        // material={materials["Back-Bottom-Paint.001"]}
        rotation={[-Math.PI, 0, 0]}
        scale={[-1.01, -1, -1]}
        material-color="#800113"
      />
      <mesh
        geometry={nodes["Guide-Mesh-Car016"].geometry}
        // material={materials["Car-Paint-Red.006"]}
        rotation={[-Math.PI, 0, 0]}
        scale={[-1.01, -1, -1]}
        material-color="#fedccd"
      />
      <mesh
        geometry={nodes.Circle049.geometry}
        // material={materials["Car-Paint-Red.007"]}
        rotation={[-Math.PI, 0, 0]}
        scale={-0.02}
      />
      <mesh
        geometry={nodes["Guide-Mesh-Car007"].geometry}
        material={materials["Glass-Clear.002"]}
        rotation={[-Math.PI, 0, 0]}
        scale={[-0.99, -1, -0.99]}
      />
      {/* right front corner */}
      <mesh
        geometry={nodes["Guide-Mesh-Car017"].geometry}
        // material={materials["Car-Paint-Red.009"]}
        rotation={[-Math.PI, 0, 0]}
        scale={[-1.01, -1, -1]}
        material-color="#ffceb8"
      />
      {/* left bottom horizontal line */}
      <mesh
        geometry={nodes["Guide-Mesh-Car018"].geometry}
        // material={materials["Car-Paint-Red.010"]}
        rotation={[-Math.PI, 0, 0]}
        scale={[-1.01, -1, -1]}
        material-color="#fca588"
      />
      <mesh
        geometry={nodes["Guide-Mesh-Car019"].geometry}
        // material={materials["Rubber-Black.001"]}
        rotation={[-Math.PI, 0, 0]}
        scale={[-1.01, -1, -1]}
      />
      <mesh
        geometry={nodes["Guide-Mesh-Car023"].geometry}
        // material={materials["Rubber-Black.002"]}
        rotation={[-Math.PI, 0, 0]}
        scale={[-1.01, -1, -1]}
      />
      <mesh
        geometry={nodes["Guide-Mesh-Car029"].geometry}
        // material={materials["Car-Paint-Red.011"]}
        rotation={[-Math.PI, 0, 0]}
        scale={[-1.01, -1, -1]}
        material-color="#bb897a"
      />
      {/* right front bottom bumper */}
      <mesh
        geometry={nodes["Guide-Mesh-Car034"].geometry}
        // material={materials["Rubber-Black-Deep.001"]}
        rotation={[-Math.PI, 0, 0]}
        scale={[-0.98, -1, -1]}
        material-color="#fdc6b0"
      />
      {/* left mirror front*/}
      <mesh
        geometry={nodes.Plane002.geometry}
        // material={materials["Car-Paint-Red"]}
        material-color="#d9a997"
      />
      {/* left mirror stand */}
      <mesh
        geometry={nodes.Plane003.geometry}
        // material={materials["Metal-Black-Rough"]}
        material-color="#d9a997"
      />
      {/* left mirror side */}
      <mesh
        geometry={nodes.Plane004.geometry}
        // material={materials["Glass-Clear-Rigged"]}
        material-color="#d9a997"
      />
      {/* left mirror*/}
      <mesh
        geometry={nodes.Plane005.geometry}
        // material={materials["Metal-Black-Rough"]}
        material-color="#ffceb8"
      />
      {/* right mirror */}
      <mesh
        geometry={nodes.Plane006.geometry}
        // material={materials["Metal-Black-Rough.001"]}
        rotation={[-Math.PI, 0, 0]}
        scale={[-1.01, -1, -1]}
        material-color="#ffceb8"
      />
      <mesh
        geometry={nodes.Plane007.geometry}
        // material={materials["Glass-Clear-Rigged.001"]}
        rotation={[-Math.PI, 0, 0]}
        scale={[-1.01, -1, -1]}
        material-color="#d9a997"
      />
      <mesh
        geometry={nodes.Plane044.geometry}
        // material={materials["Car-Paint-Red.008"]}
        rotation={[-Math.PI, 0, 0]}
        scale={[-1.01, -1, -1]}
        material-color="#d9a997"
      />
      <mesh
        geometry={nodes.Plane050.geometry}
        // material={materials["Metal-Black-Rough.001"]}
        rotation={[-Math.PI, 0, 0]}
        scale={[-1.01, -1, -1]}
        material-color="#d9a997"
      />
      {/* left front mirror */}
      <mesh
        geometry={nodes["Guide-Mesh-Car036"].geometry}
        // material={materials["Glass-Tinted"]}
        material-color="#ffceb8"
      />
      {/* left back mirror */}
      <mesh
        geometry={nodes["Guide-Mesh-Car037"].geometry}
        // material={materials["Glass-Tinted"]}
        material-color="#ffceb8"
      />
      <mesh
        geometry={nodes["Guide-Mesh-Car038"].geometry}
        // material={materials["Metal-Chrome-SideLogo"]}
        material-color="#e3d1c5"
      />
      {/* left front mirror downside */}
      <mesh
        geometry={nodes["Guide-Mesh-Car040"].geometry}
        // material={materials["Metal-Chrome-SideLogo"]}
        material-color="#ffceb8"
      />
      <mesh
        geometry={nodes["Guide-Mesh-Car041"].geometry}
        // material={materials["Metal-Chrome-SideLogo"]}
        material-color="#ffceb8"
      />
      <mesh
        geometry={nodes["Guide-Mesh-Car042"].geometry}
        // material={materials["Rubber-Black"]}
      />
      <mesh
        geometry={nodes["Guide-Mesh-Car043"].geometry}
        // material={materials["Rubber-Black"]}
        material-color="#ffceb8"
      />
      {/* right mirror */}
      <mesh
        geometry={nodes["Guide-Mesh-Car044"].geometry}
        // material={materials["Glass-Tinted.004"]}
        rotation={[-Math.PI, 0, 0]}
        scale={[-1.01, -1, -1]}
        material-color="#ffceb8"
      />
      {/* right mirror */}
      <mesh
        geometry={nodes["Guide-Mesh-Car045"].geometry}
        // material={materials["Glass-Tinted.004"]}
        rotation={[-Math.PI, 0, 0]}
        scale={[-1.01, -1, -1]}
        material-color="#ffceb8"
      />
      {/* right mirror side */}
      <mesh
        geometry={nodes["Guide-Mesh-Car046"].geometry}
        // material={materials["Rubber-Black.003"]}
        rotation={[-Math.PI, 0, 0]}
        scale={[-1.01, -1, -1]}
        material-color="#ffceb8"
      />
      {/* right mirror side */}
      <mesh
        geometry={nodes["Guide-Mesh-Car047"].geometry}
        // material={materials["Metal-Chrome-SideLogo.001"]}
        rotation={[-Math.PI, 0, 0]}
        scale={[-1.01, -1, -1]}
        material-color="#ffceb8"
      />
      <mesh
        geometry={nodes["Guide-Mesh-Car049"].geometry}
        material={materials["Rubber-Black.003"]}
        rotation={[-Math.PI, 0, 0]}
        scale={[-1.01, -1, -1]}
        material-color="#d9a997"
      />
      {/* right mirror side */}
      <mesh
        geometry={nodes["Guide-Mesh-Car051"].geometry}
        // material={materials["Metal-Chrome-SideLogo.001"]}
        rotation={[-Math.PI, 0, 0]}
        scale={[-1.01, -1, -1]}
        material-color="#ffceb8"
      />
      <mesh
        geometry={nodes["Guide-Mesh-Car052"].geometry}
        // material={materials["Metal-Chrome-SideLogo.001"]}
        rotation={[-Math.PI, 0, 0]}
        scale={[-1.01, -1, -1]}
        material-color="#ffceb8"
      />
      <mesh
        geometry={nodes.BackLeftWindow001.geometry}
        // material={materials["Glass-Tinted.005"]}
        rotation={[-Math.PI, 0, 0]}
        scale={[-1.01, -1, -1]}
        material-color="#ffceb8"
      />
      <mesh
        geometry={nodes.Plane051.geometry}
        // material={materials["Metal-Black-Rough.002"]}
        rotation={[-Math.PI / 2, 0, 0]}
        scale={[-1.01, -1, -1]}
        material-color="#bb897a"
      />
      <mesh
        geometry={nodes["Guide-Mesh-Car048"].geometry}
        // material={materials["Rubber-Black.004"]}
        rotation={[-Math.PI, 0, 0]}
        scale={[-1.01, -1, -1]}
        material-color="#bb897a"
      />
      {/* front chimney */}
      <mesh
        geometry={nodes.Plane016.geometry}
        // material={materials["Metal-Black-Rough.003"]}
        rotation={[-Math.PI / 2, 0, 0]}
        scale={[-1.01, -1, -1]}
        material-color="#dfa492"
      />
      <mesh
        geometry={nodes.Plane018.geometry}
        // material={materials["Metal-Black-Rough.004"]}
        rotation={[-Math.PI / 2, 0, 0]}
        scale={[-1.01, -1, -1]}
        material-color="#dfa492"
      />
      <mesh
        geometry={nodes.Plane019.geometry}
        // material={materials["Metal-Black-Rough.005"]}
        rotation={[-Math.PI / 2, 0, 0]}
        scale={[-1.01, -1, -1]}
        material-color="#dfa492"
      />
      <mesh
        geometry={nodes.Plane021.geometry}
        // material={materials["Metal-Black-Rough.006"]}
        rotation={[-Math.PI / 2, 0, 0]}
        scale={[-1.01, -1, -1]}
        material-color="#dfa492"
      />
      <mesh
        geometry={nodes.Plane023.geometry}
        // material={materials["Metal-Black-Rough.007"]}
        rotation={[-Math.PI / 2, 0, 0]}
        scale={[-1.01, -1, -1]}
        material-color="#dfa492"
      />
      <mesh
        geometry={nodes.Plane028.geometry}
        // material={materials["Metal-Black-Rough.008"]}
        rotation={[-Math.PI / 2, 0, 0]}
        scale={[-1.01, -1, -1]}
        material-color="#dfa492"
      />
      <mesh
        geometry={nodes.Plane029.geometry}
        // material={materials["metal-Chrome-rough.002"]}
        rotation={[-Math.PI / 2, 0, 0]}
        scale={[-1.01, -1, -1]}
        material-color="#dfa492"
      />
      <mesh
        geometry={nodes["Guide-Mesh-Car053"].geometry}
        // material={materials["Rubber-Black-Deep.002"]}
        rotation={[-Math.PI, 0, 0]}
        scale={[-1.01, -1, -1]}
        material-color="#ffceb8"
      />
      <mesh
        geometry={nodes.Text.geometry}
        material={nodes.Text.material}
        position={[-0.06, -0.3, 2.54]}
        rotation={[Math.PI / 2, 0, 0]}
        scale={0.04}
      />
      <mesh
        geometry={nodes.Text001.geometry}
        material={nodes.Text001.material}
        position={[0.05, -0.19, -2.53]}
        rotation={[Math.PI / 2, 0, -3.14]}
        scale={0.04}
      />
      {/* right bumper */}
      <mesh
        geometry={nodes["Guide-Mesh-Car054"].geometry}
        // material={materials["Glass-Red.001"]}
        position={[0, 0, -0.01]}
        material-color="#67000d"
      />
      {/* right bumper */}
      <mesh
        geometry={nodes["Guide-Mesh-Car055"].geometry}
        // material={materials["Metal-Black-Rough.009"]}
        rotation={[-Math.PI, 0, 0]}
        scale={[-1.01, -1, -1]}
        material-color="#bb897a"
      />
    </group>
  );
}
