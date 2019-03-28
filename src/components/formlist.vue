<template>
    <div>
        <scroll-view class="formlist" scroll-y>
            <li class="item" v-for="(item, index) in formList" :key="index">
                <div class="item-top">
                    <span class="left">{{item.name}}</span>
                    <span class="right">{{item.phone}}</span>
                </div>
                <div class="item-midddle">
                    <p class="address">
                        <span>{{item.count}}</span>
                        <span v-if="item.desc">备注：{{item.desc}}</span>
                    </p>
                </div>

            </li>

        </scroll-view>
        <image src='/static/images/close1.png' @tap='close'></image>
        
    </div>
</template>

<script>
export default {
    name:'Formlist',
    props:['formList'],
    methods: {
        close(){
            const that=this
            that.$emit('closeFormlist')
        }
    }
}
</script>

<style scoped>
.formlist{
    position: absolute;
    /* top:20rpx; */
    top:0;
    left:0;
    right: 0;
    bottom: 0;
    width: 100%;
    height: 100%;
    /* margin-left: 30rpx; */
   
    background-color:#f9e9d9;}
.bottom{
    height: 40rpx;
    line-height: 40rpx;
    font-size: 22rpx;
    color:#ccc;
    text-align: center;
    padding:4rpx 0 20rpx;
}
.item{
    background: #fff;
    position: relative;
    margin:10px 15px;
    border-radius: 16rpx;
}
.item-top{
    height: 80rpx;
    padding:0 30rpx;
    display: flex;
    justify-content: space-between;
    align-items: center;
}
.left{
    height: 42rpx;
    line-height: 42rpx;
    font-size: 30rpx;
    color:#333;
}
.right{
    height:30rpx;
    line-height: 30rpx;
    font-size: 22rpx;
    color:#999;
}
.item-middle{
    padding-left: 30rpx;
}
.address{
    width: 100%;
    height: 72rpx;
    line-height: 72rpx;
    color:#666;
    font-size: 26rpx;
    display: flex;
    justify-content: space-between;
    align-items: center;
}
.address span{
    margin:0px 30rpx;
    overflow: hidden;
    text-overflow: ellipsis;
    white-space: nowrap;
}
/* .address span:nth-child(1){
    width: 120rpx;
    margin-right: 20rpx;
}
.address span:nth-child(2){
    flex:1;
    margin-right: 30rpx
} */
.concat{
    width: 720rpx;
    height: 26rpx;
    line-height: 26rpx;
    color:#666;
    font-size: 26rpx;
    display: flex;
    justify-content: flex-start;
    align-items: center;
}
.concat span{
    overflow: hidden;
    text-overflow: ellipsis;
    white-space: nowrap;
}
.concat span:nth-child(1){
    margin-right: 40rpx;
}
.remark{
    line-height: 40rpx;
    font-size: 26rpx;
    color:#333;
    margin:15rpx 0;
    width: 690rpx;
    white-space: pre-wrap;
}
.no-remark{
    height: 15rpx;
}
image{
    width: 80rpx;
    height: 80rpx;
    margin:0 auto;
    position: absolute;
    left: 50%;
    margin-left: -40rpx;
}


</style>