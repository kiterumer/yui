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

new Vue({
    el:'#app',
    data:{
        loading1:false,
        loading2:true,
        loading3:false,
        message:"hi"
    },
    created(){
        // setTimeout(()=>{
        //     let event = new Event('change')
        //     let inputElement = this.$el.querySelector('input')
        //     inputElement.dispatchEvent(event)
        //     console.log('hi')
        // },2000)
    },
    methods:{
        // inputChange(e){
        //     console.log(e)
        // }
        showToast(){
            this.$toast('我是message')
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