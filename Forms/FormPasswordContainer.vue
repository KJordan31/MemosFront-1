<template>
  <div class="generalcontainer">
      <div class="listname settings movetoleft">
          <span v-if="value && (value.length<(maxlength/2))">({{value.length}}/{{max.length}})</span>
      </div>
      <div class="generalcontainer nomargin">
          
          <input type="visibility" :class="{'u-full-width' : onlyunder, 'u-full-width onlyunder': onlyunder}" style="padding-right: 35px;" :maxlength="maxlength" :placeholder="placeholder" v-bind:value="value" v-on:input="$emit('input', $event.target.value)">
          <a @click="showPassword()" style="position: absolute; right: 5px; top: 5px;" class="notunderlined" v-if="visibility == 'password'">
              <icon-base width="22" height="22" iconColor="rgba(0,0,0,0.70)" icon-name="show password">
                 <icon-eye-off/>
              </icon-base>
          </a>

          <a @click="hidePassword()" style="position: absolute; right: 5px; top: 5px;" class="notunderlined" v-if="visibility == 'text'">
              <icon-base width="22" height="22" iconColor="rgba(0,0,0,0.70)" icon-name="hide password">
                 <icon-eye-off/>
              </icon-base>
          </a>
      </div>
  </div>
</template>
 
<script> 
export default {
data(){
    return{
        visibility: 'password'
    }
},
props: {
    placerholder: {type:   String, default: ''},
    value: '',
    maxlength: {type: Number, default: 50},
    onlyunder: {type: Boolean, default: false}
},
methods:{
    showPassword(){
        this.visibility = 'text';
    },
    hidePassword(){
        this.visibility = 'password';
    }
}
}
</script>

<style>

</style>