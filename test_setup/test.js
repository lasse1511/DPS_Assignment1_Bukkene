const Stopwatch = require('statman-stopwatch');
var _ = require("underscore");

const axios = require('axios');
var os = require('os');

const stopwatch = new Stopwatch();


async function test() {
    stopwatch.start();

    for (var i = 0; i < 1000; i++) {
        await axios.get("http://localhost:8080");
    }
    stopwatch.stop()

    console.log(Math.floor(stopwatch.read()) + " ms")

}

test();