var fs = require('fs');
var lupus = require('lupus');
var score = require('string-score');
var async = require('async');

//Name List


ACCName  = ['曹秀惠', '陳光政', '高惠松', '黃娟娟', '江向才', '康淑珍', '林嬌能', '盧鈺欣', '施念恕', '王光華', '王漢民', '翁慈青', '吳東憲', '蕭子誼', '張森河', '鄭佩玉', '鄭竹君'];
ITName  = ['陳俊卿', '韓宜', '黃焜煌', '黃秀英', '江怡蒨', '寇敦智', '梁馨予', '林呈昱', '劉翁昆', '羅芳怡', '邱世寬', '王若愚', '吳廣文', '吳文臨', '徐瑞玲', '許鈺珮', '楊明憲', '邱安安'];
//Error 楊建成
PFName  = ['曾子耘', '陳盛通', '何艷宏', '洪國仁', '黃定遠', '黃瓊如', '賴炎卿', '吳朝欽', '謝耀智', '許慧雯', '游慧光'];
//Error 郭賢 
COOPName  = ['陳聖賢', '翟本瑞', '江宜芳', '李桂秋', '林瑞發', '劉文榮', '汪浩', '吳肇展', '楊坤鋒', '于躍門'];
STATName  = ['陳婉淑', '高秀蘭', '李燊銘', '林文欽', '林哲彥', '王聖', '王婉倫', '吳進家', '吳榮彬', '鍾冬川', '賴崑榮', '李文', '林麗芬'];
ECOName  = ['陳瓊怜', '陳善瑜', '陳依依', '陳至還', '方文碩', '郭祐誠', '胡士文', '賴景昌', '李文傳', '劉宗欣', '歐嘉瑞', '彭德昭', '秦國軒', '王平', '王葳', '吳紀瑩', '徐繼達', '顏厚棟', '趙志鉅', '鄭保村', '鄒繼礎'];
BAName  = ['曾欽正', '陳建文', '黃文柔', '劉平文', '駱達彪', '滿肇怡', '邱英雄', '王智弘', '吳如娟', '蕭國鐘', '徐重仁', '許士軍', '張寶蓉', '張美燕', '張秀樺', '鄭孟育', '林豐智', 'Norm Lambert'];
MarketingName  = ['丁美靜', '何晉瑋', '簡士超', '凱達西', '李元恕', '林志皇', '彭德湘', '王婉禎', '王郁彬'];
// Error 尹清岩
MCAEName  = ['蔡忠杓', '成銘德', '戴國政', '鄧錦坤', '洪榮洲', '黃錦煌', '黃宗立', '林浩庭', '林孟儒', '林源堂', '劉明山', '劉顯光', '羅致卿', '彭信舒', '王啟昌', '蕭肇殷', '楊榮顯', '楊世宏', '張文政', '朱智義'];
// Error 陳文正 陳致光 黃建霖 黃金鳳 李維平 林佳弘 邱長塤 石天威
FCMName = ['蔡昆', '蔡宜壽', '廖盛焜', '鄭國彬'];
IESMName  = ['白志祥', '曾明哲', '陳亭志', '陳正芳', '郭修暐', '洪明傳', '蔣安國', '李明賢', '林棋瑋', '林棋瑋', '林暘桂', '劉浚明', '盧銘勳', '丘紀堇', '唐國豪', '王逸琦', '吳美芳', '蕭堯仁', '葉忠', '鄭豐聰', '莊文傑'];
CHEName  = ['曾怡享', '陳奎佑', '陳奇中', '陳志賢', '林屏杰', '林永森', '施志欣', '翁于晴', '吳石乙', '許健興', '袁維勵', '詹志潔', '張棋榕', '張振昌', '趙雲鵬', '朱侯憲'];
AEROName  = ['陳啟川', '陳重德', '方俊', '郭文雄', '黃柏文', '黃振鴻', '賴盈誌', '李永明', '劉通敏', '宋齊有', '謝宗翰', '楊瑞彬', '葉俊良', '鄭仙志'];
PrecisionName  = ['蔡鈺鼎', '江懷海', '劉育成', '徐瑞宏'];
IECSName  = ['蔡明峰', '陳德生', '陳烈武', '陳啟鏘', '陳青文', '陳錫民', '陳奕中', '竇其仁', '顧偉倫', '洪維志', '黃秋煌', '黃溪春', '黃秀芬', '黃志銘', '李榮三', '李維斌', '林財寶', '林明言', '林志敏', '劉宗杰', '蘇宗安', '王益文', '徐弘洋', '許芳榮', '薛念林', '楊東麟', '游景盛', '張貴忠'];
EEName  = ['曹嶸', '沈昭元', '陳德請', '陳坤煌', '陳志強', '何子儀', '黃昌圳', '黃思倫', '李企桓', '梁寶芝', '林榮松', '劉文豐', '蘇恆毅', '田春林', '王壘', '鄭進興'];
ECEName  = ['曾憲輝', '陳冠宏', '陳家富', '陳坤志', '簡鳳佐', '康宗貴', '李景松', '林成利', '林宗志', '劉漢胤', '劉俊傑', '劉紹宗', '劉堂傑', '施仁斌', '王啟林', '吳鴻璋', '吳重雨', '蕭敏學', '許恒壽', '楊炳章', '楊水源', '楊文祿', '鄭經華'];
ACName  = ['陳昶孝', '陳孝武', '洪三山', '黃建立', '黃榮興', '林宸生', '林南州', '林賢龍', '林育德', '林昱成', '劉益瑞', '邱創乾', '蘇文彬', '吳穎強', '謝哲光', '許煜亮', '張金堅', '張寧群', '張興政', '鄒慶福'];
CEName  = ['陳家豪', '陳益生', '陳志瀅', '翟本喬', '何滿龍', '賴辰彥', '廖和恩', '廖時三', '林漢年', '林立謙', '林維崙', '辛紹志', '辛正和', '楊豐瑞', '尤正祺', '袁世一', '趙啟時', '朱嘯秋', '鄒耀東'];
CIVILName  = ['卜君平', '蔡崇興', '陳廣祥', '陳清標', '黃逸萍', '康裕明', '李秉乾', '廖為忠', '林保宏', '林慶昌', '林威延', '林正紋', '蘇人煇', '王起平', '許澤善', '張志超', '張智元'];
WREName  = ['陳昶憲', '陳憲宗', '李漢鏗', '連惠邦', '廖清標', '劉建榮', '蘇惠珍', '王傳益', '吳俊鋐', '許少華', '許盈松', '許裕雄', '楊朝仲', '葉昭憲', '張嘉玲', '鄭仙偉'];
// ALL ARCH r Error !!!

