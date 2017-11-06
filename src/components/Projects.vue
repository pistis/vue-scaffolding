<template lang="html">
  <div>
    This is project list page
    <ul v-if="projects">
      <router-link
        tag="li"
        v-for="(project, index) in projects"
        :key="index"
        :to="{ name: 'project', params: { name: project.name } }">
        {{project.name}}
      </router-link>
    </ul>
  </div>
</template>

<script>
  import { mapGetters } from 'vuex'

  export default {
    name: 'projects',
    data () {
      return {}
    },
    computed: {
      ...mapGetters(['projects'])
    },
    methods: {
      fetchData () {
        this.$store.dispatch('getProjects')
      }
    },
    created () {
      this.fetchData()
    }
  }
</script>
