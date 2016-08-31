
var score = require('string-score');



var CL1 = [	
      " Null " ,
      " Null " ,
      " Chinese Philosophy (philosophy expert Zi) chinese philosophy " ,
      " Aesthetic esthetics " ,
      " Chinese literary aesthetics esthetics " ,
      " Null " ,
      " Zi beyond thinking " ,
      " National Guidance - History department " ,
	];

var CL2 = [	
      " Compilation and Research Chan Master Chronicle cloud biography (Ⅱ) " ,
      " Buddhist restraint over the meaning and value: the college female students learn fast Case " ,
      " Repentance cloud Chronicle write the biography and research Master " ,
      " Tang Dynasty cultural exchange between China and spread - Sub Project III: from the Tang Dynasty Buddhist Translation and Foreign Cultural Exchange (3/3) " ,
	];



var list1 =	[ { "frequency" : 8,
				"idf" : 1,
				"term" : ""
			  },
			  { "frequency" : 3,
				"idf" : 1.9808292530117262,
				"term" : "null"
			  },

			  { "frequency" : 1,
				"idf" : 3.0794415416798357,
				"term" : "department"
			  }
			]


var list2 =	[ { "frequency" : 2,
				"idf" : 2.386294361119891,
				"term" : "chinese"
			  },
			  { "frequency" : 2,
				"idf" : 2.386294361119891,
				"term" : "esthetics"
			  },
			  { "frequency" : 2,
				"idf" : 2.386294361119891,
				"term" : "zi"
			  },
			  { "frequency" : 1,
				"idf" : 3.0794415416798357,
				"term" : "expert"
			  }
			]


/*for(var i=0;i<list1.length;i++){
//var 
console.log(list1[i].idf);

}

for(var i=0;i<list2.length;i++){
//var 
console.log(list2[i].idf);

}
*/
//console.log(list1[2].term)


/*var TermsLength= [list1.length,list2.length,list3.length,list4.length]; 
console.log(TermsLength[2]);

for (a=0;a<TermsLength.length;a++){

	SelectTerm = TermsLength[a];

		for (i=0;i<SelectTerm;i++){
		
			console.log(list1[i].term);


		}



}*/


score('Compilation and Research Chan Master Chronicle cloud biography (Ⅱ) ','expert')






