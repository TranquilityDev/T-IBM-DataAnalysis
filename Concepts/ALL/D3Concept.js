var fs = require('fs');
var lupus = require('lupus');






fs.writeFile('/home/user/Tranquility/TempData/testdata2.txt','test',function(){})


var DepartmentName = ['ACC', 'IT', 'PF', 'COOP', 'STAT', 'ECO', 'BA', 'Marketing', 'MCAE', 'FCM', 'IESM', 'CHE', 'AERO', 'Precision', 'IECS', 'EE', 'ECE', 'AC', 'CE', 'CIVIL', 'WRE', 'ARCH', 'UPSI', 'TTM', 'LM', 'CL', 'FLL', 'RMI', 'FIN', 'MATH', 'EES', 'MSE', 'PHOTONICS']

var Department = [ACC, IT, PF, COOP, STAT, ECO, BA, Marketing, MCAE, FCM, IESM, CHE, AERO, Precision, IECS, EE, ECE, AC, CE, CIVIL, WRE, ARCH, UPSI, TTM, LM, CL, FLL, RMI, FIN, MATH, EES, MSE, PHOTONICS]


//DepartmentName[0];

for(i=0;i<3;i++){
			fs.readFile('/home/user/Tranquility/FCU-Data/IBM/Concepts/'+Department[0][i]+'concepts.json', 'utf8', function (err, data) {
				if (err) {
					return console.log(err);
				}
				Data = JSON.parse(data);
				Concept = Data.concepts;
				console.log(Department[0][i]);
				console.log(Concept);
	
			});
}





				for (b=0;b<Concept.length;b++){

				console.log(Concept[b].text);
					//fs.writeFile('/home/user/Tranquility/TempData/testdata2.txt','test',function(){})

				}

////

var DepartmentName = ['ACC', 'IT', 'PF', 'COOP', 'STAT', 'ECO', 'BA', 'Marketing', 'MCAE', 'FCM', 'IESM', 'CHE', 'AERO', 'Precision', 'IECS', 'EE', 'ECE', 'AC', 'CE', 'CIVIL', 'WRE', 'ARCH', 'UPSI', 'TTM', 'LM', 'CL', 'FLL', 'RMI', 'FIN', 'MATH', 'EES', 'MSE', 'PHOTONICS']

var Department = [ACC, IT, PF, COOP, STAT, ECO, BA, Marketing, MCAE, FCM, IESM, CHE, AERO, Precision, IECS, EE, ECE, AC, CE, CIVIL, WRE, ARCH, UPSI, TTM, LM, CL, FLL, RMI, FIN, MATH, EES, MSE, PHOTONICS]
///////////////////////////


#21 is Error


{ Error: ENOENT: no such file or directory, open '/home/user/Tranquility/FCU-Data/IBM/Concepts/鍾懿萍concepts.json'
    at Error (native)
  errno: -2,
  code: 'ENOENT',
  syscall: 'open',
  path: '/home/user/Tranquility/FCU-Data/IBM/Concepts/鍾懿萍concepts.json' }
SyntaxError: Unexpected token u in JSON at position 0

> { Error: ENOENT: no such file or directory, open '/home/user/Tranquility/FCU-Data/IBM/Concepts/周天穎concepts.json'
    at Error (native)
  errno: -2,
  code: 'ENOENT',
  syscall: 'open',
  path: '/home/user/Tranquility/FCU-Data/IBM/Concepts/周天穎concepts.json' }
SyntaxError: Unexpected token u in JSON at position 0

> 

{ Error: ENOENT: no such file or directory, open '/home/user/Tranquility/FCU-Data/IBM/Concepts/何文敬concepts.json'
    at Error (native)
  errno: -2,
  code: 'ENOENT',
  syscall: 'open',
  path: '/home/user/Tranquility/FCU-Data/IBM/Concepts/何文敬concepts.json' }
SyntaxError: Unexpected token u in JSON at position 0

> { Error: ENOENT: no such file or directory, open '/home/user/Tranquility/FCU-Data/IBM/Concepts/林羨concepts.json'
    at Error (native)
  errno: -2,
  code: 'ENOENT',
  syscall: 'open',
  path: '/home/user/Tranquility/FCU-Data/IBM/Concepts/林羨concepts.json' }
SyntaxError: Unexpected token u in JSON at position 0

> 

{ Error: ENOENT: no such file or directory, open '/home/user/Tranquility/FCU-Data/IBM/Concepts/黃雅文concepts.json'
    at Error (native)
  errno: -2,
  code: 'ENOENT',
  syscall: 'open',
  path: '/home/user/Tranquility/FCU-Data/IBM/Concepts/黃雅文concepts.json' }
SyntaxError: Unexpected token u in JSON at position 0

> { Error: ENOENT: no such file or directory, open '/home/user/Tranquility/FCU-Data/IBM/Concepts/林進田concepts.json'
    at Error (native)
  errno: -2,
  code: 'ENOENT',
  syscall: 'open',
  path: '/home/user/Tranquility/FCU-Data/IBM/Concepts/林進田concepts.json' }
SyntaxError: Unexpected token u in JSON at position 0

> { Error: ENOENT: no such file or directory, open '/home/user/Tranquility/FCU-Data/IBM/Concepts/劉純之concepts.json'
    at Error (native)
  errno: -2,
  code: 'ENOENT',
  syscall: 'open',
  path: '/home/user/Tranquility/FCU-Data/IBM/Concepts/劉純之concepts.json' }
SyntaxError: Unexpected token u in JSON at position 0

> { Error: ENOENT: no such file or directory, open '/home/user/Tranquility/FCU-Data/IBM/Concepts/呂瑞秋concepts.json'
    at Error (native)
  errno: -2,
  code: 'ENOENT',
  syscall: 'open',
  path: '/home/user/Tranquility/FCU-Data/IBM/Concepts/呂瑞秋concepts.json' }
SyntaxError: Unexpected token u in JSON at position 0

> { Error: ENOENT: no such file or directory, open '/home/user/Tranquility/FCU-Data/IBM/Concepts/張智凱concepts.json'
    at Error (native)
  errno: -2,
  code: 'ENOENT',
  syscall: 'open',
  path: '/home/user/Tranquility/FCU-Data/IBM/Concepts/張智凱concepts.json' }
SyntaxError: Unexpected token u in JSON at position 0

> 
TypeError: Cannot read property 'concepts' of null
    at repl:12:16
    at FSReqWrap.readFileAfterClose [as oncomplete] (fs.js:445:3)
> 





/////////////////////////

i = 33;
D =  Department[i];

//	console.log(DepartmentName[i])
lupus(0, D.length, function(n) {

	ConceptsPath = '/home/user/Tranquility/FCU-Data/IBM/Concepts/'+D[n]+'concepts.json';
	//console.log(ConceptsPath);

		fs.readFile(ConceptsPath, function(err, data){ 

		 	if (err) console.log(err);
		 	Data = JSON.parse(data);
			//Teacher Name
			console.log('$'+D[n]+'@');
			Consepts = Data.concepts;
				for (a=0;a<Consepts.length;a++){
					console.log('{'+Consepts[a].text+'},');
			}
				console.log('~~');

		 })
	}, function() {
	}
);


////////////////////////////////





