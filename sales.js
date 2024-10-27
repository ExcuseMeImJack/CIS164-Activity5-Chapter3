"use strict";

const region1 = [1540, 1130, 1580, 1105];
const region2 = [2010, 1168, 2305, 4102];
const region3 = [2450, 1847, 2710, 2391];
const region4 = [1845, 1491, 1284, 1575];
const region5 = [2120, 1767, 1599, 3888];

const regions = [region1, region2, region3, region4, region5];

// calculate totals by quarter, Define constant and use a for loop
const sumOfQuarter = () => {
  const quarterSums = [0, 0, 0, 0];

  for (let region of regions) {
    quarterSums[0] += region[0];
    quarterSums[1] += region[1];
    quarterSums[2] += region[2];
    quarterSums[3] += region[3];
  }

  for (let i = 0; i < quarterSums.length; i++) {
    document.write(`Q${i + 1}: $${quarterSums[i]}<br>`)
  }
}

// calculate totals by region, define constant and use a for loop
const salesOfRegion = () => {
  const regionalSales = [0, 0, 0, 0, 0];

  for (let region of regions) {
    for (let i = 0; i < region.length; i++) {
      regionalSales[regions.indexOf(region)] += region[i];
    }
  }

  for (let i = 0; i < regionalSales.length; i++) {
    document.write(`Region ${i + 1}: $${regionalSales[i]}<br>`)
  }
}

// calculate total sales, use a for loop to add all the quarter totals together.
const totalSales = () => {
  let total = 0;

  for (let region of regions) {
    for (let i = 0; i < region.length; i++) total += region[i];
  }

  document.write(`$${total}`)
}


/// display totals by quarter, document write and use a for loop
document.write("<h2>Sales by Quarter</h2>")
sumOfQuarter();

// display totals by quarter, document write and use a for loop with a document write in the loop.
document.write("<h2>Sales by Region</h2>")
salesOfRegion();

// display total sales, use document write to display on html page
document.write("<h2>Total Sales</h2>")
totalSales();
