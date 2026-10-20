<template>
    <div id="top1">&nbsp;</div>
<div >
   <p v-bind:class="[{'show':ifshow==1},'title']">最新消息</p>
    <div v-bind:class="[{'show':ifshow==1},'article']" v-for="(item) of ag" >
    <a v-bind:href="item.url" target="_blank" class="articleB">
      <p class="article_title">{{item.title}}</p>
      <p class="article_text"></p>
    </a>
    </div> 
    <p v-bind:class="[{'show':ifshow==0},'Pclass']">正在加载...</p>
    <a href="#top1" class="up">↑</a>
</div>
</template>
<script setup>
import { ref, onMounted } from 'vue'
import { abc ,fob, getStory}from'./a.js'
const ifshow = ref(1)
const ag = ref([])
onMounted(async () => {
  const ids = await abc('/newstories.json')
  //await cbd(ids)
  ag.value= await fob(ids)
  ifshow.value = 0
  console.log(ag.value) 
})
</script>
<style scoped>
.title{
    text-align: center;
    font-size: 100px;
}
.show{
  display: none;
}
.Pclass{
  text-align: center;
}
.article{
  border: 1px solid lightgray;
  border-radius: 5px;
  width: 50%;
  margin: 0 auto;
  margin-top: 20px;

}
.article:hover{
  box-shadow: 0px 0px 20px #000;
}
.article_title:hover{
  color: red;
}
.article_title{
  font-size: 20px;
  font-weight: bold;
  padding: 10px;
}
.article_text{
  font-size: 15px;
  color: gray;
  padding: 20px;
}
.articleB{
  text-decoration: none;
  color: black;
}
.up{
  text-align: center;
  position:fixed;
  bottom:50px;
  right:100px;
  width: 75px;
  height: 75px;
  background-color: lightblue;
  border:none;
  border-radius: 50%;
  color:white;
  text-decoration: none;
  font-size: 50px;
}
.up:hover{
  background-color: rgb(38, 150, 188);
}
</style>