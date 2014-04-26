module.exports = function(api) {
	var content = {
		h1: '<% this.data.title %>',
		p: 'Welcome to <% this.data.title %>'
	};

	require(__dirname + "/layout.js")(api, content);
};