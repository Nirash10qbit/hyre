<template>
  <b-nav-item-dropdown
    class="dropdown-notification attendance-notification mr-25"
    menu-class="dropdown-menu-media"
    right
    lazy
  >
    <template #button-content>
      <b-button
        v-ripple.400="'rgba(255, 255, 255, 0.15)'"
        variant="primary"
        class="mr-1"
      >
        Attendance
      </b-button>
    </template>

    <!-- Header -->
    <li class="dropdown-menu-header">
      <div class="dropdown-header d-flex">
        <h4 class="notification-title mb-0 mr-auto">
          Attendance
        </h4>
        <b-badge
          pill
          variant="light-primary"
        >
          Today 9
        </b-badge>
      </div>
    </li>

    <form-builder
      ref="formBuilder"
      v-model="attendanceData"
      :on-submit="attendanceOnSubmit"
      grid-class="px-1"
      :form-structure="attendanceForm"
    >
      <!-- Cart Footer -->
      <template
        slot="footer"
      >
        <li class="dropdown-menu-footer">
          <b-button
            v-ripple.400="'rgba(255, 255, 255, 0.15)'"
            variant="primary"
            block
            @click="$refs.formBuilder.submit()"
          >
            Mark Attendance
          </b-button>
        </li>
      </template>
    </form-builder>

  </b-nav-item-dropdown>
</template>

<script>
import {
  BNavItemDropdown, BBadge, BButton,
} from 'bootstrap-vue'
// import VuePerfectScrollbar from 'vue-perfect-scrollbar'
import Ripple from 'vue-ripple-directive'
import FormBuilder from '@/libs/builders/form-builder/FormBuilder.vue'
// import Attendance from '@/apis/modules/attendance'
import Patients from '@/apis/modules/patients'

export default {
  components: {
    BNavItemDropdown,
    BBadge,
    // VuePerfectScrollbar,
    BButton,
    FormBuilder,
  },
  directives: {
    Ripple,
  },
  data() {
    return {
      attendanceData: {},
      attendanceForm: [
        {
          type: 'v-select',
          placeholder: 'Select a patient',
          title: 'Patient',
          value: 'patient_id',
          class: 'mt-1',
          validation: 'required',
          fetch: Patients.indexWithoutPagination,
          fetchFilter: item => ({ label: item.name, value: item.id }),
        },
        {
          type: 'textarea',
          placeholder: 'Note something important',
          title: 'Remarks',
          value: 'remarks',
          class: 'mt-1',
          validation: 'required',
        },
      ],
    }
  },
  methods: {
    async attendanceOnSubmit() {
      console.log(this.attendanceData)
      // Attendance.create()
    },
  },
}
</script>

<style>
  .attendance-notification .dropdown-menu-media {
    width: 25rem !important;
  }
</style>
