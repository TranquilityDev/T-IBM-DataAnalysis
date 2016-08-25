List:
***************************************
Entities
Keywords
Concepts
Taxonomy
Document Emotion
Targeted Emotion
Document Sentiment
Targeted Sentiment
Typed Relations
Relations

***************************************


//Entities
------------
var parameters = {
	url: 'http:www-03.ibm.com/press/us/en/pressrelease/49384.wss'
};

alchemy_language.entities(parameters, function (err, response) {
	if (err)
		console.log('error:', err);
	else
		console.log(JSON.stringify(response, null, 2));
});


//Keywords
------------
var parameters = {
	url: 'http:www.twitter.com/ibmwatson'
};

alchemy_language.keywords(parameters, function (err, response) {
	if (err)
		console.log('error:', err);
	else
		console.log(JSON.stringify(response, null, 2));
});



//Concepts
------------
var parameters = {
	url: 'http:www.ibm.com/watson',
	knowledgeGraph: 1
};

alchemy_language.concepts(parameters, function (err, response) {
	if (err)
		console.log('error:', err);
	else
		console.log(JSON.stringify(response, null, 2));
});




//Taxonomy
------------
var parameters = {
	url: 'cnn.com'
};

alchemy_language.taxonomy(parameters, function (err, response) {
	if (err)
		console.log('error:', err);
	else
		console.log(JSON.stringify(response, null, 2));
});



//Emotion Analysis
------------
var parameters = {
	url: 'http:www.charliechaplin.com/en/synopsis/articles/29-The-Great-Dictator-s-Speech'
};

alchemy_language.emotion(parameters, function (err, response) {
	if (err)
		console.log('error:', err);
	else
		console.log(JSON.stringify(response, null, 2));
});



//Sentiment
------------
var parameters = {
	text: 'IBM Watson won the Jeopardy television show hosted by Alex Trebek'
};

alchemy_language.sentiment(parameters, function (err, response) {
	if (err)
		console.log('error:', err);
	else
		console.log(JSON.stringify(response, null, 2));
});


//Relations
------------
var parameters = {
	url: 'https:www.whitehouse.gov/the-press-office/2016/03/19/weekly-address-president-obamas-supreme-court-nomination'
};

alchemy_language.relations(parameters, function (err, response) {
	if (err)
		console.log('error:', err);
	else
		console.log(JSON.stringify(response, null, 2));
});


//Typed Relations
------------
var parameters = {
	url: 'http:www.huffingtonpost.com/2010/06/22/iphone-4-review-the-worst_n_620714.html'
};

alchemy_language.typedRelations(parameters, function (err, response) {
	if (err)
		console.log('error:', err);
	else
		console.log(JSON.stringify(response, null, 2));
});