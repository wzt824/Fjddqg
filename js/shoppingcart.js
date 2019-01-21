$(function () {
    checkall();
});
//全选
function checkall() {
    var check =document.getElementsByClassName("check");
    var checkall = document.getElementsByClassName("checkall");
    for (let i = 0; i < checkall.length; i++) {
        checkall[i].onclick = function () {
          ischecked =this.checked;
          console.log(ischecked); 
            // for (let j = 0; j < check.length; i++) {
            //     check[j].checked = ischecked; 
            //     console.log(check.length);

            // }
        }
    }
}



 $(function () {
        $('tbody tr').each(function () {
            var num = $(this).find(".num").html();
            var price = $(this).find(".price").html();
            subtotal = parseFloat(num * price);
            $(this).find(".subtotal").html(subtotal);
            //加
            $(this).find(".addbtn").click(function () {
                $(this).parents('td').find(".num").html(++num);
                subtotal = parseFloat(num * price);
                $(this).parents('tr').find(".subtotal").html(subtotal);
                productNum();
            });
            //减   
            $(this).find(".reducebtn").click(function () {
                if (num <= 1) {
                    $(this).parents('td').find(".num").html(1);
                } else {
                    $(this).parents('td').find(".num").html(--num);
                }
                subtotal = parseFloat(num * price);
                $(this).parents('tr').find(".subtotal").html(subtotal);
                productNum();
            });
            //点击删除
            $(this).find('.delbtn').click(function () {
                if (confirm("您确定要删除该商品吗")) {
                    $(this).parents('tr').remove();
                    productNum();
                }
                var aa = $("tbody").height();
                if (aa == 0) {
                    $('table').remove();
                    $('.clearafter').cssText({
                        "display": "block"
                    });
                }
                productorder();
            });
            checkAll();
            everycheck();
            btcheckAll();
        });
        //商品件数 
        function productNum() {
            var subcheck = document.getElementsByClassName('subcheck');
            var sumnum = document.getElementById('sumnum');
            var num = document.getElementsByClassName('num'); //数量
            var total = document.getElementById('total');
            var subtotal = document.getElementsByClassName('subtotal');
            var exprice = document.getElementById('exprice');
            var oneprice = document.getElementsByClassName('price');
            var NUM = 0; //总数量
            var TOTAL = 0; //总价
            let max = 0;
            for (var i = 0; i < subcheck.length; i++) {
                if (subcheck[i].checked == true) {
                    NUM += parseInt(num[i].innerHTML);
                    TOTAL += parseFloat(subtotal[i].innerHTML);
                    var curr = parseFloat(oneprice[i].innerHTML);
                    if (max < curr) {
                        max = curr;
                    }
                }
            }
            exprice.innerHTML = max;
            sumnum.innerHTML = NUM;
            total.innerHTML = TOTAL;
        }
        //商品序号
        function productorder() {
            var order = document.getElementsByClassName('order');
            for (var i = 0; i < order.length; i++) {
                order[i].innerHTML = i + 1;
            }
        }
        // 最贵的商品
        // function exprice() {
        //     var oneprice = document.getElementsByClassName('price');
        //     var max = oneprice[0].innerHTML;
        //     for (var i = 0; i < oneprice.length; i++) {
        //         if (max < parseFloat(oneprice[i].innerHTML)) {
        //             max = parseFloat(oneprice[i].innerHTML);
        //         }
        //     }
        //     $('#exprice')[0].innerHTML = max;
        // }
        //上面的全选
        function checkAll() {
            var checkall = document.getElementById('checkall');
            var subcheck = document.getElementsByClassName('subcheck');
            var btcheckall = document.getElementById('btcheckall');
            //全选复选框
            // checkall.onclick = function () {
            //     if (checkall.checked == true) {
            //         for (var i = 0; i < subcheck.length; i++) {
            //             subcheck[i].checked = true;
            //             productNum();  
            //         }
            //     } else {
            //         for (var i = 0; i < subcheck.length; i++) {
            //             subcheck[i].checked = false;
            //             productNum(); 
            //         }
            //     }
            // }
            checkall.onclick = function () {
                let ischecked = this.checked;
                btcheckall.checked = ischecked;
                for (var i = 0; i < subcheck.length; i++) {
                    subcheck[i].checked = ischecked;
                    productNum();
                }
            }
        }
        //下面的全选 //根据下面的全选来删除所有的商品
        function btcheckAll() {
            var btcheckall = document.getElementById('btcheckall');
            var checkall = document.getElementById('checkall');
            var subcheck = document.getElementsByClassName('subcheck');
            var tbody = document.getElementsByTagName('tbody');
            var table = document.getElementsByTagName('table');
            var clearafter = document.getElementsByClassName('clearafter');
            var delbtnall = document.getElementsByClassName('delbtnall');
            btcheckall.onclick = function () {
                let ischecked = this.checked;
                checkall.checked=ischecked;
                for (var i = 0; i < subcheck.length; i++) {
                    subcheck[i].checked = ischecked;
                    productNum();
                }
                //必须选中全选按钮，在点击删除按钮
                if (btcheckall.checked == true) {
                    delbtnall[0].onclick = function () {
                        if (confirm('您确定要删除全部的商品吗？')) {
                            console.log(table[0].children);
                            table[0].remove();
                            clearafter[0].style.display = 'block';

                        }
                    }
                }
            }
        }
        // 子复选框来判断全选框
        function everycheck() {
            var checkall = document.getElementById('checkall');
            var btcheckall=document.getElementById('btcheckall');
            var subcheck = document.getElementsByClassName('subcheck');
            for (var i = 0; i < subcheck.length; i++) {
                subcheck[i].onclick = function () {
                    var all = 0;
                    for (var j = 0; j < subcheck.length; j++) {
                        if (subcheck[j].checked == true) {
                            all++;
                            productNum();
                        } else {
                            productNum();
                        }
                    }
                    if (all == subcheck.length) {
                        checkall.checked = true;
                        btcheckall.checked = true;
                    } else {
                        checkall.checked = false;
                        btcheckall.checked = false;
                    }
                }
            }
        }
