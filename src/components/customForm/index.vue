<script>
import { isUndefined } from "@/utils";
export default {
  name: "customForm",
  model: {
    prop: "form",
    event: "change",
  },
  props: {
    form: Object,
    showOperateBtns: {
      required: false,
      type: Boolean,
      default: () => {
        return true;
      },
    },
    showBtns: {
      required: false,
      type: Boolean,
      default: () => {
        return true;
      },
    },
    inline: {
      required: false,
      type: Boolean,
      default: () => {
        return true;
      },
    },
    formList: Array,
    rules: Object,
    labelWidth: {
      required: false,
      type: String,
      default: () => {
        return "80px";
      },
    },
    formConfig: Object,
    columns: Number,
    formItemWidth: {
      required: false,
      type: Number,
      default: () => {
        return 300;
      },
    },
    isCondition: {
      required: false,
      type: Boolean,
      default: () => {
        return true;
      },
    },
    isCheck: {
      required: false,
      type: Boolean,
      default: () => {
        return false;
      },
    },
  },
  data() {
    return {
      showExpand: false,
      expand: true,
    };
  },
  mounted() {
    let that = this;
    if (that.isCondition) {
      let elementResizeDetectorMaker = require("element-resize-detector");
      let erd = elementResizeDetectorMaker();
      erd.listenTo(this.$el, function (element) {
        let width = element.offsetWidth;
        let height = element.offsetHeight;
        that.$nextTick(function () {
          if (height > 50) {
            that.showExpand = true;
          }
        });
      });
    } else {
      that.expand = false;
    }
  },
  methods: {
    reset() {
      this.$refs["form"].resetFields();
    },
    search() {
      this.$emit("update");
    },
    generateBtns() {
      return (
        <div class="operation-btn">
          {this.showBtns && this.generateExpandBtn()}
          <el-button onClick={this.reset}>重置</el-button>
          <el-button type="primary" onClick={this.search}>
            查询
          </el-button>
        </div>
      );
    },
    generateExpandBtn() {
      if (this.expand) {
        return (
          <span onClick={this.expandHandler}>
            展开<i class="el-icon-arrow-down"></i>
          </span>
        );
      } else {
        return (
          <span onClick={this.expandHandler}>
            收起<i class="el-icon-arrow-up"></i>
          </span>
        );
      }
    },
    expandHandler() {
      this.expand = !this.expand;
    },
    generateFormItemContent(item) {
      let {
        prop,
        options,
        itemConfig,
        placeholder,
        disabled,
        columns,
        btnText,
        btnMethod,
      } = item;
      let props = itemConfig?.props ? itemConfig.props : {};
      let event = itemConfig?.event ? itemConfig.event : {};
      this.isCheck &&
        (props["disabled"] = isUndefined(disabled) ? true : disabled);
      if (item === "select") {
        return (
          <el-select
            v-model={this.form[prop]}
            placeholder={placeholder || "请选择"}
            props={props}
            on={event}
          >
            {options.map((el) => {
              let { value, label, config } = el;
              let props = config?.props ? config.props : {};
              let event = config?.event ? config.event : {};
              return (
                <el-option
                  key={value}
                  label={label}
                  value={value}
                  props={props}
                  on={event}
                ></el-option>
              );
            })}
          </el-select>
        );
      } else if (item.type === "radio") {
        return (
          <el-radio-group v-model={this.form[prop]} props={props} on={event}>
            {options.map((el) => {
              let { value, label, config } = el;
              let props = config?.props ? config.props : {};
              let event = config?.event ? config.event : {};
              return (
                <el-radio label={value} props={props} on={event}>
                  {label}
                </el-radio>
              );
            })}
          </el-radio-group>
        );
      } else if (item.type === "title") {
        return <div></div>;
      } else if (item.type === "text") {
        return <div>{this.form[prop]}</div>;
      } else if (item.type === "table") {
        return (
          <el-table data={this.form[prop]} style="width: 1000px" border stripe>
            {columns.map((el) => {
              return this.generateTableColumn(el);
            })}
            <template slot="append">
              <el-button
                type="text"
                icon="el-icon-plus"
                onClick={btnMethod.bind(this, this.form[prop])}
              >
                {btnText}
              </el-button>
            </template>
          </el-table>
        );
      } else {
        return (
          <el-input
            type={item.type || "input"}
            v-model={this.form[prop]}
            placeholder={placeholder || "请输入"}
            props={props}
            on={event}
          ></el-input>
        );
      }
    },
    generateFormItem(item) {
      let { prop, label, formItemConfig } = item;
      let props = formItemConfig?.props ? formItemConfig.props : {};
      let event = formItemConfig?.event ? formItemConfig.event : {};
      return (
        <el-form-item
          label={label}
          prop={prop}
          props={props}
          on={event}
          style={{
            width: !this.isCondition ? `100%` : `${this.formItemWidth}px`,
          }}
        >
          {this.generateFormItemContent(item)}
        </el-form-item>
      );
    },
    generateTableColumn(item) {
      let { prop, label, props, type } = item;
      if (type == "edit") {
        return (
          <el-table-column
            prop={prop}
            label={label}
            props={props}
            scopedSlots={{
              default: (scope) => {
                return <el-input v-model={scope.row[prop]}> </el-input>;
              },
            }}
          ></el-table-column>
        );
      } else {
        return (
          <el-table-column
            prop={prop}
            label={label}
            props={props}
            scopedSlots={{
              default: (props) => {
                return (
                  item?.render &&
                  typeof item.render === "function" &&
                  item.render(props)
                );
              },
            }}
          ></el-table-column>
        );
      }
    },
  },
  render(h) {
    let props = this?.formConfig?.props ? this.formConfig.props : {};
    let event = this?.formConfig?.event ? this.formConfig.event : {};
    return (
      <div
        class="custom-form"
        style={{ height: this.expand ? "50px" : "auto" }}
      >
        <el-form
          class="form"
          ref="form"
          props={{
            model: this.form,
            rules: this.rules,
            labelWidth: this.labelWidth,
            inline: this.inline,
            ...props,
          }}
          on={event}
        >
          <el-row>
            {this.formList.map((item) => {
              let { span, type } = item;
              if (this.isCondition) {
                return this.generateFormItem(item);
              } else {
                return (
                  <el-col
                    span={span}
                    class={[
                      type == "title" ? "form-title" : "",
                      this.inline ? "form-item-row" : "",
                    ]}
                  >
                    {this.generateFormItem(item)}
                  </el-col>
                );
              }
            })}
          </el-row>
        </el-form>
        {this.showOperateBtns && this.generateBtns()}
      </div>
    );
  },
};
</script>

<style lang="less" scoped>
.custom-form {
  display: flex;
  height: auto;
  width: 100%;
  overflow: hidden;
  display: flex;

  .form {
    display: flex;
    flex-wrap: wrap;
    overflow: auto;
    padding: 0 10px;
  }
}
.operation-btn {
  width: 210px;
  min-width: 210px;
  text-align: right;
  justify-content: center;
  align-items: center;

  > span {
    color: #ccc;
    font-size: 14px;
    cursor: pointer;

    > i {
      margin-left: 3px;
    }
  }

  > button {
    margin-left: 10px;
  }
}

.form-title {
  border-bottom: 1px solid #e5e5e5;
  margin-bottom: 18px;

  /deep/ .el-form-item {
    margin-bottom: 0px;
    padding-bottom: 8px;
  }
}

/deep/ .form-item-row {
  .el-form-item {
    display: flex;
    .el-form-item__content {
      flex: 1;
      display: flex;
      .el-table {
        flex: 1;

        .el-table__append-wrapper {
          text-align: center;
        }
      }
    }
  }

  .el-form-item__label {
    line-height: 20px !important;
  }
}
</style>
