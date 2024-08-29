<template>
  <div ref="chart" style="width: 100%; height: 400px" />
</template>

<script setup>
import * as echarts from "echarts";
import { onMounted, ref } from "vue";

const chart = ref(); // ​定义一个响应式的值，用于传递图表

const init = () => {
  const myChart = echarts.init(chart.value);

  // 此处粘贴图表代码
  const option = {
    tooltip: {
      trigger: "axis"
    },
    xAxis: {
      type: "category",
      boundaryGap: false
    },
    yAxis: {
      type: "value",
      boundaryGap: [0, "30%"],
      axisLabel: {
        formatter: "{value} 个"
      }
    },
    // visualMap: {
    //   type: 'piecewise',
    //   show: true,
    //   dimension: 0,
    //   seriesIndex: 0,
    //   pieces: [
    //     {
    //       gt: 0,
    //       lt: 29,
    //       color: 'rgba(0, 0, 180, 0.4)'
    //     },
    //   ]
    // },
    series: [
      {
        type: "line",
        smooth: 0.6,
        symbol: "none",
        lineStyle: {
          color: "#5470C6",
          width: 2
        },
        markLine: {
          symbol: ["none", "none"],
          label: { show: false }
          //   data: [{ xAxis: 1 }, { xAxis: 3 }, { xAxis: 5 }, { xAxis: 7 }]
        },
        areaStyle: {},
        tooltip: {
          valueFormatter: function (value) {
            return value + " 个";
          }
        },
        data: getRecent30DaysDates().map(item => {
          return [item, getRandomNumber()];
        })
      }
    ]
  };

  myChart.setOption(option);
};
// 获取最近一个月
const getRecent30DaysDates = () => {
  let dates = [];
  // 获取当前时间
  const { year, month, day } = getCurrentDate();
  const currentFirstDay = new Date(year, month, day);
  for (let i = 0; i < 30; i++) {
    const dateTemp = new Date(currentFirstDay - i * 60 * 60 * 24 * 1000);
    dates = [...dates, `${dateTemp.getMonth()}-${dateTemp.getDate()}`];
  }
  return dates.reverse();
};

// 获取当前日期
const getCurrentDate = () => {
  const currentDate = new Date();
  const year = currentDate.getFullYear();
  const month = (currentDate.getMonth() + 1).toString().padStart(2, "0");
  const day = currentDate.getDate().toString().padStart(2, "0");
  const hours = currentDate.getHours().toString().padStart(2, "0");
  const minutes = currentDate.getMinutes().toString().padStart(2, "0");
  const seconds = currentDate.getSeconds().toString().padStart(2, "0");
  return {
    year,
    month,
    day
  };
};
const getRandomNumber = () => {
  return Math.floor(Math.random() * 101);
};
onMounted(() => {
  // 调用函数 处理图表将其渲染到页面
  init();
});
</script>
