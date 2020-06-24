<template>
	<view class="container">
		<view :animation="animationData" style="background:red;height:10rpx;width:100rpx">内容</view>
		<button type="primary">{{hour|timeAgo}}</button>
		<!-- <button type="primary">{{'2019-11-22 12:23:59'|timeAgo}}</button> -->
		<button type="warn">{{hour|filterSecond}}</button>
		<button @click="rotateAndScale()" style="z-index: 999;">点我{{hour|filterHour}}</button>
		<list></list>
		<navigator url="../none/none"><button type="default">none页面跳转</button></navigator>
		<uni-list>
			<uni-list-item title="" note="" v-for="(item, index) in 100">
				{{ item }}==={{
					Math.random()
						.toString()
						.slice(2, 6) | filterMoney
				}}
			</uni-list-item>
		</uni-list>
		<view class="to-top" @click="goTop"><image style="	width: 45px;height: 45px;border-radius: 50%;" src="../../static/01.png" mode="widthFix"></image></view>
	</view>
</template>

<script>
import list from '../../components/list/list.vue';
export default {
	components: {
		list
	},
	data() {
		return {
			animationData: {},
			hour:new Date(),
			time:"2020-05-12 12:35:12"
		};
	},
	onShow() {
		var animation = uni.createAnimation({
			duration: 1000,
			timingFunction: 'ease'
		});
		this.animation = animation;
		animation
			.scale(2, 2)
			.rotate(45)
			.step();
		this.animationData = animation.export();
		setTimeout(
			function() {
				animation.translate(30).step();
				this.animationData = animation.export();
			}.bind(this),
			1000
		);
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
		rotateAndScale: function () {
				  // 旋转同时放大
		 		 this.animation.rotate(90).scale(2, 2).step()
		  		this.animationData = this.animation.export()
		},
		rotateThenScale: function () {
		  		// 先旋转后放大
		 		 this.animation.rotate(45).step()
		  		this.animation.scale(2, 2).step()
		 		 this.animationData = this.animation.export()
		},
		rotateAndScaleThenTranslate: function () {
		  // 先旋转同时放大，然后平移
		 		 this.animation.rotate(45).scale(2, 2).step()
		 		 this.animation.translate(100, 100).step({ duration: 1000 })
		 		 this.animationData = this.animation.export()
		},
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

	
}
</style>
