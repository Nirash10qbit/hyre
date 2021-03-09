<template>
  <div>

    <ejs-schedule
      height="650px"
      timezone="Asia/Kolkata"
      :current-view="currentView"
      :group="group"
      :event-settings="eventSettings"
      :popup-open="popUpOpen"
      :show-header-bar="true"
    >
      <e-views>
        <e-view option="TimelineDay" />
        <e-view option="TimelineWeek" />
        <!--        <e-view option="TimelineWorkWeek" />-->
        <!--        <e-view option="TimelineMonth" />-->
        <!--        <e-view option="Agenda" />-->
      </e-views>
      <e-resources>
        <e-resource
          field="ProjectId"
          title="Choose Project"
          name="Projects"
          :data-source="projectResourceDataSource"
          text-field="text"
          id-field="id"
          color-field="color"
        />
        <e-resource
          field="TaskId"
          title="Employee"
          name="Employees"
          :data-source="employeeDataSource"
          :allow-multiple="allowMultiple"
          text-field="text"
          id-field="id"
          group-i-d-field="groupId"
          color-field="color"
        />
      </e-resources>
    </ejs-schedule>

  </div>

</template>

<script>
import {
  SchedulePlugin, Agenda, TimelineViews, TimelineMonth, Resize, DragAndDrop,
} from '@syncfusion/ej2-vue-schedule'
// eslint-disable-next-line import/no-extraneous-dependencies
import { extend } from '@syncfusion/ej2-base'
import Vue from 'vue'

// eslint-disable-next-line no-unused-vars

// const resourceHeaderVue = Vue.component('resource-headerTemplate', {
//   data() {
//     return {
//       data: {},
//     }
//   },
//   computed: {
//     getImage() {
//       return 'https://picsum.photos/200'
//     },
//   },
//   methods: {
//     getEmployeeName(data) {
//       const value = JSON.parse(JSON.stringify(data))
//       return (value.resourceData) ? value.resourceData[value.resource.textField] : value.resourceName
//     },
//     getEmployeeDesignation(data) {
//       const value = JSON.parse(JSON.stringify(data))
//       return value.resourceData.Designation
//     },
//   },
//   template: '<div></div>',
// })

export default Vue.extend({
  name: 'Index',
  comments: {
    SchedulePlugin,
    extend,

  },
  data() {
    return {
      // resourceHeaderTemplate() {
      //   return { template: resourceHeaderVue }
      // },
      timezoneData: [
        { timezone: 'America/New_York', text: '(UTC-05:00) Eastern Time' },
        { timezone: 'UTC', text: 'UTC' },
        { timezone: 'Europe/Moscow', text: '(UTC+03:00) Moscow+00 - Moscow' },
        { timezone: 'Asia/Kolkata', text: '(UTC+05:30) India Standard Time' },
        { timezone: 'Australia/Perth', text: '(UTC+08:00) Western Time - Pert' },
      ],
      projectResourceDataSource: [
        { text: 'Clinical pharmacists (2)', id: 1, color: '#cb6bb2' },
        { text: 'Health and wellbeing coach (2)', id: 2, color: '#56ca85' },
        { text: ' Physician associate (5)', id: 3, color: '#df5286' },
      ],
      employeeDataSource: [
        {
          text: 'Eleanor Pena', id: 1, groupId: 1, color: '#df5286',
        },
        {
          text: 'Devon Lane', id: 2, groupId: 1, color: '#7fa900',
        },
        {
          text: 'Robert', id: 3, groupId: 2, color: '#ea7a57',
        },
        {
          text: 'Smith', id: 4, groupId: 2, color: '#5978ee',
        },
        {
          text: 'Micheal', id: 5, groupId: 3, color: '#df5286',
        },
        {
          text: 'Root', id: 6, groupId: 3, color: '#00bdae',
        },
      ],
      eventSettings: {
        dataSource: this.generateData(),
      },
      selectedDate: new Date(2018, 3, 4),
      currentView: 'TimelineWeek',
      allowMultiple: true,
      group: {
        resources: ['Projects', 'Employees'],
      },
      data: [{
        Id: 1,

        EndTime: new Date('Mon Mar 09 2021 17:14:37 GMT+0530'),
        IsAllDay: false,
        ProjectId: 2,
        StartTime: new Date('Mon Mar 09 2021 16:14:37 GMT+0530'),
        TaskId: 3,
        endTime: new Date('Mon Mar 09 2021 17:15:37 GMT+0530'),
        groupIndex: 4,
        isAllDay: false,
        startTime: new Date('Mon Mar 09 2021 16:15:37 GMT+0530'),

      },
      ],
    }
  },
  provide: {
    schedule: [Agenda, TimelineViews, TimelineMonth, Resize, DragAndDrop],
  },
  methods: {
    // oneventRendered(args) {
    //   const scheduleObj = this.$refs.ScheduleObj
    //   const categoryColor = args.data.CategoryColor
    //   if (!args.element || !categoryColor) {
    //     return
    //   }
    //   if (scheduleObj.ej2Instances.currentView === 'Agenda') {
    //     (args.element.firstChild).style.borderLeftColor = categoryColor
    //   } else {
    //     args.element.style.backgroundColor = categoryColor
    //   }
    // },
    onTimezoneDropDownChange(args) {
      this.$refs.ScheduleObj.ej2Instances.timezone = args.value
    },
    generateData() {
      // let collections = []
      // const dataCollections = []
      // // eslint-disable-next-line no-plusplus
      // for (let i = 0; i < dataCollections.length; i++) {
      //   collections = collections.concat(dataCollections[i])
      // }
      return this.data
    },
    async popUpOpen(value) {
      console.log(value)
    },
  },

})

</script>

<style scoped>
  .schedule-vue-sample .e-schedule:not(.e-device) .e-agenda-view .e-content-wrap table td:first-child {
    width: 90px;
  }

  .schedule-vue-sample .e-schedule .e-agenda-view .e-resource-column {
    width: 100px;
  }
  .schedule-vue-sample .block-events.e-schedule .template-wrap {
    width: 100%;
  }

  .schedule-vue-sample .block-events.e-schedule .e-vertical-view .e-resource-cells {
    height: 58px;
  }

  .schedule-vue-sample .block-events.e-schedule .e-timeline-view .e-resource-left-td,
  .schedule-vue-sample .block-events.e-schedule .e-timeline-month-view .e-resource-left-td {
    width: 170px;
  }

  .schedule-vue-sample .block-events.e-schedule .e-resource-cells.e-child-node .employee-category,
  .schedule-vue-sample .block-events.e-schedule .e-resource-cells.e-child-node .employee-name {
    padding: 5px
  }

  .schedule-vue-sample .block-events.e-schedule .employee-image {
    width: 45px;
    height: 40px;
    float: left;
    border-radius: 50%;
    margin-right: 10px;
  }

  .schedule-vue-sample .block-events.e-schedule .employee-name {
    font-size: 13px;
  }

  .schedule-vue-sample .block-events.e-schedule .employee-designation {
    font-size: 10px;
  }
</style>
