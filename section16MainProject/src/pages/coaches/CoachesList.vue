<template>
    <div>
    <base-dialog :show="!!error" title="An error occured" @close="handleError">
        <p>{{ error }}</p>
    </base-dialog>
  <section>
        <coach-filter @change-filter="setFilters"></coach-filter>
        <base-card>
            <div class="controls">
            <base-button mode="outline" @click="loadCoaches(true)">Refresh</base-button>
            <base-button link to="/auth?redirect=register" v-if="!isLoggedIn">Login to register as a coach</base-button>
            <base-button v-if="isLoggedIn && !isCoach && !isLoading" link to="/register"
                >Register as Coach</base-button
            >
            </div>
            <div v-if="isLoading">
                <base-spinner></base-spinner>
            </div>
            <ul v-else-if="hasCoaches">
                <coach-item
                v-for="coach in filterCoaches"
                :key="coach.id"
                :id="coach.id"
                :first-name="coach.firstName"
                :last-name="coach.lastName"
                :rate="coach.hourlyRate"
                :areas="coach.areas"
                >
                </coach-item>
            </ul>
            <h3 v-else>No coaches found</h3>
        </base-card>
  </section>
    </div>
</template>


<script>
import CoachFilter from '../../components/coaches/CoachFilter.vue';
import CoachItem from '../../components/coaches/CoachItem.vue';
import BaseButton from '../../components/ui/BaseButton.vue';
//import BaseDialog from '../../components/ui/BaseDialog.vue';
export default {
  components: { CoachItem, BaseButton, CoachFilter },
  data() {
    return {
      activeFilters: {
        frontend: true,
        backend: true,
        career: true,
      },
      isLoading: false,
      error: null,
    };
  },
  computed: {
    isLoggedIn(){
      return this.$store.getters.isAuthenticated;
    },
    filterCoaches() {
      const coaches = this.$store.getters['coaches/coaches'];
      return coaches.filter((coach) => {
        if (this.activeFilters.frontend && coach.areas.includes('frontend')) {
          return true;
        }
        if (this.activeFilters.backend && coach.areas.includes('backend')) {
          return true;
        }
        if (this.activeFilters.career && coach.areas.includes('career')) {
          return true;
        }
        return false;
      });
    },
    hasCoaches() {
      return !this.isLoading && this.$store.getters['coaches/hasCoaches'];
    },
    isCoach() {
      return this.$store.getters['coaches/isCoach'];
    },
  },
  created() {
    this.loadCoaches();
  },
  methods: {
    setFilters(updatedFilters) {
      this.activeFilters = updatedFilters;
    },
    async loadCoaches(refresh = false) {
      this.isLoading = true;
      try {
          await this.$store.dispatch('coaches/loadCoaches',{forceRefresh: refresh});
      } 
      catch(error){
          this.error = error.message || 'Something went wrong!';
      } 
      this.isLoading = false;
    },
    handleError(){
        this.error = null;
    }
  },
};
</script>

<style scoped>
ul {
  list-style: none;
  margin: 0;
  padding: 0;
}

.controls {
  display: flex;
  justify-content: space-between;
}
</style>