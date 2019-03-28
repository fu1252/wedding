<template>
  <div class="section">
    <video id="myVideo"
      src='http://vt1.doubanio.com/201903251332/b216edf7460881052281465608f0c9fc/view/movie/M/402390886.mp4'
      :danmu-list='danmuList' enable-danmu danmu-btn controls @timeupdate='getTime'
      poster="https://img3.doubanio.com/view/photo/raw/public/p2413273686.jpg"></video>
    <button class="play" @click='pause' v-if="isPlay">暂停</button>
    <button class="play" @click='play' v-else>播放</button>

    <div class="btn-area">
      <input placeholder="请输入弹幕" v-model="danmu" placeholder-style="color:#bbb">
      <button @click='onSendDanmu'>点击生成弹幕</button>
      <image src='/static/images/close1.png' @tap='close'></image>
    </div>
  </div>
</template>
<!-- http://vt1.doubanio.com/201903251255/0fab819765779f77381b7870d64028f1/view/movie/M/301030108-1.mp4 -->
<script>
  import store from '@/store/index'
  export default {
    name: 'video',
    data() {
      return {
        inputValue: '',
        danmuList: [],
        danmu: '',
        time: '',
        isPlay: false
      }
    },
    onLoad() {
      const that = this
      that.getMessageList()
      that.videoContext = wx.createVideoContext('myVideo')
    },
    methods: {
      toIndex() {
        wx.switchTab({
          url: "/pages/index/main"
        })
      },
      getRandomColor() {
        let rgb = []
        for (let i = 0; i < 3; ++i) {
          let color = Math.floor(Math.random() * 256).toString(16)
          color = color.length === 1 ? '0' + color : color
          rgb.push(color)
        }
        return '#' + rgb.join('')
      },
      close() {
        const that = this
        that.$emit('closeVideo')
      },
      getTime(e) {
        this.time = Math.floor(e.mp.detail.currentTime);
        console.log(this.time);

      },
      getMessageList() {
        const that = this
        const db = wx.cloud.database()
        const message = db.collection('message')
        message.get().then(res => {
          let data = res.data.reverse()
          let arr = []
          if (data.length > 0) {
            data.forEach((item, index) => {
              arr.push({
                text: item.desc,
                color: that.getRandomColor(),
                time: 1 + (index * 2)
              })
            })
            that.danmuList = arr
          }
        })
      },
      // onInputBlur(e) {
      //   const that = this        
      //   that.inputValue = e.mp.detail.value
      // },
      onSendDanmu() {
        const that = this
        console.log(that.danmuList);
        that.danmuList.push({
          text: that.danmu,
          color: that.getRandomColor(),
          time: that.time + 3
        })

        that.danmu = ''
      },
      play() {
        this.videoContext.play()
        this.isPlay = !this.isPlay
        wx.pauseBackgroundAudio()

        
      },
      pause() {
        this.videoContext.pause()
        this.isPlay = !this.isPlay
        wx.playBackgroundAudio()
        // const db = wx.cloud.database()
        // const music = db.collection('counter')


        // music.get().then((res) => {
        //   wx.playBackgroundAudio({
        //     dataUrl: res.data[0].musicUrl,
        //     title: '天天音乐',
        //     coverImgUrl: 'https://img3.doubanio.com/view/photo/l/public/p1560261394.webp'
        //   })
        // })
      }

    }
  }

</script>

<style scoped>
  .section {
    width: 750rpx;
    position: relative;
    text-align: center;

  }

  .play {
    background-color: blueviolet;
    height: 40px;
    width: 30%;
    display: inline-block;
    line-height: 40px;
    text-align: center;
    color: white;
    margin: 0px 10px 15px;
  }

  #myVideo {
    height: 422rpx;
    width: 100%;
    margin-bottom: 20rpx;
  }

  .btn-area input {
    width: 660rpx;
    border: 1rpx solid #E5E5E5;
    padding-left: 30rpx;
    height: 80rpx;
    line-height: 80rpx;
    margin-bottom: 30rpx;
    margin-left: 30rpx;
    border-radius: 16rpx;
  }

  .btn-area button {
    height: 92rpx;
    width: 690rpx;
    border-radius: 16rpx;
    background: #1aad19;
    color: #fff;
    line-height: 92rpx;
    text-align: center;
    font-size: 35rpx;
    margin-bottom: 40rpx;

  }

  .btn-area image {
    width: 80rpx;
    height: 80rpx;
    background: #fff;
    margin: 0 auto;
  }

</style>
