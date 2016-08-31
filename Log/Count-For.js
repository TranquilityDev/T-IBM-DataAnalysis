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
score(CL1[7], 'his');

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

score('hello', 'hello');

for (a in list1){
	list11 = list1[a].term;
	console.log(list11);
			
				for (b in list2){
				list22 = list2[b].term;				
				T = score(list11, list22);
				console.log(T);
				}
}





for (a in list1){
	list11 = list1[a].idf;
	console.log(list11);
			for (b in list2){
				list22 = list2[b].idf;				
				T = list11*list22;
				console.log(T);
				}
}
