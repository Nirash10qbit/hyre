export default [
  {
    path: '/patients',
    name: 'patients',
    component: () => import('@/views/patient/index.vue'),
    meta: {
      pageTitle: 'Patients',
      breadcrumb: [
        {
          text: 'Patients',
          active: true,
        },
      ],
    },
  },
  {
    path: '/patients-attendance',
    name: 'patients-attendance',
    component: () => import('@/views/patient/attendance.vue'),
    meta: {
      pageTitle: 'Patients Attendance',
      breadcrumb: [
        {
          text: 'Patients Attendance',
          active: true,
        },
      ],
    },
  },
]