ARCHName  = ['曾亮 ', '沈揚庭 ', '陳上元 ', '崔征國 ', '杜方中 ', '高敬賢 ', '谷特瑪蒂亞斯 ', '黃德生 ', '黎淑婷 ', '李英弘 ', '林昌明 ', '林富淞 ', '林季芸 ', '林衍良 ', '彭志峰 ', '宋玉真 ', '謝佩霓 ', '張莉欣 ', '趙又嬋', '劉為光', '鄭明仁'];
UPSIName  = ['高孟定', '高豫麒', '賴美蓉', '雷祖強', '劉立偉', '劉曜華', '馬瑜嬪', '邱景升', '王大立', '謝政穎', '徐逸祥', '周宜強', '莊永忠'];
TTMName  = ['艾嘉銘', '曾柏興', '陳朝輝', '陳方元', '李克聰', '林大傑', '林良泰', '劉霈', '溫傑華', '吳沛儒', '徐耀賜', '楊宗璟', '葉名山', '葉昭甫'];
//Eroor 鍾懿萍 周天穎
LMName  = ['陳建元', '何彥陞', '洪本善', '李瑞陽', '林宗賢', '王珍玲', '謝靜琪', '辛年豐', '楊賀雯', '楊龍士', '楊文燦', '張梅英', '朱南玉'];
//Error 陳兆南 何寄澎 李寶玲 李時銘 彭妙卿 
CLName  = ['李玲', '李威熊', '梁煌儀', '廖美玉', '林韻柔', '宋建華', '王祥齡', '楊美美', '余美玲', '張瑞芬', '鄭慧如', '鐘文伶', '朱文光'];
//Error 何文敬 林羨 
FLLName  = ['蔡明秀', '蔡依仁', '曾鹿鳴', '沈薇薇', '郭毓芳', '黃舒屏', '李麗秋', '廖咸浩', '劉森堯', '劉顯親', '羅珮瑄', '彭芳美', '邱源貴', '薛孟仁', '周玉楨', '莊坤良'];
//Error 黃雅文 林進田 劉純之 呂瑞秋 張智凱 
RMIName  = ['陳森松', '洪介偉', '黃依潔', '江朝', '江耕南', '康裕民', '賴志仁', '寶宏', '吳瑞雲', '許文彥', '張吉宏'];
FINName  = ['陳麗君', '陳清和', '洪偉峰', '簡正儀', '姜寄南', '李君屏', '廖東亮', '林昆立', '劉炳麟', '羅仙法', '王佳真', '王韻怡', '吳仰哲', '楊明晶', '張倉耀', '朱心蘅', '馮詩蘋', '駱建陵'];
/*
MATHName  = ['曾勵新', '陳裕益', '陳長城', '陳子建', '黃新峰', '李英豪', '林彩玉', '林維鈞', '林英志', '林震燦', '林姿均', '魏秀娟', '吳純純', '楊基源', '楊建成', '楊菁菁', '葉光清', '張桂芳', '洪子倫'];
*/
MATHName = ['曾勵新', '陳子建', '黃新峰', '林彩玉', '林維鈞', '林英志', '林震燦', '林姿均', '魏秀娟', '吳純純', '楊基源', '楊菁菁', '葉光清', '張桂芳'];
//Error T.-NejatVezirogluCS -> TNejatVezirogluCS
EESName  = ['陳建隆', '陳志成', '馮秋霞', '胡苔莉', '黃東池', '簡正一', '李書安', '梁正中', '林俊德', '林秋裕', '任南琪', '童翔新', '王唯匡', '吳俊哲', '吳志超', '喻家駿', '張立德', 'TNejatVeziroglu'];
//Error Yosi Y-Shacham -> YosiYShacham
MSEName= ['蔡健益', '陳錦山', '陳錦毅', '何主亮', '河合良信', '洪緯璿', '金重勳', '柯澤豪', '李立鼎', '梁辰睿', '林昆明', '駱榮富', '邱國峰', '孫道中', '田修波', '王誠佑', '王致傑', '張育誠', '張志宇', 'YosiYShacham'];
PHOTONICSName  = ['蔡雅芝', '陳敬恒', '胡水上', '賴俊峰', '李賜福', '李英德', '李正中', '林菲', '林碩泰', '林泰生', '劉榮平', '盧聖華', '羅道正', '羅仕守', '馬仕信', '潘定中', '唐謙仁', '吳正文', '葉建宏', '周哲仲'];



