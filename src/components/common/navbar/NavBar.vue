<template >
    <div class = "nav-bar">
        <div class = "left"><slot name ='left'></slot></div>
        <div class = "center"><slot name = 'center'></slot></div>
        <div class = "right"><slot name ='right'></slot></div>
    </div>
</template>
<script>
export default {
    name: 'NavBar'
}
</script>

<style>
    .nav-bar{
        display: flex;
        width: 100%;
    }

    .left ,.right{
        flex: 1;
        
    }
    .center{
        flex: 2;
        
    }

</style>