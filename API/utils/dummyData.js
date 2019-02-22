export default {
  Meals: [
    {
      id: 1,
      name: 'Fried Rice and Beans',
      Price: '1200',
    },
    {
      id: 2,
      name: 'Plantain and Egg',
      Price: '700',
    },
    {
      id: 3,
      name: 'Fried yam and stew',
      Price: '1000',
    },
    {
      id: 4,
      name: 'Eba and Egusi',
      Price: '750',
    },
    {
      id: 5,
      name: 'Jollof Rice and Chicken',
      Price: '1400',
    },
  ],

  Menu: [
    {
      id: 1,
      vendor_id: 1,
      day: '14/02/2019',
      category: 'Breakfast',
      meals: [
        {
          id: 1,
          name: 'Dodo and Gizzard',
          price: '500',
        },
        {
          id: 2,
          name: 'Yam and Stew',
          price: '800',
        },
        {
          id: 3,
          name: 'Yam and Stew',
          price: '700',
        },
      ],
    },

    {
      id: 2,
      vendor_id: 1,
      day: '14/02/2019',
      category: 'Lunch',
      meals: [
        {
          id: 3,
          name: 'Ewa agoyin',
          price: '500',
        },
        {
          id: 4,
          name: 'Yam and Egg',
          price: '800',
        },
        {
          id: 5,
          name: 'Peppersoup',
          price: '700',
        },
      ],
    },

    {
      id: 2,
      vendor_id: 1,
      day: '14/02/2019',
      category: 'Dinner',
      meals: [
        {
          id: 3,
          name: 'Ewa agoyin',
          price: '500',
        },
        {
          id: 4,
          name: 'Yam and Egg',
          price: '800',
        },
        {
          id: 5,
          name: 'Peppersoup',
          price: '700',
        },
      ],
    },

  ],

  Orders: [
    {
      id: 1,
      customer_id: 3,
      vendor_id: 7,
      dateCreated: '14/02/2019',
      meal: [
        {
          id: 5,
          name: 'Ewa agoyin',
          price: '500',
        },
        {
          id: 6,
          name: 'Bread and wine',
          price: '700',
        },
      ],
    },
    {
      id: 2,
      customer_id: 4,
      vendor_id: 3,
      dateCreated: '15/02/2019',
      meal: [
        {
          id: 1,
          name: 'Efo riro',
          price: '350',
        },
        {
          id: 3,
          name: 'Fried Fish',
          price: '700',
        },
      ],
    },
  ],
};
