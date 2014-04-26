module.exports = function(api, content) {
  api.add({
		'': '<!DOCTYPE html>',
		html: {
			head: {
				title: '<% this.data.title %>',
				'link[rel="stylesheet" href="styles/style.css"]': null
			},
			body: [content]
		}
  });
};