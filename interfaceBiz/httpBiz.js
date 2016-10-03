var path = require('path');
var request = require('request');

var httpBiz = {};

httpBiz.getForumRecommendList = function(needAd, category, deviceType, pageSize, pageNum, cb){
    var formData = {};
    if(needAd !== undefined){
	formData.needAd = needAd;
    }
    if(category !== undefined){
	formData.category = category;
    }
    if(deviceType !== undefined){
	formData.deviceType = deviceType;
    }
    if(pageSize !== undefined){
	formData.pageSize = pageSize;
    }
    if(pageNum !== undefined){
	formData.pageNum = pageNum;
    }
    request.post({url: 'http://test.api.snsports.cn/api/content/pc/GetForumRecommendList.json', form:formData}, function(err, response, body){
	    if(err){
		console.error(err);
		cb(err);
	    }else{
		var tmp = JSON.parse(body);
		cb(null, tmp);
	    }
    });
};

httpBiz.getBMVideoDetail = function(passport, videoId, objType, objId, cb){
    var formData = {
	videoId : videoId,
	objType : objType,
	objId : objId
    };
    if(passport !== undefined){
	formData.passport = passport;
    }

    request.post({url: 'http://test.api.snsports.cn/api/content/pc/GetBMVideoDetail.json', form:formData}, function(err, response, body){
	    if(err){
		console.error(err);
		cb(err);
	    }else{
		var tmp = JSON.parse(body);
		cb(null, tmp.messages);
	    }
    });
};

module.exports = httpBiz;
