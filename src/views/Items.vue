<template>
    <admin-layout>
        <div class="grid grid-cols-12 gap-4 md:gap-6">
            <div class="col-span-12">
                <Metrics />
            </div>

            <div class="col-span-12">
                <ItemList />
            </div>
        </div>
    </admin-layout>
</template>

<script lang="ts" >
import ItemList from '@/components/Items/ItemList.vue'
import Metrics from '../components/Items/metrics.vue'
import AdminLayout from '../components/layout/AdminLayout.vue'
import StatisticsChart from '@/components/Dashboard/StatisticsChart.vue'

export default {
    components: {
        AdminLayout,
        Metrics,
        StatisticsChart,
        ItemList,
    },
    name: 'Items',
}
</script>