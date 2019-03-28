<template>
    <div class="map">
        <!-- <image mode='aspectFill' class="head-img" src='/static/images/t1.png'></image> -->
        <map class="content" id="map" longitude="111.172727" latitude="27.89882" scale='15' show-location :markers='markers' @click='toNav'></map>
        <div class="call">
           <div class="wrapper" @click='linkHe'>
               <image src='/static/images/he.png'></image>
               <span>呼叫新郎</span>
           </div>
           <div class="wrapper" @click='linkShe'>
                <image src='/static/images/she.png'></image>
                <span>呼叫新娘</span>
           </div>
        </div>
        <image class="footer" src='/static/images/grren-flower-line.png'></image>

    </div>
</template>

<script>
export default {
    name:'Map',
    data(){
        return{
            markers:[{
                iconPath:'/static/images/nav.png',
                id:0,
                latitude:27.89882,
                longitude:111.172727,
                width:50,
                height:50
            }]
        }
    },
    methods: {
        linkHe(){
            wx.makePhoneCall({
                phoneNumber:'15273818377'
            })
        },
        linkShe(){
            wx.makePhoneCall({
                phoneNumber:'15273818377'
            })
        },
        toNav(){
            wx.openLocation({
                latitude:27.89882,
                longitude:111.172727,
                scale:18,
            })
        },
    },

    
}
</script>

<style scoped>
.wrapper{
    flex:1;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
}
.wrapper image{
    height: 64rpx;
    width: 64rpx;
}
.wrapper span{
    height: 50rpx;
    line-height: 50rpx;
    font-size: 24rpx;
    color:#6b4f4e;
}
.footer{
    height: 80rpx;
    width: 716rpx;
    margin-left: 17rpx;
}
.call{
    display: flex;
    justify-content: space-around;
    align-items: center;
    width:100%;
    margin-bottom: 20rpx;

}
.content{
    width: 100%;
    height: 800rpx;
    margin-bottom: 30rpx;
    }
.map{
    height: 100%;
    background: #FFF;
}
.head-img{
    width: 100%;
    height: 200rpx;
    margin-bottom: 50rpx;
}

</style>