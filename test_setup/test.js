const Stopwatch = require('statman-stopwatch');
const axios = require('axios');
const stopwatch = new Stopwatch();


async function test() {
    stopwatch.start();

    for (var i = 0; i < 1000; i++) {
        await axios.get("http://127.0.0.1:61813");
    }
    stopwatch.stop()

    console.log(Math.floor(stopwatch.read()) + " ms")

}

test();