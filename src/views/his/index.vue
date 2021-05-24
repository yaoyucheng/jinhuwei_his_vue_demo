<template>
  <div id="his" class="his">
    <div class="his-content">
      <el-header>医院HIS系统</el-header>
      <el-container style="height: 70%; border: 1px solid #eee">
        <el-aside width="20%" style="background-color: rgb(238, 241, 246)">
          <el-menu :default-openeds="['1', '3']">
            <el-card
              v-for="(item, index) in person_info_data"
              class="box-card"
              :key="index"
              @click.native="selectClick(index, item)"
              :class="{ active: selectIndex == index }"
            >
              <div>姓名： {{ item.name }}</div>
              <div>身份证号： {{ item.sfz_id }}</div>
              <div>性别：{{ item.sex == 1 ? "男" : "女" }}</div>
              <div>年龄：{{ item.age }}</div>
            </el-card>
          </el-menu>
        </el-aside>
        <el-container direction="vertical">
          <el-card class="box-card">
            <div slot="header" class="clearfix">
              <span>诊断信息</span>
            </div>
            <el-select
              v-model="formData.disease_type[0]"
              value-key="code"
              placeholder="请选择"
            >
              <el-option
                v-for="item in disease_type_data"
                :key="item.code"
                :label="item.name + '（' + item.code + '）'"
                :value="item"
                :disabled="item.disabled"
              >
              </el-option>
            </el-select>
            <!-- <el-select v-model="formData.disease_type[1]" value-key="code" placeholder="请选择">
                        <el-option v-for="item in disease_type_data" :key="item.code" :label="item.name + '（' + item.code + '）'" :value="item" :disabled="item.disabled">
                        </el-option>
                    </el-select>
                    <el-select v-model="formData.disease_type[2]" value-key="code" placeholder="请选择">
                        <el-option v-for="item in disease_type_data" :key="item.code" :label="item.name + '（' + item.code + '）'" :value="item" :disabled="item.disabled">
                        </el-option>
                    </el-select> -->
          </el-card>
          <el-card class="box-card">
            <div slot="header" class="clearfix">
              <span>药品、诊疗项目信息</span>
            </div>
            <el-select
              v-model="formData.content[0]"
              value-key="code"
              placeholder="请选择"
            >
              <el-option
                v-for="item in drug_data"
                :key="item.code"
                :label="item.name + '（' + item.limit + '）'"
                :value="item"
                :disabled="item.disabled"
              >
              </el-option>
            </el-select>
            <!-- <el-select v-model="formData.content[1]" value-key="code" placeholder="请选择">
                        <el-option v-for="item in drug_data" :key="item.code" :label="item.name + '（' + item.limit + '）'" :value="item" :disabled="item.disabled">
                        </el-option>
                    </el-select>
                    <el-select v-model="formData.content[2]" value-key="code" placeholder="请选择">
                        <el-option v-for="item in drug_data" :key="item.code" :label="item.name + '（' + item.limit + '）'" :value="item" :disabled="item.disabled">
                        </el-option>
                    </el-select> -->
          </el-card>

          <!-- <el-card class="box-card">
            <div slot="header" class="clearfix">
              <span>诊疗项目</span>
            </div>
            <el-select
              v-model="formData.content[1]"
              value-key="code"
              placeholder="请选择"
            >
              <el-option
                v-for="item in item_data"
                :key="item.code"
                :label="item.name + '（' + item.limit + '）'"
                :value="item"
                :disabled="item.disabled"
              >
              </el-option>
            </el-select>
            <el-select v-model="formData.content[4]" value-key="code" placeholder="请选择">
                        <el-option v-for="item in item_data" :key="item.code" :label="item.name + '（' + item.limit + '）'" :value="item" :disabled="item.disabled">
                        </el-option>
                    </el-select>
                    <el-select v-model="formData.content[5]" value-key="code" placeholder="请选择">
                        <el-option v-for="item in item_data" :key="item.code" :label="item.name + '（' + item.limit + '）'" :value="item" :disabled="item.disabled">
                        </el-option>
                    </el-select>
          </el-card> -->
          <el-button type="primary" @click.native.prevent="submit"
            >提交</el-button
          >
        </el-container>
      </el-container>
    </div>
  </div>
</template>

