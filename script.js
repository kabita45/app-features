(() => {
  const second = 1000,
    minute = second * 60,
    hour = minute * 60,
    day = hour * 24;

  let today = new Date();
  let targetDate = new Date(today.getTime() + 5 * day);
  let dd = String(targetDate.getDate()).padStart(2, "0"),
    mm = String(targetDate.getMonth() + 1).padStart(2, "0"),
    yyyy = targetDate.getFullYear();
  let launch = mm + "/" + dd + "/" + yyyy;

  const countDown = new Date(launch).getTime();
  const x = setInterval(() => {
    const now = new Date().getTime(),
      distance = countDown - now;

    document.getElementById("days").innerText = Math.floor(distance / day);
    document.getElementById("hours").innerText = Math.floor(
      (distance % day) / hour
    );
    document.getElementById("minutes").innerText = Math.floor(
      (distance % hour) / minute
    );
    document.getElementById("seconds").innerText = Math.floor(
      (distance % minute) / second
    );

    if (distance < 0) {
      document.getElementById("headline").innerText =
        "Time to unveil the surprise";
      document.getElementById("countdown").style.display = "none";
      document.getElementById("content").style.display = "block";
      clearInterval(x);
    }
  }, 1000);
})();
