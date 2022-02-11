<template>
  <div class="wrapper">
      <div class="item" v-for="(item, index) in items" :key="item.id">
          <span>{{item.id}}</span> - <span>{{item.date}}</span> - <span>{{item.category}}</span> - <span>{{item.value}}</span> - <span @click="onShowContextMenu($event, item, index)">...</span>
          <app-edit-product />
      </div>

 


  </div>
</template>

<script>

import EditProduct from './EditProduct.vue';
import {mapActions} from 'vuex';

export default {
  name: "PaymentsDisplay",
  props: {
      items: {
          type: Array,
          default: () => [],
      }
  },
  components: {
    appEditProduct: EditProduct,
  },
  data() {
    return {

    }
  },
  methods: {
    ...mapActions([
      'delete_from_item',
      'edit_from_item'
    ]),
    editItem(index){
      // console.log(index, item)
     this.edit_from_item(index);
     
    },
    removeItem(index) {     
     this.delete_from_item(index); 
    },
    onShowContextMenu(event, item, index){
      const items = [
        {
          text: "Edit",
          action: () => {
            this.editItem(index);
          }
        },
        {
          text: "Delete",
          action: () => {
            this.removeItem(index);
          }
        },
      ]
      this.$context.show({event, items})
    }
  }
};
</script>

<style >

</style>

