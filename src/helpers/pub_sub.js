const PubSub = {
	publish: function(channel, payload){
		console.log(`published on channel: ${channel}. payload: ${payload}`); // NEW
		const event = new CustomEvent(channel, {
			detail: payload});
		document.dispatchEvent(event);
	},

	subscribe: function(channel, callback){
		console.log(`subscribed to channel: ${channel}`); // NEW
		document.addEventListener(channel, callback);
	}
};

module.exports = PubSub;
