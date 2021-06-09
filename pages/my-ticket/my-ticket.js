const ONLINE = 0;
const OFFLINE = 1;

Page({
  data: {
    ONLINE,
    OFFLINE,
    tabs: [
      {
        id: ONLINE,
        title: '线上使用优惠券',
        onClick: () => {},
      },
      {
        id: OFFLINE,
        title: '到店使用优惠券',
        onClick: () => {},
      },
    ],
    tickets: [
      {
        id: 0,
        price: 10,
        baseline: 100,
        startAt: '2021.4.01',
        endAt: '2021.12.31',
      },
      {
        id: 0,
        price: 30,
        baseline: 300,
        startAt: '2021.4.01',
        endAt: '2021.12.31',
      },
      {
        id: 0,
        price: 5,
        baseline: 30,
        startAt: '2021.4.01',
        endAt: '2021.12.31',
      },
    ],
    activeId: 0,
  },
  onLoad() {},
  onTabItemTap(id) {
    console.log(id);
    this.setData({ activeId: id });
  },
});
