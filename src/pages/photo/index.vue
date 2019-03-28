<template>
    <div class="photo">
        <h-swiper :list='list' :isGif='isGif'></h-swiper>
    </div>
</template>

<script>
    import HSwiper from '@/components/swiper'
export default {
    name:'Photo',
    components:{
        HSwiper
    },
    data(){
        return{
            list:[],
            isGif:false
        }
    },
    onShow(){
      const that=this
      that.isGif=!that.isGif
      that.getList()
    },
    methods: {
        getList(){
            const that=this
            const db=wx.cloud.database()
            const banner=db.collection('indexBanner')
            banner.get().then((res)=>{
                that.list=res.data[0].indexBanner
            })
        },
    },
}
</script>

<style scoped>
.photo{
    height: 100%;
}

</style>