<script setup>
import useDate from './composable/useDate';

    const { date, getDay, getMonth, addDay, addMonth } = useDate();
</script>

<template>
  <div>
    <p>Day: {{ date.getDay() }}</p>
    <p>Month: {{ date.getMonth() }}</p>
    <button @click="addDay">Add Day</button>
    <button @click="addMonth(1)">Add Month</button>
  </div>
</template>
