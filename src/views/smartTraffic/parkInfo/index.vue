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
import addPark from "./addPark";
export default {
  name: "ownerInfo",
  data() {
    return {
      operatebarBtns: [
        {
          label: "新增停车场",
          method: () => {
            this.$router.push("addParkInfo");
          },
        },
        {
          label: "导入停车场",
          method: () => {
            console.log("导入停车场");
          },
        },
      ],
      form: { keyWord: "" },
      formList: [{ label: "搜索关键字", prop: "keyWord" }],
      columns: [
        { label: "停车场名称", prop: "parkName" },
        { label: "地址", prop: "addr" },
        { label: "入口", prop: "entrance" },
        { label: "出口", prop: "exit" },
        { label: "停车引导", prop: "parkGuide" },
        { label: "车位总数", prop: "parkAccount" },
        { label: "自用车位总数", prop: "selfParkAccount" },
        { label: "月卡车位数", prop: "mounthCard" },
        { label: "临时车位数", prop: "tempParkAccount" },
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
      this.$router.
        push({
          path: "detailParkInfo",
          query: {
            pageType: "check",
          },
        });
    },
    editor(row) {
      this.$router.
        push({
          path: "addParkInfo",
          query: {
            pageType: "edit",
          },
        });
    },
    delRow(row) {
      document.body.click();
    },
  },
};
</script>
