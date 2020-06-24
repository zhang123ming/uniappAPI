<template>
	<view>
		<uni-nav-bar left-icon="back" left-text="返回" right-text="菜单" title="none">
		</uni-nav-bar>
		<navigator url="../about/about"><button type="warn">wx</button></navigator>
	</view>
</template>

<script>
export default {
	data() {
		return {};
	},
	methods: {},
	onBackPress(res) {

		if (res.from == 'backbutton'||res.from=='navigateBack') {
			console.log("asas")

			uni.showModal({
				title: '温馨提示',
				content: '确定退出吗？',
				"cancelText":"取消",
				confirmText: '确定',
				success(res) {
				 if (res.confirm) {
				           uni.showToast({
				           	title:"确定",
				           	mask:true,
				           	duration:2000
				           })
				        } else if (res.cancel) {
				        let page = getCurrentPages().pop(); //跳转页面成功之后
				        if (!page) return;
				        page.onLoad(); //如果页面存在，则重新刷新页面
				        }
				}
			});
		}
	}
};
</script>

<style></style>
