<template>
  <div class="flex flex-wrap items-center justify-between gap-3 mb-6">
    <div class="flex" >
      <div v-if="showBackButton" class="cursor-pointer hover:bg-brand-50 rounded-xl p-2 mt-1" @click="goTo">
        <BackIcon/>
      </div>
      <h2 class="text-xl font-semibold text-gray-800 dark:text-white/90 mt-2" x-text="pageTitle">
        {{ pageTitle }}
      </h2>
    </div>
    <nav>
      <ol class="flex items-center gap-1.5">
        <li>
          <router-link
            class="inline-flex items-center gap-1.5 text-sm text-gray-500 dark:text-gray-400"
            to="/"
          >
            {{ path }}
            <svg
              class="stroke-current"
              width="17"
              height="16"
              viewBox="0 0 17 16"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M6.0765 12.667L10.2432 8.50033L6.0765 4.33366"
                stroke=""
                stroke-width="1.2"
                stroke-linecap="round"
                stroke-linejoin="round"
              />
            </svg>
          </router-link>
        </li>
        <li class="text-sm text-gray-800 dark:text-white/90">
          {{ pageTitle }}
        </li>
      </ol>
    </nav>
  </div>
</template>

<script lang="ts">
import BackIcon from '@/icons/BackIcon.vue';
import IconButton from '../ui/IconButton.vue';


export default {

  components: {
    IconButton,
    BackIcon
  },

  name: 'PageBreadcrumb',

  props: {
    pageTitle: String,
    path: {
      type: String,
      default: 'Home'
    },
    showBackButton: Boolean,
    backPath: String
  },

  methods: {
    goTo() {
      this.$router.push(this.backPath || '/');
    }
  }

}
</script>
