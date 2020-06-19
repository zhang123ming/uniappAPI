<script>
export default {
	onLaunch: function() {
		
		uni.onTabBarMidButtonTap(function() {
			uni.showToast({
				title: '点击了中间的按钮',
				mask: true,
				duration: 2000
			});
		});
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
