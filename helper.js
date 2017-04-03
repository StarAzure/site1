const hbs = require('hbs');

hbs.registerHelper ('currentYear', () => {
	return new Date().getFullYear()
});
