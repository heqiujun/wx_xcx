<template>
    <view>
		<view class="describe">
			<view>
				<image src="../../static/xyj.jpg"></image>
			</view>
			<view class="describe_zi">
				<view>TB82VT818DCL</view>
				<view>波轮洗衣机</view>
			</view>
		</view>
		<view class="nav">
			<view class="navget" v-for="(item,index) in array" :key="index">
				<text>{{item.title}}</text>
				<image src="../../static/jinru.png"></image>
			</view>
		</view>
    </view>
</template>
<script>
	export default {
	    data() {
	        return {
	            title: 'video',
				show:false,
				array:[
					{title:"快速入门"},
					{title:"清洁安装"},
					{title:"连接wifi"},
					{title:"常见问题"},
					{title:"使用说明"}
				]
	        }
	    },
	    methods: {
	    }
	}
</script>

<style>
.navget image{
	margin: 0upx 20upx;
	width: 40upx;
	height: 40upx;
}
.navget text{
	margin: 0upx 20upx;
	font-size: 32upx;
}
.nav{
	width: 100%;
	min-height:1200upx ;
	background: #EEEEEE;
	border: 1upx solid #EEEEEE;
}
/* .nav .navget:first-child{
	margin-top: 20upx !important;
} */
.navget{
	width: 96%;
	height: 120upx;
	line-height: 120upx;
	border-radius: 10upx;
	background: #FFFFFF;
	margin: 20upx auto;
	display: flex;
	justify-content: space-between;
	align-items: center;
	flex-wrap: wrap;
}
.describe image{
	width: 150upx;
	height: 180upx;
}
.describe view:first-child{
	width: 40%;
	text-align: center;
}
.describe_zi{
	width: 60%;
}
.describe_zi view:first-child{
	font-weight: 600;
	font-size: 40upx;
	line-height: 50upx;
}
.describe_zi view:last-child{
	font-size: 24upx;
	line-height: 50upx;
	color: #999999;
}
.describe{
	display: flex;
	flex-wrap: nowrap;
	align-items: center;
	width: 100%;
	height: 300upx;
}
</style>
