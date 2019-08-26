let minutes, seconds = 0;

function startTimer() {
    const timer = +document.getElementById("timer").value || 0;

    if (timer > 0) {
        document.getElementById('button').disabled = true;
        document.getElementById('timer').disabled = true;
        document.getElementById('reply').disabled = false;
        document.getElementById('timeLeft').style.display = "block";
    }

    let date = new Date();

    date.setMinutes(date.getMinutes() + timer);
    const countDownTime = date.getTime();

    const timeInterval = setInterval(() => {
        const now = new Date().getTime();
        const diff = countDownTime - now;

        minutes = Math.floor((diff % (1000 * 60 * 60)) / (1000 * 60));
        seconds = Math.floor((diff % (1000 * 60)) / 1000);
        document.getElementById("time").innerHTML = minutes + "m " + seconds + "s ";

        if (diff < 0) {
            clearInterval(timeInterval);
            document.getElementById("time").innerHTML = "EXPIRED";
        }
    }, 1000);

}

const input = document.getElementById('reply');
input.addEventListener('keyup', () => {
    const words = input.value.match(/\b[-?(\w+)?]+\b/gi);
    if (words) {
        document.getElementById("count").innerHTML = words.length;
    } else {
        document.getElementById("count").innerHTML = 0;
    }
});