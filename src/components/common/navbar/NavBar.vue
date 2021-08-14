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
        height: 100%;
        
    }
    .center{
        flex: 2;  
        display: flex; 
        height: 100%;
        
    }



</style>