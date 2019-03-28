<template>
  <div class="message">
    <scroll-view scroll-y @scroll='scroll' class="box">
      <p class="place"></p>
      <div class="item" v-for="(item, index) in messageList" :key="index">
        <image class="left" :src='item.url'></image>
        <div class="right">
          <div class="top">
            <span class="top-1">{{item.name}}</span>
            <span class="top-2">{{item.time}}</span>
          </div>
          <p class="con">{{item.desc}}</p>
        </div>
      </div>
      <p class="place-end"></p>

    </scroll-view>
    <div class="bottom">
      <button class="inner" lang='zh_CN' open-type='getUserInfo' @getuserinfo='toMessage'>说点什么</button>
      <button class="inner" @click='toForm'>我要出席</button>
    </div>
    <div class="dialog" v-show="isOpen">
      <textarea name="textarea" focus='true' maxlength="80" class="desc" placeholder="在这里输入你说的话"
        placeholder-style="color:#ccc" v-model="desc"></textarea>
      <div class="btn">
        <button class="btn-inner send-btn" @click='sendMessage'>发送留言</button>
        <button class="btn-inner cancel-btn" @click='cancel'>取消</button>
      </div>
    </div>
    <div class="video-dialog" @click='toVideo'>
      <image src='/static/images/video1.png'></image>
    </div>
    <div class="form-dialog" @click='lookList'>
      <image src='/static/images/form.png'></image>
    </div>
    <div class="video" v-show="isVideo">
      <h-video @closeVideo='closeVideo'></h-video>
    </div>
    <div class="form" v-show="isForm">
        <h-form @closeForm='closeForm' @getFromlist='getFormlist'></h-form>
    </div>
    <div class="form-list" v-show="isFormlist">
        <h-formlist @closeFormlist='closeFormlist' :formList='formList'></h-formlist>
    </div>
  </div>
</template>

<script>
  import tools from '@/utils/index'
  import HVideo from '@/components/video'
  import HForm from '@/components/form'
  import HFormlist from '@/components/formlist'
  export default {
    name: 'Message',
    components:{
        HVideo,
        HForm,
        HFormlist
    },
    data() {
      return {
        isOpen: false,
        desc: '',
        messageList: [],
        openId: '',
        userInfo: '',
        isForm: false,
        isVideo: false,
        isFormlist: false,
        formList: []
      }
    },
    onShow() {
      const that = this
      that.isVideo = false
      that.isForm = false
      that.isFormlist = false
      that.getMessageList()
    },
    methods: {
        lookList(){
            const that=this
            that.isFormlist=true
            that.getFormlist()
            that.isOpen=false
        },
        closeFormlist(){
          const that=this
          that.isFormlist=false
        },
        getFormlist(){
          const that=this
          
          wx.cloud.callFunction({
              name:'presentList',
              data:{}
          }).then(res=>{              
              that.formList=res.result.data.reverse()
          })
        },
        toVideo(){
            const that=this
            that.isVideo=true
        },
        closeVideo(){
            const that=this
            that.isVideo=false
        },
        cancel(){
            const that=this
            that.isOpen=false
        },
      getNowFormatDate() {
        const now = new Date()
        const year = now.getFullYear()
        const month = now.getMonth() + 1
        const day = now.getDate()
        const hh = now.getHours()
        const mm = now.getMinutes()
        const ss = now.getSeconds()
        let clock = year + '-'
        if (month < 10) {
          clock += '0'
        }
        clock += month + '-'
        if (day < 10) {
          clock += '0'
        }
        clock += day + ' '
        if (hh < 10) {
          clock += '0'
        }
        clock += hh + ':'
        if (mm < 10) {
          clock += '0'
        }
        clock += mm + ':'
        if (ss < 10) {
          clock += '0'
        }
        clock += ss
        return clock
      },
      sendMessage() {
        const that = this
        if (that.desc) {
          const db = wx.cloud.database()
          const message = db.collection('message')
          message.add({
            data: {
              desc: that.desc,
              type: 'message',
              time: that.getNowFormatDate(),
              url: that.userInfo.avatarUrl,
              name: that.userInfo.nickName,
            }
          }).then(res => {
            that.isOpen = false
            that.desc = ''
            that.getMessageList()           
          })
        } else {
          tools.showToast('说点什么吧')
        }
      },
      toForm() {
        const that = this
        that.isForm = true      
      },
      closeForm(){
          const that=this
          that.isForm=false
      },
      addUser() {
        const that = this
        const db = wx.cloud.database()
        const user = db.collection('user')
        user.add({
          data: {
            user: that.userInfo
          }
        }).then(res => {
    
        })
      },
      getIsExist() {
        const that = this
        const db = wx.cloud.database()
        const user = db.collection('user')
        user.where({
          _openid: that.openId
        }).get().then(res => {
          if (res.data.length === 0) {
            that.addUser()
          }
        })
      },
      getOpenId() {
        const that = this
        wx.cloud.callFunction({
          name: 'user',
          data: {}
        }).then(res => {
          that.openId = res.result.openid
          that.getIsExist()
        })
      },
      toMessage(e) {
        const that = this
        if (e.target.errMsg === 'getUserInfo:ok') {
          wx.getUserInfo({
            success: function (res) {
              that.userInfo = res.userInfo
              that.isOpen = true
              that.getOpenId()
            }
          })
        }
      },
      getMessageList() {
        const that = this
        wx.cloud.callFunction({
          name: 'messageList',
          data: {}
        }).then(res => {            
          that.messageList = res.result.data.reverse()          
        })
      },
    },
  }

