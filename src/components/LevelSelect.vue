<script setup lang="ts"></script>

<script lang="ts">
export default {
  name: 'LevelSelect',
};
</script>

<template>
    <section class="container">
        <div class="level-select">
            <button>Levels</button>
        </div>
        <div class="tutorial-select">
            <button>Tutorials</button>
        </div>
    </section>
<div class="wrapper">
    
    <div class="card">
        <div>
            
        </div>
        <router-link to="level1"><button>Play</button></router-link>
        <router-view></router-view>
    </div>
</div>
</template>

<style scoped>
.wrapper {
    width:100vh;
    height:100vh;
    background-color: lightblue;
    border-radius: 10%;
    flex-direction: column;
}

.level-select {
    width:50%;
    margin-right:20%;
    height: 100px;
    background: lightblue;
    float: left;
}

.tutorial-select {
    margin-left:60%;
    height: 100px;
    background: black;
}

.container {
    width: 80%;
    margin: auto;
}
</style>
