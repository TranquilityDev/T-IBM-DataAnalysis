var fs = require('fs');
var AlchemyLanguageV1 = require('watson-developer-cloud/alchemy-language/v1');
var alchemy_language = new AlchemyLanguageV1({ api_key: 'fcb11f5cebca4850ae9771ed0678ae4222d5733e');
var P1  ={text: 'blablablablablabalabl'};
var P2  ={text: 'blalalalal'};
var PeopleList = [P1,P2];

for(i=0;i<PeopleList.length;i++){
alchemy_language.keywords(PeopleList[i], function (err, response) {
    if (err)
        console.log('error:', err);
    else
            console.log(JSON.stringify(response,null,2));

            fs.writeFile('/home/user/Tranquility/Temp-Data/'+i+'.json',JSON.stringify(response, null, 2));

});
}
