<template>
  <b-row no-gutters>
    <!--Register banner-->
    <b-col md="6">
      <b-card-img src="images/banner.jpg" alt="Authentication" class="auth--banner"></b-card-img>
      <image-overlay>
        <div class="w-100 text-center pt-5">
          <best-image filename="robest-logo-svg" extension=".svg" alt="Robest Logo" classes="logo "/>
          <p class="mt-2 text-secondary">Welcome to Robest!</p>
        </div>

        <div class="auth--info">
          <ul>
            <li class="d-flex">
              <span class="material-icons mr-2">check_circle</span>
              <p>Create tickets</p>
            </li>
            <li class="d-flex">
              <span class="material-icons mr-2">check_circle</span>
              <p>Purchase premium themes, plugins, layout and many more...</p>
            </li>
            <li>
              <i>Already a member Robest?
                <nuxt-link to="/login" class="text-secondary">Login</nuxt-link>
                with us.</i>
            </li>
          </ul>
        </div>
      </image-overlay>
    </b-col>

    <!--Register banner-->
    <b-col md="6">
      <b-card-body class="p-5" title="Register">
        <b-overlay :show="busy" rounded="lg" opacity="0.6">
          <template v-slot:overlay>
            <loading/>
          </template>

          <validation-observer ref="observer" v-slot="{ passes }">
            <b-form @submit.stop.prevent="passes(onSubmit)" @reset="onReset" :aria-hidden="busy ? 'true' : null">

              <!--Server validation errors-->
              <b-alert :show="alert.enable" :variant="alert.variant">
                {{alert.message}}
              </b-alert>

              <!--username input-->
              <validation-provider
                name="username"
                rules="required|min:3|alpha_dash"
                v-slot="validationContext"
              >
                <b-form-group
                  id="input-group-1"
                  label="Username:"
                  label-for="input-1"
                >
                  <b-form-input
                    id="input-1"
                    v-model="form.username"
                    type="text"
                    required
                    placeholder="Enter username"
                    :state="getValidationState(validationContext)"
                  />

                  <!--validation message-->
                  <b-form-invalid-feedback id="input-1-live-feedback">
                    {{ validationContext.errors[0] }}
                  </b-form-invalid-feedback>
                </b-form-group>
              </validation-provider>

              <!--email input-->
              <validation-provider
                name="email"
                rules="required|email"
                v-slot="validationContext"
              >
                <b-form-group
                  id="input-group-2"
                  label="Email:"
                  label-for="input-2"
                >
                  <b-form-input
                    id="input-2"
                    v-model="form.email"
                    type="text"
                    required
                    placeholder="Enter Email ID"
                    :state="getValidationState(validationContext)"
                  />

                  <!--validation message-->
                  <b-form-invalid-feedback id="input-1-live-feedback">
                    {{ validationContext.errors[0] }}
                  </b-form-invalid-feedback>
                </b-form-group>
              </validation-provider>

              <!--password input-->
              <validation-provider
                name="password"
                rules="required|min:6"
                v-slot="validationContext"
                vid="password"
              >
                <b-form-group
                  id="input-group-3"
                  label="Password:"
                  label-for="input-3"
                >
                  <b-form-input
                    type="password"
                    id="input-3"
                    v-model="form.password"
                    required
                    placeholder="Enter password"
                    :state="getValidationState(validationContext)"
                  />

                  <!--validation message-->
                  <b-form-invalid-feedback id="input-1-live-feedback">
                    {{ validationContext.errors[0] }}
                  </b-form-invalid-feedback>
                </b-form-group>
              </validation-provider>

              <!--confirm input-->
              <validation-provider
                name="confirm password"
                rules="required|confirmed:password"
                v-slot="validationContext"
              >
                <b-form-group
                  id="input-group-4"
                  label="Confirm password:"
                  label-for="input-4"
                >
                  <b-form-input
                    type="password"
                    id="input-4"
                    v-model="form.rePassword"
                    required
                    placeholder="Confirm password"
                    :state="getValidationState(validationContext)"
                  />

                  <!--validation message-->
                  <b-form-invalid-feedback id="input-1-live-feedback">
                    {{ validationContext.errors[0] }}
                  </b-form-invalid-feedback>
                </b-form-group>
              </validation-provider>

              <div class="form-controls">
                <div>
                  <b-button type="submit" variant="primary">Submit
                  </b-button>
                  <b-button type="reset" variant="danger">Reset
                  </b-button>
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
    name: "register",
    components: {BestImage, ImageOverlay, Loading, ValidationProvider, ValidationObserver},
    layout: 'auth',
    data() {
      return {
        form: {
          username: '',
          email: '',
          password: '',
          rePassword: '',
        },
        loading: false,
        busy: false,
        alert: {
          enable: false,
          message: '',
          variant: 'danger'
        },
      }
    },
    methods: {
      async onSubmit() {
        this.busy = true;
        try {
          let response = await this.$axios.post('/auth/local/register', this.form);
          console.log(response);
          if (response) {
            this.$bvToast.toast(' ', {
              variant: 'success',
              title: `Your account has been registered!`,
              toaster: 'b-toaster-bottom-center',
              solid: true
            });
            this.$auth.setUser(response.data.user);
            this.$auth.setUserToken(response.data.jwt)
          }
          this.busy = false;
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
        this.busy = true;
        // Reset our form values
        this.form.username = '';
        this.form.email = '';
        this.form.password = '';
        this.form.rePassword = '';
        // Trick to reset/clear native browser form validation state
        this.busy = false;
        this.$nextTick(() => {
          this.$bvToast.toast(' ', {
            variant: 'warning',
            title: `Form has  been reset`,
            toaster: 'b-toaster-bottom-center',
            solid: true
          });
        })
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
