<template>
    <div>
        <div class="mycolor">
            <div class="min_hearder">
                <mt-header title="收藏" fixed></mt-header>
            </div>
            <div>
            <mt-tab-container>
                <mt-tab-container-item>

                </mt-tab-container-item>
            </mt-tab-container>
            </div>
            <Navigation/>
        </div>
    </div>
</template>
<script>

import Navigation from '@/components/Navigation'

export default {
    name:'Collec',
    components:{
        Navigation
    }
}
</script>
<style scoped>
  .mint-header.is-fixed{
     background-color:#f9f9f9; 
     color: #000;
  }
 
</style>