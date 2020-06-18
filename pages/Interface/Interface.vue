<template>
	<view>
		<button type="default" @click="tip">显示tip</button>
		<button type="default" @click="setnavTitle">设置导航标题</button>
		<button type="default" @click="setnavColor">设置导航颜色</button>
		<button type="default" @click="showNavloading">
			<text v-if="isShow">关闭导航动画</text>
			<text v-else>显示导航动画</text>
		</button>
		<button type="default" @click="setIcon">设置中间图标</button>
		<button type="default" @click="setBadge">设置tabbar badge</button>
	</view>
</template>

<script>
export default {
	data() {
		return {
			isShow: false
		};
	},
	onLoad() {},
	methods: {
		setBadge(){
			uni.setTabBarBadge({
			  index: 3,
			  text:"999"
			})
		},
		setIcon(){
			uni.setTabBarItem({
			  index: 2,
			  text: '媒体',
			  iconPath: './../static/1.png',
			  selectedIconPath: './../static/2.png'
			})
		},
		showNavloading() {
			const self = this;
			self.isShow = !self.isShow;
			if (self.isShow) {
				uni.showNavigationBarLoading();
			} else {
				uni.hideNavigationBarLoading();
			}
		},
		tip() {
			uni.showToast({
				title: '测试iconImage',
				image: '/static/582.jpg'
			});
		},
		setnavTitle() {
			uni.setNavigationBarTitle({
				title: '新设置的标题'
			});
		},
		setnavColor() {
			uni.setNavigationBarColor({
				frontColor: '#2ade95',
				backgroundColor: '#DD524D',
				animation: { duration: 300, timingFunc: 'easeIn' }
			});
		}
	}
};
</script>

<style></style>
