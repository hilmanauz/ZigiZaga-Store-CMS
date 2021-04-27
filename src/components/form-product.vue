<template>
  <div class="container-fluid">
    <div class="container">
      <div class="formBox">
        <form @submit.prevent="add">
            <div class="row">
              <div class="col-sm-12">
                <h1>{{title}} Product</h1>
              </div>
            </div>

            <div class="row">
              <div class="col-sm-12">
                <div class="inputBox" :class="{'focus': isProduct === true}">
                  <div class="inputText">Product Name</div>
                  <input type="text" name="" class="input" @focus="product" v-model="inputName">
                </div>
              </div>

              <div class="col-sm-12">
                <div class="inputBox" :class="{'focus': isLink === true}">
                  <div class="inputText">Link Image</div>
                  <input type="text" name="" class="input" @focus="link" v-model="inputLink">
                </div>
              </div>
            </div>

            <div class="row">
              <div class="col-sm-6">
                <div class="inputBox" :class="{'focus': isPrice === true}">
                  <div class="inputText">Price</div>
                  <input type="number" min="0" name="" class="input" @focus="price" v-model="inputPrice">
                </div>
              </div>

              <div class="col-sm-6">
                <div class="inputBox" :class="{'focus': isStock === true}">
                  <div class="inputText">Stock</div>
                  <input type="number" min="0" name="" class="input" @focus="stock" v-model="inputStock">
                </div>
              </div>
            </div>

            <div class="row">
              <div class="col-sm-12">
                <div class="inputBox" :class="{'focus': isDescription === true}">
                  <div class="inputText">Description</div>
                  <textarea class="input" @focus="description" v-model="inputDescription"></textarea>
                </div>
              </div>
            </div>

            <div class="row">
              <div class="col-sm-12">
                <input type="submit" name="" class="button-submit" value="Submit" @click.prevent="submit">
              </div>
            </div>
        </form>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  data () {
    return {
      isProduct: this.isTrue.isProduct,
      isLink: this.isTrue.isLink,
      isPrice: this.isTrue.isPrice,
      isStock: this.isTrue.isStock,
      isDescription: this.isTrue.isDescription,
      inputName: this.productForm.name,
      inputLink: this.productForm.image_url,
      inputPrice: this.productForm.price,
      inputStock: this.productForm.stock,
      inputDescription: this.productForm.description
    }
  },
  props: ['title', 'productForm', 'isTrue'],
  methods: {
    product () {
      if (this.isProduct) {
        this.isProduct = false
      } else {
        this.isProduct = true
      }
    },
    link () {
      if (this.isLink) {
        this.isLink = false
      } else {
        this.isLink = true
      }
    },
    price () {
      if (this.isPrice) {
        this.isPrice = false
      } else {
        this.isPrice = true
      }
    },
    stock () {
      if (this.isStock) {
        this.isStock = false
      } else {
        this.isStock = true
      }
    },
    description () {
      if (this.isDescription) {
        this.isDescription = false
      } else {
        this.isDescription = true
      }
    },
    submit () {
      const dataProduct = {
        name: this.inputName,
        image_url: this.inputLink,
        price: this.inputPrice,
        stock: this.inputStock,
        description: this.inputDescription
      }
      this.$emit('submit', dataProduct)
    }
  }
}
</script>

<style>
body{
  margin: 0;
  padding: 0;
}
.formBox{
  padding: 5px;
}
.formBox  h1{
  margin: 0;
  padding: 0;
  text-align: center;
  margin-bottom: 10px;
  text-transform: uppercase;
  font-size: 48px;
  font-family: "Poppins", Arial, sans-serif;
}
.inputBox{
  position: relative;
  box-sizing: border-box;
  margin-bottom: 50px;
}
.inputBox .inputText{
  position: absolute;
  font-size: 24px;
  line-height: 50px;
  transition: .5s;
  opacity: .5;
}
.inputBox .input{
  position: relative;
  width: 100%;
  height: 50px;
  background: transparent;
  border: none;
  outline: none;
  font-size: 24px;
  border-bottom: 1px solid rgba(0,0,0,.5);
}
.focus .inputText{
  transform: translateY(-30px);
  font-size: 18px;
  opacity: 1;
  color: #00bcd4;
}
textarea{
  height: 100px !important;
}
.button-submit{
  margin-top:10px;
  padding: 13px 0;
  background-color:  #343A40;
  border-radius: 4px;
  font-size: 17px;
  font-weight: bold;
  line-height: 20px;
  color: #fff;
  width: 100%;
}
.button-submit:hover{
  border: 1px solid #000;
  background-color: transparent;
  color: #000;
}
</style>
