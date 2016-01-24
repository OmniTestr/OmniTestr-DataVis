d3.json('data/testData.json', function (data) {
    MG.data_graphic({
        title: "Response Time",
        description: "View response times of your endpoint",
        data: JSON.parse($('.data textarea').val()),
        markers: [{
            'time': 30,
            'label': 'benchmark'
        }],
        width: 400,
        height: 250,
        target: ".result",
        x_accessor: "time",
        y_accessor: "sightings",
        interpolate: "monotone"
    });
});