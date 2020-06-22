<template>
	<view class="container">
		<list></list>
		<navigator url="../none/none">
			<button type="default">none页面跳转</button>
		</navigator>
		<uni-list>
			<uni-list-item title="" note="" v-for="(item, index) in 100">{{ item }}==={{Math.random().toString().slice(2,6)|filterMoney}}</uni-list-item>
		</uni-list>
		<view class="to-top" @click="goTop"><image style="	width: 45px;height: 45px;border-radius: 50%;" src="../../static/01.png" mode="widthFix"></image></view>
	</view>
</template>

<script>
	import list from "../../components/list/list.vue"
export default {
	components:{
		list
	},
	data() {
		return {};
	},
	onLoad() {
		uni.onNetworkStatusChange(function(res) {
			console.log(res.isConnected);
			uni.showToast({
				title: res.networkType,
				duration: 3000,
				mask: true
			});
			if (!res.isConnected) {
				uni.navigateTo({
					url: 'pages/none/none'
				});
			}
		});
	},

	methods: {
		goTop: function(e) {
			uni.pageScrollTo({
				scrollTop: 0,
				duration: 300
			});
		}
	},
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
.to-top {
	width: 45px;
	height: 45px;
	border-radius: 50%;
	background-color: #4a81f6;
	position: fixed;
	right: 23upx;
	bottom: 200upx;
	z-index: 9999;
	box-shadow: 0px 3px 5px 3px #93a2c1;
	@include flex($content: center);
	image {
		width: 36upx;
		height: auto;
	}
}
</style>
