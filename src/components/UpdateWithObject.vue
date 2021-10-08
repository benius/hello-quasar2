<template>
  <section class='address'>
    <div class='address__field'>
      <label for='full-name'>Full Name</label>
      <input type='text' id='full-name'
             :value='fullName'
             @input="$emit('update:fullName', $event.target.value)" />
    </div>
    <div class='address__field'>
      <label for='address-line'>Address Line</label>
      <input type='text' id='address-line'
             :value='addressLine'
             @input="$emit('update:addressLine', $event.target.value)" />
    </div>
    <div class='address__field'>
      <label for='city'>City / Town</label>
      <input type='text' id='city'
             :value='city'
             @input="$emit('update:city', $event.target.value)" />
    </div>
    <div class='address__field'>
      <label for='country'>Country</label>
      <input type='text' id='country'
             :value='country'
             @input="$emit('update:country', $event.target.value)" />
    </div>
    <div class='address__field'>
      <label for='postal-code'>Postal Code</label>
      <input type='text' id='postal-code'
             :value='postalCode'
             @input="$emit('update:postalCode', $event.target.value)" />
    </div>
    <div class='address__field'>
      <label for='is-home-address'>Is home address?</label>
      <input type='checkbox' id='is-home-address'
             :value='homeAddress'
             @change="$emit('update:homeAddress', $event.target.checked)" />
    </div>
  </section>

</template>

<script lang='ts'>
export default {
  name: 'UpdateWithObject',

  props: {
    fullName: {
      type: String,
      default: ''
    },
    addressLine: {
      type: String,
      default: ''
    },
    city: {
      type: String,
      default: ''
    },
    country: {
      type: String,
      default: ''
    },
    postalCode: {
      type: String,
      default: ''
    },
    homeAddress: {
      type: Boolean,
      default: false
    }
  }


};
</script>

<style scoped lang='scss'>
.address {
  margin: 5px auto;
  padding: 10px;
  max-width: 400px;
  display: flex;
  flex-direction: column;
  align-items: center;

  &__field {
    padding-bottom: 10px;
    width: 200px;
    text-align: left;

    label {
      display: block;
      font-weight: bold;
    }

    input[type="text"] {
      padding: 10px;
      width: 200px;
      border: 1px solid #fff;
      border-radius: 5px;
      outline: 0;
      background: #f0f8ff;
    }

    input[type="checkbox"] {
    }
  }
}
</style>
