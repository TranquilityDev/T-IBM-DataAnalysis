var fs = require('fs');
var lupus = require('lupus');
var AlchemyLanguageV1 = require('watson-developer-cloud/alchemy-language/v1');
var alchemy_language = new AlchemyLanguageV1({
  api_key: '9e9cd18620d63b5f92c408179735541fb3d60e85'
});
//Entities
var TeachersName = ['王祥齡','朱文光','余美玲','宋建華','李威熊','李玲','林韻柔','張瑞芬','梁煌儀','彭妙卿','楊美美','廖美玉','鄭慧如','鐘文伶','王智弘','吳如娟','邱英雄','徐重仁','張秀樺','張美燕','張寶蓉','許士軍','陳建文','曾欽正','黃文柔','滿肇怡','劉平文','鄭孟育','蕭國鐘','駱達彪','吳正文','李正中','李英德','李賜福','周哲仲','林泰生','林菲','林碩泰','胡水上','唐謙仁','馬仕信','陳敬恒','葉建宏','劉榮平','潘定中','蔡雅芝','盧聖華','賴俊峰','羅仕守','羅道正','朱侯憲','吳石乙','林永森','林屏杰','施志欣','翁于晴','袁維勵','張振昌','張棋榕','許健興','陳志賢','陳奇中','陳奎佑','曾怡享','詹志潔','趙雲鵬','于躍門','江宜芳','吳肇展','李桂秋','汪浩','林瑞發','郭迪賢','陳聖賢','楊坤鋒','翟本瑞','劉文榮','王若愚','江怡蒨','吳文臨','吳廣文','林呈昱','邱世寬','邱安安','徐瑞玲','寇敦智','梁馨予','許鈺珮','陳俊卿','黃秀英','黃焜煌','楊明憲','劉翁昆','韓宜','羅芳怡','王珍玲','朱南玉','何彥陞','李瑞陽','辛年豐','林宗賢','洪本善','張梅英','陳建元','楊文燦','楊賀雯','楊龍士','謝靜琪','卜君平','王起平','李秉乾','林正紋','林保宏','林威延','林慶昌','康裕明','張志超','張智元','許澤善','陳清標','陳廣祥','黃逸萍','廖為忠','蔡崇興','蘇人煇','李麗秋','沈薇薇','周玉楨','林羨 ','邱源貴','莊坤良','郭毓芳','彭芳美','曾鹿鳴','黃舒屏','廖咸浩','劉森堯','劉顯親','蔡依仁','蔡明秀','薛孟仁','羅珮瑄','王逸琦','丘紀堇','白志祥','吳美芳','李明賢','林棋瑋','林暘桂','洪明傳','唐國豪','莊文傑','郭修暐','陳正芳','陳亭志','曾明哲','葉忠','劉浚明','蔣安國','鄭豐聰','盧銘勳','蕭堯仁','宋玉真','李英弘','杜方中','沈揚庭','谷特瑪蒂亞斯','林季芸','林昌明','林衍良','林富淞','高敬賢','崔征國','張莉欣','陳上元','彭志峰','曾亮','黃德生','趙又嬋','黎淑婷','吳純純','李英豪','林姿均','林英志','林彩玉','林維鈞','林震燦','張桂芳','陳子建','陳長城','陳裕益','曾勵新','黃新峰','楊建成','楊基源','楊菁菁','葉光清','魏秀娟','王光華','王漢民','江向才','吳東憲','林嬌能','施念恕','翁慈青','高惠松','康淑珍','張森河','曹秀惠','陳光政','黃娟娟','鄭竹君','鄭佩玉','盧鈺欣','蕭子誼','Yosi Y-Shacham','王致傑','王誠佑','田修波','何主亮','李立鼎','林昆明','河合良信','邱國峰','金重勳','柯澤豪','洪緯璿','孫道中','張志宇','張育誠','梁辰睿','陳錦山','陳錦毅','蔡健益','駱榮富','尹清岩','王啟昌','成銘德','朱智義','林孟儒','林浩庭','林源堂','洪榮洲','張文政','彭信舒','黃宗立','黃錦煌','楊世宏','楊榮顯','劉明山','劉顯光','蔡忠杓','鄧錦坤','蕭肇殷','戴國政','羅致卿','王傳益','吳俊鋐','李漢鏗','張嘉玲','許少華','許盈松','許裕雄','連惠邦','陳昶憲','陳憲宗','楊朝仲','葉昭憲','廖清標','劉建榮','鄭仙偉','蘇惠珍','T.-Nejat Veziroglu','王唯匡','任南琪','吳志超','吳俊哲','李書安','林俊德','林秋裕','胡苔莉','張立德','梁正中','陳志成','陳建隆','喻家駿','童翔新','馮秋霞','黃東池','簡正一','江懷海','徐瑞宏','劉育成','蔡鈺鼎','王婉倫','王聖','吳進家','吳榮彬','李文','李燊銘','林文欽','林哲彥','林麗芬','高秀蘭','陳婉淑','賴崑榮','鍾冬川','方文碩','王平','王葳','吳紀瑩','李文傳','胡士文','徐繼達','秦國軒','郭祐誠','陳至還','陳依依','陳善瑜','陳瓊怜','彭德昭','鄒繼礎','趙志鉅','劉宗欣','歐嘉瑞','鄭保村','賴景昌','顏厚棟','石天威','李維平','林佳弘','邱長塤','陳文正','陳致光','黃金鳳','黃建霖','廖盛焜','蔡宜壽','蔡昆','鄭國彬','吳穎強','林育德','林南州','林昱成','林宸生','林賢龍','邱創乾','洪三山','張金堅','張寧群','張興政','許煜亮','陳孝武','陳昶孝','黃建立','黃榮興','鄒慶福','劉益瑞','謝哲光','蘇文彬','方俊','宋齊有','李永明','郭文雄','陳重德','陳啟川','黃柏文','黃振鴻','楊瑞彬','葉俊良','劉通敏','鄭仙志','賴盈誌','謝宗翰','丁美靜','王郁彬','王婉禎','何晉瑋','李元恕','林志皇','凱達西','彭德湘','簡士超','馮詩蘋','駱建陵','王佳真','王韻怡','朱心蘅','吳仰哲','李君屏','林昆立','姜寄南','洪偉峰','張倉耀','陳清和','陳麗君','楊明晶','廖東亮','劉炳麟','簡正儀','羅仙法','何艷宏','吳朝欽','洪國仁','許慧雯','陳盛通','曾子耘','游慧光','黃定遠','黃瓊如','楊建成','賴炎卿','謝耀智','王益文','李榮三','李維斌','林志敏','林明言','林財寶','洪維志','徐弘洋','張貴忠','許芳榮','陳青文','陳奕中','陳烈武','陳啟鏘','陳德生','陳錫民','游景盛','黃志銘','黃秀芬','黃秋煌','黃溪春','楊東麟','劉宗杰','蔡明峰','薛念林','竇其仁','蘇宗安','顧偉倫','尤正祺','朱嘯秋','何滿龍','辛正和','辛紹志','林立謙','林漢年','林維崙','袁世一','陳志瀅','陳家豪','陳益生','楊豐瑞','鄒耀東','廖和恩','廖時三','翟本喬','趙啟時','賴辰彥','艾嘉銘','吳沛儒','李克聰','林大傑','林良泰','徐耀賜','陳方元','陳朝輝','曾柏興','楊宗璟','溫傑華','葉名山','葉昭甫','劉霈','王大立','周宜強','邱景升','徐逸祥','馬瑜嬪','高孟定','高豫麒','莊永忠','雷祖強','劉立偉','劉曜華','賴美蓉','謝政穎','王啟林','吳重雨','吳鴻璋','李景松','林成利','林宗志','施仁斌','康宗貴','許恒壽','陳坤志','陳冠宏','陳家富','曾憲輝','楊文祿','楊水源','楊炳章','劉俊傑','劉堂傑','劉紹宗','劉漢胤','鄭經華','蕭敏學','簡鳳佐','王壘','田春林','何子儀','李企桓','沈昭元','林榮松','曹嶸','梁寶芝','陳志強','陳坤煌','陳德請','黃昌圳','黃思倫','劉文豐','鄭進興','蘇恆毅','江耕南','江朝','吳瑞雲','洪介偉','康裕民','張吉宏','許文彥','陳森松','黃依潔','賴志仁','寶宏'];


