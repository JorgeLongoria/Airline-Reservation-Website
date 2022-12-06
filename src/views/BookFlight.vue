<script setup>
import { ref } from 'vue'
</script>

<script>
  export default {
    data() {
      return {
        picked: '',
        departure: '',
        arrival: '',
        adults: '',
        children: ''
      }
    }
  }
</script>

<template>
    <div class="bg-container">
      <img class="background-img" src="https://static.toiimg.com/photo/70739792.cms" >
    </div>

  <div class="book-form">
    <div class="flight-type">
    <div>Flight type: {{ picked }}</div>
    <input type="radio" id="One Way" value="One Way" v-model="picked" />
    <label for="one">One Way</label>

    <input type="radio" id="Round Trip" value="Round Trip" v-model="picked" />
    <label for="two">Round Trip</label>
  </div>

    <span> Departure Airport: {{ departure }}</span>
    <select class="text-black bg-slate-200" v-model="departure">
    <option disabled value="">Please select one</option>
    <option>Denver International Airport (DEN)</option>
    <option>Orlando International Airport (MCO)</option>
    <option>Sky Harbor International Airport (PHX)</option>
    <option>Hartsfield-Jackson Atlanta International Airport (ATL)</option>
    <option>Dallas/Fort Worth International Airport (DFW)</option>
    <option>McCarran International Airport (LAS)</option>
    <option>Seattle-Tacoma International Airport (SEA)</option>
    <option>Los Angeles International Airport (LAX)</option>
    <option>Boston Logan International Airport (BOS)</option>
    <option>Minneapolis-St. Paul International Airport (MSP)</option>
    <option>George Bush Intercontinental Airport (IAH)</option>
    <option>Miami International Airport (MIA)</option>
    <option>Detroit Metro Airport (DTW)</option>
    <option>O’Hare International Airport (ORD)</option>
    <option>San Francisco International Airport (SFO)</option>
    <option>Philadelphia International Airport (PHL)</option>
    <option>LaGuardia Airport (LGA)</option>
    <option>John F. Kennedy International Airport (JFK)</option>
    </select>

    <span> Arrival Airport: {{ arrival }}</span>
    <select class="text-black bg-slate-200" v-model="arrival">
    <option disabled value="">Please select one</option>
    <option>Denver International Airport (DEN)</option>
    <option>Orlando International Airport (MCO)</option>
    <option>Sky Harbor International Airport (PHX)</option>
    <option>Hartsfield-Jackson Atlanta International Airport (ATL)</option>
    <option>Dallas/Fort Worth International Airport (DFW)</option>
    <option>McCarran International Airport (LAS)</option>
    <option>Seattle-Tacoma International Airport (SEA)</option>
    <option>Los Angeles International Airport (LAX)</option>
    <option>Boston Logan International Airport (BOS)</option>
    <option>Minneapolis-St. Paul International Airport (MSP)</option>
    <option>George Bush Intercontinental Airport (IAH)</option>
    <option>Miami International Airport (MIA)</option>
    <option>Detroit Metro Airport (DTW)</option>
    <option>O’Hare International Airport (ORD)</option>
    <option>San Francisco International Airport (SFO)</option>
    <option>Philadelphia International Airport (PHL)</option>
    <option>LaGuardia Airport (LGA)</option>
    <option>John F. Kennedy International Airport (JFK)</option>
    </select>

    <div>Adults (18+): {{ adults }}</div>
    <select class="text-black bg-slate-200" v-model="adults">
    <option disabled value="">Please select one</option>
    <option>1</option>
    <option>2</option>
    <option>3</option>
    <option>4</option>
    <option>5</option>
    </select>

    <div>Children (0 - 17): {{ children }}</div>
    <select class="text-black bg-slate-200" v-model="children">
    <option disabled value="">Please select one</option>
    <option>1</option>
    <option>2</option>
    <option>3</option>
    <option>4</option>
    <option>5</option>
    </select>

    <button type="submit" class="search-button">Book Flight</button>
  </div>

</template>

<style scoped lang="postcss">
  .bg-container {
    background-image: url("https://static.toiimg.com/photo/70739792.cms");
    position: relative;
  }

  .book-form {
    position: absolute;
    top: 25%;
    left: 60%;
  }

   .book-form {
    @apply text-white mx-auto flex max-w-md flex-col gap-2 rounded-lg bg-yellow-900 p-8 shadow-lg;
  }

  .flight-type {
    @apply flex justify-between gap-3;
  }

  .search-button {
    @apply rounded-md px-8 py-4 text-xl ring-1 bg-green-400;
  }
</style>


