export default [
  {
    path: '/scheduler',
    name: 'scheduler',
    component: () => import('@/views/scheduler/index.vue'),
    meta: {
      // pageTitle: 'Scheduler',
      // breadcrumb: [
      //   {
      //     text: 'Scheduler',
      //     active: true,
      //   },
      // ],
    },
  },
]
