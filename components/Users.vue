<template>
  <div class="container">
    <div class="header"></div>
    <div>
      <div class="sub-header">
        <h2 class="margin">Users</h2>
        <div class="add-user" @click="showModal = true">&#43;Add</div>
      </div>
      <table class="user-table">
        <tr class="table-head">
          <th>NAME</th>
          <th>EMAIL</th>
          <th>GENDER</th>
          <th>STATUS</th>
          <th></th>
        </tr>
        <tr v-for="user in userList" :key="user.id" class="user-list">
          <td>{{ user.name }}</td>
          <td>{{ user.email }}</td>
          <td>{{ user.gender }}</td>
          <td
            class="status"
            v-bind:style="{
              'background-color':
                user.status === 'active' ? '#70C050' : '#FF5858',
            }"
          >
            {{ user.status === "active" ? "Active" : "Inactive" }}
          </td>
          <td
            v-bind:style="{ color: '#FF5858', cursor: 'pointer' }"
            @click="deleteUser(user.id)"
          >
            Delete
          </td>
        </tr>
      </table>
      <AddUser v-show="showModal"  @onAddUser="createUser"/>
    </div>
  </div>
</template>
<style src="../styles/userList.css"></style>
<script>
import { getAllUsers, deleteUser,createUser } from "../services/UserService";
import AddUser from "./AddUser";
export default {
  components: {
    AddUser,
  },
  created() {
    this.getAllUsers();
  },
  data() {
    return {
      userList: [],
      showModal: false,
    };
  },
  methods: {
    getAllUsers() {
      getAllUsers().then((response) => {
        this.userList = response;
      });
    },
    deleteUser(userId) {
      deleteUser(userId).then((response) => {
        this.getAllUsers();
      });
    },
    addUser() {
      this.showModal = true;
    },
    createUser(name,email,gender,status){
        createUser(name,email,gender,status).then(response=>{
            this.getAllUsers();
        })
        this.showModal=false
    },
  },
};
</script>