//Var List

ACC = [曹秀惠, 陳光政, 高惠松, 黃娟娟, 江向才, 康淑珍, 林嬌能, 盧鈺欣, 施念恕, 王光華, 王漢民, 翁慈青, 吳東憲, 蕭子誼, 張森河, 鄭佩玉, 鄭竹君];
IT = [陳俊卿, 韓宜, 黃焜煌, 黃秀英, 江怡蒨, 寇敦智, 梁馨予, 林呈昱, 劉翁昆, 羅芳怡, 邱世寬, 王若愚, 吳廣文, 吳文臨, 徐瑞玲, 許鈺珮, 楊明憲, 邱安安];
//Error 楊建成
PF = [曾子耘, 陳盛通, 何艷宏, 洪國仁, 黃定遠, 黃瓊如, 賴炎卿, 吳朝欽, 謝耀智, 許慧雯, 游慧光];
//Error 郭賢 
COOP = [陳聖賢, 翟本瑞, 江宜芳, 李桂秋, 林瑞發, 劉文榮, 汪浩, 吳肇展, 楊坤鋒, 于躍門];
STAT = [陳婉淑, 高秀蘭, 李燊銘, 林文欽, 林哲彥, 王聖, 王婉倫, 吳進家, 吳榮彬, 鍾冬川, 賴崑榮, 李文, 林麗芬];
//Error 陳善瑜
ECO = [陳瓊怜, 陳依依, 陳至還, 方文碩, 郭祐誠, 胡士文, 賴景昌, 李文傳, 劉宗欣, 歐嘉瑞, 彭德昭, 秦國軒, 王平, 王葳, 吳紀瑩, 徐繼達, 顏厚棟, 趙志鉅, 鄭保村, 鄒繼礎];
BA = [曾欽正, 陳建文, 黃文柔, 劉平文, 駱達彪, 滿肇怡, 邱英雄, 王智弘, 吳如娟, 蕭國鐘, 徐重仁, 許士軍, 張寶蓉, 張美燕, 張秀樺, 鄭孟育, 林豐智, Norm Lambert];
Marketing = [丁美靜, 何晉瑋, 簡士超, 凱達西, 李元恕, 林志皇, 彭德湘, 王婉禎, 王郁彬];
// Error 尹清岩
MCAE = [蔡忠杓, 成銘德, 戴國政, 鄧錦坤, 洪榮洲, 黃錦煌, 黃宗立, 林浩庭, 林孟儒, 林源堂, 劉明山, 劉顯光, 羅致卿, 彭信舒, 王啟昌, 蕭肇殷, 楊榮顯, 楊世宏, 張文政, 朱智義];
// Error 陳文正 陳致光 黃建霖 黃金鳳 李維平 林佳弘 邱長塤 石天威
FCM = [蔡昆, 蔡宜壽, 廖盛焜, 鄭國彬];
IESM = [白志祥, 曾明哲, 陳亭志, 陳正芳, 郭修暐, 洪明傳, 蔣安國, 李明賢, 林棋瑋, 林棋瑋, 林暘桂, 劉浚明, 盧銘勳, 丘紀堇, 唐國豪, 王逸琦, 吳美芳, 蕭堯仁, 葉忠, 鄭豐聰, 莊文傑];
CHE = [曾怡享, 陳奎佑, 陳奇中, 陳志賢, 林屏杰, 林永森, 施志欣, 翁于晴, 吳石乙, 許健興, 袁維勵, 詹志潔, 張棋榕, 張振昌, 趙雲鵬, 朱侯憲];
AERO = [陳啟川, 陳重德, 方俊, 郭文雄, 黃柏文, 黃振鴻, 賴盈誌, 李永明, 劉通敏, 宋齊有, 謝宗翰, 楊瑞彬, 葉俊良, 鄭仙志];
Precision = [蔡鈺鼎, 江懷海, 劉育成, 徐瑞宏];
IECS = [蔡明峰, 陳德生, 陳烈武, 陳啟鏘, 陳青文, 陳錫民, 陳奕中, 竇其仁, 顧偉倫, 洪維志, 黃秋煌, 黃溪春, 黃秀芬, 黃志銘, 李榮三, 李維斌, 林財寶, 林明言, 林志敏, 劉宗杰, 蘇宗安, 王益文, 徐弘洋, 許芳榮, 薛念林, 楊東麟, 游景盛, 張貴忠];
EE = [曹嶸, 沈昭元, 陳德請, 陳坤煌, 陳志強, 何子儀, 黃昌圳, 黃思倫, 李企桓, 梁寶芝, 林榮松, 劉文豐, 蘇恆毅, 田春林, 王壘, 鄭進興];
ECE = [曾憲輝, 陳冠宏, 陳家富, 陳坤志, 簡鳳佐, 康宗貴, 李景松, 林成利, 林宗志, 劉漢胤, 劉俊傑, 劉紹宗, 劉堂傑, 施仁斌, 王啟林, 吳鴻璋, 吳重雨, 蕭敏學, 許恒壽, 楊炳章, 楊水源, 楊文祿, 鄭經華];
AC = [陳昶孝, 陳孝武, 洪三山, 黃建立, 黃榮興, 林宸生, 林南州, 林賢龍, 林育德, 林昱成, 劉益瑞, 邱創乾, 蘇文彬, 吳穎強, 謝哲光, 許煜亮, 張金堅, 張寧群, 張興政, 鄒慶福];
CE = [陳家豪, 陳益生, 陳志瀅, 翟本喬, 何滿龍, 賴辰彥, 廖和恩, 廖時三, 林漢年, 林立謙, 林維崙, 辛紹志, 辛正和, 楊豐瑞, 尤正祺, 袁世一, 趙啟時, 朱嘯秋, 鄒耀東];
CIVIL = [卜君平, 蔡崇興, 陳廣祥, 陳清標, 黃逸萍, 康裕明, 李秉乾, 廖為忠, 林保宏, 林慶昌, 林威延, 林正紋, 蘇人煇, 王起平, 許澤善, 張志超, 張智元];
WRE = [陳昶憲, 陳憲宗, 李漢鏗, 連惠邦, 廖清標, 劉建榮, 蘇惠珍, 王傳益, 吳俊鋐, 許少華, 許盈松, 許裕雄, 楊朝仲, 葉昭憲, 張嘉玲, 鄭仙偉];
// ALL ARCH r Error !!!
ARCH = [曾亮 , 沈揚庭 , 陳上元 , 崔征國 , 杜方中 , 高敬賢 , 谷特瑪蒂亞斯 , 黃德生 , 黎淑婷 , 李英弘 , 林昌明 , 林富淞 , 林季芸 , 林衍良 , 彭志峰 , 宋玉真 , 謝佩霓 , 張莉欣 , 趙又嬋, 劉為光, 鄭明仁];
UPSI = [高孟定, 高豫麒, 賴美蓉, 雷祖強, 劉立偉, 劉曜華, 馬瑜嬪, 邱景升, 王大立, 謝政穎, 徐逸祥, 周宜強, 莊永忠];
TTM = [艾嘉銘, 曾柏興, 陳朝輝, 陳方元, 李克聰, 林大傑, 林良泰, 劉霈, 溫傑華, 吳沛儒, 徐耀賜, 楊宗璟, 葉名山, 葉昭甫];
//Eroor 鍾懿萍 周天穎
LM = [陳建元, 何彥陞, 洪本善, 李瑞陽, 林宗賢, 王珍玲, 謝靜琪, 辛年豐, 楊賀雯, 楊龍士, 楊文燦, 張梅英, 朱南玉];
//Error 陳兆南 何寄澎 李寶玲 李時銘 彭妙卿 
CL = [李玲, 李威熊, 梁煌儀, 廖美玉, 林韻柔, 宋建華, 王祥齡, 楊美美, 余美玲, 張瑞芬, 鄭慧如, 鐘文伶, 朱文光];
//Error 何文敬 林羨 
FLL = [蔡明秀, 蔡依仁, 曾鹿鳴, 沈薇薇, 郭毓芳, 黃舒屏, 李麗秋, 廖咸浩, 劉森堯, 劉顯親, 羅珮瑄, 彭芳美, 邱源貴, 薛孟仁, 周玉楨, 莊坤良];
//Error 黃雅文 林進田 劉純之 呂瑞秋 張智凱 
RMI = [陳森松, 洪介偉, 黃依潔, 江朝, 江耕南, 康裕民, 賴志仁, 寶宏, 吳瑞雲, 許文彥, 張吉宏];
FIN = [陳麗君, 陳清和, 洪偉峰, 簡正儀, 姜寄南, 李君屏, 廖東亮, 林昆立, 劉炳麟, 羅仙法, 王佳真, 王韻怡, 吳仰哲, 楊明晶, 張倉耀, 朱心蘅, 馮詩蘋, 駱建陵];
//Error 陳裕益 陳長城 李英豪CS, 楊建成CS, 洪子倫CS
MATH = [曾勵新, 陳子建, 黃新峰, 林彩玉, 林維鈞, 林英志, 林震燦, 林姿均, 魏秀娟, 吳純純, 楊基源, 楊菁菁, 葉光清, 張桂芳];
//Error T.-NejatVeziroglu -> TNejatVeziroglu , 
EES = [陳建隆, 陳志成, 馮秋霞, 胡苔莉, 黃東池, 簡正一, 李書安, 梁正中, 林俊德, 林秋裕, 任南琪, 童翔新, 王唯匡, 吳俊哲, 吳志超, 喻家駿, 張立德, TNejatVeziroglu];
//Error Yosi Y-Shacham -> YosiYShacham ,
MSE= [蔡健益, 陳錦山, 陳錦毅, 何主亮, 河合良信, 洪緯璿, 金重勳, 柯澤豪, 李立鼎, 梁辰睿, 林昆明, 駱榮富, 邱國峰, 孫道中, 田修波, 王誠佑, 王致傑, 張育誠, 張志宇, YosiYShacham ];
PHOTONICS = [蔡雅芝, 陳敬恒, 胡水上, 賴俊峰, 李賜福, 李英德, 李正中, 林菲, 林碩泰, 林泰生, 劉榮平, 盧聖華, 羅道正, 羅仕守, 馬仕信, 潘定中, 唐謙仁, 吳正文, 葉建宏, 周哲仲];


