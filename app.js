const secondsHand = document.querySelector(".second-hand");
const minutesHand = document.querySelector(".min-hand");
const hoursHand = document.querySelector(".hour-hand");

const setDate = () => {
	const now = new Date();

	const seconds = now.getSeconds();
	const secondsDegrees = (seconds / 60) * 360 + 90;
	secondsHand.style.transform = `rotate(${secondsDegrees}deg)`;

	const minutes = now.getMinutes();
	const minutesDegrees = (minutes / 60) * 360 + 90;
	minutesHand.style.transform = `rotate(${minutesDegrees}deg)`;

	const hours = now.getHours();
	const hoursdegrees = (hours / 12) * 360 + 90;
	hoursHand.style.transform = `rotate(${hoursdegrees}deg)`;

	if (seconds === 0) {
		secondsHand.style.transition = `none`;
		minutesHand.style.transition = `none`;
		hoursHand.style.transition = `none`;
	} else {
		secondsHand.style.transition = ``;
		minutesHand.style.transition = ``;
		hoursHand.style.transition = ``;
	}
};

setInterval(setDate, 1000);
