// Import module 
var tm = require('textmining');
 
// The text to be modelled,  
// William Blake's poem 'A Poison Tree' 
var verses = [
	"I was angry with my friend:", 
	"I told my wrath, my wrath did end.", 
	"I was angry with my foe:", 
	"I told it not, my wrath did grow.",  
	"And I watered it in fears,", 
	"Night and morning with my tears;", 
	"And I sunned it with smiles,", 
	"And with soft deceitful wiles.",  
	"And it grew both day and night,", 
	"Till it bore an apple bright.", 
	"And my foe beheld it shine.", 
	"And he knew that it was mine,",  
	"And into my garden stole", 
	"When the night had veiled the pole;", 
	"In the morning glad I see", 
	"My foe outstretched beneath the tree.", 
];
 
// Build a Bag Of Words (automatically normalize and remove stop words in the process) 
var bag = tm.bagOfWords( verses, true, true );
 
// Sort terms by global frequency and print the top 10 
var termsByFrequency = bag.terms.sort(function(a,b){
	if( a.frequency > b.frequency ) 		return -1;
	else if( a.frequency < b.frequency ) 	return 1;
	else return 0;
});

var termsInFirstVerses = bag.documents.slice(0,10).map(function(d){ return d.terms })
console.log( termsInFirstVerses );

















