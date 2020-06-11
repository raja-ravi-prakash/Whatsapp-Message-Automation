<template>
  <div class="main">
    <div class="main-form card">
      <input
        class="number"
        ref="inputField"
        v-on:keyup="checkEvent"
        placeholder="Enter Phone Number"
      />
      <div class="actions">
        <button class="action add" v-on:click="addNumber">Add</button>
        <button class="action attach">Attach</button>
        <button class="action submit" v-on:click="submit">Submit</button>
      </div>
    </div>
    <div class="list card">
      <h1 v-if="numbers.length == 0">No Items Added</h1>
      <div v-else class="list-item" v-for="(number, index) in numbers" v-bind:key="number">
        <li class="list-number">{{ number }}</li>
        <button class="action rm" v-on:click="removeNumber(index)">Remove</button>
      </div>
    </div>
  </div>
</template>

<script>
import axios from "axios";

export default {
  name: "Main",
  data() {
    return {
      numbers: []
    };
  },
  methods: {
    addNumber: function() {
      let element = this.$refs.inputField;
      let pat = /^(91)[0-9]{10}/g;
      if (pat.test(element.value)) {
        this.numbers.push(element.value);
        element.value = "";
      } else {
        alert("Invalid Format");
      }
    },
    removeNumber: function(index) {
      this.numbers.splice(index, 1);
    },
    checkEvent: function(e) {
      if (e.keyCode === 13) {
        this.addNumber();
      }
    },

    submit: function() {
      if (this.numbers.length == 0) alert("Add Numbers to Continue");
      else {
        axios.post("/submit", { numbers: this.numbers }).catch(err => {
          console.error(err);
        });
      }
    }
  }
};
</script>

<style>
.main {
  display: flex;
  flex-direction: column;
  width: 100vw;
}

.card {
  border-radius: 10px;
  box-shadow: 0px 2px 10px rgba(128, 128, 128, 0.582);
  padding: 30px;
  margin: 20px;
}

.main-form {
  display: flex;
  flex-direction: column;
  align-items: flex-end;
}

.list {
  height: 60vh;
}

.list-item {
  list-style: none;
  display: flex;
  align-items: center;
  justify-content: space-around;
  border-bottom: 3px solid grey;
  margin: 10px;
  padding: 10px;
}

.list-number {
  font-size: 20px;
}

.actions {
  display: flex;
  justify-content: space-evenly;
  width: 100%;
}

.number {
  padding: 15px;
  font-size: 20px;
  margin-bottom: 20px;
  border-radius: 10px;
  width: 95%;
  border: 4px solid grey;
}

.number:focus {
  border: 4px solid #197278ab;
}

.action {
  border: 0;
  padding: 15px;
  background-color: white;
  border-radius: 10px;
  font-size: 18px;
  transition: all 100ms ease-in;
}

.add {
  border: 4px solid #2978a0;
  background-color: white;
  color: #2978a0;
}

.add:hover {
  color: white;
  background-color: #2978a0;
}

.submit {
  border: 4px solid #2e2532;
  background-color: white;
  color: #2e2532;
}

.submit:hover {
  color: white;
  background-color: #2e2532;
}

.attach {
  border: 4px solid #e8c547;
  background-color: white;
  color: #e8c547;
}

.attach:hover {
  color: white;
  background-color: #e8c547;
}

.rm:hover {
  background-color: white;
  color: #fe5f55;
}

.rm {
  border: 4px solid #fe5f55;
  color: white;
  background-color: #fe5f55;
}
</style>
