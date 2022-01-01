<template>
  <custom-page
    :form="form"
    :formList="formList"
    :columns="columns"
    :tableData="tableData"
    :operatebarBtns="operatebarBtns"
    :pageIndex.sync="pageIndex"
    :pageSize.sync="pageSize"
    :total="total"
    @update="initPage"
  ></custom-page>
</template>
<script>
import checkImg from "./checkImg";
export default {
  name: "ownerInfo",
  data() {
    return {
      operatebarBtns: [],
      form: { louDong: "", floor: "", house: "", ownerInfo: "" },
      formList: [
        { label: "停车场", prop: "parkName" },
        { label: "车辆类型", prop: "carType" },
        { label: "车牌号码", prop: "carCode" },
        { label: "时间", prop: "time" },
      ],
      columns: [
        { label: "停车场", prop: "parkName" },
        { label: "车牌号码", prop: "carCode" },
        {
          label: "入场照片",
          prop: "‘inImg",
          type: "custom",
          render: (row) => {
            return (
              <el-button type="text" onClick={this.checkImg.bind(this, row)}>
                点击查看
              </el-button>
            );
          },
        },
        { label: "车辆类型", prop: "carType" },
        { label: "入场时间", prop: "inTime" },
        { label: "停车时长", prop: "parkLength" },
        { label: "停车费", prop: "parkFee" },
        { label: "缴费状态", prop: "feeStatus" },
      ],
      tableData: [{ residentName: "lisi" }, { residentName: "zhangsan" }],
      pageIndex: 1,
      pageSize: 20,
      total: 100,
    };
  },
  methods: {
    initPage() {},
    checkImg(row) {
      this.$dialog.openDialog({
        width: "850px",
        title: "查看照片",
        props: { row, operateType: "isCheck" },
        dialogContent: checkImg,
      });
    },
  },
};
</script>
