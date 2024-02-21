import { createSignal, type Component, JSXElement, For, Suspense, Switch, Match } from 'solid-js';
import imageSrc from '../assets/2wong.png'
import imagesrc from '../assets/logo.png'
import imageeSrc from '../assets/wong2.png'
import imageeeSrc from '../assets/3wong.png'
import dress from '../assets/clt1.png'
import dress2 from '../assets/clt7.png'
import sepatu from '../assets/clt3.png'
import baju from '../assets/clt8.png'
import { Routes, Route, A } from '@solidjs/router';
import { api } from "../config/api";
import { lazy, onMount } from 'solid-js';
import Store from '../store';
export interface TestProps { children?: JSXElement }
import './shop.css'
import { getClient, input_client } from '../service/Service';
import Navbar from './navbar';
import { style } from 'solid-js/web';
import Footer from './footer';
import am5themes_Animated from "@amcharts/amcharts5/themes/Animated";
import * as am5 from "@amcharts/amcharts5/index";
import * as am5xy from "@amcharts/amcharts5/xy";
import * as am5stock from "@amcharts/amcharts5/stock";
import * as am5percent from "@amcharts/amcharts5/percent";


const Shop: Component<TestProps> = (props: any) => {

    const [Shop, setShop] = createSignal([
        { id: '1',gambar: (dress), name: 'Elastic dress', harga: '$ 495.00 USD', bintang:'★★★★★' },
        { id: '2',gambar: (dress2), name: 'Turtleneck', harga: '$ 495.00 USD', bintang:'★★★★★' },
        { id: '3',gambar: (sepatu), name: 'Shoes', harga: '$ 495.00 USD', bintang:'★★★★★' },
        { id: '4',gambar: (baju), name: 'Bag', harga: '$ 495.00 USD', bintang:'★★★★★' },
    ]);

 
    return (
        <>
            <div><Navbar /></div>
            <div style="display:flex;">
                <div class="shop1">
                    <ul class='shop-available' style="width:50%;font-family:'beau'">Available Products</ul>
                    <ul class='shop-own' style="width:50%;font-family:'pm';">Created your own visual style. Let it be unique for yourself and yet identifiable for others. Check out Our collection to identify who you are.</ul>
                </div>
            </div>
            <div class="border-t bg-base-200 text-base-content border-base-300" style=" margin-top:2%"/>
         
                <div  style="display:flex; margin-left:3%">
                    
                <For each={Shop()}>{(shopp, i) =>
                    <div id={i.toString()} class="shop-kiri "  style="width:22%;" >
                       <a link href="#/option"> <img src={shopp.gambar}  class="shop-kiri-foto2"/></a>
                        <span class="shop-dress">{shopp.name}</span>
                        <div style="display:flex;" >
                            <div>
                        <span class="shop-495">{shopp.harga}</span>
                        </div>
                            <div>
                        <span class="shop-bintang">{shopp.bintang}</span>
                        </div>
                        </div>
                    </div>
                    }
                    </For>
                </div>
                <div class="border-t bg-base-200 text-base-content border-base-300" style=" margin-top:5%"/>
                <div style="margin-top:-30%">
            <Footer/>
        </div>
           {/* <div class="trans-tab">
                <ul class="inline">
                    <li classList={{ selected: tab() === 0 }} onClick={updateTab(0)}>
                        login
                    </li>
                    <li classList={{ selected: tab() === 1 }} onClick={updateTab(1)}>
                        Register
                    </li>
                </ul>
                <div class="tab">
                    <Suspense fallback={<div class="loader">Loading...</div>}>
                        <Switch>
                            <Match when={tab() === 0}>
                              <div class="login-pp">

                              </div>
                            </Match>
                            <Match when={tab() === 1}>
                         
                            </Match>
                        </Switch>
                    </Suspense>
                </div>
           </div> */}
        </>
    );
};

export default Shop;