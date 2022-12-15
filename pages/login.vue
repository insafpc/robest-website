<template>
  <b-row no-gutters>
    <!--Login banner-->
    <b-col md="6">
      <b-card-img src="images/banner.jpg" alt="Authentication" class="auth--banner"></b-card-img>
      <image-overlay>
        <div class="w-100 text-center pt-5">
          <best-image filename="robest-logo-svg" extension=".svg" alt="Robest Logo" classes="logo "/>
          <p class="mt-2 text-secondary">Welcome back!</p>
        </div>

        <div class="auth--info">
          <ul>
            <li class="d-flex">
              <span class="material-icons mr-2">check_circle</span>
              <p>Manage your tickets</p>
            </li>
            <li class="d-flex">
              <span class="material-icons mr-2">check_circle</span>
              <p>See purchase history</p>
            </li>
            <li>
              <i>New to Robest?
                <nuxt-link to="/register" class="text-secondary">Register</nuxt-link>
                with us.</i>
            </li>
          </ul>
        </div>
      </image-overlay>
    </b-col>

    <!--Login form-->
    <b-col md="6">
      <b-card-body class="p-5" title="Login">
        <b-overlay :show="busy" rounded="lg" opacity="0.6">
          <template v-slot:overlay>
            <loading/>
          </template>
          <validation-observer ref="observer" v-slot="{ passes }">

            <!--Server validation errors-->
            <b-form @submit.stop.prevent="passes(onSubmit)" @reset="onReset">
              <b-alert :show="alert.enable" :variant="alert.variant">
                {{alert.message}}
              </b-alert>

              <!--Identifier input-->
              <validation-provider
                name="identifier"
                rules="required|min:3"
                v-slot="validationContext"
              >
                <b-form-group
                  id="input-group-1"
                  label="Email / username:"
                  label-for="input-1"
                >
                  <b-form-input
                    id="input-1"
                    v-model="form.identifier"
                    type="text"
                    required
                    :state="getValidationState(validationContext)"
                    placeholder="Enter email address or username"
                  />
                  <b-form-invalid-feedback id="input-1-live-feedback">
                    {{ validationContext.errors[0] }}
                  </b-form-invalid-feedback>
                </b-form-group>
              </validation-provider>

              <!--Password input-->
              <validation-provider
                name="password"
                rules="required|min:6"
                v-slot="validationContext"
              >
                <b-form-group id="input-group-2" label="Password:" label-for="input-2">
                  <b-form-input
                    type="password"
                    id="input-2"
                    v-model="form.password"
                    required
                    placeholder="Enter password"
                    :state="getValidationState(validationContext)"
                  />
                  <b-form-invalid-feedback id="input-1-live-feedback">
                    {{ validationContext.errors[0] }}
                  </b-form-invalid-feedback>
                </b-form-group>
              </validation-provider>

              <div class="form-controls">
                <div>
                  <b-button type="submit" variant="primary">Submit</b-button>
                  <b-button type="reset" variant="danger">Reset</b-button>
                </div>
                <div>
                  <span class="material-icons mr-2">google</span>
                </div>
              </div>

            </b-form>
          </validation-observer>
        </b-overlay>
      </b-card-body>
    </b-col>
  </b-row>
</template>

<script>
  import Loading from "../components/Common/Loading";
  import ImageOverlay from "../components/Common/ImageOverlay";
  import BestImage from "../components/Common/BestImage";
  import {ValidationProvider, ValidationObserver} from "vee-validate/dist/vee-validate.full.esm";

  export default {
    name: 'login',
    components: {BestImage, ImageOverlay, Loading, ValidationProvider, ValidationObserver},
    layout: 'auth',
    data() {
      return {
        form: {
          identifier: '',
          password: '',
        },
        alert: {
          enable: false,
          message: '',
          variant: 'danger'
        },
        loading: false,
        busy: false,
      }
    },
    methods: {
      // Form submit event
      async onSubmit() {
        // Enable loader
        this.busy = true;

        // Login user with nuxt auth
        try {
          await this.$auth.loginWith('local', {data: this.form});

          // Hide loader
          this.busy = false;

          //Show Toast
          this.$bvToast.toast(' ', {
            variant: 'success',
            title: 'Login successful',
            toaster: 'b-toaster-bottom-center',
            solid: true
          });

          //Route to account page
          this.$router.push('/account');
        } catch (err) {
          let messages = err.response.data.message[0].messages;
          let message = messages[0].message;

          //Show Toast
          this.$bvToast.toast(' ', {
            variant: 'danger',
            title: message,
            toaster: 'b-toaster-bottom-center',
            solid: true
          });

          // Show alert
          this.alert.enable = true;
          this.alert.message = message;

          // Hide loader
          this.busy = false;
        }
      },
      onReset(evt) {
        evt.preventDefault();

        // Reset our form values
        this.form.identifier = '';
        this.form.password = '';

        //Show Toast
        this.$bvToast.toast(' ', {
          variant: 'warning',
          title: `Form has  been reset`,
          toaster: 'b-toaster-bottom-center',
          solid: true
        });
      },
      getValidationState({dirty, validated, valid = null}) {
        return dirty || validated ? valid : null;
      },
    }
  }
</script>

<style scoped lang="scss">
  .auth {
    &--banner {
      object-fit: cover;
      height: 100%;
      min-height: 300px;
    }

    &--info {
      position: absolute;
      bottom: 0;
    }
  }

  ul {
    list-style: none;
  }
</style>