//CS List

ACCCS = [曹秀惠CS, 陳光政CS, 高惠松CS, 黃娟娟CS, 江向才CS, 康淑珍CS, 林嬌能CS, 盧鈺欣CS, 施念恕CS, 王光華CS, 王漢民CS, 翁慈青CS, 吳東憲CS, 蕭子誼CS, 張森河CS, 鄭佩玉CS, 鄭竹君CS ];
ITCS = [陳俊卿CS, 韓宜CS, 黃焜煌CS, 黃秀英CS, 江怡蒨CS, 寇敦智CS, 梁馨予CS, 林呈昱CS, 劉翁昆CS, 羅芳怡CS, 邱世寬CS, 王若愚CS, 吳廣文CS, 吳文臨CS, 徐瑞玲CS, 許鈺珮CS, 楊明憲CS, 邱安安CS ];
//Error 楊建成
PFCS = [曾子耘CS, 陳盛通CS, 何艷宏CS, 洪國仁CS, 黃定遠CS, 黃瓊如CS, 賴炎卿CS, 吳朝欽CS, 謝耀智CS, 許慧雯CS, 游慧光CS ];
COOPCS = [陳聖賢CS, 翟本瑞CS, 江宜芳CS, 李桂秋CS, 林瑞發CS, 劉文榮CS, 汪浩CS, 吳肇展CS, 楊坤鋒CS, 于躍門CS ];
STATCS = [陳婉淑CS, 高秀蘭CS, 李燊銘CS, 林文欽CS, 林哲彥CS, 王聖CS, 王婉倫CS, 吳進家CS, 吳榮彬CS, 鍾冬川CS, 賴崑榮CS, 李文CS, 林麗芬CS ];
//Error 陳善瑜
ECOCS = [陳瓊怜CS, 陳依依CS, 陳至還CS, 方文碩CS, 郭祐誠CS, 胡士文CS, 賴景昌CS, 李文傳CS, 劉宗欣CS, 歐嘉瑞CS, 彭德昭CS, 秦國軒CS, 王平CS, 王葳CS, 吳紀瑩CS, 徐繼達CS, 顏厚棟CS, 趙志鉅CS, 鄭保村CS, 鄒繼礎CS ];
BACS = [曾欽正CS, 陳建文CS, 黃文柔CS, 劉平文CS, 駱達彪CS, 滿肇怡CS, 邱英雄CS, 王智弘CS, 吳如娟CS, 蕭國鐘CS, 徐重仁CS, 許士軍CS, 張寶蓉CS, 張美燕CS, 張秀樺CS, 鄭孟育CS, 林豐智CS, Norm LambertCS ];
MarketingCS = [丁美靜CS, 何晉瑋CS, 簡士超CS, 凱達西CS, 李元恕CS, 林志皇CS, 彭德湘CS, 王婉禎CS, 王郁彬CS ];
// Error 尹清岩
MCAECS = [蔡忠杓CS, 成銘德CS, 戴國政CS, 鄧錦坤CS, 洪榮洲CS, 黃錦煌CS, 黃宗立CS, 林浩庭CS, 林孟儒CS, 林源堂CS, 劉明山CS, 劉顯光CS, 羅致卿CS, 彭信舒CS, 王啟昌CS, 蕭肇殷CS, 楊榮顯CS, 楊世宏CS, 張文政CS, 朱智義CS ];
// Error 陳文正 陳致光 黃建霖 黃金鳳 李維平 林佳弘 邱長塤 石天威
FCMCS = [蔡昆CS, 蔡宜壽CS, 廖盛焜CS, 鄭國彬CS];
IESMCS = [白志祥CS, 曾明哲CS, 陳亭志CS, 陳正芳CS, 郭修暐CS, 洪明傳CS, 蔣安國CS, 李明賢CS, 林棋瑋CS, 林棋瑋CS, 林暘桂CS, 劉浚明CS, 盧銘勳CS, 丘紀堇CS, 唐國豪CS, 王逸琦CS, 吳美芳CS, 蕭堯仁CS, 葉忠CS, 鄭豐聰CS, 莊文傑CS ];
CHECS = [曾怡享CS, 陳奎佑CS, 陳奇中CS, 陳志賢CS, 林屏杰CS, 林永森CS, 施志欣CS, 翁于晴CS, 吳石乙CS, 許健興CS, 袁維勵CS, 詹志潔CS, 張棋榕CS, 張振昌CS, 趙雲鵬CS, 朱侯憲CS ];
AEROCS = [陳啟川CS, 陳重德CS, 方俊CS, 郭文雄CS, 黃柏文CS, 黃振鴻CS, 賴盈誌CS, 李永明CS, 劉通敏CS, 宋齊有CS, 謝宗翰CS, 楊瑞彬CS, 葉俊良CS, 鄭仙志CS ];
PrecisionCS = [蔡鈺鼎CS, 江懷海CS, 劉育成CS, 徐瑞宏CS ];
IECSCS = [蔡明峰CS, 陳德生CS, 陳烈武CS, 陳啟鏘CS, 陳青文CS, 陳錫民CS, 陳奕中CS, 竇其仁CS, 顧偉倫CS, 洪維志CS, 黃秋煌CS, 黃溪春CS, 黃秀芬CS, 黃志銘CS, 李榮三CS, 李維斌CS, 林財寶CS, 林明言CS, 林志敏CS, 劉宗杰CS, 蘇宗安CS, 王益文CS, 徐弘洋CS, 許芳榮CS, 薛念林CS, 楊東麟CS, 游景盛CS, 張貴忠CS ];
EECS = [曹嶸CS, 沈昭元CS, 陳德請CS, 陳坤煌CS, 陳志強CS, 何子儀CS, 黃昌圳CS, 黃思倫CS, 李企桓CS, 梁寶芝CS, 林榮松CS, 劉文豐CS, 蘇恆毅CS, 田春林CS, 王壘CS, 鄭進興CS ];
ECECS = [曾憲輝CS, 陳冠宏CS, 陳家富CS, 陳坤志CS, 簡鳳佐CS, 康宗貴CS, 李景松CS, 林成利CS, 林宗志CS, 劉漢胤CS, 劉俊傑CS, 劉紹宗CS, 劉堂傑CS, 施仁斌CS, 王啟林CS, 吳鴻璋CS, 吳重雨CS, 蕭敏學CS, 許恒壽CS, 楊炳章CS, 楊水源CS, 楊文祿CS, 鄭經華CS ];
ACCS = [陳昶孝CS, 陳孝武CS, 洪三山CS, 黃建立CS, 黃榮興CS, 林宸生CS, 林南州CS, 林賢龍CS, 林育德CS, 林昱成CS, 劉益瑞CS, 邱創乾CS, 蘇文彬CS, 吳穎強CS, 謝哲光CS, 許煜亮CS, 張金堅CS, 張寧群CS, 張興政CS, 鄒慶福CS ];
CECS = [陳家豪CS, 陳益生CS, 陳志瀅CS, 翟本喬CS, 何滿龍CS, 賴辰彥CS, 廖和恩CS, 廖時三CS, 林漢年CS, 林立謙CS, 林維崙CS, 辛紹志CS, 辛正和CS, 楊豐瑞CS, 尤正祺CS, 袁世一CS, 趙啟時CS, 朱嘯秋CS, 鄒耀東CS ];
CIVILCS = [卜君平CS, 蔡崇興CS, 陳廣祥CS, 陳清標CS, 黃逸萍CS, 康裕明CS, 李秉乾CS, 廖為忠CS, 林保宏CS, 林慶昌CS, 林威延CS, 林正紋CS, 蘇人煇CS, 王起平CS, 許澤善CS, 張志超CS, 張智元CS ];
WRECS = [陳昶憲CS, 陳憲宗CS, 李漢鏗CS, 連惠邦CS, 廖清標CS, 劉建榮CS, 蘇惠珍CS, 王傳益CS, 吳俊鋐CS, 許少華CS, 許盈松CS, 許裕雄CS, 楊朝仲CS, 葉昭憲CS, 張嘉玲CS, 鄭仙偉CS ];

