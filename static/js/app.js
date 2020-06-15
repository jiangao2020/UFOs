// import the data from data.js
const tableData = data;

// Reference the HTML table using d3
var tbody = d3.select("tbody");

function buildTable(data) {
    tbody.html("");

    data.forEach((dataRow) => {
        let row = tbody.append("tr");
        Object.values(dataRow).forEach((val) => {
            let cell = row.append("td");
            cell.text(val);
        });
    });
}

var filters = {};

function updateFilters(){
    
    let date = d3.select("#datetime").property("value");
    let city = d3.select("#cityname").property("value");
    let state = d3.select("#statename").property("value");
    let country = d3.select("#countryname").property("value");
    let shape = d3.select("#ufoshape").property("value");

    date ? filters.push({id:"datetime", value: date}) : null
    city ? filters.push({id:"city", value: city}) : null
    state ? filters.push({id:"state", value: state}) : null
    country ? filters.push({id:"country", value: country}) : null
    shape ? filters.push({id:"shape", value: shape}) : null
  
    filterTable(filters);
}

function filterTable(filters){
    
    let filteredData = tableData;
    for (i = 0; i < filters.length; i ++ ) {
        filteredData = filteredData.filter(row => 
            {return row[filters[i].id] === filyers[i].value.toString()});
      };
      buildTable(filteredData);
}
d3.selectAll("#filter-btn").on("click", handleClick);

buildTable(tableData);



