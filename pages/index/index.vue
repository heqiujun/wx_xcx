<template>
	<view class="content">
		<image class="logo" :src="imgs"></image>
		<view class="title">{{title}}</view>
		<view class="content_zi">
			<view @click="play()">
				<image src="../../static/logo.png"></image>
				<view>使用操作视频</view>
			</view>
			<view @click="instruction">
				<image src="../../static/n2.jpg"></image>
				<view>说明书</view>
			</view>
			<view @click="crea()">
				<image src="../../static/n2.jpg"></image>
				<view>二维码生成器</view>
			</view>
		</view>
		<view v-show="show" class="video">
			<video id="myVideo" :src="videoFrequency"></video>
		</view>
		<image src="../../static/logo.jpg" class="twoCode"></image>
	</view>
</template>
<script>
	import post from '@/common/index'
	export default {
		data() {
			return {
				title: '你好!',
				array:[
					{id:'123',pic:"../../static/xyj.jpg",describe:"小白鸽打空调",video:"https://dcloud-img.oss-cn-hangzhou.aliyuncs.com/video/uni-app20190127.mp4"},
					{id:'456',pic:"../../static/xyj.jpg",describe:"涡轮增压洗衣机",video:"https://video.pearvideo.com/mp4/adshort/20191008/cont-1609658-14458233_adpkg-ad_hd.mp4"}
				],
				imgs:'../../static/xyj.jpg',
				show:false,
				videoFrequency:'https://video.pearvideo.com/mp4/adshort/20191008/cont-1609658-14458233_adpkg-ad_hd.mp4'
			}
		},  
		onLoad(e) {
			for(let i=0;i<this.array.length;i++){
				if(e.e==this.array[i].id){
					this.imgs=this.array[i].pic;
					this.title=this.array[i].describe;
					this.videoFrequency=this.array[i].video;
				}
			}
			uni.getStorage({
			    key: 'kouling',
			    success: function (res) {
			        console.log(res);
			    }
			});
			
			
			// uni.login({
			//   provider: 'weixin',
			//   success: function (loginRes) {
			//     console.log(loginRes);
			//     // 获取用户信息
			//   }
			// });
			
			// uni.getUserInfo({
			//   provider: 'weixin',
			//   success: function (infoRes) {
			//     console.log(infoRes);
			//   }
			// });
		},
		onReady: function (res) {
		    this.videoContext = uni.createVideoContext('myVideo')
		},
		methods: {
			instruction:function(){
				uni.navigateTo({
					url:'instruction'
				})
			},
			crea:function(){
				uni.navigateTo({
					url:'ceshi'
				})
				// consl
			},
			play:function(){
				this.show=true
				this.videoContext.play()
			}
		}
	}
</script>

<style>
.twoCode{
	display: block;
	margin: 50upx auto;
	width: 400upx;
	height: 400upx;
}
.video{
	display: flex;
	justify-content: center;
	align-items: center;
	width: 100%;
}
.content{
	background:#eee;
	width: 100%;
	min-height: 100vh;
	border: 1upx solid #eee;
}
.content_zi>view{
	width: 50%;
	text-align: center;
}
.content_zi>view image{
	width:150upx;
	height: 150upx;
}
.content_zi{
	margin-top: 50upx;
	width: 100%;
	display: flex;
	justify-content: center;
	align-items: center;
	flex-wrap: nowrap;
}
.logo{
	width: 400upx;
	height: 300upx;
	display: block;
	margin: 30upx auto;
}
.title{
	width: 100%;
	height: 80upx;
	line-height: 80upx;
	text-align: center;
}
</style>
