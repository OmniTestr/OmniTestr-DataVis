//JSON in following format:
//[{
//    "time": "10",
//    "sightings": 6
//  },
//  {
//    "time": "20",
//    "sightings": 8
//  }
//]

d3.json('data/testData.json', function (data) {
    MG.data_graphic({
        title: "Response Time",
        description: "View response times of your endpoint",
        data: JSON.parse($('.data textarea').val()),
        //markers can be removed if so desired
        markers: [{
            'time': 30,
            'label': 'benchmark'
        }],
        //width and height can be changed
        width: 400,
        height: 250,
        target: ".result",
        x_accessor: "time",
        y_accessor: "sightings",
        interpolate: "monotone"
    });
});