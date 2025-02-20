function customSetTimeout(callback, delay) {
    const startTime = Date.now();

    const intervalId = setInterval(() => {
        if (Date.now() - startTime >= delay) {
            clearInterval(intervalId);
            callback();
        }
    }, 1); // Check every 1 millisecond for accuracy
}

customSetTimeout(() => {
    console.log("Executed after 3 seconds");
}, 3000);
