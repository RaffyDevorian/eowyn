import { createSignal, type Component, JSXElement, For, Suspense, Switch, Match, Show } from 'solid-js';
import imageSrc from '../assets/2wong.png'
import imagesrc from '../assets/logo.png'
import imageeSrc from '../assets/wong2.png'
import imageeeSrc from '../assets/3wong.png'
import dress from '../assets/clt1.png'
import dress2 from '../assets/clt6.png'
import sepatu from '../assets/clt3.png'
import baju from '../assets/clt8.png'
import { Routes, Route, A } from '@solidjs/router';
import { api } from "../config/api";
import { lazy, onMount } from 'solid-js';
import Store from '../store';
export interface TestProps { children?: JSXElement }
import './statistic.css'
import { Inputkaryawan, getClient, input_client, updateteams } from '../service/Service';
import Navbar from './navbar';
import { style } from 'solid-js/web';
import Footer from './footer';
import AgGridSolid, { AgGridSolidRef } from 'ag-grid-solid';
import 'ag-grid-community/styles/ag-grid.css';
import 'ag-grid-community/styles/ag-theme-alpine.css';
import am5themes_Animated from "@amcharts/amcharts5/themes/Animated";
import * as am5 from "@amcharts/amcharts5/index";
import * as am5xy from "@amcharts/amcharts5/xy";
import * as am5stock from "@amcharts/amcharts5/stock";
import * as am5percent from "@amcharts/amcharts5/percent";
import { FiEdit3 } from 'solid-icons/fi'
import { FaSolidPlus } from 'solid-icons/fa'
import { RiSystemDeleteBin5Line } from 'solid-icons/ri'
import { SelectionChangedEvent } from 'ag-grid-community';

const [pros, setPros] = createSignal(false);
const toggle = () => setPros(!pros())
const [base64Data, setBase64Data] = createSignal('');
const [teams5, setTeams5] = createSignal('');
const [teams4, setTeams4] = createSignal('');
const [teams3, setTeams3] = createSignal('');
const [teams2, setTeams2] = createSignal('');
const [teams, setTeams] = createSignal('');
const onSelectionChanged = (event: SelectionChangedEvent) => {
    var rowCount = event.api.getSelectedNodes().length;
    setPros(rowCount  > 0);
    if (rowCount > 0) {
      const selectedData = event.api.getSelectedNodes()[0]?.data;
      if (selectedData) {
        // console.log(selectedData);
        setTeams5(selectedData.id)
        setTeams(selectedData.name)
        setTeams2(selectedData.position)
        setTeams3(selectedData.link)
        setTeams4(selectedData.quotes)
      }
    }
  };
