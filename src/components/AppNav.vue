<template>
    <nav class="app-nav">
        <ul class="app-nav__list">
            <li
                v-for="(item, index) in navigation"
                :key="index"
                class="app-nav__list-item"
            >
                <RouterLink
                    :to="item.to"
                    :class="['app-nav__list-link', {
                        'app-nav__list-link--inverted': inverted
                    }]"
                    exact-active-class="app-nav__list-link--active"
                >
                    {{ item.name }}
                </RouterLink>
            </li>
        </ul>
    </nav>
</template>
<script>
export default {
    name: 'AppNav',
    props: {
        navigation: {
            type: Array,
            required: true
        },
        inverted: {
            type: [Boolean, String],
            default: false
        }
    }
}
</script>

<style lang="scss">
    .app-nav {
        &__list {
          display: flex;
          justify-content: flex-end;
          width: 100%;
          padding: 15px 145px;
          list-style: none;
          margin: 0 -15px;

            &-item {
                padding: 0 15px;
            }

            &-link {
                color: white;
                font-size: 14px;
                text-decoration: none;
                text-transform: uppercase;

                &--inverted {
                    color: rgba(black, .87);
                }

                &--active {
                    text-decoration: underline;
                    color: #37E9B8;
                }
            }
        }
    }
</style>