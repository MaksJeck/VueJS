<template>
  <v-container>
    <v-row>
      <v-col :cols="2">#</v-col>
      <v-col :cols="5">Date</v-col>
      <v-col :cols="3">Category</v-col>
      <v-col :cols="2">Value</v-col>
    </v-row>
    <v-row v-for="item in items" :key="item.id">
      <v-col :cols="2">{{item.id}}</v-col>
      <v-col :cols="5">{{item.date}}</v-col>
      <v-col :cols="3">{{item.category}}</v-col>
      <v-col :cols="2">{{item.value}}</v-col>
    </v-row>
  </v-container>



 <!-- <span @click="onShowContextMenu($event, item, index)">...</span> -->
   
</template>

<script>

// import EditProduct from './EditProduct.vue';
import {mapActions} from 'vuex';

export default {
  name: "PaymentsDisplay",
  props: {
      items: {
          type: Array,
          default: () => [],
      }
  },
  // components: {
  //   appEditProduct: EditProduct,
  // },
  data() {
    return {

    }
  },
  methods: {
    ...mapActions([
      'delete_from_item',
      'edit_from_item'
    ]),
    editItem(){
      // console.log(index, item)
     this.edit_from_item();
     
    },
    removeItem() {     
     this.delete_from_item(); 
    },
    onShowContextMenu(event, ){
      const items = [
        {
          text: "Edit",
          action: () => {
            this.editItem();
          }
        },
        {
          text: "Delete",
          action: () => {
            this.removeItem();
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

