const Stopwatch = require('statman-stopwatch');
const axios = require('axios');
const stopwatch = new Stopwatch();


async function test() {
    stopwatch.start();

    for (var i = 0; i < 10000; i++) {
        await axios.get("http://172.18.82.247:32140");
    }
    stopwatch.stop()

    console.log(Math.floor(stopwatch.read()) + " ms")

}

test();