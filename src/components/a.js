import {ref} from 'vue'


const b = ref([])
const BASE = 'https://hacker-news.firebaseio.com/v0'
export async function abc(adg,x) {
  console.log(x);
  const a = await fetch(`${BASE}/${adg}`)//拿ID
  const ids = await a.json()//json的作用是把数据装为js可操控的数据
  const topIds = ids.slice(0, x)
  return topIds 
  
}

export async function getStory(id) {
  const res = await fetch(`${BASE}/item/${id}.json`)//填入ID拿详情
  return res.json()
}

export async function fob(ids) {//用map填入ID
  b.value = await Promise.all(ids.map(id => getStory(id)))
  return b.value
}//map--遍历数组元素，对每个元素执行getStory，可以把map理解为工人，数组元素理解为初级产品，工人拿起初级产品进行二次加工，出来的是高级产品
//promise.all--等待所有异步请求完成再返回结果

export async function cbd(ids) {//用for循环填入id
  const stories = []
  for (let i = 0; i < ids.length; i++) {
    const story = await getStory(ids[i])  
    stories.push(story)
  }
  b.value = stories  
  return b.value;
}

