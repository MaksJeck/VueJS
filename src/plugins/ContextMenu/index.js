export default {
    install(Vue){
        if(this.installed) {
            return
        }
        this.installed = true
        Vue.prototype.$context = {
            EventBus: new Vue(),
            show(items){
                this.EventBus.$emit('show', items)
                console.log('show')
            },
            hide(){
                this.EventBus.$emit('hide')
                console.log('hide')
            }
        }
    }
}