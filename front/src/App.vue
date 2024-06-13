<template>
  <div id="app">
    <navigation />
    <router-view/>
    <button id="feedbackButton" type="button" class="btn btn-link" data-bs-toggle="modal" data-bs-target="#feedbackModal">send feedback</button>

    <div class="modal fade" id="feedbackModal" tabindex="-1">
      <div class="modal-dialog  modal-dialog-centered">
        <div class="modal-content">
          <div class="modal-header">
            <h5 class="modal-title">Send Feedback</h5>
            <button type="button" class="btn-close" data-bs-dismiss="modal"></button>
          </div>
          <div class="modal-body">
            <form @submit.prevent="sendFeedback">
              <div class="mb-3">
                <label for="messageInput" class="form-label">Tell us what you think:</label>
                <textarea v-model="feedback" class="form-control" id="messageInput" required maxlength="512"></textarea>
              </div>
              <button type="submit" class="btn btn-dark m-3">Send</button>
              <button type="button" class="btn btn-outline-dark" data-bs-dismiss="modal" @click="clearFeedback">Cancel</button>
            </form>           
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
  import navigation from '@/components/navbar.vue'
  import api from './server/api';

  export default {
    name: 'main-app',
    components: {
      navigation
    },
    data () {
      return {
        feedback: ''
      }
    },
    methods: {
      clearFeedback() {
        this.feedback = ''
      },
      async sendFeedback() {
        try {
          await api.sendFeedback(this.feedback);
          this.$alertify.success('Feedback Sent');
          this.feedback = '';
        } catch (error) {
          this.$alertify.error('Feedback Not Sent');
        }
      }
    },
    async created() {
      const token = localStorage.getItem('token');

      if (token) {
        const data = (await api.getUserData()).data;

        this.$store.commit('ADD_USER_DATA', data);
      }
    },
  }
</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
}

nav {
  padding: 30px;
}

nav a {
  font-weight: bold;
  color: #2c3e50;
}

nav a.router-link-exact-active {
  color: #42b983;
}

#feedbackButton {
  position: static;
  bottom: 0;
  left: 46vw;
}

</style>
