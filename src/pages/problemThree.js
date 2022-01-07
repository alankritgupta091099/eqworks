import React, {useEffect, useState} from 'react';
import { AgGridReact, AgGridColumn } from 'ag-grid-react';
import 'ag-grid-community/dist/styles/ag-grid.css';
import 'ag-grid-community/dist/styles/ag-theme-alpine.css';
import axios from 'axios';
import moment from "moment";

import Heading from "../components/Heading";

import { BASE_URL, POI_ROUTE , EVENTS_DAILY_ROUTE, EVENTS_HOURLY_ROUTE, STATS_DAILY_ROUTE, STATS_HOURLY_ROUTE } from "../helpers/url";

function ProblemThree (){
    
    const [poiRows, setpoiRows] = useState([]);
    const [eventsHourly, seteventsHourly] = useState([]);
    const [eventsDaily, seteventsDaily] = useState([]);
    const [statsHourly, setstatsHourly] = useState([]);
    const [statsDaily, setstatsDaily] = useState([]);

    const fetchPOI = () => {
        axios({
            method:'get',
            url: BASE_URL + POI_ROUTE
        })
        .then((res)=>{
            setpoiRows(res.data)
        })
        .catch((err)=>{
            console.log(err)
        })
    }

    const fetchEventsHourly = () => {
        axios({
            method:'get',
            url: BASE_URL + EVENTS_HOURLY_ROUTE
        })
        .then((res)=>{
            seteventsHourly(res.data.map((row)=>{
                return {
                    ...row,
                    date: moment(row.date).format('MM/DD/YYYY')
                }
            }))
        })
        .catch((err)=>{
            console.log(err)
        })
    }

    const fetchEventsDaily = () => {
        axios({
            method:'get',
            url: BASE_URL + EVENTS_DAILY_ROUTE
        })
        .then((res)=>{
            seteventsDaily(res.data.map((row)=>{
                return {
                    ...row,
                    date: moment(row.date).format('MM/DD/YYYY')
                }
            }))
        })
        .catch((err)=>{
            console.log(err)
        })
    }

    const fetchStatsDaily = () => {
        axios({
            method:'get',
            url: BASE_URL + STATS_DAILY_ROUTE
        })
        .then((res)=>{
            setstatsDaily(res.data.map((row)=>{
                return {
                    ...row,
                    date: moment(row.date).format('MM/DD/YYYY'),
                    revenue: parseFloat(row.revenue).toFixed(2)
                }
            }))
        })
        .catch((err)=>{
            console.log(err)
        })
    }

    const fetchStatsHourly = () => {
        axios({
            method:'get',
            url: BASE_URL + STATS_HOURLY_ROUTE
        })
        .then((res)=>{
            setstatsHourly(res.data.map((row)=>{
                return {
                    ...row,
                    date: moment(row.date).format('MM/DD/YYYY'),
                    revenue: parseFloat(row.revenue).toFixed(2)
                }
            }))
        })
        .catch((err)=>{
            console.log(err)
        })
    }


    useEffect(() => {
        fetchPOI();
        fetchEventsHourly();
        fetchEventsDaily();
        fetchStatsDaily();
        fetchStatsHourly();
    }, [])

    return (
        <>  
            <div style={{width:'80%', margin:'3% 10%'}}>
                <u><i><h1>Task 3</h1></i></u>                
                <ol>
                    <li>
                        To search in a column, hover of column header & click on hamburger menu.
                    </li>
                    <li>
                        Click on the columns headers for sorting columns.
                    </li>
                </ol>
            </div>
        {/* poi */}
            <div>
                <Heading text="POI" />
                <div className="ag-theme-alpine" style={{height: 270, width:'80%', margin:'3% 10%'}}>
                    <AgGridReact
                        rowData={poiRows}
                        defaultColDef={{
                            flex: 1,
                            minWidth: 150,
                            resizable: true,
                            sortable: true,
                            filter: true
                        }}
                        pagination={true}
                        paginationPageSize={10}
                        suppressDragLeaveHidesColumns={true}
                    >
                        <AgGridColumn field="name" headerName="Name" ></AgGridColumn>
                        <AgGridColumn field="lat" headerName="Latitude"></AgGridColumn>
                        <AgGridColumn field="lon" headerName="Longitude"></AgGridColumn>
                    </AgGridReact>
                </div>
            </div>
        {/* Events Hourly */}
            <div>
                <Heading text="Events (Hourly)" />
                <div className="ag-theme-alpine" style={{height: 400, width:'80%', margin:'3% 10%'}}>
                    <AgGridReact
                        rowData={eventsHourly}
                        defaultColDef={{
                            flex: 1,
                            minWidth: 150,
                            filter: true,
                            pagination: true,
                            paginationPageSize: 10,
                            resizable: true,
                            sortable: true,
                        }}
                        pagination={true}
                        paginationPageSize={7}
                        suppressDragLeaveHidesColumns={true}
                    >
                        <AgGridColumn field="date" headerName="Date (MM/DD/YYYY)" comparator={dateComparator}></AgGridColumn>
                        <AgGridColumn field="hour" headerName="Hour"></AgGridColumn>
                        <AgGridColumn field="events" headerName="Events"></AgGridColumn>
                    </AgGridReact>
                </div>
            </div>
        {/* Events Daily */}
            <div>
                <Heading text="Events (Daily)" />
                <div className="ag-theme-alpine" style={{height: 400, width:'80%', margin:'3% 10%'}}>
                    <AgGridReact
                        rowData={eventsDaily}
                        defaultColDef={{
                            flex: 1,
                            minWidth: 150,
                            filter: true,
                            pagination: true,
                            paginationPageSize: 10,
                            resizable: true,
                            sortable: true,
                        }}
                        pagination={true}
                        paginationPageSize={7}
                        suppressDragLeaveHidesColumns={true}
                    >
                        <AgGridColumn field="date" headerName="Date (MM/DD/YYYY)" comparator={dateComparator}></AgGridColumn>
                        <AgGridColumn field="events" headerName="Events"></AgGridColumn>
                    </AgGridReact>
                </div>
            </div>
        {/* Stats Daily */}
            <div>
                <Heading text="Stats (Daily)" />
                <div className="ag-theme-alpine" style={{height: 400, width:'80%', margin:'3% 10%'}}>
                    <AgGridReact
                        rowData={statsDaily}
                        defaultColDef={{
                            flex: 1,
                            minWidth: 150,
                            filter: true,
                            pagination: true,
                            paginationPageSize: 10,
                            resizable: true,
                            sortable: true,
                        }}
                        pagination={true}
                        paginationPageSize={7}
                        suppressDragLeaveHidesColumns={true}
                    >
                        <AgGridColumn field="date" headerName="Date (MM/DD/YYYY)" comparator={dateComparator}></AgGridColumn>
                        <AgGridColumn field="impressions" headerName="Impressions"></AgGridColumn>
                        <AgGridColumn field="clicks" headerName="Clicks"></AgGridColumn>
                        <AgGridColumn field="revenue" headerName="Revenue"></AgGridColumn>
                    </AgGridReact>
                </div>
            </div>
        {/* Stats Hourly */}
            <div>
                <Heading text="Stats (Hourly)" />
                <div className="ag-theme-alpine" style={{height: 400, width:'80%', margin:'3% 10%'}}>
                    <AgGridReact
                        rowData={statsHourly}
                        defaultColDef={{
                            flex: 1,
                            minWidth: 150,
                            filter: true,
                            pagination: true,
                            paginationPageSize: 10,
                            resizable: true,
                            sortable: true,
                        }}
                        pagination={true}
                        paginationPageSize={7}
                        suppressDragLeaveHidesColumns={true}
                    >
                        <AgGridColumn field="date" headerName="Date (MM/DD/YYYY)" comparator={dateComparator}></AgGridColumn>
                        <AgGridColumn field="hour" headerName="Hour"></AgGridColumn>
                        <AgGridColumn field="impressions" headerName="Impressions"></AgGridColumn>
                        <AgGridColumn field="clicks" headerName="Clicks"></AgGridColumn>
                        <AgGridColumn field="revenue" headerName="Revenue"></AgGridColumn>
                    </AgGridReact>
                </div>
            </div>
        </>
    );
};

const dateComparator = (valueA, valueB) => moment(valueA).diff(moment(valueB));

export default ProblemThree;  