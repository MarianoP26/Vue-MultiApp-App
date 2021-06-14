<template>
  <div class="title d-flex justify-content-center mt-5">
      <table border="1">
          <tr>
              <td colspan="3"><input type="text" id="result" :value="value"/></td>
              <td><input type="button" value="c" @click="clearCalculator"/></td>
          </tr>
          <tr>
              <td><input type="button" value="1" @click="display('1')"/></td>
              <td><input type="button" value="2" @click="display('2')"/></td>
              <td><input type="button" value="3" @click="display('3')"/></td>
              <td><input type="button" value="/" @click="display('/')"/></td>
          </tr>
          <tr>
              <td><input type="button" value="4" @click="display('4')"/></td>
              <td><input type="button" value="5" @click="display('5')"/></td>
              <td><input type="button" value="6" @click="display('6')"/></td>
              <td><input type="button" value="-" @click="display('-')"/></td>
          </tr>
          <tr>
              <td><input type="button" value="7" @click="display('7')"/></td>
              <td><input type="button" value="8" @click="display('8')"/></td>
              <td><input type="button" value="9" @click="display('9')"/></td>
              <td><input type="button" value="+" @click="display('+')"/></td>
          </tr>
          <tr>
              <td><input type="button" value="." @click="display('.')"/></td>
              <td><input type="button" value="0" @click="display('0')"/></td>
              <td><input type="button" value="=" @click="solve"/></td>
              <td><input type="button" value="*" @click="display('*')"/></td>
          </tr>

      </table>
  </div>
  
</template>

<script>
import { ref } from 'vue'

export default {
    setup(){
        const value = ref('');
        

        function clearCalculator(){
            value.value = '';
        }
        function display(val){
            value.value += val;
        }
        function solve(){
            value.value = eval(value.value);
        }
       
       return {value, clearCalculator, display, solve}
    }
}
</script>

<style>

</style>