<template>
	<view class="container"><view>这是首页</view></view>
</template>

<script>
export default {
	data() {
		return {};
	},
	methods: {},
	onPullDownRefresh() {
		//监听下拉刷新动作的执行方法，每次手动下拉刷新都会执行一次

		setTimeout(function() {
			uni.stopPullDownRefresh(); //停止下拉刷新动画
		}, 1000);
	}
};
</script>

<style>
.container {
	width: 100%;
	height: 100%;
	background-color: #4cd964;
}
</style>
