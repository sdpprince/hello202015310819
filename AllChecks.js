
var deleteChecked = new Array()//保存删除元素的id
var indexOf4 = 0//返回数组中指定某个元素查找后的位置
var checkboxLen = 0//每个小checkbox被选择状态的长度
var checkboxlist = []//每一个小checkbox

//点击单个删除按钮----------------------------------------------------------
$(".btn-danger-Select").on('click', function () {
    console.log("btn-danger-Select")
    let id = new Array()
    // checks(this.dataset.valueid, this)
    // deleteChecked.push(this.dataset.valueid)
    deleteStudentInfo(0,deleteChecked)//传递id值给ajax
});

//所有小checkbox的被选状态长度是否===总长度-----------------------------------
function checkfanyuan() {

    checkboxlist = document.querySelectorAll("#checkboxlist")//重新拿到小checkbox并赋值给数组
    if (checkboxLen === checkboxlist.length) {
        // console.log("相等" + checkboxLen+'=='+checkboxlist.length)

        for (let i = 0; i < checkboxlist.length; i++) {
            console.log(checkboxlist[i].checked)
            if(checkboxlist[i].checked){
                $("#checkboxAll")[0].checked = true
            }
        }
    } else {
        // console.log("不相等" + checkboxLen+'!='+checkboxlist.length)
        $("#checkboxAll")[0].checked = false
    }
}
//全选按钮的状态切换----------------------------------------------------------
$("#checkboxAll").change(function () {
    checkboxlist = document.querySelectorAll("#checkboxlist")
    checkboxlist.forEach((element,b)=>{
        if (element.type = "checkbox") {
            element.checked = this.checked
            checkboxLen = checkboxlist.length
            let num = parseInt(element.dataset.valueid)
            indexOf4 = (deleteChecked || []).findIndex((item) => item === num);//查找指定元素的下标,（之一查找的值得类型要一致）
            if(indexOf4===-1){
                console.log(indexOf4)
                deleteChecked.push(num)
            }
        }
    })

    if (this.checked == false) {
        deleteChecked = []//取消全选清空数组集合
        checkboxLen=0
    }
    console.log(deleteChecked)
})
//点击onclick事件，拿到每一个小checkbox的状态-----------------------------------
function checks(id, src) {
    console.log("点击onclick事件，拿到每一个小checkbox的状态")
    if (src.checked) {
        checkboxLen++
        deleteChecked.push(id)
        checkfanyuan()//全选反选
    } else {
        checkboxLen--
        indexOf4 = (deleteChecked || []).findIndex((item) => item === id);//查找指定元素的下标,（之一查找的值得类型要一致）
        deleteChecked.splice(indexOf4, 1)//删除指定元素
        // console.log(indexOf4)
        // console.log('id'+id)
        checkfanyuan()//全选反选
    }
    console.log(deleteChecked)
}


