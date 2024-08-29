<template>
  <div class="weather_page">
    <template v-if="weatherInfoObj">
      <i :class="[`qi-${weatherInfoObj.icon}`]" />
      <span class="weather_text">{{ weatherInfoObj.text }}</span>
      <span class="weather_line">|</span>
      <span class="weather_temp">{{ weatherInfoObj.temp }}°C</span>
    </template>
  </div>
</template>

<script setup>
import { ref, onMounted } from "vue";
import axios from "axios";

// 关于天气信息
const weatherInfoObj = ref({});
// 定位信息
const locationInfoObj = ref({});
const getLocation = () => {
  const localInfo = localStorage.getItem("locationInfo");
  if (!localInfo) {
    axios({
      url: "https://ipapi.co/json/",
      method: "get",
      timeout: 20000
    }).then(res => {
      if (res.status == 200) {
        locationInfoObj.value = res.data;
        // 如果本地没有缓存位置信息，再缓存一下
        localStorage.setItem("locationInfo", JSON.stringify(res.data));
        // 调用天气查询
        getWeather(res.data, locationInfoObj.value.city == res.data.city);
      }
    });
  } else {
    const tempLocalInfo = JSON.parse(localInfo);
    getWeather(tempLocalInfo, locationInfoObj.value.city == tempLocalInfo.city);
  }
};
const getWeather = (v, f) => {
  const weatherInfo = JSON.parse(localStorage.getItem("weatherInfo")) || {};
  const period = new Date().getTime() - new Date(weatherInfo.obsTime).getTime();
  if (f && period <= 1000 * 60 * 60) {
    weatherInfoObj.value = weatherInfo;
  } else {
    axios({
      url: `https://devapi.qweather.com/v7/weather/now?location=${v.longitude},${v.latitude}&key=bbf8a1df4bd5458ca08346058fc9cc88`,
      method: "get"
    }).then(res => {
      if (res.status == 200) {
        weatherInfoObj.value = res.data.now;
        localStorage.setItem("weatherInfo", JSON.stringify(res.data.now));
      }
    });
  }
};
onMounted(() => {
  getLocation();
});
</script>
<style lang="scss" scoped>
@import url("https://cdn.jsdelivr.net/npm/qweather-icons@1.3.0/font/qweather-icons.css");
.weather_page {
  font-family: Source Han Sans CN;
  color: #ffffff;
  font-size: 22px;
  font-weight: 500;
  display: flex;
  align-items: center;
  justify-content: center;
  .weather_text {
    margin-right: 12px;
    margin-left: 12px;
  }
  .weather_line {
    margin-right: 12px;
  }
}
</style>
