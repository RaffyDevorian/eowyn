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
import './footer.css'
import { getClient, input_client } from '../service/Service';
import Navbar from './navbar';
import { style } from 'solid-js/web';



const Footer: Component<TestProps> = (props: any) => {

    return (
        <>
              <div>
                <footer class="footer p-10 bg-base-200 text-base-content ftr-eowyn">
                    <nav style="margin-left:40%">
                        <header class="footer-title">Company</header>
                        <a class="link link-hover">About Us</a>
                        <a class="link link-hover">How It Works</a>
                        <a class="link link-hover">Careers</a>
                    </nav>
                    <nav style="margin-left:40%">
                        <header class="footer-title">Shipping & Returns</header>
                        <a class="link link-hover">Track order</a>
                        <a class="link link-hover">Return order</a>
                        <a class="link link-hover">FAQ</a>
                    </nav>
                    <nav style="margin-left:40%">
                        <header class="footer-title">Customer care</header>
                        <a class="link link-hover">Text (415) 223-8757</a>
                        <a class="link link-hover">hello@eowyn.com</a>
                        <a class="link link-hover">Mon - Fri 9am - 5pm EST</a>
                        <a class="link link-hover">Sat - Sun 12pm - 4pm EST</a>
                    </nav>
                </footer>
                <footer class="footer px-10 py-4 border-t bg-base-200 text-base-content border-base-300 ftr2-eowyn">
                    <aside class="items-center grid-flow-col">
                        <p style="font-family:'beau'; font-size:30px; color:black; font-weight:100">eowyn</p>
                    </aside>
                </footer>
            </div>
        </>
    );
};

export default Footer;