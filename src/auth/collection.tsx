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
import './collection.css'
import { getClient, input_client } from '../service/Service';
import Navbar from './navbar';
import { style } from 'solid-js/web';
import Footer from './footer';



const Collection: Component<TestProps> = (props: any) => {
    const [days, setDays] = createSignal(15);
    const [hours, setHours] = createSignal(10);
    const [minutes, setMinutes] = createSignal(24);
    const [seconds, setSeconds] = createSignal(30);
  
    const updateCountdown = () => {
      setSeconds(seconds() - 0.5);
  
      if (seconds() < 0) {
        setSeconds(59);
        setMinutes(minutes() - 1);
      }
  
      if (minutes() < 0) {
        setMinutes(59);
        setHours(hours() - 1);
      }
  
      if (hours() < 0) {
        setHours(23);
        setDays(days() - 1);
      }
    };
  
    createEffect(() => {
      const countdownInterval = setInterval(updateCountdown, 1000);
  
      onCleanup(() => clearInterval(countdownInterval));
    });

    createEffect(() => {
        const countdownInterval = setInterval(updateCountdown, 1000);

        onCleanup(() => clearInterval(countdownInterval));
    });
    return (
        <>
            <div><Navbar /></div>
            <div class="clt-tengah-foto" />
            <div style="display:flex;">
                <div class="clt-kiri" style="width:50%;">
                    <div class="clt-kiri-foto" />
                    <span class="clt-dress">Elastic dress</span>
                    <span class="clt-495">$ 495.00 USD</span>
                </div>
                <div class="clt-kanan" style="width:50%;">
                    <div class="clt-kanan-foto" />
                </div>
            </div>

            <div style="display:flex;">
                <div class="clt-kiri2" style="width:50%;">
                    <div class="clt-kiri-foto2" />
                    <span class="clt-nova">Nova high sandals</span>
                    <span class="clt-695">$ 695.00 USD</span>
                </div>
                <div class="clt-kanan2" style="width:50%;">
                    <div class="clt-kanan-foto2" />
                    <span class="clt-nour">Nour hammour coat</span>
                    <span class="clt-1292">$ 1292.00 USD</span>
                </div>
            </div>
            <div>
                <h1 class='clt-seller'>BEST SELLER</h1>
            </div>
            <h1 class="clt-own">Created your own visual style. Let it be unique for yourself and yet identifiable for others.</h1>

            <div style="display:flex;">
                <div class="clt-kiri2" style="width:50%;">
                    <div class="clt-foto-sweater" />
                </div>
                <div class="clt-kanan2" style="width:50%;">
                    <ul class='clt-women' style="width:50%;font-family:'beau'">Women Wear Collection</ul>
                    <ul class='clt-what' style="width:70%;font-family:'pm'">What you wear is how you present yourself to the world, especially today, when human contacts are so quick. Fashion is instant language.</ul>
                    <a href="#/shop"> <button type="submit" class="btn-view" style="">View Wear Collection</button></a>
                </div>
            </div>
            <div style="display:flex;">
                <div class="clt-kiri3" style="width:50%;">
                    <ul class='clt-shoes' style="width:60%;font-family:'beau';    margin-left: 28%;">Shoe Collection</ul>
                    <ul class='clt-shoes2' style="width:70%;font-family:'pm'; margin-left: 28%;">Shoes are the quickest way for women to achieve instant metamorphosis. Check out Our shoe collection now.</ul>
                    <a href="#/shop"><button type="submit" class="btn-view" style="margin-left: 28%;">View Wear Collection</button></a>

                </div>
                <div class="clt-kanan3" style="width:50%;">
                    <div class="clt-foto-sepatu" />
                </div>
            </div>

            <div style="display:flex;">
                <div class="clt-kiri2" style="width:50%;">
                    <div class="clt-foto-tas" />
                </div>
                <div class="clt-kanan2" style="width:50%;">
                    <ul class='clt-women' style="width:50%;font-family:'beau'">Bag Collection</ul>
                    <ul class='clt-what' style="width:70%;font-family:'pm'">If you're gonna make connections which are innovative... you have to not have the same bag of experiences as everyone else does. Check out Our bag collection to see lists of bags.</ul>
                    <a href="#/shop"> <button type="submit" class="btn-view" style="">View Wear Collection</button></a>
                </div>
            </div>
            <div style='display:flex;'>
                <div class="clt-taskiri" style="width:50%;">
                    <div class='clt-tas1' />
                </div>
                <div class="clt-taskanan" style="width:50%;">
                    <div class='clt-tas2' />
                </div>
            </div>
            <div style="margin-top: -40%;">
                <h1 class="txt-clt1">On Sale Items</h1>
                <h1 class="txt-clt2">Deal of The Month</h1>
                <h1 class="txt-clt3">Check out Our collection to identify who you are.</h1>
                <h1 class="txt-clt4" style="width:30%">Get 50% OFF your order from $100 and More
                    Check out our collection for more detail</h1>
     <div class="grid grid-flow-col gap-5 text-center auto-cols-max" style="margin-left:39.5%; margin-top:3%">
      <div class="flex flex-col p-2 bg rounded-box text-black">
        <span class="countdown font-mono text-5xl">
          <span style={{ "--value": days() }}></span>
        </span>
        days
      </div>
      <div class="flex flex-col p-2 bg rounded-box text-black">
        <span class="countdown font-mono text-5xl">
          <span style={{ "--value": hours() }}></span>
        </span>
        hours
      </div>
      <div class="flex flex-col p-2 bg rounded-box text-black">
        <span class="countdown font-mono text-5xl">
          <span style={{ "--value": minutes() }}></span>
        </span>
        min
      </div>
      <div class="flex flex-col p-2 bg rounded-box text-black">
        <span class="countdown font-mono text-5xl" >
          <span style={{ "--value": seconds() }}></span>
        </span>
        sec
      </div>
    </div>
                <a href="#/shop"><button type="submit" class="btn-clt" style="font-family:'times new roman'">Shop Now</button></a>
            </div>
            <div style="margin-top:-20%">
                <Footer />
            </div>
        </>
    );
};

export default Collection;