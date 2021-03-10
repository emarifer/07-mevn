<template>
    <div class="custom-nav">
        <div class="left-bar">
            <img src="../assets/GitHub-Mark.png" alt="Logo">
            <a href="https://emarifer.github.io/curriculum/" target="_blank">Mi Landing Page</a>
        </div>
        <a href="#" class="sidenav-trigger" data-target="menu-side">
            <i class="material-icons">menu</i>
        </a>

        <ul class="sidenav sidenav-close" id="menu-side">
            <li>
                <div class="user-view">
                    <div class="background">
                        <img src="../assets/s3.jpg" alt="">
                    </div>
                    <img src="../assets/s1.jpg" alt="" class="circle">
                    <span class="name white-text"><b>Enrique Marín</b></span>
                    <span class="email white-text"><b>enrique@gmail.com</b></span>
                </div>
            </li>
            <li>
                <router-link to="/">
                    <i class="material-icons">home</i>
                    Home
                </router-link>
            </li>
            <li>
                <div class="divider"></div>
            </li>
            <li>
                <router-link to="/about">
                    About
                    <i class="material-icons">person</i>
                </router-link>

            </li>
        </ul>
    </div>
</template>

<style scoped>
    @import url("https://fonts.googleapis.com/icon?family=Material+Icons");

    .left-bar {
        display: flex;
        align-items: center;
    }

    .left-bar img {
        width: 3rem;
        height: 3rem;
    }
    
    .left-bar a {
        color: white;
        margin-left: 1rem;
    }

    .custom-nav {
        background-color: rgb(152, 93, 179);
        display: flex;
        justify-content: space-between;
        align-items: center;
        padding: 1rem;
        margin-bottom: 1rem;
    }

    .sidenav {
        text-align: left;
    }

    .sidenav a.router-link-exact-active {
        color: #42b983;
    }

    .sidenav-trigger i {
        color: #42b983;
    }
</style>

<script>
    export default {
        name: 'SideNav',
        mounted() {
            M.AutoInit();
        },
    }
</script>

<!-- COLAPSAR EL MENU TRAS HACER CLICK EN UN ITEM:
https://stackoverflow.com/questions/50295140/how-to-hide-sidenav-in-materialize-css-when-link-is-clicked#58098811 -->