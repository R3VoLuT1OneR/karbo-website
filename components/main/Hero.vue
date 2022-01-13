<template>
  <section class="hero">
    <main class="py-12 md:py-16 xl:container md:px-10 lg:px-12 xl:px-32 md:pr-8 lg:pr-16 xl:pr-40">
      <header class="flex justify-between">
        <section>
          <h2 class="text-5xl font-extrabold">
            <client-only>
              <vue-typer
                :text="$t('hero.title.line1')"
                initial-action="erasing"
              />
            </client-only><br>
            <span>
              {{ $t('hero.title.line2') }}
            </span>
          </h2>
          <h3 class="text-2xl text-grey-mid font-light font-mono leading-9 mt-4 mb-8">
            <span v-html="$t('hero.subtitle')" />
          </h3>
        </section>
        <aside class="flex items-center">
          <img
            width="322"
            height="287"
            class="hidden md:block w-full"
            src="~/assets/images/main_illustration.svg"
            alt="Karbo"
          >
        </aside>
      </header>
      <footer class="mt-6 md:mt-0 xl:-mt-20 md:flex">
        <DownloadDropdown />
        <a
          :href="githubLink"
          rel="noopener"
          target="_blank"
          class="flex items-center font-mono font-medium hover:no-underline sm:mt-6 md:mt-0 md:ml-8 h-12"
        >
          <SvgIcon name="github" class="h-8 w-8" />
          <span class="ml-3 mr-2">{{ $t('hero.githubContribution') }}</span>
          <SvgIcon name="arrow-right" class="h-4 w-4" />
        </a>
      </footer>
    </main>
  </section>
</template>

<script lang="ts">
import { AsyncComponent } from 'vue'
import { Vue, Component } from 'nuxt-property-decorator'
import DownloadDropdown from '~/components/main/Hero/DownloadDropdown.vue'

@Component({
  components: {
    // This component is not working in SSR mode, so we load it in browser only
    VueTyper: (async () => process.browser ? (await import('vue-typer')).VueTyper : {}) as AsyncComponent,
    DownloadDropdown,
  },
})
export default class Hero extends Vue {
  get githubLink() {
    return 'https://github.com/Karbovanets/karbo'
  }
}
</script>

<style lang="scss" scoped>
@import "assets/css/mixins";

.hero {
  background: linear-gradient(180deg, #FFFFFF 0%, #F6F8FC 100%);

  > main {
    > header {
      > section {
        > h2 {
          font-size: 2.875rem;
          line-height: 3.625rem;
          ::v-deep .vue-typer {
            .custom {
              &.char {
                color: theme('colors.blue-dark') !important;
              }
              &.caret {
                background-color: transparent;
                &:empty:before {
                  content: '_';
                }
              }
            }
          }
        }
        > h3 {
          font-size: 1.5rem;
          line-height: 2.25rem;
        }
      }
    }

    @include mobile-padding();

    @screen md {
      > header {
        > section {
          > h2 {
            font-size: 3.5rem;
            line-height: 4rem;
          }
          > h3 {
            font-size: 1.75rem;
            line-height: 2.625rem;
          }
        }
        > aside {
          min-width: 320px;
        }
      }
    }

    @screen lg {
      > header {
        > section {
          > h2 {
            font-size: 3.75rem;
            line-height: 4.25rem;
          }
          > h3 {
            font-size: 1.875rem;
            line-height: 2.75rem;
          }
        }
        > aside {
          min-width: 410px;
        }
      }
    }
  }
}
</style>
