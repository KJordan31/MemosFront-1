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
  const request = await fetch("https://localhost:5001/api/datos");
  const response = await request.json();
  console.log(response);

  labels.value = response.flatMap((x) => x.Tipo);
  dataValues.value = response.flatMap((x) => x.Total);
});

const data = computed(() => ({
  labels: labels.value,

  datasets: [
    {
      data: dataValues.value,
      backgroundColor: ["#FF7133", 
      "#FFC433", "#FFA533", 
      "#FF5B33", "#FF3399", 
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
