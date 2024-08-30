"use strict";

const region1 = [1540, 1130, 1580, 1105];
const region2 = [2010, 1168, 2305, 4102];
const region3 = [2450, 1847, 2710, 2391];
const region4 = [1845, 1491, 1284, 1575];
const region5 = [2120, 1767, 1599, 3888];

const quarter1_total = region1[0]+region2[0]+region3[0]+region4[0]+region5[0];
const quarter2_total = region1[1]+region2[1]+region3[1]+region4[1]+region5[1];
const quarter3_total = region1[2]+region2[2]+region3[2]+region4[2]+region5[2];
const quarter4_total = region1[3]+region2[3]+region3[3]+region4[3]+region5[3];

const region1_total = region1[0]+region1[1]+region1[2]+region1[3];
const region2_total = region2[0]+region2[1]+region2[2]+region2[3];
const region3_total = region3[0]+region3[1]+region3[2]+region3[3];
const region4_total = region4[0]+region4[1]+region4[2]+region4[3];
const region5_total = region5[0]+region5[1]+region5[2]+region5[3];


const allregion_total = region1_total+ region2_total+region3_total+region4_total+region5_total;


// display in browser page
document.write("<h2>Sales by Quarter</h2>");
const html = `
    <p>Q1  : $${quarter1_total}</p>
    <p>Q2  : $${quarter2_total}</p>
    <p>Q3  : $${quarter3_total}</p>
    <p>Q4  : $${quarter4_total}</p>
<h2>Sales by Region</h2>
    <p>Region 1 : $${region1_total}</p>
    <p>Region 2 : $${region2_total}</p>
    <p>Region 3 : $${region3_total}</p>
    <p>Region 4 : $${region4_total}</p>
    <p>Region 5 : $${region5_total}</p>

    <b>Total Sales </b>
    <br>
    <p>$${allregion_total}</p>`

document.write(html);