/*TTTTTTTTTTTTTTTTTTTTTTTTTTTTTTTTTTTTTTTTTTTTTTTTTTTTTTTTTTTTTTTTTTTTTTTTTTTTTTTTTTTTTTTTT
  TTTTTTTTT     TT    TTT    TT  T  TT    TT TT T   TT TTTTT   T     TT  T  TTTTTTTTTTTTTTT
  TTTTTTTTTTT TTTT TT  TT TT TT T T TT TT TT TT TT TTT TTTTTT TTTT TTTTT   TTTTTTTTTTTTTTTT
  TTTTTTTTTTT TTTT   TTTT    TT T T TT TT TT TT TT TTT TTTTTT TTTT TTTTTT TTTTTTTTTTTTTTTTT
  TTTTTTTTTTT TTTT TT  TT TT TT TT  TTTT  TTT  TT   TT    TT   TTT TTTTTT TTTTTTTTTTTTTTTTT*/

//Entities  
  
lupus(0,537, function(n) {
		alchemy_language.entities(parameters[n], function (err, response) {
			if (err)
				console.log('error:', err);
			else
				console.log(JSON.stringify(response, null, 2));
					fs.writeFile('D:/TempData/'+TeachersName[n]+'entities.json',JSON.stringify(response, null, 20),  function(err) {
					if (err) {
					   return console.error(err);
					}
					console.log("Data is writing...\n");
					});

		});
	}, function() {
  console.log('Start !');
});


