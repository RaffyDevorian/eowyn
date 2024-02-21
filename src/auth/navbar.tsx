import { createSignal, type Component, JSXElement } from 'solid-js';
import imageSrc from '../assets/girl.png'
import imagesrc from '../assets/robotgede.png'
import imageeSrc from '../assets/three.png'
import imageeeSrc from '../assets/3wong.png'
import { Routes, Route, A } from '@solidjs/router';
import { api } from "../config/api";
import { lazy, onMount } from 'solid-js';
import Store from '../store';
export interface TestProps { children?: JSXElement }
import './navbar.css'
import { login } from '../service/Service';


const Navbar: Component<TestProps> = (props: any) => {

    const [image, setImage] = createSignal(imageSrc);
    const [imagee, setimage] = createSignal(imagesrc);
    const [imageee, setimagee] = createSignal(imageeSrc);
    const [imageeee, setimageee] = createSignal(imageeeSrc);
    const [inputValue88, setInputValue88] = createSignal('');
    const [inputValue39, setInputValue39] = createSignal('');

    const hasil34 = async () => {
        console.log('email ->', inputValue88())
        console.log('password ->', inputValue39())

        login({ 'username': inputValue88(), 'password': inputValue39() }).then((data: any) => {
            console.log('akun ->', data);


        })
    }

    return (
        <>
            <div>
                <div class="navbar bg-base-100">
                    <div style="width:30%; margin-bottom:1%; align-self: self-end; display: flex; ">
                        <span class='houston'>eowyn</span>
                    </div>
                    <div style="width:70%; justify-content: end; display:flex;">
                        <div class="flex-none; heigt: 5vh">
                            <a link href="#/" class="nav active" aria-current="page">About</a>
                            <a link href="#/collection" class="nav active" aria-current="page">Collection</a>
                            <a link href="#/shop " class="nav inactive">Shop</a>
                            <a link href="#/statistic" class="nav inactive">Statistic</a>
                            <a link href="#/login" class="nav login btn btn-sm">Sign In</a>
                        </div>
                    </div>
                </div>
</div>
        </>

    );
};

export default Navbar;