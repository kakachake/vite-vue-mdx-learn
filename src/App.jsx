import { defineComponent } from 'vue'
import logo from './assets/logo.png?url'
import { RouterView } from 'vue-router'

export default defineComponent({
  setup() {
    return () => (
      <div>
        <div>
          <router-link to="/about">about</router-link>
          <router-link to="/helloworld">Helloworld</router-link>
        </div>
        <router-view
          scopedSlots={{
            default: (props) => (
              <Suspense>
                {{
                  fallback: () => <div>loading...</div>,
                  default: props.Component,
                }}
              </Suspense>
            ),
          }}
        ></router-view>
      </div>
    )
  },
})
