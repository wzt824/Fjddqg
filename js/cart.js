 
$(function(){



    //全选按钮
    function allCheck(){
        //头部
        $("#selectAll")[0].onclick=function(){
            if($("#selectAll")[0].checked == true){
                for(let i=0,len = $(".selectBtn").length;i<len;i++){
                    if($(".selectBtn")[i].type == "checkbox"){
                        $(".selectBtn")[i].checked = true;
                    }
                }
                oneCheck();
                changeCount();
                deleteAll();
                    
            }else{
                for(let i=0,len = $(".selectBtn").length;i<len;i++){
                    $(".selectBtn")[i].checked = false;
                    changeCount();
                }
            }
        }
    }
    allCheck();

    //选项框
    function oneCheck(){
        let Check = $(".selectBtn");
        for(let i=0;i<Check.length;i++){
            Check[i].onclick=function(){
                let all = 0;//定义一个变量，用来控制全选按钮
                for(let j=0;j<Check.length;j++){//此循环，单纯为了计数，用来判断全选
                    if(Check[j].checked == true){
                        all++;
                    }
                }
                if(all == Check.length){
                    $("#selectAll")[0].checked = true;
                    changeCount();
                    deleteAll();
                }else{
                    $("#selectAll")[0].checked = false;
                    changeCount();
                }
            }
        }
    }
    oneCheck();

    //计算每一行的数据------数量和总计的变化
    function changeUl(){
        let add = $(".add");//加
        let reduce = $(".reduce");//减
        let danjia = $(".danjia");//单价
        let numChange = $(".numChange");//每行件数数量的变化
        let pricehe = $(".pricehe"); //总计的变化
        for(let i=0,len=add.length;i<len;i++){
            pricehe[i].innerHTML = numChange[i].value * danjia[i].innerHTML;
            add[i].onclick = function(){
                numChange[i].value = parseInt(numChange[i].value) + 1;
                pricehe[i].innerHTML = numChange[i].value * danjia[i].innerHTML;
                changeCount();
            }
            reduce[i].onclick = function(){
                if(numChange[i].value <=1){
                    numChange[i].value =1 ;
                }else{
                    numChange[i].value = parseInt(numChange[i].value) - 1;
                    pricehe[i].innerHTML = numChange[i].value * danjia[i].innerHTML;
                    changeCount();
                }
            }
            numChange[i].onblur = function(){
                pricehe[i].innerHTML = numChange[i].value * danjia[i].innerHTML;
            }
        }
        
    }
    changeUl();
    //计算结算栏里的数据------金额（包邮费用和应付总额）
    function changeCount(){
        let danjia = $(".danjia");//单价
        let numChange = $(".numChange");//每行件数数量的变化
        let Check = $(".selectBtn");
        let pricehe = $(".pricehe"); //每行总计的变化
        let _ptotal = 0;//商品总额
        for(var i=0,len=Check.length;i<len;i++){
            if(Check[i].checked == true){
                // console.log()
                pricehe[i].innerHTML = parseInt(numChange[i].value) * parseFloat(danjia[i].innerHTML);
                _ptotal += parseFloat(pricehe[i].innerHTML);
                console.log(_ptotal)
                // _ptotal = _Money;//后期处理优惠、运费使用
            }
        }
        $(".t_num")[0].innerHTML = _ptotal;
    }
    changeCount();


    //删除
    function deletePro(){
        let  del = $(".dell");
        for(let i=0,len=del.length;i<len;i++){
            del[i].onclick=function(){
                if(confirm("亲，您确定要删除所选商品吗？")){
                    this.parentNode.parentNode.remove();
                    changeUl();
                    changeCount();
                }
                var height = $(".car_product")[0].offsetHeight;
                if(height == 0){
                    $(".car_product")[0].parentNode.remove();
                    $(".contant")[0].style.cssText = "display:block";
                }
            }
        }
    }
    deletePro();

    //删除选中状态
    function deleteAll(){
        let Check = $(".selectBtn");
        $(".t_del").click(function(){
            for(var i=0,len=Check.length;i<len;i++){
                if(Check[i].checked == true){
                    if(confirm("亲，您确定要删除所选商品吗？")){
                         $(".car_uls")[i].remove();
                    }
                    var height = $(".car_product")[0].offsetHeight;
                    if(height == 0){
                        $(".car_product")[0].parentNode.remove();
                        $(".contant")[0].style.cssText = "display:block";
                    }
                }
            }
        })
    }
    deleteAll();

   //清空购物车
   $(".t_empty").click(function(){
        if(confirm("亲，您确定要清空购物车吗？")){
            $(".shoppingCar").css({"display":"none"});
            $(".contant").css({"display":"block"});
        }
    });

    
});
// getCookie("proBuy");

// //发送ajax请求
// $.ajax({
//     type:"get",
//     url:"php/getGoodsList.php",
//     async:true,
//     data:null,
//     success:function(data){ 
//         var productPart = '';
//         for(var i=0;i<data.length;i++){
//             if(data[i].goodsId == getCookie("proXq")){
//                 productPart += " <ul class='car_uls'>\
//                     <li class='lis1'>\
//                         <input type='checkbox' class='selectBtn'>\
//                     </li>\
//                     <li class='lis2'>"+data[i].goodsId+"</li>\
//                     <li class='lis3'><img src='"+data[i].goodsImg+"' alt=''></li>\
//                     <li class='lis4'>\
//                         <h3>"+data[i].goodsName+" - "+data[i].goodsId+"</h3>\
//                         <p>颜色：<span class='color'>"+data[i].beiyong11+"</span>尺码：<span class='size'>"+data[i].beiyong32+"</span></p>\
//                     </li>\
//                     <li class='lis5'>\
//                         <p class='underline'>￥<span class='danjia'>"+data[i].beiyong1+"</span></p>\
//                         <p>￥<span class='danjia'>"+data[i].goodsPrice+"</span></p>\
//                     </li>\
//                     <li class='lis6'>\
//                         <div class='span_info'>\
//                             <span class='reduce'>-</span>\
//                             <input type='text' class='numChange' value='1'>\
//                             <span class='add'>+</span>\
//                         </div>\
//                     </li>\
//                     <li class='lis7'>￥<span class='pricehe'>"+data[i].goodsPrice+"</span class='pricehe'></li>\
//                     <li class='lis8'><b class='dell'>删除</b></li>\
//                 </ul>";
//                 $(".car_product").html(productPart);

//                 big()
//             }
//         }

//     },
//     dataType:"json"
// });	