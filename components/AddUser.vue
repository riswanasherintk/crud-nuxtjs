<template>
  <transition name="modal-fade">
    <div class="modal-overlay">
      <div class="modal">
        <div class="modal-body">
          <h6>Add new user</h6>
          <hr />
          <div class="form-group">
            <label for="name" class="col-form-label">Name</label>
            <input type="text" class="form-control" v-model="name" />
          </div>
          <div class="form-group">
            <label for="email" class="col-form-label">Email</label>
            <input type="text" class="form-control" v-model="email" />
          </div>
          <div class="form-group">
            <label for="gender" class="col-form-label">Gender</label>
            <select type="text" class="form-control" v-model="gender">
              <option disabled selected>Choose gender</option>
              <option value="Male" class="gender">Male</option>
              <option value="Female" class="gender">Female</option>
            </select>
          </div>
          <div class="form-group">
            <label for="email" class="col-form-label">Status</label>
            <div class="user-status">
              <input
                type="radio"
                class="form-control"
                value="active"
                v-model="status"
              />Active &emsp;
              <input
                type="radio"
                class="form-control"
                value="inactive"
                v-model="status"
              />Inactive
            </div>
          </div>
        </div>
        <div class="modal-footer">
          <button @click="saveUserData">Save</button>
        </div>
      </div>
    </div>
  </transition>
</template>
<style src="../styles/addUser.css"></style>
<script>
export default {
    data() {
    return {
      name: "",
      email: "",
      gender:"",
      status:""
    };
  },
  methods: {
    saveUserData() {
        this.$emit('onAddUser', this.name, this.email,this.gender,this.status);
    },
  },
};
</script>

