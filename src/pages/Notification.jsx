import React from 'react';
import { IoMdContact } from "react-icons/io";
import { IoCallOutline } from "react-icons/io5";
import Navbar from '../components/Navbar'
import Hero from '../components/Hero';


const Notification = () => {
    return (
        <>
            <div className='top   '>

                <div className='heading'>
                    <h1>Basic Mathematics 101</h1>
                </div>


                <div className='support'>
                    <div>
                        <IoCallOutline />
                    </div>
                    <div>
                        <p>call teacher</p>
                    </div>
                    <div>
                        <IoMdContact />

                    </div>
                    <div>
                        <p>contact</p>
                    </div>
                </div>


            </div>


            < Navbar />
            <Hero />




        </>

    );
};

export default Notification;