<template>
  <div class="pagination">
    <button @click="$emit('changePage', curPage - 1)" :disabled="curPage == 1" >上一页</button>
     <button :class="{active: curPage == 1}"  v-if="continusNum.start >= 2" @click="$emit('changePage', 1)">1</button>
    <button v-if="continusNum.start > 2">···</button>

    <button v-for="(page, index) in continusNum.end" :key="index" 
    v-if="page >= continusNum.start" @click="$emit('changePage', page)" :class="{active: curPage == page}" >{{page}}</button>
    
    <button v-if="continusNum.end < totalPage - 1">···</button>
    <button v-if="continusNum.end < totalPage" @click="$emit('changePage', totalPage)" :class="{active: curPage == totalPage}" >{{totalPage}}</button>
    <button @click="$emit('changePage', totalPage)" :disabled="curPage == totalPage">下一页</button>
    <button style="margin-left: 30px">共 {{total}}条</button>
  </div>
</template>

<script>
  export default {
    name: "Pagination",
    props: ['curPage', "pageSize", "total", "continus"],
    computed: {
      totalPage() {
        return Math.ceil(this.total / this.pageSize)
      },
      continusNum() {
        let start,end = 0;
        start = this.curPage - parseInt(this.continus / 2)
        end = this.curPage + parseInt(this.continus / 2)
        if (start < 1) {
          start = 1
          end = this.continus
        }
        if (end > this.totalPage) {
          start = this.totalPage - this.continus + 1
          end = this.totalPage
        }
        return {start,end}
      }
    }
  }
</script>

<style lang="less" scoped>
  .pagination {
    button {
      margin: 0 5px;
      background-color: #f4f4f5;
      color: #606266;
      outline: none;
      border-radius: 2px;
      padding: 0 4px;
      vertical-align: top;
      display: inline-block;
      font-size: 13px;
      min-width: 35.5px;
      height: 28px;
      line-height: 28px;
      cursor: pointer;
      box-sizing: border-box;
      text-align: center;
      border: 0;

      &[disabled] {
        color: #c0c4cc;
        cursor: not-allowed;
      }

      &.active {
        cursor: not-allowed;
        background-color: #409eff;
        color: #fff;
      }
    }
  }
</style>
