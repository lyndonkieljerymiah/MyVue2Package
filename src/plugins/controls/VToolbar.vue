<template>
    <nav class="navbar navbar-default">
        <div class="container-fluid">
            <div class="navbar-header ">
            <div class="btn btn-sm navbar-btn glyphicon glyphicon-lock pull-left"></div>
            <a class="navbar-brand collapse navbar-collapse" href="#">WebSiteName</a>
            <button type="button" class="navbar-toggle" data-toggle="collapse" data-target="#myNavbar">
                <span class="icon-bar"></span>
                <span class="icon-bar"></span>
                <span class="icon-bar"></span>
            </button>
            </div>
        
            <div class="collapse navbar-collapse" id="myNavbar">
              <ul class="nav navbar-nav navbar-right" v-for="menu in menus" :key="menu.name">
                  <li>
                      <a href="#" @click.prevent="onClick(menu.name)"><span :class="menu.icon"></span>{{menu.title}}</a>
                  </li>
              </ul>
            </div>
        </div>
    </nav>
</template>

<script>
export default {
  name: 'vToolbar',
  props: {
    menus: {
      default: [],
      type: Array
    }
  }
}
</script>


<style scoped>
.title-wrapper {
  position: absolute;
  left: 50px !important;
}

.blue-square {
  background: #006be5;
  color: #fff;
  position: absolute;
  left: 0;
  top: 0;
  bottom: 0;
  width: 50px;
}

.toolbar-wrapper {
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 50px;
  z-index: 30;
  border-bottom: 1px solid #d1d1d1;
  box-sizing: border-box;
}

.toolbar {
  position: absolute;
  top: 0;
  bottom: 0;
  z-index: 1;
  background-color: #f5f5f5;
}

.toolbar-left {
  left: 0;
  width: 18em;
  z-index: 2;
}

.toolbar-center {
  left: 18em;
  right: 8em;
  z-index: 2;
}

.toolbar-right {
  right: 0;
  width: 8em;
  z-index: 2;
}


</style>

