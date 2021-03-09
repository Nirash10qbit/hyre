export default [
  {
    path: '/members',
    name: 'members',
    component: () => import('@/views/members/index.vue'),
    meta: {
      pageTitle: 'Members',
      breadcrumb: [
        {
          text: 'Members',
          active: true,
        },
      ],
    },
  },
]
