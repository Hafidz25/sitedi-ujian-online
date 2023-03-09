<template>
    <nav
        class="navbar navbar-expand-lg navbar-transparent navbar-dark navbar-theme-primary shadow"
    >
        <div class="container position-relative">
            <Link class="navbar-brand me-lg-3" href="#">
                <img
                    class="navbar-brand-dark text-center"
                    src="/assets/images/logo.png"
                    style="height: 70px"
                />
            </Link>
            <div class="navbar">
                <ul class="navbar-nav me-auto mb-2 mb-md-0"></ul>
                <form class="d-flex" v-if="$page.props.auth.student">
                    <Link
                        href="/logout"
                        onclick="return confirm('Anda yakin ingin logout ?')"
                        method="POST"
                        class="btn btn-danger shadow"
                        as="button"
                        >LOGOUT</Link
                    >
                </form>
            </div>
        </div>
    </nav>
    <section class="vh-lg-100 mt-lg-0 bg-soft d-flex align-items-center">
        <div class="container">
            <div class="row justify-content-center form-bg-image" style="background: url('/assets/images/signin.svg');">
                <div class="col-12 d-flex align-items-center justify-content-center">

                    <slot />

                </div>
            </div>
        </div>
    </section>
</template>

<script>
import { Link } from "@inertiajs/inertia-vue3";

export default {
    //register components
    components: {
        Link,
    },
};
</script>