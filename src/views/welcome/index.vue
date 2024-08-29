<template>
  <div class="page_box">
    <!-- 卡片 -->
    <div class="card_box">
      <el-card
        v-for="cardItem in cardConfig.list"
        :key="cardItem.title"
        class="card_item"
      >
        <div class="card_item--top">
          <span class="title">{{ cardItem.title }}</span>
          <span class="tag_date"><el-tag type="success">今日</el-tag></span>
        </div>
        <div class="content">
          <span class="nums">
            {{ cardItem.nums }}
          </span>
          {{ cardItem.unit }}
        </div>
      </el-card>
    </div>
    <!-- 统计图 -->
    <div class="plr--10 mb--20">
      <el-card>
        <template #header> 人员所属机构 </template>
        <pieEcharts />
      </el-card>
    </div>
    <div class="plr--10 mb--20">
      <el-card>
        <template #header> 预警条数 </template>
        <foldColumnMixingEcharts />
      </el-card>
    </div>
    <div class="plr--10">
      <el-card>
        <template #header> 投标统计 </template>
        <lineChartEcharts />
      </el-card>
    </div>
  </div>
</template>
  
  <script setup name="Index">
import { reactive } from "vue";
import pieEcharts from "@/components/pieEcharts/index.vue";
import foldColumnMixingEcharts from "@/components/foldColumnMixingEcharts/index.vue";
import lineChartEcharts from "@/components/lineChartEcharts/index.vue";

const cardConfig = reactive({
  list: [
    { title: "消息中心", nums: "1", unit: "条" },
    { title: "预警信息", nums: "2", unit: "条" },
    { title: "投标数量", nums: "3", unit: "条" },
    { title: "模型修改", nums: "4", unit: "条" },
    { title: "人员信息", nums: "1", unit: "条" },
    { title: "人员审核", nums: "2", unit: "条" },
    { title: "人员确认", nums: "3", unit: "条" },
    { title: "违纪条数", nums: "4", unit: "条" }
  ]
});
  </script>
  
  <style scoped lang="scss">
.page_box {
  .card_box {
    display: flex;
    flex-wrap: wrap;
    .card_item {
      padding-top: 5px;
      width: calc(25% - 20px);
      margin: 0 10px 20px;
      box-sizing: border-box;
      .card_item--top {
        display: flex;
        justify-content: space-between;
        .title {
          font-size: 14px;
        }
      }

      .content {
        margin: 15px 0;
        padding: 0 20px;
        .nums {
          font-size: 30px;
          font-weight: 600;
          font-family: PingFangSC-Semibold, PingFang SC;
          color: #333;
        }
      }
    }
  }
}
.plr--10 {
  padding: 0px 10px;
}
.mb--20 {
  margin-bottom: 20px;
}
</style>
  