import Vue from "vue"
Vue.filter("filterMoney", val => {
	return "￥" + val;
})


/*
*时间转换
* */ 
// 1 、转化为年、月、日、时、分、秒
Vue.filter("filterHour", value => {
	if (!value) return '';
	var now = new Date(value);
	var year = now.getFullYear();
	var month = now.getMonth() + 1;
	if (month < 10) {
		month = '0' + month
	}
	var date = now.getDate();
	if (date < 10) {
		date = '0' + date
	}
	return year + "-" + month + "-" + date
})


//2、转化为  年、月、日
Vue.filter("filterSecond", value => {
	var date = new Date(value); //时间戳为10位需*1000，时间戳为13位的话不需乘1000
	var year = date.getFullYear();
	var month = ("0" + (date.getMonth() + 1)).slice(-2);
	var sdate = ("0" + date.getDate()).slice(-2);
	var hour = ("0" + date.getHours()).slice(-2);
	var minute = ("0" + date.getMinutes()).slice(-2);
	var second = ("0" + date.getSeconds()).slice(-2);
	// 拼接
	var result = year + "-" + month + "-" + sdate + " " + hour + ":" + minute + ":" + second;
	// 返回
	return result;
})

/**  3、
 * 1、
 * value:2020-05-12 12:35:12
 * var dateTimeStamp=(new Date(value).getTime());
 * 2、
 * value:Wed Jun 24 2020 16:28:04 GMT+0800 (中国标准时间)
 * var dateTimeStamp = value.getTime();
 * */

Vue.filter("timeAgo", value => {
	console.log(value)
	// var dateTimeStamp=(new Date(value).getTime());
	var dateTimeStamp = value.getTime();
	console.log('秒===', dateTimeStamp); //转换为秒
	var minute = 1000 * 60; //把分，时，天，周，半个月，一个月用毫秒表示
	var hour = minute * 60;
	var day = hour * 24;
	var week = day * 7;
	var halfamonth = day * 15;
	var month = day * 30;
	var now = new Date().getTime(); //获取当前时间毫秒
	var diffValue = now - dateTimeStamp; //时间差
	if (diffValue < 0) {
		console.log("diffValue<0", datetime, dateTimeStamp, now, diffValue);
		return '刚刚';
	}
	var minC = diffValue / minute; //计算时间差的分，时，天，周，月
	var hourC = diffValue / hour;
	var dayC = diffValue / day;
	var weekC = diffValue / week;
	var monthC = diffValue / month;
	var result = "2";
	if (monthC >= 1 && monthC <= 3) {
		result = " " + parseInt(monthC) + "月前"
	} else if (weekC >= 1 && weekC <= 3) {
		result = " " + parseInt(weekC) + "周前"
	} else if (dayC >= 1 && dayC <= 6) {
		result = " " + parseInt(dayC) + "天前"
	} else if (hourC >= 1 && hourC <= 23) {
		result = " " + parseInt(hourC) + "小时前"
	} else if (minC >= 1 && minC <= 59) {
		result = " " + parseInt(minC) + "分钟前"
	} else if (diffValue >= 0 && diffValue <= minute) {
		result = "刚刚"
	} else {
		var datetime = new Date();
		datetime.setTime(dateTimeStamp);
		var Nyear = datetime.getFullYear(); {}
		var Nmonth = datetime.getMonth() + 1 < 10 ? "0" + (datetime.getMonth() + 1) : datetime.getMonth() + 1;
		var Ndate = datetime.getDate() < 10 ? "0" + datetime.getDate() : datetime.getDate();
		var Nhour = datetime.getHours() < 10 ? "0" + datetime.getHours() : datetime.getHours();
		var Nminute = datetime.getMinutes() < 10 ? "0" + datetime.getMinutes() : datetime.getMinutes();
		var Nsecond = datetime.getSeconds() < 10 ? "0" + datetime.getSeconds() : datetime.getSeconds();
		result = Nyear + "-" + Nmonth + "-" + Ndate
	}
	return result;

})
