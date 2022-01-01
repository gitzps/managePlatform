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
import checkWarn from "./checkWarn";
export default {
  name: "highTossAct",
  data() {
    return {
      operatebarBtns: [],
      form: { addr: "", time: "" },
      formList: [
        { label: "位置", prop: "addr" },
        { label: "时间", prop: "time" },
      ],
      columns: [
        { label: "抓拍照片", prop: "arrestImg" },
        { label: "设备位置", prop: "deviceAddr" },
        { label: "设备名称", prop: "deviceName" },
        { label: "设备ID", prop: "deviceId" },
        { label: "告警时间", prop: "warnTime" },
        {
          label: "操作",
          prop: "operate",
          type: "custom",
          width: "140px",
          columnConfig: {
            props: {
              fixed: "right",
            },
          },
          render: (row) => {
            return (
              <div class="table-operate">
                <el-button type="text" onClick={this.check.bind(this, row)}>
                  查看
                </el-button>
              </div>
            );
          },
        },
      ],
      tableData: [{ residentName: "lisi" }, { residentName: "zhangsan" }],
      pageIndex: 1,
      pageSize: 20,
      total: 100,
    };
  },
  methods: {
    initPage() {},
    check(row) {
      this.$dialog.openDialog({
        width: "850px",
        title: "告警事件",
        props: { row, operateType: "isCheck" },
        dialogContent: checkWarn,
      });
    },
    delRow(row) {
      document.body.click();
    },
  },
};
</script>
