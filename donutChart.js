//we just have to feed in a data variable that looks like this:
var data = [{
        name: "loaded",
        value: 64
    },
    {
        name: "unloaded",
        value: 36
    }];

//margins sort of weird with these svg's...

var margin = {
    top: 20,
    right: 20,
    bottom: 20,
    left: 20
};

//adjust 400 as desired. Difficult to make it based of % bc this is js
width = 400 - margin.left - margin.right;
height = width - margin.top - margin.bottom;

var chart = d3.select("body")
    .append('svg')
    .attr("width", width + margin.left + margin.right)
    .attr("height", height + margin.top + margin.bottom)
    .append("g")
    .attr("transform", "translate(" + ((width / 2) + margin.left) + "," + ((height / 2) + margin.top) + ")");

var status = data[0].value;

var radius = Math.min(width, height) / 2;

//we can make it not blue if you want to, just edit these.
var color = d3.scale.ordinal()
    .range(["#3399FF", "#5DAEF8", "#86C3FA", "#ADD6FB", "#D6EBFD"]);

var arc = d3.svg.arc()
    .outerRadius(radius)
    .innerRadius(radius - 60);

var pie = d3.layout.pie()
    .sort(null)
    .startAngle(1.1 * Math.PI)
    .endAngle(3.1 * Math.PI)
    .value(function (d) {
        return d.value;
    });

var g = chart.selectAll(".arc")
    .data(pie(data))
    .enter().append("g")
    .attr("class", "arc");

g.append("path")
    .style("fill", function (d) {
        return color(d.data.name);
    })
    .attr("d", arc);

chart.append("text")
    .attr("text-anchor", "middle")
    .text(status);

//necessary css - divides the two colors. border.
//path {
//    stroke: #ffffff;
//    stroke-width: 3px;
//}