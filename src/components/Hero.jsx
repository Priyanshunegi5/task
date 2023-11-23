import React from 'react'
import { CiCamera } from "react-icons/ci";
import { FaMicrophone } from "react-icons/fa6";
import { FaRegShareSquare } from "react-icons/fa";
import { FaRocketchat } from "react-icons/fa";
import { LiaShareSquareSolid } from "react-icons/lia";
const Hero = () => {
    return (
        <>
            <div className='parent-box'>
                <div className='box-1 '>



                    <div className='img-box '>


                        <div className='img-1 mb-4'>
                            <img src="https://images.unsplash.com/photo-1559629819-638a8f0a4303?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D" alt="" />

                        </div>
                        <div className='img-2'>
                            <img src="https://images.unsplash.com/photo-1490138139357-fc819d02e344?q=80&w=870&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D" alt="" />
                        </div>
                    </div>

                    <div class="grid grid-rows-2 grid-flow-col gap-5 mt-4  ">
                        <div>   <CiCamera  style={{ fontSize: '50px'}} /> </div>
                        <div>  <FaMicrophone style={{ fontSize: '50px'}} /> </div>
                        <div>     <FaRegShareSquare  style={{ fontSize: '50px'}}/> </div>
                        <div>       <FaRocketchat style={{ fontSize: '50px'}} /> </div>
                        <div>    <LiaShareSquareSolid  style={{ fontSize: '50px'}}/> </div>


                    </div>




                    {/* <div className='icons '>

                      
                        <FaMicrophone />
                        <FaRegShareSquare />
                        <FaRocketchat />
                        <LiaShareSquareSolid />
                    </div> */}



                </div>

                <div className='box-2 ml-4 mt-6'>
                    <iframe width="100%" height="100%" src="https://www.youtube.com/embed/T8XY_wL9G1o?si=axmEGvzZ0Uirl4K_" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" allowfullscreen></iframe>

                </div>


            </div>
        </>
    )
}

export default Hero
