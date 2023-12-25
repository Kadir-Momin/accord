// import React, { useState } from "react"
import ImageSlider  from './ImageSlider'
import img1 from '../Image/accordhome.jpg'
import img2 from '../Image/accordhome.jpg'
import img3 from '../Image/accordhome.jpg'
import img4 from '../Image/accordhome.jpg'
import img5 from '../Image/accordhome.jpg'
// import { ArrowBigLeft, ArrowBigRight} from 'lucide-react'



const Images = [
    {url: img1, alt: "Image One"},
    {url: img2, alt: "Image Two"},
    {url: img3, alt: "Image Three"},
    {url: img4, alt: "Image Four"},
    {url: img5, alt: "Image Five"}
]

// const Images = [ img1, img2, img3, img4, img5 ]

const Slider = () => {    

    return (
        <div style={{ maxWidth:'1500px', width:'100%', height: '500px', margin: '0 auto'}}>
            <ImageSlider Images={Images} /> 
        </div>
        
    )
}

export default Slider