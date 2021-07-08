fetch("https://v3.football.api-sports.io", {
	"method": "GET",
	"headers": {
		"x-rapidapi-host": "v3.football.api-sports.io",
		"x-apisports-key": "92e35797164ae85fd301602e9425a092"
	}
})
.then(response => {
	data = console.log(response),
    console.log(data.json);
})
.catch(err => {
	console.log(err);
});