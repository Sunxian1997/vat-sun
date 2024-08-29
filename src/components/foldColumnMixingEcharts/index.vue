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
      trigger: "axis",
      axisPointer: {
        type: "cross",
        crossStyle: {
          color: "#999"
        }
      }
    },
    // toolbox: {
    //   feature: {
    //     dataView: { show: true, readOnly: false },
    //     magicType: { show: true, type: ['line', 'bar'] },
    //     restore: { show: true },
    //     saveAsImage: { show: true }
    //   }
    // },
    legend: {
      data: ["黄色预警", "红色预警"]
    },
    xAxis: [
      {
        type: "category",
        data: getRecent30DaysDates(),
        axisPointer: {
          type: "shadow"
        }
      }
    ],
    yAxis: [
      {
        type: "value",
        name: "条数",
        min: 0,
        max: 250,
        interval: 50,
        axisLabel: {
          formatter: "{value} 条"
        }
      },
      {
        type: "value",
        name: "条数",
        min: 0,
        max: 25,
        interval: 5,
        axisLabel: {
          formatter: "{value} 条"
        }
      }
    ],
    series: [
      {
        name: "黄色预警",
        type: "bar",
        tooltip: {
          valueFormatter: function (value) {
            return value + " 条";
          }
        },
        data: getRecent30DaysDates().map(item => {
          return getRandomNumber(100);
        })
      },

      {
        name: "红色预警",
        type: "line",
        yAxisIndex: 1,
        smooth: true,
        tooltip: {
          valueFormatter: function (value) {
            return value + " 条";
          }
        },
        data: getRecent30DaysDates().map(item => {
          return getRandomNumber(11);
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

const getRandomNumber = maxNum => {
  return Math.floor(Math.random() * maxNum + 1);
};

onMounted(() => {
  // 调用函数 处理图表将其渲染到页面
  init();
});
</script>
