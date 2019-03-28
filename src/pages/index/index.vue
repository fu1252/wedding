<template>
  <div class="index">
    <div class="box">
      <swiper class="swiper" :autoplay="true" :circular="true" current=0 :indicator-dots="true" :vertical="true">
        <block v-for="(item, index) in list" :key="index">
          <swiper-item class="item">
            <image mode="aspectFill" lazy-load="true" :src="item" class="slide-image" />
          </swiper-item>
        </block>
      </swiper>
    </div>

    <image class="inv" src='/static/images/inv.png'></image>
    <div class="bg-music" v-if="isPlay" @click='audioPlay'>
      <image src='/static/images/music_icon.png' class="musicImg music-icon"></image>
      <image src='/static/images/music_play.png' class="music-play pauseImg"></image>
    </div>
    <div class="bg-music" v-else @click='audioPlay'>
      <image src='/static/images/music_icon.png' class="musicImg"></image>
      <image src='/static/images/music_play.png' class="music-play playImg"></image>
    </div>
    <div class="info" :animation='animationData'>
      <div class="content">
        <h1>Mr. liu& Miss.liu</h1>
        <p>定于 2019年9月9日（星期一）中午12：00</p>
        <p>农历 8月8日 中午十二点 举办婚礼</p>
        <p>席设：新化县孟公镇孟公大酒店</p>
        <p>地址：新化县孟公镇</p>
        <image src='/static/images/we.png' class="img-footer"></image>
      </div>
    </div>
    <!-- <audio id='myAudio' :src='audioUrl' loop></audio> -->
  </div>
</template>

<script>
  import tools from '@/utils/index'
  import store from '@/store/index'
  export default {
    name: 'index',
    data() {
      return {
        list: [],
        isPlay: true,
        audioCtx: '',
        audioUrl: '',
        back:''
      }
    },
    onShow() {
      const that = this
      // that.audioCtx = wx.createAudioContext('myAudio')
      that.back = wx.getBackgroundAudioManager();
      that.isPlay = true
      that.getMusicUrl()
  },

  components: {

    },
    onShareAppMessage(res) {
      return {
        path: '/pages/index/main'
      }
    },
    computed: {
      isa() {
        return store.state.isAudioPlay
      },
      counter() {
        return store.state.counter
      }
    },
    methods: {
      getList() {
        const that = this
        const db = wx.cloud.database()
        const banner = db.collection('counter')
        banner.get().then((res) => {
          that.list = res.data[0].bannerList
        })
      },
      getMusicUrl() {
        const that = this
        const db = wx.cloud.database()
        const music = db.collection('counter')
        

        music.get().then((res) => {
          // that.audioUrl = res.data[0].musicUrl
          // that.audioCtx.play()
        that.back.src = res.data[0].musicUrl;
        that.back.title = "天天音乐";
        that.back.coverImgUrl = "https://img3.doubanio.com/view/photo/l/public/p1560261394.webp";
        that.back.play();
        that.back.onPlay(() => {
            console.log("音乐播放开始");
          })
        that.back.onEnded(() => {
            console.log("音乐播放结束");
          })
          that.getList()
        })
      },
      audioPlay() {
        const that = this
        if (that.isPlay) {
          that.back.pause()
          that.isPlay = false
          tools.showToast('已暂停音乐播放')
        } else {
          that.back.play()
          that.isPlay = true
          tools.showToast('背景音乐已开启')
        }
      }

    },

    created() {
      // let app = getApp()
    }
  }

</script>

<style scoped>
  @keyframes musicRotate {
    from {
      transform: rotate(0deg)
    }

    to {
      transform: rotate(360deg)
    }
  }

  @keyframes musicStop {
    from {
      transform: rotate(20deg)
    }

    to {
      transform: rotate(0deg)
    }
  }

  @keyframes musicStart {
    from {
      transform: rotate(0deg)
    }

    to {
      transform: rotate(20deg)
    }
  }

  @keyframes infoAnimation {
    0% {
      transform: scale(1) translate(0, 0)
    }

    50% {
      transform: scale(.9) translate(5px, 5px)
    }

    100% {
      transform: scale(1) translate(0, 0)
    }
  }

  .content {
    width: 626rpx;
    border: 1rpx solid #000;
    display: flex;
    flex-direction: column;
    justify-content: flex-start;
    align-items: center;
    position: relative;
    padding-bottom: 30rpx;
  }

  .content h1 {
    font-size: 50rpx;
    height: 100rpx;
    line-height: 100rpx;
  }

  .content p {
    font-size: 24rpx;
    height: 60rpx;
    line-height: 60rpx;
  }

  .img-footer {
    position: absolute;
    bottom: 0;
    left: 53rpx;
    z-index: 10;
    height: 14rpx;
    width: 520rpx;
  }

  #myAudio {
    display: none;
  }

  .info {
    width: 630rpx;
    background: rgba(255, 255, 255, 0.75);
    z-index: 6;
    position: fixed;
    bottom: 40rpx;
    left: 50rpx;
    padding: 10rpx;
    animation: infoAnimation 12s linear infinite;
  }

  .music-play {
    width: 14px;
    height: 30px;
    margin-left: 5px;
    transform-origin: top;
    transform: rotate(20deg);
  }

  .playImg {
    animation: musicStop 1s linear forwards
  }

  .pauseImg {
    animation: musicStart 1s linear forwards
  }

  .musicImg {
    width: 30px;
    height: 30px;
  }

  .music-icon {
    animation: musicRotate 3s linear infinite
  }

  .bg-music {
    position: fixed;
    right: 0;
    top: 10px;
    width: 50px;
    z-index: 9;
    display: flex;
    justify-content: flex-start;
    align-items: flex-start;
  }

  .inv {
    position: absolute;
    top: 10px;
    left: 45px;
    width: 280px;
    height: 35px;
    z-index: 5;
  }

  .index {
    height: 100%;
    position: relative;
  }

  .index .bg-swiper {
    width: 100%;
    height: 100%;
  }

  .box {
    position: relative;
    height: 100%;
  }

  .swiper {
    height: 100%;
    width: 100%;
  }

  .item {
    width: 100%;
    height: 100%;
  }

  .slide-image {
    width: 100%;
    height: 100%;
    display: block;
    overflow: show;
  }

</style>
