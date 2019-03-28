<template>
    <div class="box">
        <swiper class="swiper" :autoplay="true":circular="true"
            current=0
            :indicator-dots="true"
            :vertical="true"
        >
            <block v-for="(item, index) in aa" :key="index">
                <swiper-item class="item">
                    <image mode="aspectFill" lazy-load="true" :src="item" class="slide-image"/>
                </swiper-item>
            </block>
        </swiper> 
    </div>
</template>

<script>
export default {
    // name:'Swiper',
    // props:['list'],
    data(){
        return{
            aa:['https://img3.doubanio.com/view/photo/l/public/p2292324341.webp',
            'https://img3.doubanio.com/view/photo/l/public/p2292324341.webp',
            'https://img3.doubanio.com/view/photo/l/public/p2292324341.webp',
            'https://img3.doubanio.com/view/photo/l/public/p2292324341.webp',
            ]

        }
    }
}
</script>

<style scoped>
.box{
    position: relative;
    height: 100%;
}
.swiper{
    height: 100%;
    width: 100%;
}
.item{
    width: 100%;
    height: 100%;
}
.slide-image{
    width:100%;
    height: 100%;
    display: block;
    overflow:show;
}
</style>