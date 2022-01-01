<template>
  <div class="add-park-info">
    <el-steps :active="stepActive" align-center>
      <el-step title="停车场信息" description=""></el-step>
      <el-step title="停车引导" description=""></el-step>
    </el-steps>
    <el-divider></el-divider>
    <custom-form
      :form="form"
      :isCheck="isCheck"
      :formList="formList"
      :isCondition="false"
      :showOperateBtns="false"
    ></custom-form>
    <div class="operation-btns" v-if="!isCheck">
      <el-button @click="pre">上一步</el-button>
      <el-button type="primary" @click="save">保存</el-button>
    </div>
  </div>
</template>

<script>
export default {
  name: "addParkInfo",
  data() {
    return {
      stepActive: 2,
      isCheck: true,
      form: {
        houses: "",
        parkName: "",
        parkAcreage: "",
        stallAll: "",
        selfCar: "",
        mounthCardCar: "",
        tempCar: "",
        otherCar: "",
        parkAccount: "",
        tableData: [{}],
        inTableData: [{}],
        outTableData: [{}],
      },
      formList: [
        { label: "基本信息", type: "title", span: 24 },
        { label: "当前楼盘", type: "text", prop: "houses", span: 24 },
        { label: "停车场名称", prop: "parkName", span: 12 },
        { label: "停车场面积", prop: "parkAcreage", span: 12 },
        { label: "车位信息", type: "title", span: 24 },
        { label: "车位总数", prop: "stallAll", span: 24 },
        { label: "自用车位数", prop: "selfCar", span: 12 },
        { label: "月卡车位数", prop: "mounthCardCar", span: 12 },
        { label: "临时车位数", type: "tempCar", span: 12 },
        { label: "其他车位数", prop: "otherCar", span: 12 },
        { label: "车位区域", type: "title", span: 24 },
        { label: "车位区域数量", prop: "parkAccount", span: 24 },
        {
          label: "",
          prop: "tableData",
          span: 24,
          type: "table",
          btnText: "添加车位区域",
          btnMethod: (table) => {
            let obj = new Object();
            table.push(obj);
          },
          columns: [
            {
              prop: "areaName",
              label: "区域名称",
              props: { minWidth: "200" },
              type: "edit",
            },
            {
              label: "操作",
              prop: "operate",
              render: (scope, item) => {
                return (
                  <el-button
                    type="text"
                    onClick={() => {
                      this.form.tableData.splice(scope.$index, 1);
                    }}
                  >
                    删除
                  </el-button>
                );
              },
              props: {
                width: "100",
              },
            },
          ],
        },
        { label: "入口信息", type: "title", prop: "", span: 24 },
        {
          label: "",
          prop: "inTableData",
          span: 24,
          type: "table",
          btnText: "添加入口",
          btnMethod: (table) => {
            let obj = new Object();
            table.push(obj);
          },
          columns: [
            {
              prop: "areaName",
              label: "入口名称",
              props: { minWidth: "200" },
              type: "edit",
            },
            {
              label: "操作",
              prop: "operate",
              render: (scope, item) => {
                return (
                  <el-button
                    type="text"
                    onClick={() => {
                      this.form.inTableData.splice(scope.$index, 1);
                    }}
                  >
                    删除
                  </el-button>
                );
              },
              props: {
                width: "100",
              },
            },
          ],
        },
        { label: "出口信息", type: "title", prop: "", span: 24 },
        {
          label: "",
          prop: "outTableData",
          span: 24,
          type: "table",
          btnText: "添加出口",
          btnMethod: (table) => {
            let obj = new Object();
            table.push(obj);
          },
          columns: [
            {
              prop: "areaName",
              label: "出口名称",
              props: { minWidth: "200" },
              type: "edit",
            },
            {
              label: "操作",
              prop: "operate",
              render: (scope, item) => {
                return (
                  <el-button
                    type="text"
                    onClick={() => {
                      this.form.outTableData.splice(scope.$index, 1);
                    }}
                  >
                    删除
                  </el-button>
                );
              },
              props: {
                width: "100",
              },
            },
          ],
        },
      ],
    };
  },
  computed: {
    pageType() {
      return this.$route.query.pageType;
    },
  },
  mounted() {},
  methods: {
    save() {
      this.$router.go(-1);
    },
    pre() {
      this.stepActive--;
    },
  },
};
</script>

<style lang="less" scoped>
.add-park-info {
  display: flex;
  flex-direction: column;

  .el-steps {
    margin-top: 20px;
  }

  .operation-btns {
    display: flex;
    height: 35px;
    justify-content: center;
    margin-top: 22px;
  }
}
</style>