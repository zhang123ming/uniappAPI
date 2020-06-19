<template>
	<view class="box">
		<button type="default" @click="tip">显示tip</button>
		<button type="default" @click="setnavTitle">设置导航标题</button>
		<button type="default" @click="setnavColor">设置导航颜色</button>
		<button type="default" @click="showNavloading">
			<text v-if="isShow">关闭导航动画</text>
			<text v-else>显示导航动画</text>
		</button>
		<button type="default" @click="setIcon">设置中间图标</button>
		<button type="default" @click="setBadge">设置tabbar badge</button>
		<button type="default" @click="setTabbarRedDot">设置tabbar右上角红点</button>
		<button type="default" @click="clickVibrateLong">手机震动</button>
		<button type="default" @click="dianji">搜索蓝牙</button>
		<button type="primary" id="check" @click="checkIsSupportSoterAuthentication">检查支持的认证方式</button>
		<button type="primary" @click="checkIsSoterEnrolledInDeviceFingerPrint">检查是否录入指纹</button>
		<button type="primary" @click="checkIsSoterEnrolledInDeviceFaceID">检查是否录入FaceID</button>
		<button type="primary" @click="startSoterAuthenticationFingerPrint">开始指纹认证</button>
		<button type="primary" @click="startSoterAuthenticationFaceID">开始FaceID认证</button>
		<button type="default" @click="getwebview">获取当前的webview</button>
		<button type="default" @click="getProvider">获取服务供应商</button>
		<view>服务类型：{{ service }}===服务供应商：{{ provider }}</view>
		<button type="default" @click="getAddress">获取收获地址</button>
	</view>
</template>

