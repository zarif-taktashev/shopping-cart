var Product = require('../models/product');
var mongoose = require('mongoose');

mongoose.connect('mongodb://127.0.0.1:27017/shopping', { useNewUrlParser: true });

var products = [
	new Product({
		imageParth: 'https://upload.wikimedia.org/wikipedia/en/5/5e/Gothiccover.png',
		title: 'Gothic Video Game',
		description: 'Awesome Game!!!',
		price:10
	}),
	new Product({
		imageParth: 'https://upload.wikimedia.org/wikipedia/en/9/91/WoW_Box_Art1.jpg',
		title: 'WOW Video Game',
		description: 'Awesome Game? but of course it was better in vanilla ...',
		price:20
	}),
	new Product({
		imageParth: 'https://upload.wikimedia.org/wikipedia/en/4/42/Batman_Arkham_Asylum_Videogame_Cover.jpg',
		title: 'Batman Video Game',
		description: 'Okay',
		price:20
	}),
	new Product({
		imageParth: 'https://upload.wikimedia.org/wikipedia/en/5/5c/DarksidersII.jpg',
		title: 'Darkside 3 Video Game',
		description: 'Bad game',
		price:20
	}),
	new Product({
		imageParth: 'https://upload.wikimedia.org/wikipedia/en/e/e1/Spider-Man_PS4_cover.jpg',
		title: 'Spider-man Video Game',
		description: 'Great game',
		price:20
	}),
	new Product({
		imageParth: 'https://upload.wikimedia.org/wikipedia/en/8/8d/Dark_Souls_Cover_Art.jpg',
		title: 'Dark Soul Video Game',
		description: 'Hard game',
		price:20
	}),

];

var done = 0;
for(var i = 0; i<products.length; i++){
	  products[i].save(function(err, result){
	  	done++; 
	  	if(done === products.length){
	  		exit();
	  	}
	  });
}
function exit(){
	mongoose.disconnect();
}
