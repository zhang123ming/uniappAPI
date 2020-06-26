<script>
export default {
	onLaunch: function() {
		// #ifdef APP-PLUS
		var server = 'http://www.zhangmingblog.com/uniapp.apk';
		plus.showWaiting('加载中。。。。');
		var version = 1;
		if (version == 1) {
			plus.nativeUI.confirm('Are you sure ready?', function(e) {
				plus.runtime.openURL(server);
				plus.closeWaiting();
			});
		}
		// #endif
	},
	onShow: function() {
		console.log('App Show');
	},
	onHide: function() {
		console.log('App Hide');
	}
};
</script>

<style>
@import url('./static/common.css');
/* 解决头条小程序组件内引入字体不生效的问题 */
/* #ifdef MP-TOUTIAO */
@font-face {
	font-family: uniicons;
	src: url('/static/uni.ttf');
}
/* #endif */
</style>
