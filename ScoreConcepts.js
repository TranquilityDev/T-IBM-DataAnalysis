var fs = require('fs');
var lupus = require('lupus');
var score = require('string-score');
var async = require('async');



ACC = ['曹秀惠', '陳光政', '高惠松', '黃娟娟', '江向才', '康淑珍', '林嬌能', '盧鈺欣', '施念恕', '王光華', '王漢民', '翁慈青', '吳東憲', '蕭子誼', '張森河', '鄭佩玉', '鄭竹君'];
IT = ['陳俊卿', '韓宜', '黃焜煌', '黃秀英', '江怡蒨', '寇敦智', '梁馨予', '林呈昱', '劉翁昆', '羅芳怡', '邱世寬', '王若愚', '吳廣文', '吳文臨', '徐瑞玲', '許鈺珮', '楊明憲', '邱安安'];
PF = ['曾子耘', '陳盛通', '何艷宏', '洪國仁', '黃定遠', '黃瓊如', '賴炎卿', '吳朝欽', '謝耀智', '許慧雯', '楊建成', '游慧光'];
COOP = ['陳聖賢', '翟本瑞', '郭賢', '江宜芳', '李桂秋', '林瑞發', '劉文榮', '汪浩', '吳肇展', '楊坤鋒', '于躍門'];
STAT = ['陳婉淑', '高秀蘭', '李燊銘', '林文欽', '林哲彥', '王聖', '王婉倫', '吳進家', '吳榮彬', '鍾冬川', '賴崑榮', '李文', '林麗芬'];
ECO = ['陳瓊怜', '陳善瑜', '陳依依', '陳至還', '方文碩', '郭祐誠', '胡士文', '賴景昌', '李文傳', '劉宗欣', '歐嘉瑞', '彭德昭', '秦國軒', '王平', '王葳', '吳紀瑩', '徐繼達', '顏厚棟', '趙志鉅', '鄭保村', '鄒繼礎'];
BA = ['曾欽正', '陳建文', '黃文柔', '劉平文', '駱達彪', '滿肇怡', '邱英雄', '王智弘', '吳如娟', '蕭國鐘', '徐重仁', '許士軍', '張寶蓉', '張美燕', '張秀樺', '鄭孟育', '林豐智', 'Norm Lambert'];
Marketing = ['丁美靜', '何晉瑋', '簡士超', '凱達西', '李元恕', '林志皇', '彭德湘', '王婉禎', '王郁彬'];
MCAE = ['蔡忠杓', '成銘德', '戴國政', '鄧錦坤', '洪榮洲', '黃錦煌', '黃宗立', '林浩庭', '林孟儒', '林源堂', '劉明山', '劉顯光', '羅致卿', '彭信舒', '王啟昌', '蕭肇殷', '楊榮顯', '楊世宏', '尹清岩', '張文政', '朱智義'];
FCM = ['蔡昆', '蔡宜壽', '陳文正', '陳致光', '黃建霖', '黃金鳳', '李維平', '廖盛焜', '林佳弘', '邱長塤', '石天威', '鄭國彬'];
IESM = ['白志祥', '曾明哲', '陳亭志', '陳正芳', '郭修暐', '洪明傳', '蔣安國', '李明賢', '林棋瑋', '林棋瑋', '林暘桂', '劉浚明', '盧銘勳', '丘紀堇', '唐國豪', '王逸琦', '吳美芳', '蕭堯仁', '葉忠', '鄭豐聰', '莊文傑'];
CHE = ['曾怡享', '陳奎佑', '陳奇中', '陳志賢', '林屏杰', '林永森', '施志欣', '翁于晴', '吳石乙', '許健興', '袁維勵', '詹志潔', '張棋榕', '張振昌', '趙雲鵬', '朱侯憲'];
AERO = ['陳啟川', '陳重德', '方俊', '郭文雄', '黃柏文', '黃振鴻', '賴盈誌', '李永明', '劉通敏', '宋齊有', '謝宗翰', '楊瑞彬', '葉俊良', '鄭仙志'];
Precision = ['蔡鈺鼎', '江懷海', '劉育成', '徐瑞宏'];
IECS = ['蔡明峰', '陳德生', '陳烈武', '陳啟鏘', '陳青文', '陳錫民', '陳奕中', '竇其仁', '顧偉倫', '洪維志', '黃秋煌', '黃溪春', '黃秀芬', '黃志銘', '李榮三', '李維斌', '林財寶', '林明言', '林志敏', '劉宗杰', '蘇宗安', '王益文', '徐弘洋', '許芳榮', '薛念林', '楊東麟', '游景盛', '張貴忠'];
EE = ['曹嶸', '沈昭元', '陳德請', '陳坤煌', '陳志強', '何子儀', '黃昌圳', '黃思倫', '李企桓', '梁寶芝', '林榮松', '劉文豐', '蘇恆毅', '田春林', '王壘', '鄭進興'];
ECE = ['曾憲輝', '陳冠宏', '陳家富', '陳坤志', '簡鳳佐', '康宗貴', '李景松', '林成利', '林宗志', '劉漢胤', '劉俊傑', '劉紹宗', '劉堂傑', '施仁斌', '王啟林', '吳鴻璋', '吳重雨', '蕭敏學', '許恒壽', '楊炳章', '楊水源', '楊文祿', '鄭經華'];
AC = ['陳昶孝', '陳孝武', '洪三山', '黃建立', '黃榮興', '林宸生', '林南州', '林賢龍', '林育德', '林昱成', '劉益瑞', '邱創乾', '蘇文彬', '吳穎強', '謝哲光', '許煜亮', '張金堅', '張寧群', '張興政', '鄒慶福'];
CE = ['陳家豪', '陳益生', '陳志瀅', '翟本喬', '何滿龍', '賴辰彥', '廖和恩', '廖時三', '林漢年', '林立謙', '林維崙', '辛紹志', '辛正和', '楊豐瑞', '尤正祺', '袁世一', '趙啟時', '朱嘯秋', '鄒耀東'];
CIVIL = ['卜君平', '蔡崇興', '陳廣祥', '陳清標', '黃逸萍', '康裕明', '李秉乾', '廖為忠', '林保宏', '林慶昌', '林威延', '林正紋', '蘇人煇', '王起平', '許澤善', '張志超', '張智元'];
WRE = ['陳昶憲', '陳憲宗', '李漢鏗', '連惠邦', '廖清標', '劉建榮', '蘇惠珍', '王傳益', '吳俊鋐', '許少華', '許盈松', '許裕雄', '楊朝仲', '葉昭憲', '張嘉玲', '鄭仙偉'];
ARCH = ['曾亮 ', '沈揚庭 ', '陳上元 ', '崔征國 ', '杜方中 ', '高敬賢 ', '谷特瑪蒂亞斯 ', '黃德生 ', '黎淑婷 ', '李英弘 ', '林昌明 ', '林富淞 ', '林季芸 ', '林衍良 ', '彭志峰 ', '宋玉真 ', '謝佩霓 ', '張莉欣 ', '趙又嬋', '劉為光', '鄭明仁'];
UPSI = ['高孟定', '高豫麒', '賴美蓉', '雷祖強', '劉立偉', '劉曜華', '馬瑜嬪', '邱景升', '王大立', '謝政穎', '徐逸祥', '周宜強', '莊永忠'];
TTM = ['艾嘉銘', '曾柏興', '陳朝輝', '陳方元', '李克聰', '林大傑', '林良泰', '劉霈', '溫傑華', '吳沛儒', '徐耀賜', '楊宗璟', '葉名山', '葉昭甫'];
LM = ['陳建元', '何彥陞', '洪本善', '李瑞陽', '林宗賢', '王珍玲', '謝靜琪', '辛年豐', '楊賀雯', '楊龍士', '楊文燦', '張梅英', '朱南玉', '鍾懿萍','周天穎'];
CL = ['陳兆南', '何寄澎', '李寶玲', '李時銘', '李玲', '李威熊', '梁煌儀', '廖美玉', '林韻柔', '彭妙卿 ', '宋建華', '王祥齡', '楊美美', '余美玲', '張瑞芬', '鄭慧如', '鐘文伶', '朱文光'];
FLL = ['蔡明秀', '蔡依仁', '曾鹿鳴', '沈薇薇', '郭毓芳', '何文敬', '黃舒屏', '李麗秋', '廖咸浩', '林羨', '劉森堯', '劉顯親', '羅珮瑄', '彭芳美', '邱源貴', '薛孟仁', '周玉楨', '莊坤良'];
RMI = ['陳森松', '洪介偉', '黃依潔', '江朝', '江耕南', '康裕民', '賴志仁', '寶宏', '吳瑞雲', '許文彥', '張吉宏','黃雅文', '林進田', '劉純之', '呂瑞秋', '張智凱'];
FIN = ['陳麗君', '陳清和', '洪偉峰', '簡正儀', '姜寄南', '李君屏', '廖東亮', '林昆立', '劉炳麟', '羅仙法', '王佳真', '王韻怡', '吳仰哲', '楊明晶', '張倉耀', '朱心蘅', '馮詩蘋', '駱建陵'];
MATH = ['曾勵新', '陳裕益', '陳長城', '陳子建', '黃新峰', '李英豪', '林彩玉', '林維鈞', '林英志', '林震燦', '林姿均', '魏秀娟', '吳純純', '楊基源', '楊建成', '楊菁菁', '葉光清', '張桂芳', '洪子倫'];
EES = ['陳建隆', '陳志成', '馮秋霞', '胡苔莉', '黃東池', '簡正一', '李書安', '梁正中', '林俊德', '林秋裕', '任南琪', '童翔新', '王唯匡', '吳俊哲', '吳志超', '喻家駿', '張立德', 'T.-Nejat Veziroglu'];
MSE= ['蔡健益', '陳錦山', '陳錦毅', '何主亮', '河合良信', '洪緯璿', '金重勳', '柯澤豪', '李立鼎', '梁辰睿', '林昆明', '駱榮富', '邱國峰', '孫道中', '田修波', '王誠佑', '王致傑', '張育誠', '張志宇', 'Yosi Y-Shacham'];
PHOTONICS = ['蔡雅芝', '陳敬恒', '胡水上', '賴俊峰', '李賜福', '李英德', '李正中', '林菲', '林碩泰', '林泰生', '劉榮平', '盧聖華', '羅道正', '羅仕守', '馬仕信', '潘定中', '唐謙仁', '吳正文', '葉建宏', '周哲仲'];


