import Vue from 'vue'
import Button from './button'
import Icon from './icon'
import ButtonGroup from './button-group'
import Input from './input'
import Row from './row'
import Col from './col'
import Layout from './layout'
import Header from './header'
import Sider from './sider'
import Content from './content'
import Footer from './footer'

import Toast from './toast'
import plugin from './plugin'

import Tabs from './tabs'
import TabsHead from './tabs-head'
import TabsBody from './tabs-body'
import TabsItem from './tabs-item'
import TabsPane from './tabs-pane'

import Popover from './popover'

import Collapse from './collapse'
import CollapseItem from './collapse-item'

Vue.component('g-button',Button)
Vue.component('g-icon',Icon)
Vue.component('g-button-group',ButtonGroup)
Vue.component('g-input',Input)
Vue.component('g-row',Row)
Vue.component('g-col',Col)
Vue.component('g-layout',Layout)
Vue.component('g-header',Header)
Vue.component('g-content',Content)
Vue.component('g-footer',Footer)
Vue.component('g-sider',Sider)

Vue.component('g-toast',Toast)
Vue.use(plugin)

Vue.component('g-tabs',Tabs)
Vue.component('g-tabs-head',TabsHead)
Vue.component('g-tabs-body',TabsBody)
Vue.component('g-tabs-item',TabsItem)
Vue.component('g-tabs-pane',TabsPane)

Vue.component('g-popover',Popover)

Vue.component('g-collapse',Collapse)
Vue.component('g-collapse-item',CollapseItem)

new Vue({
    el:'#app',
    data:{
        selectedTab:['2','3']
    },
    created(){
        // setTimeout(()=>{
        //     let event = new Event('change')
        //     let inputElement = this.$el.querySelector('input')
        //     inputElement.dispatchEvent(event)
        //     console.log('hi')
        // },2000)

        // this.$toast('你的智商需要充值！',{
        //     position:'middle',
        //     enableHtml:false,
        //     closeButton:{
        //         text:'已充值',
        //         callback(){
        //             console.log('他说已经充值智商了')
        //         }
        //     },
        //     autoClose:3
        // })
    },
    methods:{
        // inputChange(e){
        //     console.log(e)
        // }

        yyy(data){
            console.log('yyy')
            console.log(data)
        },
        showToast1(){
            this.showToast('top')
        },
        showToast2(){
            this.showToast('middle')
        },
        showToast3(){
            this.showToast('bottom')
        },
        showToast(position){
            this.$toast(`你的智商目前为 ${parseInt(Math.random() * 100)}。你的智商需要充值！`, {
                position,
                enableHtml: false,
                closeButton: {
                  text: '已充值',
                  callback () {
                    console.log('他说已经充值智商了')
                  }
                },
                autoClose: 3
            })
        }
    }
})









//不用看
import chai from 'chai'
import spies from 'chai-spies'
chai.use(spies)


const expect = chai.expect
//单元测试  
//没有消息就是好消息
{
    console.log(Button)  //Button是一个对象，而我们需要使用构造函数
    //动态生成一个按钮
    const Constructor = Vue.extend(Button)
    const vm = new Constructor({
        propsData:{
            icon:'settings'  //用户输入settings配置
        }
    })
    vm.$mount()
    console.log(vm)
    console.log(vm.$el)
    let useElement = vm.$el.querySelector('use')
    let href = useElement.getAttribute('xlink:href')
    expect(href).to.eq('#i-settings')  //期望use的href是#i-settings

    vm.$el.remove()
    vm.$destroy()
}

{
    const Constructor = Vue.extend(Button)
    const vm = new Constructor({
        propsData:{
            icon:'settings',
            loading: true  
        }
    })
    vm.$mount()
    let useElement = vm.$el.querySelector('use')
    let href = useElement.getAttribute('xlink:href')
    expect(href).to.eq('#i-loading')

    vm.$el.remove()
    vm.$destroy()
}

{
    const div = document.createElement('div')
    document.body.appendChild(div)
    const Constructor = Vue.extend(Button)
    const vm = new Constructor({
        propsData:{
            icon:'settings',
            iconPosition:'right'  //测试 right
        }
    })
    vm.$mount(div)
    let svg = vm.$el.querySelector('svg')
    let {order} = window.getComputedStyle(svg)
    expect(order).to.eq('2')  //css属性值是字符串
    //测试完清理
    vm.$el.remove()
    vm.$destroy()
}

// 测试点击按钮
{
    //mock
    const Constructor = Vue.extend(Button)
    const vm = new  Constructor({
        propsData:{
            icon:'settings',
            loading: true  
        }
    })
    vm.$mount()
    let spy = chai.spy(function(){})
    vm.$on('click',spy)
    let button = vm.$el
    button.click()
    expect(spy).to.have.been.called()

    vm.$el.remove()
    vm.$destroy()
}