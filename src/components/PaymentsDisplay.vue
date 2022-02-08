<template>
  <div class="wrapper">
      <div class="item" v-for="item in items" :key="item.id">
          <span>{{item.id}}</span> - <span>{{item.date}}</span> - <span>{{item.category}}</span> - <span>{{item.value}}</span> - <span @click="onShowContextMenu(item)">...</span>
      </div>
  </div>
</template>

<script>
export default {
  name: "PaymentsDisplay",
  props: {
      items: {
          type: Array,
          default: ()=>[]
        //   validation: ()=>{
        //   }
      }
  },
  data(){
    return{

    }
  },
  methods: {
    editItem(item){
      console.log(item)
    },
    onShowContextMenu(item){
      const items = [
        {
          text: "Edit",
          action: () => {
            this.editItem(item)
          }
        },
        {
          text: "Delete",
          action: () => {
            console.log(item.id)
          }
        }
      ]
      this.$context.show(items)
    }
  }
};
</script>

<style >

</style>

