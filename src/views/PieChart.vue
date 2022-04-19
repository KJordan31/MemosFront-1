<template>
  <DoughnutChart
    :chart-data="data"
    :options="options"
    css-classes="chart-container"
  />
</template>

<script setup>
import { computed, ref, onMounted } from "vue";
import { DoughnutChart } from "vue-chart-3";
import { Chart, DoughnutController, ArcElement } from "chart.js";

Chart.register(DoughnutController, ArcElement);

const dataValues = ref([10, 40, 20]);

const labels = (["Foo", "Bar", "Baz"]);

onMounted(async () => {
  const request = await fetch("https://localhost:5001/api/seguimiento");
  const response = await request.json();
  console.log(response);

  labels.value = response.flatMap((x) => x.Descripcion);
  dataValues.value = response.flatMap((x) => x.Total);
});

const data = computed(() => ({
  labels: labels.value,

  datasets: [
    {
      data: dataValues.value,
      backgroundColor: ["#41B883", 
      "#00D8FF", "#E46651", 
      "#E46651", "#FF3399", 
      "#FF3380", "#FF3371"],
    },
  ],
}));

const options = ref({
  plugins: {
    title: {
      text: "Doughnut",
    },
  },
});
</script>

<style></style>

