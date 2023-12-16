import { ref, computed } from 'vue';

const useDate = () => {
  const date = ref(new Date());

  const getDay = computed(() => {
    return date.value.getDay();
  });

  const getMonth = computed(() => {
    return date.value.getMonth() + 1;
  });

  const addDay = () => {
    // Implement add day functionality
    // Note: If the day after adding is greater than the number of days for that month,
    // the date returned should be a new month date
    const newDate = new Date(date.value);
    newDate.setDate(newDate.getDate() + 1);
    date.value = newDate;
  };

  const addMonth = (numberOfMonths) => {
    // Implement add month functionality here
    // Note: If the month after adding is greater than 11, the date returned should be a new year
    const newDate = new Date(date.value);
    newDate.setMonth(newDate.getMonth() + numberOfMonths);
    date.value = newDate;
  };

  return { date, getDay, getMonth, addDay, addMonth };
};

export default useDate;