/*

score('多的內容', '要比較的字');


async.series([
    function(next) {
        console.log('1');
        next();
    }, function(next) {
        setTimeout(function() {
            X = 1+1+1+1+1+1;
			console.log('step1');
            next();
        }, 1000);
    }, function(next) {
        setTimeout(function() {
            Y = 15;
			console.log('step2');
            next();
        }, 1000);
    }, function(next) {
        setTimeout(function() {
            Y = 15;
			console.log('step3');
            next();
        }, 1000);
    }, function(next) {
		console.log('step4');
        console.log(X+Y);
        next();
    }
], function(err) {
    console.log('Done');
});


*/


ACC.length

lupus(0, IT.length, function(T) {
	Path = '/home/user/Tranquility/FCU-Data/IBM/Concepts/'+IT[T]+'concepts.json';

		fs.readFile(Path, 'utf8', function (err, data) {
					
						if (err) {
								return console.log(err);
							}
						Data = JSON.parse(data);
						Concept = Data.concepts;
				console.log(IT[T]);
			for (a=0;a<Consepts.length;a++){
						console.log(Concept[a].text);
			}
		});
	}, function() {
	}
);


//	The same in get each Concepts
/*

lupus(0, IT.length, function(T) {

	Path = '/home/user/Tranquility/FCU-Data/IBM/Concepts/'+IT[T]+'concepts.json';
	//console.log(ConceptsPath);

		fs.readFile(Path, function(err, data){ 

		 	if (err) console.log(err);
		 	Data = JSON.parse(data);
			//Teacher Name
			console.log('$'+IT[T]+'@');
			Consepts = Data.concepts;
				for (a=0;a<Consepts.length;a++){
					console.log('{'+Consepts[a].text+'},');
			}
				console.log('~~');

		 });
	}, function() {
	}
);

*/


