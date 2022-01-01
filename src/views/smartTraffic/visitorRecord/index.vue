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
        { label: "访客", prop: "visitor" },
        { label: "邀请人", prop: "inviter" },
        { label: "拜访时间", prop: "visitTime" },
      ],
      columns: [
        { label: "访客姓名", prop: "visitorName" },
        { label: "手机号", prop: "iphone" },
        { label: "邀请人姓名", prop: "inviterName" },
        { label: "到访区域", prop: "visiteArea" },
        { label: "预计拜访时间", prop: "planTime" },
        { label: "到访时间", prop: "realityTime" },
        { label: "状态", prop: "status" },
        { label: "邀约时间", prop: "inviterTime" },
        { label: "创建时间", prop: "createdTime" },
        { label: "更新时间", prop: "updateTime" },
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
