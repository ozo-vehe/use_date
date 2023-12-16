import { ref, computed } from "vue";


const useDate = () => {
  const date = ref(new Date());


  const addDay = () => {
    // console.log(date.value)
    const newDate = new Date(date.value);
    newDate.setDate(newDate.getDate() + 1);
    console.log(newDate)
    date.value = newDate;
    return newDate;
  };

  const addMonth = (numberOfMonths) => {
    // Implement add month functionality here
    // Note: If the month after adding is greater than 11, the date returned should be a new year
    const newDate = new Date(date.value);
    newDate.setMonth(newDate.getMonth() + numberOfMonths);
    date.value = newDate;
  };

  return { date, addDay, addMonth };
};

export default useDate;
