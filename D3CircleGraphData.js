var average = require ('average');
var math = require('mathjs');




var 商學院 = [ACCDisgust, ITDisgust, PFDisgust, COOPDisgust, STATDisgust, ECODisgust, BADisgust, MarketingDisgust];
var 金融學院 = [RMI, FIN];
var 建設學院 = [CIVIL, WRE, ARCH, UPSI, TTM, LM];
var 工學院 = [MCAE, FCM, IESM, CHE, AERO, Precision];
var 人文社會學院 = [CL, FLL];
var 資訊電機學院 = [IECS, EE, ECE, AC, CE];
var 理學院 = [MATH, EES, MSE, PHOTONICS]; 





/* test

math.add(average(PHOTONICSAnger),average(MSEAnger))

*/

//Why I can't /學院.length ???

//Anger

	商學院Anger = (average(ACCAnger)+average(ITAnger)+average(PFAnger)+average(COOPAnger)+average(STATAnger)+average(ECOAnger)+average(BAAnger)+average(MarketingAnger))/8;	//0.5274485909572454

	金融學院Anger = (average(RMIAnger)+average(FINAnger))/2;	//0.5233739965277777

	建設學院Anger = (average(CIVILAnger)+average(WREAnger)+average(ARCHAnger)+average(UPSIAnger)+average(TTMAnger)+average(LMAnger))/6;	//0.6154443663955326

	工學院Anger = (average(MCAEAnger)+average(FCMAnger)+average(IESMAnger)+average(CHEAnger)+average(AEROAnger)+average(PrecisionAnger))/6;	//0.7302180456349207

	人文社會學院Anger = (average(CLAnger)+average(FLLAnger))/2;		//0.3752490555555557

	資訊電機學院Anger = (average(IECSAnger)+average(EEAnger)+average(ECEAnger)+average(ACAnger)+average(CEAnger))/5;	//0.788334693416149

	理學院Anger = (average(MATHAnger)+average(EESAnger)+average(MSEAnger)+average(PHOTONICSAnger))/4;		//0.5043073467105263


//Disgust

	商學院Disgust = (average(ACCDisgust)+average(ITDisgust)+average(PFDisgust)+average(COOPDisgust)+average(STATDisgust)+average(ECODisgust)+average(BADisgust)+average(MarketingDisgust))/8;	//0.5274485909572454

	金融學院Disgust = (average(RMIDisgust)+average(FINDisgust))/2;	//0.5233739965277777

	建設學院Disgust = (average(CIVILDisgust)+average(WREDisgust)+average(ARCHDisgust)+average(UPSIDisgust)+average(TTMDisgust)+average(LMDisgust))/6;	//0.6154443663955326

	工學院Disgust = (average(MCAEDisgust)+average(FCMDisgust)+average(IESMDisgust)+average(CHEDisgust)+average(AERODisgust)+average(PrecisionDisgust))/6;	//0.7302180456349207

	人文社會學院Disgust = (average(CLDisgust)+average(FLLDisgust))/2;		//0.3752490555555557

	資訊電機學院Disgust = (average(IECSDisgust)+average(EEDisgust)+average(ECEDisgust)+average(ACDisgust)+average(CEDisgust))/5;	//0.788334693416149

	理學院Disgust = (average(MATHDisgust)+average(EESDisgust)+average(MSEDisgust)+average(PHOTONICSDisgust))/4;		//0.5043073467105263


//Fear 


	商學院Fear = (average(ACCFear)+average(ITFear)+average(PFFear)+average(COOPFear)+average(STATFear)+average(ECOFear)+average(BAFear)+average(MarketingFear))/8;		//0.3626240689443318 

	金融學院Fear = (average(RMIFear)+average(FINFear))/2;		//0.4816055624999999
	 
	建設學院Fear = (average(CIVILFear)+average(WREFear)+average(ARCHFear)+average(UPSIFear)+average(TTMFear)+average(LMFear))/6;		//0.44955860530955966

	工學院Fear = (average(MCAEFear)+average(FCMFear)+average(IESMFear)+average(CHEFear)+average(AEROFear)+average(PrecisionFear))/6;		//0.45825232986111103
	 
	人文社會學院Fear = (average(CLFear)+average(FLLFear))/2;		//0.392106388888889
	 
	資訊電機學院Fear = (average(IECSFear)+average(EEFear)+average(ECEFear)+average(ACFear)+average(CEFear))/5;		//0.3518465018012423
	 
	理學院Fear = (average(MATHFear)+average(EESFear)+average(MSEFear)+average(PHOTONICSFear))/4;		//0.37855564473684195


//Joy

	商學院Joy = (average(ACCJoy)+average(ITJoy)+average(PFJoy)+average(COOPJoy)+average(STATJoy)+average(ECOJoy)+average(BAJoy)+average(MarketingJoy))/8;		//0.1441037187481636

	金融學院Joy = (average(RMIJoy)+average(FINJoy))/2;	//0.11134111111111113

	建設學院Joy = (average(CIVILJoy)+average(WREJoy)+average(ARCHJoy)+average(UPSIJoy)+average(TTMJoy)+average(LMJoy))/6;	//0.0844741898773612

	工學院Joy = (average(MCAEJoy)+average(FCMJoy)+average(IESMJoy)+average(CHEJoy)+average(AEROJoy)+average(PrecisionJoy))/6;	//0.10948507490079364

	人文社會學院Joy = (average(CLJoy)+average(FLLJoy))/2;		//0.25030250000000004

	資訊電機學院Joy = (average(IECSJoy)+average(EEJoy)+average(ECEJoy)+average(ACJoy)+average(CEJoy))/5;		//0.1288213186956522

	理學院Joy = (average(MATHJoy)+average(EESJoy)+average(MSEJoy)+average(PHOTONICSJoy))/4;		//0.13699628815789472

//Sadness


	商學院Sadness = (average(ACCSadness)+average(ITSadness)+average(PFSadness)+average(COOPSadness)+average(STATSadness)+average(ECOSadness)+average(BASadness)+average(MarketingSadness))/8;	//0.06640833177055788

	金融學院Sadness = (average(RMISadness)+average(FINSadness))/2;	//0.07963988541666667

	建設學院 = (average(CIVILSadness)+average(WRESadness)+average(ARCHSadness)+average(UPSISadness)+average(TTMSadness)+average(LMSadness))/6;	//0.03941339816131581

	工學院 = (average(MCAESadness)+average(FCMSadness)+average(IESMSadness)+average(CHESadness)+average(AEROSadness)+average(PrecisionSadness))/6;	//0.02106190128968254

	人文社會學院 = (average(CLSadness)+average(FLLSadness))/2;		//0.1591769722222222

	資訊電機學院 = (average(IECSSadness)+average(EESadness)+average(ECESadness)+average(ACSadness)+average(CESadness))/5;		//0.0443547917914351

	理學院 = (average(MATHSadness)+average(EESSadness)+average(MSESadness)+average(PHOTONICSSadness))/4;		//0.13309262697368418






















