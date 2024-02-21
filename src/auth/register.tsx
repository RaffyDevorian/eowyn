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
import './register.css'
import { getClient, input_client } from '../service/Service';
import Navbar from './navbar';
import { style } from 'solid-js/web';



const Register: Component<TestProps> = (props: any) => {
    const [inputValue, setInputValue] = createSignal("");

    const [imG, setImG]: any = createSignal();
    const hasil1 = async () => {


        // // console.log("img ->", inputValue());
        var todayDate = new Date().toISOString().slice(0, 10);
        // console.log(todayDate);

        input_client({
            id_user: 6,
            tittle: "Test",
            img_client: base64Data(),
        }).then((data: any) => {
            // console.log("detail account->", data);
        });
    };
    // // let res : any = '';
    // // res = document.querySelector(".local");
    // // res.addEventListener("change", (event : any) => {
    // //     const selectedfile = event.target.files;
    // //     if (selectedfile.length > 0) {
    // //       const [imageFile] = selectedfile;
    // //       const fileReader = new FileReader();
    // //       fileReader.onload = () => {
    // //         const srcData = fileReader.result;
    // //         // console.log('base64:', srcData)
    // //       };
    // //       fileReader.readAsDataURL(imageFile);
    // //     }
    //   });

    const inputData: any = [
        {
            "id": 1,
            "img_client": "test 1"
        },
        {
            "id": 2,
            "img_client": "test 2"
        },
        {
            "id": 3,
            "img_client": "test 3"
        },
        {
            "id": 4,
            "img_client": "test 4"
        },

        {
            "id": 5,
            "img_client": "test 5"
        },
        {
            "id": 6,
            "img_client": "test 6"
        },
        {
            "id": 7,
            "img_client": "test 7"
        },
        {
            "id": 8,
            "img_client": "test 8"
        }
    ];

    const chunkSize = 8; // Change this value to adjust the number of items per chunk



    onMount(() => {


        getClient().then((data: any) => {
            // // console.log('cekdataclient ->',  data[5]);
            // setImG(data[4].img_client);
            const outputData = data.reduce((acc: { datas: any[]; }[], cur: any, index: number) => {
                const chunkIndex = Math.floor(index / 8);
                if (!acc[chunkIndex]) {
                    acc[chunkIndex] = { datas: [] };
                }
                acc[chunkIndex].datas.push(cur);
                return acc;
            }, []);

            // console.log("CEKKK",JSON.stringify(outputData,null,4));
            let res = JSON.stringify(outputData, null, 8)
            setAtas(JSON.parse(res))
            // console.log("parse",Atas())
        })
    });


    const [image, setImage] = createSignal(imageSrc);
    const [imagee, setimage] = createSignal(imagesrc);
    const [imageee, setimagee] = createSignal(imageeSrc);
    const [imageeee, setimageee] = createSignal(imageeeSrc);

    const [base64Data, setBase64Data] = createSignal('');


    const handleFileChange = async (event: any) => {
        const file = event.target.files[0];
        // console.log("cek upload file", file)
        if (file) {
            const reader = new FileReader();
            reader.onload = () => {
                const result: any = reader.result;
                // console.log("result base64 -> ", result)
                setBase64Data(result);
            };
            reader.readAsDataURL(file);
        }
    }

    const [Atas, setAtas] = createSignal([

        [
            {
                "datas": [
                    {
                        "id": 1,
                        "img_client": "test 1",
                        "tittle": "test"
                    },
                    {
                        "id": 2,
                        "img_client": "test 2",
                        "tittle": "test"
                    }
                ]
            },
            {
                "datas": [
                    {
                        "id": 3,
                        "img_client": "test 3",
                        "tittle": "test"
                    },
                    {
                        "id": 4,
                        "img_client": "test 4",
                        "tittle": "test"
                    }
                ]
            }
        ]


    ]);





    return (
        <>
            <div class="kecil">
                <div style="display:flex;">
                    <div class="kiri2" style="width:50%;">
                        <div class="registercw">
                            <h1 class='houston2'>eowyn</h1>
                        </div>
                    </div>
                    <div class="kanan2" style="width:50%;">
                        <div  class="registercw2">
                        <h1 class="welcome-register">Welcome !</h1>
                        <h1 class="welcome-register2">Now let's make you a Eowyn Member.</h1>
                        <input type="text" placeholder="Full Name" class="registerinput" />
                        <input type="text" placeholder="Email address" class="registerinput" />
                        <input type="text" placeholder="Password" class="registerinput" />
                       <a link href="#/"> <button class="btn btn-wide registerbtn">Sign Up</button></a>
                        <div style="display:flex;">
                        <div style="width:50%">
                        <h1 class="registertxt">Already have an account ?</h1>
                        </div>
                        <div style="width:20%">
                        <a link href="#/login" class="link link-hover registertxt" style="color: #005dff;">Login</a>
                        </div>
                        </div>
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
};

export default Register;