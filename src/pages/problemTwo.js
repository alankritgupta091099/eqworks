import React, { useEffect, useState } from 'react';
import axios from 'axios';
import moment from "moment";
import { BarChart, Bar, XAxis, YAxis, CartesianGrid, Tooltip , Line, Legend, Area, ComposedChart } from 'recharts';

import { BASE_URL, EVENTS_DAILY_ROUTE, EVENTS_HOURLY_ROUTE, STATS_DAILY_ROUTE } from "../helpers/url";
import Heading from "../components/Heading";

function ProblemTwo() {

    // const [poiRows, setpoiRows] = useState([]);
    const [eventsDaily, seteventsDaily] = useState([]);

    const [eventsHourly, seteventsHourly] = useState([]);
    const [eventDates, seteventDates] = useState(["Select One Date"]);
    const [rowByDates, setrowByDates] = useState([]);

    const [statsDaily, setstatsDaily] = useState([]);
    const [showRevenue, setshowRevenue] = useState(false);
    const [showClicks, setshowClicks] = useState(false);
    const [showImpressions, setshowImpressions] = useState(false);

    const fetchEventsHourly = () => {
        
        var uniqueDates = [];

        axios({
            method: 'get',
            url: BASE_URL + EVENTS_HOURLY_ROUTE
        })
            .then((res) => {                
                seteventsHourly(res.data.map((row) => {
                    
                    if(!uniqueDates.find( item => moment(item).format('MM/DD/YYYY') === moment(row.date).format('MM/DD/YYYY') ))
                        uniqueDates.push(moment(row.date).format('MM/DD/YYYY'))

                    return {
                        ...row,
                        date: moment(row.date).format('MM/DD/YYYY')
                    }
                }))                
            })
            .then(()=>seteventDates([...eventDates, ...uniqueDates]))
            .catch((err) => {
                console.log(err)
            })
    }

    const fetchEventsDaily = () => {
        axios({
            method: 'get',
            url: BASE_URL + EVENTS_DAILY_ROUTE
        })
            .then((res) => {
                seteventsDaily(res.data.map((row) => {
                    return {
                        ...row,
                        date: moment(row.date).format('MM/DD/YYYY')
                    }
                }))
            })
            .catch((err) => {
                console.log(err)
            })
    }

    const fetchStatsDaily = () => {
        axios({
            method: 'get',
            url: BASE_URL + STATS_DAILY_ROUTE
        })
            .then((res) => {
                setstatsDaily(res.data.map((row) => {
                    return {
                        ...row,
                        date: moment(row.date).format('MM/DD/YYYY'),
                        revenue: parseFloat(row.revenue).toFixed(2)
                    }
                }))
            })
            .catch((err) => {
                console.log(err)
            })
    }

    useEffect(() => {
        fetchEventsHourly();
        fetchEventsDaily();
        fetchStatsDaily();
    }, [])

    return (
        <>
            <div>
                <Heading text="Events (Daily)" />
                <div style={{ margin: '3% 10%' }}>
                    <BarChart
                        width={900}
                        height={400}
                        data={eventsDaily}
                        margin={{
                            top: 5,
                            right: 30,
                            left: 20,
                            bottom: 5
                        }}
                    >
                        <CartesianGrid strokeDasharray="3 3" />
                        <XAxis dataKey="date" />
                        <YAxis />
                        <Tooltip />
                        <Bar dataKey="events" fill="#8884d8" />
                    </BarChart>
                </div>
            </div>
            <div>
                <Heading text="Events (Hourly)" />
                <select onChange={(e)=>{
                    setrowByDates(
                        eventsHourly.filter( item => moment(item.date).format("MM/DD/YYYY") === e.target.value)
                    )
                }} style={{ margin: '0% 10%' }}>
                    {
                        eventDates.map((date)=><option value={date}>{date}</option>)
                    }                    
                </select>
                <div style={{ margin: '3% 10%' }}>
                    <BarChart
                        width={900}
                        height={400}
                        data={rowByDates}
                        margin={{
                            top: 5,
                            right: 30,
                            left: 20,
                            bottom: 5
                        }}
                    >
                        <CartesianGrid strokeDasharray="3 3" />
                        <XAxis dataKey="date" />
                        <YAxis />
                        <Tooltip />
                        <Bar dataKey="events" fill="#8884d8" />
                    </BarChart>
                </div>
            </div>
            <div>
                <Heading text="Stats (Daily)" />
                <div style={{ margin: '3% 10%' }}>
                    <div>
                        <input type="checkbox" id="revenue" name="revenue" onClick={(e)=>{
                            setshowRevenue(e.target.checked)
                        }}/>
                        <label for="revenue">Revenue</label>
                    </div>               
                    <div>
                        <input type="checkbox" id="Clicks" name="Clicks" onClick={(e)=>{
                            setshowClicks(e.target.checked)
                        }}/>
                        <label for="Clicks">Clicks</label>
                    </div>
                    <div>
                        <input type="checkbox" id="Impressions" name="Impressions" onClick={(e)=>{
                            setshowImpressions(e.target.checked)
                        }}/>
                        <label for="Impressions">Impressions</label>
                    </div>
                </div>
                <div style={{ margin: '3% 10%' }}>
                    <ComposedChart
                        width={900}
                        height={400}
                        data={statsDaily}
                        margin={{
                            top: 20,
                            right: 80,
                            bottom: 20,
                            left: 20
                        }}
                    >
                        <CartesianGrid stroke="#f5f5f5" />
                        <XAxis
                            dataKey="date"
                            scale="band"
                        />
                        <YAxis />
                        <Tooltip />
                        <Legend />
                        {showImpressions ? <Area type="monotone" dataKey="impressions" fill="#8884d8" stroke="#8884d8" /> : <></>}
                        { showRevenue ? <Bar dataKey="revenue" barSize={20} fill="#413ea0" /> : <></>}
                        { showClicks ? <Line type="monotone" dataKey="clicks" stroke="#ff7300" /> : <></>}
                    </ComposedChart>
                </div>
            </div>
        </>
    );
};

export default ProblemTwo;