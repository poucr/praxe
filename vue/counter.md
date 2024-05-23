<script>
export default {
  data() {
    return {
      count: 0,
    }
  },
  
  methods: {
    increment() {
      this.count++
    },
    reset() {
  		this.count = 0,
      this.text = ""
		},
    onEnter() {
      if(this.text){
        this.count += parseInt(this.text)
      }
    }
  }
}
</script>

<template>
  <!-- make this button work -->
  <h1>
    {{ count }}
  </h1>
  <button @click="increment">Increment</button><br>
  <button @click="reset">Reset</button><br>
  <input type="text" v-model="text" v-on:keyup.enter="onEnter">
</template>