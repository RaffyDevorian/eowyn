import { createSignal, type Component, JSXElement, For } from 'solid-js';
import imageSrc from '../assets/2wong.png'
import imagesrc from '../assets/logo.png'
import imageeSrc from '../assets/wong2.png'
import imageeeSrc from '../assets/3wong.png'
import { Routes, Route, A } from '@solidjs/router';
import { api } from "../config/api";
import { lazy, onMount } from 'solid-js';
import Store from '../store';
export interface TestProps { children?: JSXElement }
import './about.css'
import { getClient, input_client } from '../service/Service';
import Navbar from './navbar';
import { style } from 'solid-js/web';
import Footer from './footer';



const About: Component<TestProps> = (props: any) => {
    return (
        <>
            <div><Navbar /></div>
            <div class="perempuan" />
            <div style="display:flex;">
                <div class="kiri" style="width:50%;">
                    <ul class='abt-beyond' style="width:40%;font-family:'times new roman'">Beyond Fashion</ul>
                    <ul class='abt-own' style="width:70%;font-family:'pm'">Created your own visual style. Let it be unique for yourself and yet identifiable for others. Check out Our collection to identify who you are.</ul>
                    <a href="#/shop"><button type="submit" class="btn-abt" style="font-family:'times new roman'">Shop Now</button></a>
                </div>
                <div class="kanan" style="width:50%;">
                    <div class="card card-side bg-base-100 shadow-xl pickbaju">
                        <div class="baju" />
                        <div class="card-body">
                            <h2 class="card-title" style="   color: white;     margin-top: -10px; font-family:'times new roman'">Elastic top</h2>
                            <p style="   color: white;    margin-top: -3px;">$ 145.000 USD</p>
                            <p style="   color: white;">★★★★★</p>
                            <div class="card-actions justify-end">
                            </div>
                        </div>
                    </div>
                    <div class="card card-side bg-base-100 shadow-xl clena">
                        <div class="clena2" />
                        <div class="card-body">
                            <h2 class="card-title" style="   color: white;     margin-top: -10px;  font-family:'times new roman'; font-size:20px:">Zip short</h2>
                            <p style="   color: white;    margin-top: -3px;">$ 265.000 USD</p>
                            <p style="   color: white;">★★★★★</p>
                            <div class="card-actions justify-end">
                            </div>
                        </div>
                    </div>
                </div>

            </div>
            <div style="display:flex;">
                <div class="kirii2" style="width:50%;">
                    <div class="orang-kiri" />
                </div>
                <div class="kanan2" style="width:50%;">
                    <div class="orang-kanan" />
                </div>
            </div>
            <div>
                <h1 class="txt-collection">Our Product</h1>
                <h1 class="txt-collection2">Our Collection</h1>
                <h1 class="txt-collection3">Fashion is part of the daily air and it changes all the time, with all the events. You can even see the approaching of a revolution in clothes. You can see and feel everything in clothes.</h1>
                <a href="#/collection"><button type="submit" class="btn-collection" style="font-family:'times new roman'">View Our Collection</button></a>
            </div>

            <div>
                <h1 class="txt-social">Our Social Media</h1>
                <h1 class="txt-social2">Our Instagram</h1>
                <h1 class="txt-social3">Follow our instagram account to see what’s happening!</h1>
            </div>
            <div style="margin-top:1%">
                <div class="cewe1"/>
                <div class="cewe2"/>
                <div class="cewe5"/>
                <div class="cewe4"/>
                <div class="cewe3"/>
            </div>
        <div  style="margin-top:4%">
            <Footer/>
        </div>
        </>
    );
};

export default About;