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
import addResident from "./addResident";
export default {
  name: "ownerInfo",
  data() {
    return {
      operatebarBtns: [
        {
          label: "新增住户",
          method: () => {
            this.$dialog.openDialog({
              width: "850px",
              title: "新增住户",
              dialogContent: addResident,
            });
          },
        },
        {
          label: "导入住户",
          method: () => {
            console.log("导入住户");
          },
        },
      ],
      form: { louDong: "", floor: "", house: "", residentType: "", iphone: "" },
      formList: [
        { label: "楼栋", prop: "louDong" },
        { label: "楼层", prop: "floor" },
        { label: "房屋", prop: "house" },
        { label: "住户类型", prop: "residentType" },
        { label: "姓名/手机号", prop: "iphone" },
      ],
      columns: [
        { label: "姓名", prop: "residentName" },
        { label: "手机号", prop: "iphone" },
        { label: "住户类型", prop: "residentType" },
        { label: "证件类型", prop: "crdType" },
        { label: "证件号码", prop: "crdCode" },
        { label: "楼栋", prop: "louDong" },
        { label: "楼层", prop: "floor" },
        { label: "房屋号", prop: "houseId" },
        { label: "创建人", prop: "created" },
        { label: "创建时间", prop: "createdTime" },
        { label: "更新时间", prop: "updateTime" },
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
                <el-button type="text" onClick={this.editor.bind(this, row)}>
                  编辑
                </el-button>
                <el-popover placement={"top"} width={"160"} title="提示">
                  <p>确定删除吗？</p>
                  <div style="text-align: right; margin: 0">
                    <el-button
                      size="mini"
                      type="text"
                      onClick={() => {
                        document.body.click();
                      }}
                    >
                      取消
                    </el-button>
                    <el-button
                      type="primary"
                      size="mini"
                      onClick={this.delRow.bind(this, row)}
                    >
                      确定
                    </el-button>
                  </div>
                  <el-button slot="reference" type="text">
                    删除
                  </el-button>
                </el-popover>
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
        title: "查看住户",
        props: { row, operateType: "isCheck" },
        dialogContent: addProject,
      });
    },
    editor(row) {
      this.$dialog.openDialog({
        width: "850px",
        title: "编辑住户",
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
