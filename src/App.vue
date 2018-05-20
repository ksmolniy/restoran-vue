<template>
  <div id="app">
    <el-container>
      <el-header>
          <el-tabs :value="$router.currentRoute.meta.groupName" @tab-click="changeTab">
              <el-tab-pane label="Главная" name="home"></el-tab-pane>
              <el-tab-pane label="Блюда" name="dishes"></el-tab-pane>
              <el-tab-pane label="Группы блюд" name="dishesGroups"></el-tab-pane>
              <el-tab-pane label="Заказы" name="orders"></el-tab-pane>
              <el-tab-pane label="Клиенты" name="clients"></el-tab-pane>
              <el-tab-pane label="Столики" name="tables"></el-tab-pane>
              <el-tab-pane label="Ценники" name="prices"></el-tab-pane>
              <el-tab-pane label="О приложении" name="about"></el-tab-pane>
          </el-tabs>
      </el-header>
      <el-main>
        <el-breadcrumb separator="/" class="breadcrumbs">
          <el-breadcrumb-item v-if="$router.currentRoute.matched[0].meta.breadcrumb"
                              :to="{path: $router.currentRoute.matched[0].path}">
                                {{$router.currentRoute.matched[0].meta.breadcrumb}}
          </el-breadcrumb-item>
          <el-breadcrumb-item v-if="$router.currentRoute.meta.breadcrumb">
                              {{$router.currentRoute.meta.breadcrumb}}
          </el-breadcrumb-item>
        </el-breadcrumb>
        <router-view />
      </el-main>
    </el-container>  
  </div>
</template>

<script>
export default {
  name: 'App',
  methods: {
    changeTab(tab) {
      this.$router.push(`/${tab.name}`);
    }
  }
}
</script>

<style lang="scss">
#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
}

.breadcrumbs{
  padding-bottom: 24px;
}
</style>
