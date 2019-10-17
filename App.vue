<script>
	import "@/common/index.css"
	export default {
		onLaunch: function() {
			console.log("第一次进入小程序")
			
		},
		onShow: function() {
			console.log("每次进入这个页面")
			
		},
		onHide: function() {
			console.log("每次从这个页面消失")
			
		}
	}
</script>
<style>
	/*每个页面公共css */
*{
	font-size: 28upx;
}
</style>
