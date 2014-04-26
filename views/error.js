module.exports = function(api) {
	var content = {
		h1: '<% this.data.message %>',
		h2: '<% this.data.status %>',
		pre: '<% this.data.stack %>'
	};

	require(__dirname + "/layout.js")(api, content);
};