NT = ACC ;

lupus(0, NT.length, function(T) {
	Path = '/home/user/Tranquility/FCU-Data/IBM/Concepts/'+NT[T]+'concepts.json';

		fs.readFile(Path, 'utf8', function (err, data) {		
						if (err) {
								return console.log(err);
							}
						Data = JSON.parse(data);
						Concept = Data.concepts;
				console.log(NT[T]);
			for (a=0;a<Consept.length;a++){
						console.log(Concept[a].text);
								
					for(b=0;b<NTCS.length;b++){
					}	
}
		});
	}, function() {
	}
);



//Three loop 





var lupus = require('lupus');

lupus(0, 100, function(n) {
  console.log("Here is n:", n);
		for(a=0;a<11;a++){
		console.log('a'+a);
			for(b=0;b<11;b++){
			console.log('b'+b);			

			}
		}



}, function() {
  console.log('Done!');
});





// Start


var Department = [ACC, IT, PF, COOP, STAT, ECO, BA, Marketing, MCAE, FCM, IESM, CHE, AERO, Precision, IECS, EE, ECE, AC, CE, CIVIL, WRE, ARCH, UPSI, TTM, LM, CL, FLL, RMI, FIN, MATH, EES, MSE, PHOTONICS];

var DepartmentName = ['ACC', 'IT', 'PF', 'COOP', 'STAT', 'ECO', 'BA', 'Marketing', 'MCAE', 'FCM', 'IESM', 'CHE', 'AERO', 'Precision', 'IECS', 'EE', 'ECE', 'AC', 'CE', 'CIVIL', 'WRE', 'ARCH', 'UPSI', 'TTM', 'LM', 'CL', 'FLL', 'RMI', 'FIN', 'MATH', 'EES', 'MSE', 'PHOTONICS']



