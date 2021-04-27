<template>
  <div class="container-fluid">
    <div class="container">
      <div class="formBox">
        <form @submit.prevent="add">
            <div class="row">
              <div class="col-sm-12">
                <h1>{{title}} Banner</h1>
              </div>
            </div>

            <div class="row">
              <div class="col-sm-12">
                <div class="inputBox" :class="{'focus': isTitle === true}">
                  <div class="inputText">Banner Title</div>
                  <input type="text" name="" class="input" @focus="bannerTitle" v-model="inputTitle">
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
                <div class="inputBox">
                  <select class="form-select form-select-lg mb-3 col-sm-12" aria-label=".form-select-lg example" v-model="selected">
                    <option disabled value="">Open this status menu</option>
                    <option>Active</option>
                    <option>Inactive</option>
                  </select>
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
      isTitle: false,
      isLink: false,
      isStatus: false,
      inputTitle: '',
      inputLink: '',
      selected: ''
    }
  },
  props: ['banner', 'title'],
  methods: {
    bannerTitle () {
      if (this.isTitle) {
        this.isTitle = false
      } else {
        this.isTitle = true
      }
    },
    link () {
      if (this.isLink) {
        this.isLink = false
      } else {
        this.isLink = true
      }
    },
    submit () {
      const dataBanner = {
        title: this.inputTitle,
        image_url: this.inputLink,
        status: this.selected
      }
      this.$emit('submit', dataBanner)
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
  margin-top: 60px;
  padding: 10px;
}
.formBox  h1{
  margin: 0;
  padding: 0;
  text-align: center;
  margin-bottom: 50px;
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