// ALL ARCH r Error !!!
//Error 曾亮 沈揚庭 陳上元 崔征國 杜方中 高敬賢 谷特瑪蒂亞斯 黃德生 黎淑婷CS, 李英弘CS, 林昌明CS, 林富淞CS, 林季芸CS, 林衍良CS, 彭志峰CS, 宋玉真CS, 謝佩霓CS, 張莉欣CS, 
ARCHCS = [趙又嬋CS, 劉為光CS, 鄭明仁CS ];

UPSICS = [高孟定CS, 高豫麒CS, 賴美蓉CS, 雷祖強CS, 劉立偉CS, 劉曜華CS, 馬瑜嬪CS, 邱景升CS, 王大立CS, 謝政穎CS, 徐逸祥CS, 周宜強CS, 莊永忠CS ];
TTMCS = [艾嘉銘CS, 曾柏興CS, 陳朝輝CS, 陳方元CS, 李克聰CS, 林大傑CS, 林良泰CS, 劉霈CS, 溫傑華CS, 吳沛儒CS, 徐耀賜CS, 楊宗璟CS, 葉名山CS, 葉昭甫CS ];
//Eroor 鍾懿萍 周天穎
LMCS = [陳建元CS, 何彥陞CS, 洪本善CS, 李瑞陽CS, 林宗賢CS, 王珍玲CS, 謝靜琪CS, 辛年豐CS, 楊賀雯CS, 楊龍士CS, 楊文燦CS, 張梅英CS, 朱南玉CS];
//Error 陳兆南 何寄澎 李寶玲 李時銘 彭妙卿 
CLCS = [李玲CS, 李威熊CS, 梁煌儀CS, 廖美玉CS, 林韻柔CS, 宋建華CS, 王祥齡CS, 楊美美CS, 余美玲CS, 張瑞芬CS, 鄭慧如CS, 鐘文伶CS, 朱文光CS ];
//Error 何文敬 林羨  
FLLCS = [蔡明秀CS, 蔡依仁CS, 曾鹿鳴CS, 沈薇薇CS, 郭毓芳CS, 黃舒屏CS, 李麗秋CS, 廖咸浩CS, 劉森堯CS, 劉顯親CS, 羅珮瑄CS, 彭芳美CS, 邱源貴CS, 薛孟仁CS, 周玉楨CS, 莊坤良CS ];
//Error 黃雅文 林進田 劉純之 呂瑞秋 張智凱 
RMICS = [陳森松CS, 洪介偉CS, 黃依潔CS, 江朝CS, 江耕南CS, 康裕民CS, 賴志仁CS, 寶宏CS, 吳瑞雲CS, 許文彥CS, 張吉宏CS, ];
FINCS = [陳麗君CS, 陳清和CS, 洪偉峰CS, 簡正儀CS, 姜寄南CS, 李君屏CS, 廖東亮CS, 林昆立CS, 劉炳麟CS, 羅仙法CS, 王佳真CS, 王韻怡CS, 吳仰哲CS, 楊明晶CS, 張倉耀CS, 朱心蘅CS, 馮詩蘋CS, 駱建陵CS ];

