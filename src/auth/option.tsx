import { createSignal, type Component, JSXElement, For, createEffect, onCleanup } from 'solid-js';
import imageSrc from '../assets/2wong.png'
import imagesrc from '../assets/logo.png'
import imageeSrc from '../assets/wong2.png'
import imageeeSrc from '../assets/3wong.png'
import { Routes, Route, A } from '@solidjs/router';
import { api } from "../config/api";
import { lazy, onMount } from 'solid-js';
import Store from '../store';
export interface TestProps { children?: JSXElement }
import './option.css'
import { getClient, input_client } from '../service/Service';
import Navbar from './navbar';
import { style } from 'solid-js/web';
import Footer from './footer';



const Option: Component<TestProps> = (props: any) => {
    return (
        <>
            <div><Navbar /></div>
            <div style='display:flex;'>
                <div class="clt-taskiri" style="width:50%;">
                    <div class='orang2' />
                </div>
                <div class="clt-taskanan" style="width:50%; margin-top:4%">
                    <h1 class="txt-opt">New Arrival</h1>
                    <h1 class="txt-opt2">Chainette Tank Top</h1>
                    <h1 class="txt-opt3">Cropped ivory tank top in ribbed cotton
                        chainette knit</h1>
                    <h1 class="txt-opt4" style="width:30%">$295.00 USD </h1>
                        <h1 class="txt-opt4" >Size</h1>
                </div>
            </div>
            <div style="margin-top: -40%;">
                <div class='orang3'/>
            </div>
            <div style="margin-top:-30%">
                <Footer />
            </div>
        </>
    );
};

export default Option;