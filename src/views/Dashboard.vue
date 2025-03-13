<template>
  <admin-layout>
    <div class="grid grid-cols-12 gap-4 md:gap-6">
      <div class="col-span-12">
        <Metrics />
      </div>
      
      <div class="col-span-12">
        <Transactions/>
      </div>

      <div class="col-span-12">
        <statistics-chart />
      </div>
    </div>
  </admin-layout>
</template>

<script>
import Metrics from '../components/Dashboard/Metrics.vue'
import AdminLayout from '../components/layout/AdminLayout.vue'
import StatisticsChart from '@/components/Dashboard/StatisticsChart.vue'
import Transactions from '@/components/Dashboard/Transactions.vue'

export default {
  components: {
    AdminLayout,
    Metrics,
    StatisticsChart,
    Transactions,
  },
  name: 'Dashboard',
}
</script>
