
<template>
    <div>
        <router-link v-for="(item,index) in navs" :to="item.path" :key="index">{{item.name}}</router-link>
    </div>
</template>
<script>
//暴露模块数据
export default {
    data(){
        return {
            navs:[
                {name:"主页",path:"/"},
                {name:"信息",path:"/info"},
                {name:"新闻",path:"/news"},
                {name:"关于我们",path:"/about_me"},
            ]
        }
    }
}
</script>