//Concepts (-1 File)

lupus(0,537, function(n) {
	
alchemy_language.concepts(parameters[n], function (err, response) {
	if (err)
		console.log('error:', err);
	else
		console.log(JSON.stringify(response, null, 2));
						fs.writeFile('D:/TempData/'+TeachersName[n]+'concepts.json',JSON.stringify(response, null, 20),  function(err) {
					if (err) {
					   return console.error(err);
					}
					console.log("Data is writing\n");
					});
});

	}, function() {
  console.log('Start !');
});



//Keywords


lupus(0,537, function(n) {
	
alchemy_language.keywords(parameters[n], function (err, response) {
	if (err)
		console.log('error:', err);
	else
		console.log(JSON.stringify(response, null, 20));
	
					fs.writeFile('D:/TempData/'+TeachersName[n]+'keywords.json',JSON.stringify(response, null, 20),  function(err) {
					if (err) {
					   return console.error(err);
					}
					console.log("Data is writing\n");
					});

	
	
});

	}, function() {
  console.log('Start !');
});



//Taxonomy



lupus(0,537, function(n) {
	
alchemy_language.taxonomy(parameters[n], function (err, response) {
	if (err)
		console.log('error:', err);
	else
		console.log(JSON.stringify(response, null, 2));
	

					fs.writeFile('D:/TempData/'+TeachersName[n]+'taxonomy.json',JSON.stringify(response, null, 20),  function(err) {
					if (err) {
					   return console.error(err);
					}
					console.log("Data is writing\n");
					});
});


	}, function() {
  console.log('Start !');
});



//Emotion Analysis


lupus(0,537, function(n) {
	
alchemy_language.emotion(parameters[n], function (err, response) {
	if (err)
		console.log('error:', err);
	else
		console.log(JSON.stringify(response, null, 2));
						fs.writeFile('D:/TempData/'+TeachersName[n]+'emotion.json',JSON.stringify(response, null, 20),  function(err) {
					if (err) {
					   return console.error(err);
					}
					console.log("Data is writing\n");
					});
});


	}, function() {
  console.log('Start !');
});



//Sentiment



lupus(0,537, function(n) {
	
alchemy_language.sentiment(parameters[n], function (err, response) {
	if (err)
		console.log('error:', err);
	else
		console.log(JSON.stringify(response, null, 2));
							fs.writeFile('D:/TempData/'+TeachersName[n]+'sentiment.json',JSON.stringify(response, null, 20),  function(err) {
					if (err) {
					   return console.error(err);
					}
					console.log("Data is writing\n");
					});
});


	}, function() {
  console.log('Start !');
});





//Relations


lupus(0,537, function(n) {
	
alchemy_language.relations(parameters[n], function (err, response) {
	if (err)
		console.log('error:', err);
	else
		console.log(JSON.stringify(response, null, 2));
								fs.writeFile('D:/TempData/'+TeachersName[n]+'relations.json',JSON.stringify(response, null, 20),  function(err) {
					if (err) {
					   return console.error(err);
					}
					console.log("Data is writing\n");
					});
});
	}, function() {
  console.log('Start !');
});


//Typed Relations

lupus(0,537, function(n) {
	
alchemy_language.typedRelations(parameters[n], function (err, response) {
	if (err)
		console.log('error:', err);
	else
		console.log(JSON.stringify(response, null, 2));
	
					fs.writeFile('D:/TempData/'+TeachersName[n]+'typedRelations.json',JSON.stringify(response, null, 20),  function(err) {
					if (err) {
					   return console.error(err);
					}
					console.log("Data is writing\n");
					});
});
	}, function() {
  console.log('Start !');
});







