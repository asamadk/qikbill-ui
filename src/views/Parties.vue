<template>
    <admin-layout>
      <div class="grid grid-cols-12 gap-4 md:gap-6">
        <div class="col-span-12">
          <Metrics />
        </div>
        
        <div class="col-span-12">
          <PartiesList/>
        </div>
      </div>
    </admin-layout>
  </template>
  
  <script>
  import Metrics from '../components/Parties/Metrics.vue'
  import AdminLayout from '../components/layout/AdminLayout.vue'
  import StatisticsChart from '@/components/Dashboard/StatisticsChart.vue'
  import PartiesList from '@/components/Parties/PartiesList.vue'
  
  export default {
    components: {
      AdminLayout,
      Metrics,
      StatisticsChart,
      PartiesList,
    },
    name: 'Parties',
  }
  </script>
  