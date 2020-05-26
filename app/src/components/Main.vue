<template>
  <div class="main">
    <h1 class="title">Whatsapp Bomber</h1>
    <input placeholder="Enter Phone Number" ref="inputField" />
    <button class="add" v-on:click="addNumber">Add</button>
    <ul>
      <li v-for="(number, index) in numbers" v-bind:key="index">
        <h4 class="numberDetail">{{ number }}</h4>
        <button class="rm" v-on:click="removeNumber(index)">Delete</button>
      </li>
    </ul>
  </div>
</template>

<script>
export default {
  name: "Main",
  data() {
    return {
      numbers: [],
    };
  },
  methods: {
    addNumber: function() {
      let element = this.$refs.inputField;
      if (element.value.length >= 10) {
        this.numbers.push(element.value);
      }
      element.value = "";
    },
    removeNumber: function(index) {
      this.numbers.splice(index, 1);
    },
  },
};
</script>

<style>
.main {
  padding: 30px;
  width: fit-content;
  border-radius: 10px;
  box-shadow: 0px 2px 10px rgba(128, 128, 128, 0.582);
  margin: auto;
}

.title {
  padding: 30px;
  padding-top: 0;
}

input {
  padding: 20px;
  outline: 0;
  border-radius: 10px;
  border: 4px solid grey;
  font-size: 20px;
  color: #2c3e50;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
}

.add {
  border: 0;
  padding: 20px;
  margin-left: 10px;
  background-color: white;
  color: #2978a0;
  border-radius: 10px;
  font-size: 20px;
  border: 4px solid #2978a0;
  /* box-shadow: 1px 2px 10px rgba(128, 128, 128, 0.582); */
  transition: all 100ms ease-in;
}

ul {
  list-style: none;
}

li {
  display: flex;
  justify-content: space-evenly;
  align-items: center;
}

.numberDetail {
  border: 4px solid #aabd8c;
  padding-left: 20px;
  padding-right: 20px;
  padding-top: 15px;
  padding-bottom: 15px;
  border-radius: 10px;
}

.rm {
  background-color: #d64933;
  color: white;
  height: 50px;
  border: 4px solid #d64933;
  border-radius: 10px;
  font-weight: bolder;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
}

.rm:hover {
  background-color: white;
  color: #d64933;
}

.add:hover {
  color: white;
  background-color: #2978a0;
}

input:focus {
  border: 4px solid #197278ab;
}
</style>
