import Vue from 'vue';
import HomeComponent from './home.vue';
import UserlistComponent from './userlist.vue';
import AboutComponent from './about.vue';
import LoginComponent from './login.vue';
import RegisterComponent from './register.vue';
 

new Vue({
    el: "#app",
    components: {
        HomeComponent,
        UserlistComponent,
        AboutComponent,
        LoginComponent,
        RegisterComponent
    }
})