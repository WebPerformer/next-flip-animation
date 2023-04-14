import React, { useEffect, useRef } from "react"

// Locomotive Scroll
import { LocomotiveScrollProvider } from "react-locomotive-scroll"

// GSAP
import { gsap } from "gsap"
import { Flip } from "gsap/dist/Flip"
import { CustomEase } from "gsap/dist/CustomEase"

export default function Home() {

  const gallery = useRef(null)
  const galleryContainer = useRef(null)
  const btnRef = useRef(null)

  useEffect(() => {
    gsap.registerPlugin(Flip)

    CustomEase.create("cubic", "0.83, 0, 0.17, 1")
    const gallery = galleryContainer.current,
    images = gsap.utils.toArray(".img")

    btnRef.current.addEventListener("click", () => {
      let state = Flip.getState(".img-gallery-container .img")
      
      gallery.classList.toggle("order")
      images.forEach((img, i) => {
        img.classList.toggle("reorder")
      })

      Flip.from(state, {
        absolute: true,
        duration: 2,
        stagger: 0.05,
        ease: "cubic"
      })
    })
  }, [])

  return (
    <LocomotiveScrollProvider
      options={
        {
          smooth: true
        }
      }
      watch={
        [

        ]
      }
      galleryContainer={galleryContainer.current}
    >
      <div className="img-gallery" data-scroll-container ref={galleryContainer}>
        <div className="img-gallery-container" data-scroll ref={gallery}>
          <div className="img">
            <img src="https://images.pexels.com/photos/15873635/pexels-photo-15873635.jpeg?auto=compress&cs=tinysrgb&w=400&lazy=load" alt="" />
          </div>
          <div className="img">
            <img src="https://images.pexels.com/photos/10401968/pexels-photo-10401968.jpeg?auto=compress&cs=tinysrgb&w=400&lazy=load" alt="" />
          </div>
          <div className="img">
            <img src="https://images.pexels.com/photos/15858941/pexels-photo-15858941.jpeg?auto=compress&cs=tinysrgb&w=400&lazy=load" alt="" />
          </div>
          <div className="img">
            <img src="https://images.pexels.com/photos/14844108/pexels-photo-14844108.jpeg?auto=compress&cs=tinysrgb&w=400&lazy=load" alt="" />
          </div>
          <div className="img">
            <img src="https://images.pexels.com/photos/10477018/pexels-photo-10477018.jpeg?auto=compress&cs=tinysrgb&w=400&lazy=load" alt="" />
          </div>
        </div>
      </div>
      <div className="btn" ref={btnRef}>Flip Layout</div>
    </LocomotiveScrollProvider>
  )
}