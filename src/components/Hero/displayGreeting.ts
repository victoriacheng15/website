export const displayGreeting = () => {
	const time = new Date().getHours();

	if (time > 4 && time < 12) {
		return "Good morning! 🌄";
	}

	if (time === 12) {
		return "Happy Noon!";
	}

	if (time > 12 && time < 18) {
		return "Good afternoon!";
	}

	return "Good evening! 🌇";
};
