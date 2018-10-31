import { Dish } from './dish';

export const DISHItems: Dish[] = [
    {
      id: 1,
      name: 'Tandoori Pizza',
      image: '/assets/images/Tandoori-BBQ-chicken.jpeg',
      category: 'main',
      label: 'Hot',
      price: '8.99',
      description: 'Spicy Barbeque Sauce, Mozzarella Cheese, Red Onions & Tandoori Barbeque Chicken',
      reviews: [
        {
          rating: 5,
          comment: 'I loved this pizza, it is the best in town',
          author: 'David Lee',
          date: '2017-01-16T15:12:28.556094Z'
        },
        {
          rating: 5,
          comment: 'This is good!',
          author: 'Promod Sreedharan',
          date: '2018-02-06T02:57:28.556094Z'
        },
        {
          rating: 5,
          comment: 'Too much Tandoori, but I still loved it',
          author: 'Mike Tomas',
          date: '2018-10-05T17:12:28.556094Z'
        },
        {
          rating: 3,
          comment: 'Ok Pizza!',
          author: 'Anita Thomas',
          date: '2017-11-13T23:03:28.556094Z'
        },
        {
          rating: 1,
          comment: 'Bad Pizza!',
          author: 'Anonymous',
          date: '2017-09-02T20:20:28.556094Z'
        }
      ]
    },
   {
      id: 2,
      name: 'Curry Veggie Delight',
      image: '/assets/images/Curry-veggie-delight.jpeg',
      category: 'main',
      label: 'Hot',
      price: '9.99',
      description: 'Organic Spicy Veggie Curry will be sure to excite your tastebuds!',
      reviews: [
        {
          rating: 4,
          comment: 'This curry is delicous!',
          author: 'Frank Lee',
          date: '2016-05-07T02:15:28.556094Z'
        },
        {
          rating: 3,
          comment: 'It is just OK',
          author: 'Thomas Stuart',
          date: '2016-06-13T11:33:28.556094Z'
        },
        {
          rating: 1,
          comment: 'Tasted like crap!',
          author: 'Matt Winkle',
          date: '2016-14-16T10:20:28.556094Z'
        }
    ]
    },
   {
      id: 3,
      name: 'Chicken Wings',
      image: '/assets/images/chicken-wings-alla-spina.jpg',
      category: 'appetizer',
      label: 'New',
      price: '6.99',
      description: 'Chicken Wings with Tandoori sauce flavor',
      reviews: [
        {
          rating: 1,
          comment: 'Worst chicken wing I have ever had!',
          author: 'Lee K',
          date: '2016-08-08T01:15:28.556094Z'
        },
        {
          rating: 5,
          comment: 'Delicious!',
          author: 'Michael Lee',
          date: '2016-09-05T19:47:28.556094Z'
        },
        {
          rating: 3,
          comment: 'These were meh',
          author: 'Marshall Mathers',
          date: '2016-04-01T20:37:28.556094Z'
        },
        {
          rating: 4,
          comment: 'Not bad at all',
          author: 'Danielle Kearney',
          date: '2016-11-26T13:13:28.556094Z'
        }
    ]
    },
   {
      id: 4,
      name: 'Mango Lassi',
      image: '/assets/images/mango-lassi.jpg',
      category: 'drinks',
      label: 'cold',
      price: '3.99',
      description: 'A blend of yogurt, water, spices and mango',
      reviews: [
        {
          rating: 5,
          comment: 'Best drink ever!',
          author: 'Lee K',
          date: '2016-07-26T04:57:28.556094Z'
        },
        {
          rating: 2,
          comment: 'Did not taste good',
          author: 'Chas Simmons',
          date: '2016-12-16T15:57:28.556094Z'
        },
        {
          rating: 4,
          comment: 'Mango is my favorite!',
          author: 'Nicholas Pocs',
          date: '2016-01-03T10:57:28.556094Z'
        }
    ]
    }
   ];
