<template>
<div>
<h2>Header</h2>
<slot></slot>
<slot name="welcome"></slot>
</div>
</template>

<script>
export default {
    name:"Header",
    data(){
        return{}
    }
}
</script>

<style scoped>
h2{
    color:green;
}
</style>