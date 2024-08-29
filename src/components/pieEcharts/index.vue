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
    backgroundColor: "#fff",
    color: ["#EAEA26", "#906BF9", "#FE5656", "#01E17E", "#3DD1F9"],
    grid: {
      left: 500,
      top: 50,
      bottom: 10,
      right: 10,
      containLabel: true
    },
    polar: {},
    angleAxis: {
      interval: 1,
      type: "category",
      data: [
        "计划财务部",
        "増信担保部",
        "创新业务部",
        "风险管理部",
        "普惠风险部"
      ],
      z: 10,
      axisLine: {
        show: false,
        lineStyle: {
          color: "#0B4A6B",
          width: 1,
          type: "solid"
        }
      },
      axisLabel: {
        show: false,
        interval: 0,

        color: "#0B4A6B",
        margin: 8,
        fontSize: 14
      }
    },
    radiusAxis: {
      min: 40,
      max: 120,
      interval: 20,
      axisLine: {
        show: false
      },
      axisLabel: {
        formatter: "{value} %",
        show: false,
        padding: [0, 0, 20, 0],
        color: "#0B3E5E",
        fontSize: 16
      },
      splitLine: {
        lineStyle: {
          color: "#F1F8FF",
          width: 2,
          type: "solid"
        }
      }
    },
    calculable: true,
    series: [
      {
        type: "pie",
        radius: ["17%", "18%"],
        hoverAnimation: false,
        labelLine: {
          normal: {
            show: false,
            length: 30,
            length2: 55
          }
        },
        data: [
          {
            name: "",
            value: 0,
            itemStyle: {
              normal: {
                color: "#B5CCE7"
              }
            },
            tooltip: {
              show: false
            }
          }
        ]
      },
      {
        type: "pie",
        radius: ["90%", "92%"],
        hoverAnimation: false,
        labelLine: {
          normal: {
            show: false,
            length: 30,
            length2: 55
          }
        },
        name: "",
        data: [
          {
            name: "",
            value: 0,
            itemStyle: {
              normal: {
                color: "#F1F8FF"
              }
            },
            tooltip: {
              show: false
            }
          }
        ]
      },
      {
        stack: "a",
        type: "pie",
        radius: ["20%", "80%"],
        roseType: "area",
        zlevel: 10,
        label: {
          normal: {
            show: true,
            formatter: function (param) {
              return (
                "{a|" +
                param.name +
                "}\n\n" +
                "{a|" +
                param.value +
                "人" +
                " | " +
                param.percent +
                "%}"
              );
            },
            textStyle: {
              fontSize: 14
            },
            rich: {
              a: {
                color: "#666666",
                fontSize: "16"
              }
            },
            position: "outside"
          },
          emphasis: {
            show: true
          }
        },
        itemStyle: {
          normal: {
            color: function (params) {
              const colorList = [
                {
                  c1: "#c5223b",
                  c2: "#fa768a"
                },
                {
                  c1: " #de7110",
                  c2: "#fecd70"
                },
                {
                  c1: "#d09f08",
                  c2: "#FFD145"
                },
                {
                  c1: "#238483",
                  c2: "#55C27C"
                },
                {
                  c1: " #45EAFF",
                  c2: "#40ADAC"
                }
              ];
              return new echarts.graphic.LinearGradient(1, 0, 0, 0, [
                {
                  offset: 0,
                  color: colorList[params.dataIndex].c1
                },
                {
                  offset: 1,
                  color: colorList[params.dataIndex].c2
                }
              ]);
            }
          }
        },
        labelLine: {
          normal: {
            show: true,
            length: 10,
            length2: 30,
            color: "#4BCFFC"
          },
          emphasis: {
            show: true
          }
        },
        data: [
          {
            value: 10,
            name: "计划财务部"
          },
          {
            value: 5,
            name: "増信担保部"
          },
          {
            value: 6,
            name: "创新业务部"
          },
          {
            value: 9,
            name: "风险管理部"
          },
          {
            value: 12,
            name: "普惠风险部"
          }
        ]
      }
    ]
  };

  myChart.setOption(option);
};
onMounted(() => {
  // 调用函数 处理图表将其渲染到页面
  init();
});
</script>
