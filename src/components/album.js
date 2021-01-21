import React, { useEffect, useRef, useState } from "react"
import { useTexture } from "@react-three/drei/useTexture"
import { useAspect } from "@react-three/drei/useAspect"
import { meshBounds } from "@react-three/drei/meshBounds"
// import { Html } from "@react-three/drei"
import AmnioverseCover from "../images/amnioverse-cropped.jpg"
import EsrevoinmaCover from "../images/esrevoinma-cropped.jpg"
import AboveCover from "../images/above-between-below-cropped.jpg"
import IndustryCover from "../images/the-end-of-industry-cropped.jpg"
import RuinismCover from "../images/ruinism-cropped.jpg"
import LustmoreCover from "../images/lustmore-edit-2.jpg"
import NostalchicCover from "../images/nostalchic-cropped.jpg"
import { useFrame } from "react-three-fiber"
import EarthVideo from "../videos/earth.mp4"
import LimbVideo from "../videos/limb-clip.mp4"

const Album = ({ url, album }) => {
  const amnioverse = useTexture(AmnioverseCover)
  const esrevoinma = useTexture(EsrevoinmaCover)
  const above = useTexture(AboveCover)
  const industry = useTexture(IndustryCover)
  const ruinism = useTexture(RuinismCover)
  const lustmore = useTexture(LustmoreCover)
  const nostalchic = useTexture(NostalchicCover)
  const scale = useAspect("cover", 1200, 600)
  // const ref = useRef()
  // const [zoom, toggleZoom] = useState(true)
  // useEffect(() => {
  //   const interval = setInterval(() => {
  //     toggleZoom(!zoom)
  //   }, 30000)
  //   return () => clearInterval(interval)
  // })

  // const zoomRotate = () => {
  //   ref.current.position.z += 0.00015
  //   // ref.current.rotation.z += 0.00008
  // }

  // useFrame(
  //   () => (zoom ? zoomRotate() : null)
  //   // ref.current.position.z < 0.5 ? (ref.current.position.z += 0.0003) : null
  // )
  // const Limb = LimbVideo
  // const Earth = EarthVideo
  const [x, y] = useAspect("cover", 1920, 1080)

  const [video] = useState(() => {
    const vid = document.createElement("video")
    vid.src = url
    vid.crossOrigin = "Anonymous"
    vid.loop = true
    vid.autoplay = true
    vid.muted = true
    vid.play()
    return vid
  })

  useEffect(() => {
    console.log(url)
  }, [url])

  return (
    <mesh scale={[x, y, 1]} raycast={meshBounds}>
      <planeBufferGeometry attach="geometry" />
      <meshBasicMaterial attach="material">
        <videoTexture attach="map" args={[video]} />
      </meshBasicMaterial>
      {/* <meshBasicMaterial
        attach="material"
        map={
          album == "Amnioverse"
            ? amnioverse
            : album == "Esrevoinma"
            ? esrevoinma
            : album == "Above_Between_Below"
            ? above
            : album == "The End of Industry"
            ? industry
            : album == "Ruinism"
            ? ruinism
            : album == "Lustmore"
            ? lustmore
            : nostalchic
        }
      /> */}
    </mesh>
  )
}

export default Album