<script>
export default {
	data() {
		return {
			isShow: false,
			ibeaconList: [],

			webviewId: 0,
			webIsVis: false,
			service: null,
			provider: null
		};
	},
	onReady() {},
	onLoad() {},
	methods: {
		getAddress() {
			uni.chooseAddress({
				success(res) {
					uni.showToast({
						title: '编辑成功',
						mask: true,
						duration: 2000
					});
				},
				fail(err) {
					uni.showToast({
						title: '取消收获地址',
						mask: true,
						duration: 2000
					});
				}
			});
		},
		getProvider(item) {
			const self = this;
			uni.getProvider({
				service: item,
				success(res) {
					self.service = res.service;
					self.provider = res.provider;
				}
			});
		},
		getwebview() {
			const self = this;
			var pages = getCurrentPages();
			var page = pages[pages.length - 1];
			// #ifdef APP-PLUS
			var currentWebview = page.$getAppWebview();
			self.webviewId = currentWebview.id;
			self.webIsVis = currentWebview.isVisible();
			console.log(currentWebview.id); //获得当前webview的id
			console.log(currentWebview.isVisible()); //查询当前webview是否可见
			// #endif
		},

		checkIsSupportSoterAuthentication() {
			uni.checkIsSupportSoterAuthentication({
				success(res) {
					uni.showToast({
						title: '认证成功',
						mask: true,
						duration: 2000
					});
				},
				fail(err) {
					uni.showToast({
						title: '认证失败',
						mask: true,
						duration: 2000
					});
				},
				complete(res) {
					console.log(res);
				}
			});
		},
		checkIsSoterEnrolledInDeviceFingerPrint() {
			uni.checkIsSoterEnrolledInDevice({
				checkAuthMode: 'fingerPrint',
				success(res) {
					uni.showToast({
						title: '认证成功',
						mask: true,
						duration: 2000
					});
				},
				fail(err) {
					uni.showToast({
						title: '认证失败',
						mask: true,
						duration: 2000
					});
				},
				complete(res) {
					console.log(res);
				}
			});
		},
		checkIsSoterEnrolledInDeviceFaceID() {
			uni.checkIsSoterEnrolledInDevice({
				checkAuthMode: 'facial',
				success(res) {
					uni.showToast({
						title: '认证成功',
						mask: true,
						duration: 2000
					});
				},
				fail(err) {
					uni.showToast({
						title: '认证失败',
						mask: true,
						duration: 2000
					});
				},
				complete(res) {
					console.log(res);
				}
			});
		},
		startSoterAuthenticationFingerPrint() {
			uni.startSoterAuthentication({
				requestAuthModes: ['fingerPrint'],
				challenge: '123456',
				authContent: '请用指纹解锁',
				success(res) {
					uni.showToast({
						title: '解锁成功',
						mask: true,
						duration: 2000
					});
				},
				fail(err) {
					uni.showToast({
						title: '解锁失败',
						mask: true,
						duration: 2000
					});
				},
				complete(res) {
					console.log(res);
				}
			});
		},
		startSoterAuthenticationFaceID() {
			uni.startSoterAuthentication({
				requestAuthModes: ['facial'],
				challenge: '123456',
				authContent: '请用FaceID解锁',
				success(res) {
					uni.showToast({
						title: '解锁成功',
						mask: true,
						duration: 2000
					});
				},
				fail(err) {
					uni.showToast({
						title: '解锁失败',
						mask: true,
						duration: 2000
					});
				},
				complete(res) {
					console.log(res);
				}
			});
		},
		dianji() {
			//这是我在组件上定义的一个点击事件，你也可以根据自己的业务逻辑进行处理
			console.log('点击了');
			uni.openBluetoothAdapter({
				//这里是检测蓝牙是否打开的接口打开进入success否则进入fail
				success: () => {
					//蓝牙已经打开
					uni.showToast({
						title: '蓝牙打开了',
						mask: true,
						duration: 1000
					});
					uni.startBeaconDiscovery({
						//开始搜索ibeacon设备
						uuids: ['FDA50693-A4E2-4FB1-AFCF-C6EB07647825'], //我写的时候在这遇见一个大坑，因为这个id要填自己设备的uuid,我就从上面截图那 复制过来直接放里面会显示uuids无效，百思不得，（官网也没说有什么格式，然后我tm就无限犯错）后来百度看别人小程序的案例中间有横杠-我就试着加了一下果然ok了   格式是8-4-4-4-12

						success: function(res) {
							//搜索成功后进入这里
							uni.onBeaconUpdate(function(res) {
								//监听设备更新事件

								if (res && res.beacons && res.beacons.length > 0) {
									uni.getBeacons({
										//获取搜索到设备的参数

										success: res => {
											//这里再次采坑注意res.beacons这个数组每一个元素都是一个设备对象，所以是res.beacons[0].要获取的参数名，而不是按照下标0，1，2.....去获得不同的参数。

											console.log('!!!!!!!!!!!' + res.beacons[0].uuid);
											console.log('!!!!!!!!!!!' + res.beacons[0].major);
											console.log('!!!!!!!!!!!' + res.beacons[0].minor);
											//major和minor一个主id一个次id两个貌似没啥关系,在我的业务逻辑恰好运用到，一个当做楼号，一个作为教室号，（所有设备的uuid需要一样）

											setTimeout(function() {
												uni.stopBeaconDiscovery({
													success: function() {
														console.log('停止扫描设备！');
													}
												});
											}, 5 * 1000);
										}
									});
								}
							});
						}
					});
				},
				fail: () => {
					uni.showToast({
						title: '蓝牙未打开',
						mask: true,
						duration: 1000
					});
				}
			});
		},
		clickVibrateLong() {
			uni.vibrateLong({
				success() {
					uni.showToast({
						title: '开始震动'
					});
				}
			});
		},
		setTabbarRedDot() {
			uni.showTabBarRedDot({
				index: 0
			});
		},
		setBadge() {
			uni.setTabBarBadge({
				index: 3,
				text: '999'
			});
		},
		setIcon() {
			uni.setTabBarItem({
				index: 2,
				text: '媒体',
				iconPath: './../static/01.png',
				selectedIconPath: './../static/02.png'
			});
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
				image: './../../static/06.png'
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

<style>
.box {
	margin-bottom: 60px;
}
</style>
