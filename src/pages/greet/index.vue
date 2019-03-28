<template>
    <div class="greet">
        <image class="head" src='/static/images/heart-animation.gif'></image>
        <scroll-view scroll-y class="box">
            <div class="item" v-for="(item, index) in userList" :key="index">
                <image :src='item.user.avatarUrl'></image>
                <p>{{item.user.nickName}}</p>
            </div>
        </scroll-view>
        <p class="count">已收到{{userList.length}}</p>
        <div class="bottom">
            <button class="left" lang="zh_CN" open-type='getUserInfo' @getuserinfo='sendGreet'>送上祝福</button>
            <button class="right" open-type='share'>分享喜悦</button>
        </div>
    </div>
</template>

<script>
import tools from '@/utils/index'
export default {
    name:'Greet',
    data(){
        return{
            userList:[],
            userInfo:'',
            openId:''
        }
    },
    onShow(){
        const that=this
        that.getUserList()
    },
    methods: {
        getIsExist(){
            const that=this
            const db=wx.cloud.database()
            const user=db.collection('user')
            user.where({
                _openid:that.openId
            }).get().then(res=>{
                if(res.data.length===0){
                    that.addUser()
                }else{                   
                    tools.showToast('您已经送过祝福了')
                }
            })
        },
        addUser(){
            const that=this
            const db=wx.cloud.database()
            const user=db.collection('user')
            user.add({
                data:{
                    user:that.userInfo
                }
            }).then(res=>{that.getUserList()})
        },
        getOpenId(){
            const that=this
            wx.cloud.callFunction({
                name:'user',
                data:{}
            }).then(res=>{
                that.openId=res.result.openid
                that.getIsExist()
            })
        },
        sendGreet(e){
           const that=this
           if (e.target.errMsg==='getUserInfo:ok') {
              wx.getUserInfo({
          success: function (res) {
            that.userInfo = res.userInfo
            that.getOpenId()
          }
        })
           }
        },
        getUserList(){
            const that=this
            wx.cloud.callFunction({
                name:'userList',
                data:{}
            }).then(res=>{
                that.userList=res.result.data.reverse()
            })
        },
    },
}
</script>

<style scoped>

.item{
    width: 120rpx;
    display: flex;
    flex-direction: column;
    justify-items: flex-start;
    align-items: center;
    padding:25rpx;
    float: left;
}
.item image{
    width: 100rpx;
    height:100rpx;
    border-radius: 50rpx;
}
.item p{
    height: 50rpx;
    line-height: 50rpx;
    font-size: 24rpx;
    color:#444;
    width: 100rpx;
    overflow: hidden;
    text-overflow: ellipsis;
    white-space: nowrap;
    text-align: center;
}

.greet{
    width: 100%;
    height: 100%;
}
.head{
    height: 150rpx;
    width: 200rpx;
    margin:0 auto;
}
.box{
    height: 700rpx;
    width: 690rpx;
    margin-left: 30rpx;
    border-radius: 16rpx;
    box-shadow: 0 0 10rpx rgba(0,0,0,0.1);
    display: flex;
    justify-content: flex-start;
    align-items: flex-start;
    flex-wrap: wrap;
}
.bottom{
    height: 140rpx;
    position: fixed;
    bottom: 0;
    left: 0;
    background: rgba(255, 255, 255, 0.5);
    display: flex;
    justify-content: center;
    align-items: center;
    width: 100%;
}
.left{
    height: 80rpx;
    line-height: 80rpx;
    font-size: 28rpx;
    width: 300rpx;
    color:#fff;
    background: #2ca6f9;
    margin-left: 20rpx;
}
.right{
    height: 80rpx;
    line-height: 80rpx;
    font-size: 28rpx;
    color:#fff;
    width: 300rpx;
    background: #2ca6f9;
}
.count{
    height: 60rpx;
    line-height: 60rpx;
    background: rgba(255, 255, 255, 0.5);
    position: fixed;
    bottom: 140rpx;
    left: 0;
    font-size: 28rpx;
    color:#444;
    text-align: center;
    width:100%;
}

</style>