<script>
import { hisMultipleBackInfo } from "@/api/his";
export default {
  name: "his",
  data() {
    const item = {
      date: "2016-05-02",
      name: "王小虎",
      address: "上海市普陀区金沙江路 1518 弄",
    };
    return {
      selectIndex: -1,
      formData: {
        content: [],
        person_info: null,
        disease_type: [],
      },
      person_info_data: [
        {
          name: "患者赵",
          sfz_id: "152624199501170016",
          sex: "2",
          age: "56",
          birthday: "19950117",
        },
        {
          name: "患者钱",
          sfz_id: "897985656233668795",
          sex: "1",
          age: "44",
          birthday: "19950117",
        },
        {
          name: "患者孙",
          sfz_id: "156489354986749335",
          sex: "2",
          age: "25",
          birthday: "19950117",
        },
        {
          name: "患者李",
          sfz_id: "654982354896363646",
          sex: "1",
          age: "5",
          birthday: "19950117",
        },
        {
          name: "患者周",
          sfz_id: "165489336878965664",
          sex: "2",
          age: "56",
          birthday: "19950117",
        },
      ],
      disease_type_data: [
        {
          code: "I10.x00x002",
          name: "高血压",
        },
        {
          code: "I63.901",
          name: "脑干梗死",
        },
        {
          code: "M47.900x021",
          name: "颈椎病",
        },
        {
          code: "E10.900",
          name: "1型糖尿病",
        },
        {
          code: "I25.103",
          name: "冠状动脉粥样硬化性心脏病",
        },
        {
          code: "I48.x00x022",
          name: "心房颤动[心房纤颤]",
        },
        {
          code: "I49.900",
          name: "心律失常",
        },
        {
          code: "I50.904",
          name: "心功能Ⅲ级",
        },
        {
          code: "J06.900",
          name: "急性上呼吸道感染",
        },
        {
          code: "R51.x00",
          name: "头痛",
        },
      ],
      drug_data: [
        {
          type: "0",
          type_two: "0",
          number: "XA10ADM080B002010107103",
          code: "XA10ADM080B002010107103",
          name: "门冬胰岛素30",
          limit:
            "E10-E11   限1型糖尿病患者；限其他短效胰岛素或口服药难以控制的2型糖尿病患者",
          sex: "",
          age: "",
          disease: ["E10.900"],
        },
        {
          type: "0",
          type_two: "0",
          number: "XC02CXY168B002010200239",
          code: "XC02CXY168B002010200239",
          name: "银杏叶提取物",
          limit:
            "I63.901    限缺血性心脑血管疾病急性期住院患者；限耳部血流及神经障碍患者。支付不超过14天",
          sex: "",
          age: "",
          disease: ["I63.901"],
        },
        {
          type: "0",
          type_two: "0",
          number: "ZA10DAA0094010103357",
          code: "ZA10DAA0094010103357",
          name: "安神补脑片",
          limit: "仅限参保人员门诊使用和定点药店购药时医保基金方予以支付",
          sex: "",
          age: "",
          disease: ['11111111111'],
        },
        {
          type: "0",
          type_two: "0",
          number: "XJ01DFA194B001030104141",
          code: "XJ01DFA194B001030104141",
          name: "氨曲南",
          limit: "限有明确药敏试验证据或重症感染的患者",
          sex: "",
          age: "",
          disease: ['11111111111'],
        },
        {
          type: "0",
          type_two: "0",
          number: "ZA12CAD0073010102729",
          code: "ZA12CAD0073010102729",
          name: "丹参注射液",
          limit:
            "I63.901、I25.103、I48.x00x022、I49.900、I50.904 有明确的缺血性心脑血管疾病急性发作证据的患者",
          sex: "",
          age: "",
          disease: ["I63.901", "I25.103", "I48.x00x022", "I49.900", "I50.904"],
        },
        {
          type: "0",
          type_two: "0",
          number: "ZA12BAX0110010101641",
          code: "ZA12BAX0110010101641",
          name: "香丹注射液",
          limit: "并有中风昏迷、脑外伤昏迷或酒精中毒昏迷抢救的患者",
          sex: "",
          age: "",
          disease: ['11111111111'],
        },
        {
          type: "0",
          type_two: "0",
          number: "ZA07AAX0718030301697",
          code: "ZA07AAX0718030301697",
          name: "醒脑静注射液",
          limit: "I63.901   并有中风昏迷、脑外伤昏迷或酒精中毒昏迷抢救的患者",
          sex: "",
          age: "",
          disease: ["I63.901"],
        },
        {
          type: "0",
          type_two: "0",
          number: "ZA12CAD0087020103962",
          code: "ZA12CAD0087020103962",
          name: "丹红注射液",
          limit:
            "I63.901 并有明确的缺血性心脑血管疾病急性发作证据的重症抢救患者",
          sex: "",
          age: "",
          disease: ["I63.901"],
        },
        {
          type: "0",
          type_two: "0",
          number: "XV02DXF108B014010104287",
          code: "XV02DXF108B014010104287",
          name: "辅酶A",
          limit: "限急救、抢救",
          sex: "",
          age: "",
          disease: ['11111111111'],
        },
        {
          type: "0",
          type_two: "0",
          number: "ZA04CAT0019010100705",
          code: "ZA04CAT0019010100705",
          name: "痰热清注射液",
          limit: "限急救、抢救",
          sex: "",
          age: "",
          disease: ['11111111111'],
        },
        {
          type: "0",
          type_two: "1",
          number: "EDCTA00200",
          code: "EDCTA00200",
          name: "经腹部妇科彩色多普勒超声检查",
          limit: "该诊疗项目限女性",
          sex: "2",
          age: "",
          disease: [],
        },
        {
          type: "0",
          type_two: "1",
          number: "HUE5340400",
          code: "HUE5340400",
          name: "人工流产钳刮术",
          limit:
            "双子宫或子宫纵隔加收不超过100元;当前诊断不能做该诊疗项目;该诊疗项目限女性",
          sex: "2",
          age: "",
          disease: [],
        },
        {
          type: "0",
          type_two: "1",
          number: "ABCA000101",
          code: "ABCA000101",
          name: "静脉输液(六岁及以下)",
          limit: "该诊疗项目限六岁及以下",
          sex: "",
          age: "6",
          disease: [],
        },
      ],
    };
  },
  methods: {
    selectClick(index, item) {
      this.selectIndex = index;
      this.formData.person_info = item;
    },
    submit() {
      if (this.formData.person_info == null) {
        this.$alert("请选择患者", "提醒", {
          confirmButtonText: "确定",
        });
        return;
      }

      if (this.formData.disease_type.length === 0) {
        this.$alert("请选择诊断信息", "提醒", {
          confirmButtonText: "确定",
        });
        return;
      }
      if (this.formData.content.length === 0) {
        this.$alert("请选择药品、诊疗项目信息", "提醒", {
          confirmButtonText: "确定",
        });
        return;
      }

      var title = "";

      // 限制性别
      console.log(this.formData);

      if (
        this.formData.content[0].sex !== "" &&
        this.formData.person_info.sex != this.formData.content[0].sex
      ) {
        title += "性别限制：" + this.formData.content[0].limit;
      }

      //  限制年龄
      if (
        this.formData.content[0].age !== "" &&
        Number(this.formData.person_info.age) >
          Number(this.formData.content[0].age)
      ) {
        title += "年龄限制：" + this.formData.content[0].limit;
      }

      //  限制病种
      var showflag = true;

      if (this.formData.content[0].disease.length == 0) {
        showflag = false;
      } else {
        this.formData.content[0].disease.forEach((item, index) => {
          if (item == this.formData.disease_type[0].code) {
            showflag = false;
          }
        });
      }

      if (showflag) {
        title += "限制条件：" + this.formData.content[0].limit;
      }

      //  无限制
      if (title.length == 0) {
        this.$alert("无限制", "提醒", {
          confirmButtonText: "确定",
        });
      } else {
        this.$alert(title, "限制条件", {
          confirmButtonText: "确定",
        });
      }
    },
    open(title) {},
  },
};
</script>

<style>
.el-header {
  background-color: #b3c0d1;
  color: #333;
  line-height: 60px;
}

.el-aside {
  color: #333;
}

.text {
  font-size: 14px;
}

.item {
  margin-bottom: 18px;
}

.clearfix:before,
.clearfix:after {
  display: table;
  content: "";
}

.clearfix:after {
  clear: both;
}

.box-card {
  height: 200px;
  padding: 20ps;
}

.active {
  background-color: #ffffff !important;

  border: 5px solid #409eff;
}
</style>
