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
export default {
  name: "ownerInfo",
  data() {
    return {
      operatebarBtns: [
        {
          label: "导出记录",
          method: () => {
            console.log("导入业主");
          },
        },
      ],
      form: { louDong: "", floor: "", house: "", ownerInfo: "" },
      formList: [
        { label: "人员类型", prop: "peopleType" },
        { label: "通行类别", prop: "accessType" },
        { label: "位置", prop: "addr" },
        { label: "人员信息", prop: "peopleInfo" },
        { label: "时间", prop: "accessTime" },
      ],
      columns: [
        { label: "姓名", prop: "residentName" },
        { label: "手机号", prop: "iphone" },
        { label: "人员类型", prop: "peopleType" },
        { label: "通行类别", prop: "accessType" },
        { label: "位置", prop: "addr" },
        { label: "通行时间", prop: "accessTime" },
        { label: "通行方式", prop: "accessWay" },
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
        title: "查看业主",
        props: { row, operateType: "isCheck" },
        dialogContent: addProject,
      });
    },
    editor(row) {
      this.$dialog.openDialog({
        width: "850px",
        title: "编辑业主",
        props: { row },
        dialogContent: addProject,
      });
    },
    delRow(row) {
      document.body.click();
    },
  },
};
</script>