//WTF, It can't score() by three loop



NTeacher = ACC; 

var lupus = require('lupus');

lupus(0, NTeacher.length, function(NT) {
  //console.log("Here is n:", NT);
	//NTCL = Now Teacher Concepts length
	ConceptsPath = '/home/user/Tranquility/FCU-Data/IBM/Concepts/'+NTeacher[NT]+'concepts.json';
		fs.readFile(ConceptsPath, function(err, data){ 

				 	if (err) console.log(err);
				 	Data = JSON.parse(data);
					Consepts = Data.concepts;
					console.log(NTeacher[NT]);
							for (a=0;a<Consepts.length;a++){
								console.log(Consepts[a].text);
										for(b=0;b<5;b++){
											score('hello'+b, 'hello'); 										
											//console.log('hi');
										}
							}

		})
}, function() {
  console.log('Done!');
});



//Test
//WTF, It only score() one time ...

var TestTeacher = [曹秀惠, 陳光政];
var TestTeacherName = ['曹秀惠', '陳光政'];
var TestTeacherCS = [曹秀惠CS, 陳光政CS];

var 曹秀惠 = [
"Enterprise resource planning" ,
"Capital" 
]
var 陳光政 = [
"Management" ,
"Finance" ,
"Scientific method" 
]


var 曹秀惠CS = "Enterprise resource planning Capital" ;

var 陳光政CS = "Management inance Scientific method" ;




for (a=0;a<TestTeacher.length;a++){
	NT = TestTeacher[a];
	//console.log(NT);
		for(b=0;b<TestTeacher[a].length;b++){
				NTC = NT[b];
				//console.log(NTC);
						for(c=0;c<TestTeacherCS.length;c++){
							NCTCS = TestTeacherCS[c];
							//console.log(NCTCS +'  '+NTC);			
							score(NCTCS, NTC);
						};
							
		};
	
}



//Test -> Write a text to score .. Stupid way...



/*

for (a=0;a<TestTeacher.length;a++){
	NT = TestTeacher[a];
	console.log(TestTeacherName[a]+" = [ [");
		for(b=0;b<TestTeacher[a].length;b++){
				NTC = NT[b];
						for(c=0;c<TestTeacherCS.length;c++){
							NCTCS = TestTeacherCS[c];
							//console.log("score ( '"+NCTCS +"' , '"+NTC+"', 0.5);");			
							S = score(NCTCS, NTC, 0.5);
							console.log(S+" ,");
			
						};
						console.log("], [");
		};
	console.log("] ]");
};



//fs.appendFile('/home/user/Tranquility/TempData/'+DepartmentName[i]+'where.json', Anger, function (err) {});




*/
//Test success



///////////////////////////////////////////////////////////
/*

NTC = Now Teacher's Concepts
NCTCS = Now Compare Teachers Concepts Sentance 

I use 0.5 mix 

*/

var Teacher = [曹秀惠, 陳光政];
var TeacherName = ['曹秀惠', '陳光政'];
var TeacherCS = [曹秀惠CS, 陳光政CS];



for (a=0;a<Teacher.length;a++){
	NT = Teacher[a];
	console.log(TeacherName[a]+" = [ [");
		for(b=0;b<Teacher[a].length;b++){
				NTC = NT[b];
						for(c=0;c<TeacherCS.length;c++){
							NCTCS = TeacherCS[c];
							//console.log("score ( '"+NCTCS +"' , '"+NTC+"', 0.5);");			
							S = score(NCTCS, NTC, 0.5);
							console.log(S+" ,");
			
						};
						console.log("], [");
		};
	console.log("] ];");
};