const Statistic: Component<TestProps> = (props: any) => {

    const [tab, setTab] = createSignal(0);
    const updateTab = (index: any) => () => setTab(index);

    onMount(() => {
        let root = am5.Root.new("chartdiv2");

        root.dateFormatter.setAll({
            dateFormat: "yyyy",
            dateFields: ["valueX"]
        });


        // Set themes
        // https://www.amcharts.com/docs/v5/concepts/themes/
        root.setThemes([
            am5themes_Animated.new(root)
        ]);


        // Create chart
        // https://www.amcharts.com/docs/v5/charts/xy-chart/
        let chart = root.container.children.push(am5xy.XYChart.new(root, {
            panX: true,
            panY: true,
            wheelX: "panX",
            wheelY: "zoomX",
            pinchZoomX: true
        }));


        // Add cursor
        // https://www.amcharts.com/docs/v5/charts/xy-chart/cursor/
        let cursor = chart.set("cursor", am5xy.XYCursor.new(root, {
            behavior: "none"
        }));
        cursor.lineY.set("visible", false);


        // Data
        let data = [
            { year: "1950", value: 2 },
            { year: "1951", value: 4 },
            { year: "1952", value: 15 },
            { year: "1953", value: 21 },
            { year: "1954", value: 25 },
            { year: "1955", value: 18 },
            { year: "1956", value: 33 },
            { year: "1957", value: 103 },
            { year: "1958", value: 88 },
            { year: "1959", value: 205 },
            { year: "1960", value: 333 },
            { year: "1961", value: 185 },
            { year: "1962", value: 788 },
            { year: "1963", value: 1020 },
            { year: "1964", value: 658 },
            { year: "1965", value: 201 },
            { year: "1966", value: 1054 },
            { year: "1967", value: 999 },
            { year: "1968", value: 2002 },
            { year: "1969", value: 2235 },
            { year: "1970", value: 1423 },
            { year: "1971", value: 3564 },
            { year: "1972", value: 3987 },
            { year: "1973", value: 4235 },
            { year: "1974", value: 3487 },
            { year: "1975", value: 2987 },
            { year: "1976", value: 6789 },
            { year: "1977", value: 7354 },
            { year: "1978", value: 5457 },
            { year: "1979", value: 6784 },
            { year: "1980", value: 7878 },
            { year: "1981", value: 6987 },
            { year: "1982", value: 5787 },
            { year: "1983", value: 8978 },
            { year: "1984", value: 10003 },
            { year: "1985", value: 7898 },
            { year: "1986", value: 9878 },
            { year: "1987", value: 11235 },
            { year: "1988", value: 10248 },
            { year: "1989", value: 14589 },
            { year: "1990", value: 19878 },
            { year: "1991", value: 20325 },
            { year: "1992", value: 18978 },
            { year: "1993", value: 17485 },
            { year: "1994", value: 15234 },
            { year: "1995", value: 12345 },
            { year: "1996", value: 12584 },
            { year: "1997", value: 13698 },
            { year: "1998", value: 12568 },
            { year: "1999", value: 12587 },
            { year: "2000", value: 16987 },
            { year: "2001", value: 16779 },
            { year: "2002", value: 19878 },
            { year: "2003", value: 15687 },
            { year: "2004", value: 19878 },
            { year: "2005", value: 23212 },
            { year: "2006", value: 116987 },
            { year: "2007", value: 116779 },
            { year: "2008", value: 119878 },
            { year: "2009", value: 119687 },
            { year: "2010", value: 119878 },
            { year: "2011", value: 123212 },
            { year: "2012", value: 1987811 },
            { year: "2013", value: 2321211 },
            { year: "2014", value: 1169871 },
            { year: "2015", value: 1167791 },
            { year: "2016", value: 1198781 },
            { year: "2017", value: 1196871 },
            { year: "2018", value: 1198781 },
            { year: "2019", value: 12321212 },
            { year: "2020", value: 11677912 },
            { year: "2021", value: 11987812 },
            { year: "2022", value: 11968712 },
            { year: "2023", value: 11987812 }
        ];

        // Create axes
        // https://www.amcharts.com/docs/v5/charts/xy-chart/axes/
        let xAxis = chart.xAxes.push(am5xy.DateAxis.new(root, {
            baseInterval: { timeUnit: "year", count: 1 },
            renderer: am5xy.AxisRendererX.new(root, {}),
            tooltip: am5.Tooltip.new(root, {})
        }));

        let yAxis = chart.yAxes.push(am5xy.ValueAxis.new(root, {
            logarithmic: true,
            renderer: am5xy.AxisRendererY.new(root, {})
        }));

        // Add series
        // https://www.amcharts.com/docs/v5/charts/xy-chart/series/
        let series = chart.series.push(am5xy.LineSeries.new(root, {
            xAxis: xAxis,
            yAxis: yAxis,
            valueYField: "value",
            valueXField: "year",
            tooltip: am5.Tooltip.new(root, {
                labelText: "{valueX}: {valueY}"
            })
        }));

        series.strokes.template.setAll({
            strokeWidth: 3
        });

        // Set up data processor to parse string dates
        // https://www.amcharts.com/docs/v5/concepts/data/#Pre_processing_data
        series.data.processor = am5.DataProcessor.new(root, {
            dateFormat: "yyyy",
            dateFields: ["year"]
        });

        series.data.setAll(data);


        // Add scrollbar
        // https://www.amcharts.com/docs/v5/charts/xy-chart/scrollbars/
        chart.set("scrollbarX", am5.Scrollbar.new(root, {
            orientation: "horizontal"
        }));


        // Make stuff animate on load
        // https://www.amcharts.com/docs/v5/concepts/animations/
        series.appear(1000);
        chart.appear(1000, 100);
    })
    let gridRefRaffy: AgGridSolidRef;
    const columnDefs = [
        { field: 'Years' },
        { field: 'Items Sold' },
        { field: 'Profits' },
    ];

    const rowData = [
        { "Years": '1950-2000', "Items Sold": '200000', "Profits": " $1000000 USD",},
        { "Years": '2001-2010', "Items Sold": '230000', "Profits": " $14500000 USD",},
        { "Years": '2011-2023', "Items Sold": '300000', "Profits": " $24500000 USD",},
    ];

    const defaultColDef = {
        flex: 1,
    };
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
    
    const [inputValueeee, setInputValueeee] = createSignal("");
    const [inputValueeee1, setInputValueeee1] = createSignal("");
    const [inputValueeee3, setInputValueeee3] = createSignal("");
    const [inputValueeee4, setInputValueeee4] = createSignal("");
    const [inputValueeee5, setInputValueeee5] = createSignal("");
    const [isKosong, setIsKosong] = createSignal(false);
    const hasil6 = async () => {


        setIsKosong(false);
        // console.log("name ->", inputValueeee());
        // console.log("quotes ->", inputValueeee1());
        // console.log("position ->", inputValueeee3());
        // console.log("link ->", inputValueeee4());
        // console.log("img ->", inputValueeee5());

        var todayDate = new Date().toISOString().slice(0, 10);
        // console.log(todayDate);

        // // console.log("gender ->", RadioValue1());
        // // console.log("gender ->", RadioValue2());
        if (inputValueeee() == "", inputValueeee1() == "",inputValueeee3() == "",inputValueeee4() == "",base64Data() == "") {

          setIsKosong(true);

        } else {
          Inputkaryawan({
            id_user: 6,
            name: inputValueeee(),
            quotes: inputValueeee1(),
            date_creation: todayDate,
            position: inputValueeee3(),
            link: inputValueeee4(),
            img_teams: base64Data(),

        }).then((data: any) => {
            // console.log("detail account->", data);
        });
      }
    };
    const [inputValues, setInputValues] = createSignal("");
    const [inputValues1, setInputValues1] = createSignal("");
    const [inputValues2, setInputValues2] = createSignal("");
    const [inputValues3, setInputValues3] = createSignal("");
    const [inputValues4, setInputValues4] = createSignal("");
    // const [isKosong, setIsKosong] = createSignal(false);
    const updateteam = async () => {


        setIsKosong(false);
        // console.log("name ->", inputValues());
        // console.log("quotes ->", inputValues1());
        // console.log("position ->", inputValues2());
        // console.log("link ->", inputValues3());
        // console.log("img ->", inputValues4());

        var todayDate = new Date().toISOString().slice(0, 10);
        // console.log(todayDate);

        // // console.log("gender ->", RadioValue1());
        // // console.log("gender ->", RadioValue2());
        // if (inputValueeee() == "", inputValueeee1() == "",inputValueeee3() == "",inputValueeee4() == "",base64Data() == "") {

        //   setIsKosong(true);

        // } else {
          updateteams({
            id: teams5(),
            name: inputValues(),
            quotes: inputValues1(),
            position: inputValues2(),
            link: inputValues3(),
            img_teams: base64Data(),

        }).then((data: any) => {
            // console.log("detail account->", data);
        });
      // }
    };


    return (
        <>
            <div><Navbar /></div>
            <div style="display:flex;">
                <div class="stat1" style="width:50%">
                    <ul class='stat-available' style="width:50%;font-family:'beau'">Sales Report</ul>
                    <ul class='stat-own' style="width:50%;font-family:'pm';">Our journey from 1950 - 2023</ul>
                </div>
                <div class="stat2" style="width:50%">
                    <div class="chart" id="chartdiv2"></div>
                </div>
            </div>
            <div style="display:flex;">
                <div class="stat1" style="width:50%">
              
                <Show
                when={pros()} 
                fallback={<label for="my_modal_10" style="margin-top: 9vh; margin-left: 93%; display: grid; font-size:23px; position: absolute; z-index:9999"><FaSolidPlus /></label>}>

                  <div class="perindo" style="display:flex;">
                  <label for="tambah"  style="margin-top: -2vh; margin-left: 83%; display: grid; width:5%">
                  <label for="my_modal_10" style="margin-top: 0vh; margin-left: 1%; display: grid; font-size:23px"><FaSolidPlus /></label>
                                  </label>
                                  <label for="my_modal_4"  class="CRUD 1" style="font-size:23px; margin-top: -2vh; width:5%"><FiEdit3/> </label>
                                  <label for="my_modal_12" class="CRUD 2" style="font-size:23px; margin-top: -2vh;"><RiSystemDeleteBin5Line /></label>
                  
                                  </div>
              </Show>


                    <div class="ag-theme-alpine" style={{ height: '256%' }}>
                    <input type="checkbox" id="my_modal_10" class="modal-toggle" />
                <div class="modal">
                    <div class="modal-box" style="width:100%; height:70%;">
                    <label for="my_modal_10" class="btn btn-sm btn-circle btn-ghost absolute right-2 top-2" >✕</label>
                    <div class="TTL3" style="font-weight: bold;font-size: 24px;text-align: center; color:#082032">Add</div>
                    <input type="text" placeholder="Years" class="input input-bordered inne" style="width:100%; height:50px;margin-top:20px; border: 1px solid #545454; margin-left:0.1vw;" onchange={(f) => { setInputValueeee(f.currentTarget.value); }} />
                    <input type="text" placeholder="Item Sold" class="input input-bordered inne" style="width:100%; height:50px;margin-top:20px; border: 1px solid #545454; margin-left:0.1vw;" onchange={(f) => { setInputValueeee3(f.currentTarget.value); }} />
                    <input type="text" placeholder="Profit" class="input input-bordered inne" style="width:100%; height:50px;margin-top:20px; border: 1px solid #545454; margin-left:0.1vw;;" onchange={(f) => { setInputValueeee4(f.currentTarget.value); }} />
                      <div class="modal-action"> 
                      <label for="my_modal_10" style="color:white; width:100%; margin-left:-2vw; background:#082032;" class="btn worldpost">SUBMIT</label>
                      </div>
                    </div>
                  </div>
                  
                        <AgGridSolid
                            columnDefs={columnDefs}
                            rowData={rowData}
                            defaultColDef={defaultColDef}
                            ref={gridRefRaffy!}
                            suppressExcelExport={true}
                            paginationAutoPageSize={true}
                            pagination={true}

                        />
                    </div>
                    <div class="stat2" style="width:50%">
                    </div>
                </div>
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

export default Statistic;