<script setup>
import useDate from './composable/useDate';

    const { date, addDay, addMonth } = useDate();
</script>

<template>
  <div>
    <p>Day: {{ date.getDate() }}</p>
    <p>Month: {{ date.getMonth() + 1 }}</p>
    <button @click="addDay">Add Day</button>
    <button @click="addMonth(1)">Add Month</button>
  </div>
</template>
