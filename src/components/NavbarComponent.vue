<template>
    <nav class="navbar navbar-expand-lg">
        <div class="container-fluid">
            <a class="navbar-brand">
                <img class="logo" src="../assets/logo.png">
            </a>
            <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarText"
                aria-controls="navbarText" @click="toggleMenu">
                <i :class="iconClasses"></i>
            </button>

            <div class="collapse navbar-collapse" id="navbarText">
                <ul class="navbar-nav ms-auto mb-2 mb-lg-0">
                    <li class="nav-item me-4" v-for="route in visibleRoutes" :key="route.path">
                        <router-link class="nav-link" :to="route.path" :class="{ 'active': isActive(route) }">{{
                            capitalizeFirstLetter(route.name) }}</router-link>
                    </li>
                </ul>
            </div>
        </div>
    </nav>
    <div class="position-fixed top-50 end-0 translate-middle-y" style="z-index: 9999; margin-right: 5px; margin-top: 60px;">
        <a href="https://wa.me/message/L57OUXXHQ6VUB1" target="_blank">
            <dotlottie-player src="https://lottie.host/bda53353-e7da-4cf2-9dcb-ed2088f0d24d/h40nAQu0q7.json"
                background="transparent" speed="1" style="width: 38px; height: 40px;" loop autoplay></dotlottie-player>
        </a>
    </div>
</template>

<style scoped>
.navbar {
    background-color: #fff;
    box-shadow: 0 2px 4px rgba(0, 0, 0, 0.4);
    position: fixed;
    width: 100%;
    z-index: 1000;
    padding: 0px;
}

.navbar a {
    color: #000;
}

.navbar .nav-link.active {
    color: #EE1B2E;
}

.slide-fade-enter-active {
    transition: all 0.3s ease-out;
}

.slide-fade-leave-active {
    transition: all 0.5s cubic-bezier(1, 0.5, 0.8, 1);
}

.navbar-toggler {
    border: none !important;
    outline: none !important;
    padding: 0 !important;
    margin: 0 !important;
}

.navbar-toggler:not(:disabled):not(.disabled):focus {
    outline: none;
    box-shadow: none;
}

/*editando icone*/

.navbar-toggler .icon {
    font-size: 30px;
    /* Tamanho do ícone */
    transition: transform 0.3s ease;
    /* Transição de transformação */
}

/* Animação para transformar o ícone do menu em 'X' */
@keyframes menuToX {
    0% {
        transform: rotate(0);
    }

    50% {
        transform: rotate(180deg);
    }

    100% {
        transform: rotate(180deg);
    }
}

/* Animação para transformar 'X' de volta para o ícone do menu */
@keyframes xToMenu {
    0% {
        transform: rotate(180deg);
    }

    50% {
        transform: rotate(0);
    }

    100% {
        transform: rotate(0);
    }
}

/* Adiciona a animação dependendo do estado do menu */
.fas.fa-bars {
    animation: xToMenu 0.3s ease forwards;
}

.fas.fa-times {
    animation: menuToX 0.3s ease forwards;
}

.logo {
    height: 50px;
    width: auto;
}
</style>

<script>
export default {
    data() {
        return {
            routes: this.$router.getRoutes(),
            activeRoute: '',
            isMenuOpen: false,
            isAnimating: false
        }
    },
    computed: {
        iconClasses() {
            return {
                'fas': true,
                'fa-times': this.isMenuOpen == true,
                'fa-bars': this.isMenuOpen == false,
                'icon': true,
                'animating': this.isAnimating
            };
        },
        visibleRoutes() {
            return this.$router.options.routes.filter(route => !route.meta || !route.meta.hideInNavbar);
        },
    },
    watch: {
        $route(newVal) {
            this.activeRoute = newVal.path;
        }
    },
    methods: {
        scrollToTop() {
            // Rolagem suave para o topo da página
            window.scrollTo({
                top: 0,
                behavior: 'smooth'
            })
        },
        capitalizeFirstLetter(string) {
            return string.charAt(0).toUpperCase() + string.slice(1);
        },
        isActive(route) {
            return this.activeRoute === route.path;
        },
        toggleMenu() {
            this.isMenuOpen = !this.isMenuOpen;
        }
    },
    mounted() {
        this.activeRoute = this.$route.path;
        this.scrollToTop()
    }
}
</script>