</script>

<style scoped>
  .message {
    height: 100%;
    width: 100%;
  }

  .box {
    height: 100%;
    background: #f9e9d9;
    width: 100%
  }

  .place {
    height: 20rpx;
  }

  .place-end {
    height: 160rpx;
  }

  .item {
    width: 630rpx;
    margin-left: 30rpx;
    border-radius: 16rpx;
    background: #fff;
    display: flex;
    justify-content: center;
    align-items: flex-start;
    padding: 30rpx;
    margin-bottom: 20rpx;
  }

  .left {
    width: 100rpx;
    height: 100rpx;
    border-radius: 50rpx;
  }

  .right {
    display: flex;
    flex-direction: column;
    justify-content: flex-start;
    min-height: 100rpx;
    align-items: flex-start;
    width: 500rpx;
    margin-left: 20rpx;
  }

  .top {
    height: 40rpx;
    width: 100%;
    display: flex;
    justify-content: space-between;
    align-items: center;

  }

  .top-1 {
    height: 50rpx;
    line-height: 50rpx;
    color: #444;
    font-size: 28rpx;
  }

  .top-2 {
    height: 50rpx;
    line-height: 50rpx;
    color: #999;
    font-size: 24rpx;
  }

  .con {
    line-height: 50rpx;
    color: #666;
    font-size: 28rpx;
    white-space: pre-wrap;
    width: 100%;
  }

  .bottom {
    position: fixed;
    bottom: 0;
    left: 0;
    height: 160rpx;
    background: rgba(255, 255, 255, 0.75);
    width: 100%;
    display: flex;
    justify-content: center;
    align-items: center;
  }

  .bottom .inner {
    height: 80rpx;
    line-height: 80rpx;
    font-size: 28rpx;
    width: 300rpx;
    color: #fff;
    background: #2ca6f9;
    margin: 0 20rpx 0 0;
  }

  .right {
    margin: 0;
  }

  .dialog {
    position: fixed;
    bottom: 0;
    left: 0;
    z-index: 9;
    background: #fff;
    width: 100%;

  }

  .dialog textarea {
    height: 200rpx;
    line-height: 42rpx;
    font-size: 30rpx;
    color: #333;
    resize: none;
    outline: none;
    padding: 30rpx;
    width: 690rpx;
    background: #f5f5f5;
  }

  textarea ::-webkit-input-placeholder {
    font-size: 30rpx;
    color: #999;
  }

  .btn {
    height: 120rpx;
    display: flex;
    justify-content:space-around;
    align-items: center;
  }
.send-btn{
  flex:0 1 80%;
}
  .btn-inner {
    height: 89rpx;
    line-height: 80rpx;
    flex: 3;
    color: #fff;
    background: #2ca6f9;
    margin: 0 20rpx 0 30rpx;
  }
.cancel-btn{
  background-color: #ed695d;
  flex:1;
}
  .right {
    flex: 1;
  }

  .video-dialog {
    position: fixed;
    right: 10rpx;
    top: 200rpx;
    width: 100rpx;
    height: 100rpx;
    box-shadow: 0 0 10rpx rgba(0, 0, 0, 0.1);
    background: #fff;
    border-radius: 16rpx;
  }

  .video-dialog image {
    width: 100%;
    height: 100%;
  }

  .form-dialog {
    position: fixed;
    right: 10rpx;
    top: 320rpx;
    width: 100rpx;
    height: 100rpx;
    box-shadow: 0 0 10rpx rgba(0, 0, 0, 0.1);
    background: #fff;
    border-radius: 50rpx;
  }

  .form-dialog image {
    width: 100%;
    height: 100%;
  }

  .video,
  .form,
  .form-list {
    position: fixed;
    top: 0;
    bottom: o;
    left: 0;
    right: 0;
    background: #fff;
    z-index: 9;
    height: 100%;
  }

  .form-list {
    background: rgba(0, 0, 0, 0.5)
  }

</style>
