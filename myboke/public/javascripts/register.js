;$(function(){
	var a = [/^[a-zA-Z_]\w{5,19}$/,/^[a-zA-Z_]\w{5,19}$/,
			/^\d{8,10}@qq.com$/, /^1[3|4|5|7|8][0-9]{9}$/];
	var arr=[];
	$("#ZCB-R").children("div").each(function(){
		var i = $(this).index();
		$(this).children("input").blur(function(){
			if(a[i/2].test($(this).val())){
				$("#ZCB-R ").find("p").eq(i/2).hide();
			}else{
				$("#ZCB-R ").find("p").eq(i/2).show();
				arr.push(0);
			}
		})
	})
	
	
	$("#btn").on("click",(e)=>{
		e.preventDefault();
		if(arr.indexOf(0)==-1){
//			console.log($("#ZCB-R input").eq(0).val(),$("#ZCB-R input").eq(1).val(),$("#ZCB-R input").eq(3).val())
			$.post("/users/regist",
			{username:$("#ZCB-R input").eq(0).val(),
			password:$("#ZCB-R input").eq(1).val(),
			email:$("#ZCB-R input").eq(2).val()})
			.done((data)=>{
				if(data==0){
					alert("用户名已注册")
				}
				if(data==1){
					location.href = "/login";
				}
			})
		}
	})
	
})