//Error MATHCS -> 陳裕益CS , 陳長城CS, 李英豪CS, 楊建成CS, 洪子倫CS
MATHCS = [曾勵新CS, 陳子建CS, 黃新峰CS, 林彩玉CS, 林維鈞CS, 林英志CS, 林震燦CS, 林姿均CS, 魏秀娟CS, 吳純純CS, 楊基源CS,  楊菁菁CS, 葉光清CS, 張桂芳CS ];

//Error T.-NejatVezirogluCS -> TNejatVezirogluCS , 
EESCS = [陳建隆CS, 陳志成CS, 馮秋霞CS, 胡苔莉CS, 黃東池CS, 簡正一CS, 李書安CS, 梁正中CS, 林俊德CS, 林秋裕CS, 任南琪CS, 童翔新CS, 王唯匡CS, 吳俊哲CS, 吳志超CS, 喻家駿CS, 張立德CS, TNejatVezirogluCS];
//Error Yosi Y-ShachamCS -> YosiYShachamCS ,
MSECS= [蔡健益CS, 陳錦山CS, 陳錦毅CS, 何主亮CS, 河合良信CS, 洪緯璿CS, 金重勳CS, 柯澤豪CS, 李立鼎CS, 梁辰睿CS, 林昆明CS, 駱榮富CS, 邱國峰CS, 孫道中CS, 田修波CS, 王誠佑CS, 王致傑CS, 張育誠CS, 張志宇CS, YosiYShachamCS ];
PHOTONICSCS = [蔡雅芝CS, 陳敬恒CS, 胡水上CS, 賴俊峰CS, 李賜福CS, 李英德CS, 李正中CS, 林菲CS, 林碩泰CS, 林泰生CS, 劉榮平CS, 盧聖華CS, 羅道正CS, 羅仕守CS, 馬仕信CS, 潘定中CS, 唐謙仁CS, 吳正文CS, 葉建宏CS, 周哲仲CS ];
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
/*
var Teacher = [曹秀惠, 陳光政];
var TeacherName = ['曹秀惠', '陳光政'];
var 曹秀惠CS = [
"Enterprise resource planning Capital" 
];
var 陳光政CS = [
"Management Finance Scientific method" 
];
var ACCCS = [曹秀惠CS, 陳光政CS];
var TeacherCS = ACCCS[1];
*/

//var TeacherName = ACC;


var Teacher = ACC;
var TeacherName = ACCName;
var ND = ACCCS;



for (TCS=0;TCS<ND.length;TCS++){

TeacherCS = ND[TCS];
		for (a=0;a<Teacher.length;a++){
			NT = Teacher[a];
			console.log(TeacherName[a]+TCS+" = [ [");
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
}



