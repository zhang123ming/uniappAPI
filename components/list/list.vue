<template>
	<view class="box">
		<view class="list" v-for="(item, index) in 10" :key="index">{{ item }}</view>
	</view>
</template>

<script>
export default {
	data() {
		return {};
	}
};
</script>
<style lang="scss">
.box {
	width: 100%;
	.list {
		width: 100%;
		height: 50px;
		display: flex;
		justify-content: center;
		align-items: center;
		background-color: #ff41b6;
		color: #fff;
	}
	.list:nth-child(odd) {
		background-color: #dd524d;
	}
}
</style>
