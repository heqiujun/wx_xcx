import Vue from 'vue';
export const post=(url,data)=>{
	return uni.request({
		url:url, //仅为示例，并非真实接口地址。
		data:data,
		method:'POST',
		header: {
			'content-type': 'application/x-www-form-urlencoded',	
			// //#ifdef MP-WEIXIN
			// 	'app': 'xiaochengxu',
			// //#endif	
			// 'kouling':$z.Qu('kouling'),				
		}
	});
}
export const toast=(title,time,icon)=>{
	if(icon==1){
		icon='success'
	}else if(icon==2){
		icon='loading'
	}else{
		icon='none'
	}
	if(title){
		return uni.showToast({
			title:title,
			icon:icon,
			mask:true,
			duration: time||2000
		});
	}
	
}
export const backward=(data)=>{
	return uni.navigateBack({
	    delta: data
	});
}
export const upload=(url,data)=>{
	return uni.chooseImage({
	    success: function (chooseImageRes) {
			const tempFilePaths = chooseImageRes.tempFilePaths;
			uni.uploadFile({
				url: url, //仅为示例，非真实的接口地址
				filePath: tempFilePaths[0],
				name: 'file',
				formData:data
			});
	    }
	});
}
export const download=(url,data)=>{
	return uni.downloadFile({
		url: url //仅为示例，并非真实的资源
	});
}
