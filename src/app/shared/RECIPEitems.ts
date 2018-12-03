import { Recipe } from './recipe';

export const RECIPEItems: Recipe[] = [
  {
    id: 1,
    name: 'Hot Sauce Mac and Cheese',
    image: '/assets/images/mac.jpg',
    label: 'Entree',
    price: '8.99',
    description: 'Spicy Hot Sauce and Mac and Cheese',
    difficulty: 'Easy',
    reviews: [
      {
        rating: 5,
        comment: 'I loved this mac and cheese, it is the best.',
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
        comment: 'Too much Cheese, but I still loved it',
        author: 'Mike Tomas',
        date: '2018-10-05T17:12:28.556094Z'
      },
      {
        rating: 3,
        comment: 'Ok Mac and Cheese!',
        author: 'Anita Thomas',
        date: '2017-11-13T23:03:28.556094Z'
      },
      {
        rating: 1,
        comment: 'Bad Mac and Cheese!',
        author: 'Anonymous',
        date: '2017-09-02T20:20:28.556094Z'
      }
    ]
  },
 {
    id: 2,
    name: 'Spicy Buffalo Wings',
    image: '/assets/images/hotwings.jpg',
    label: 'Appetizer',
    price: '4.99',
    description: 'Spicy Buffalo Wing Recipe',
    difficulty: 'Medium',
    reviews: [
      {
        rating: 4,
        comment: 'These wings are delicous!',
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
    name: 'Bloody Mary',
    image: '/assets/images/bloody.jpg',
    label: 'Drink',
    price: '6.99',
    description: 'A nice bloody mary to start your day',
    difficulty: 'Easy',
    reviews: [
      {
        rating: 1,
        comment: 'Worst bloody mary I have ever had!',
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
        comment: 'This was meh',
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
    name: 'Hot Sauce Pizza',
    image: '/assets/images/pizza.jpg',
    label: 'Entree',
    price: '3.99',
    description: 'A spicy pizza with hot sauce as the base',
    difficulty: 'Hard',
    reviews: [
      {
        rating: 5,
        comment: 'Best pizza ever!',
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
        comment: 'Pizza is my favorite!',
        author: 'Nicholas Pocs',
        date: '2016-01-03T10:57:28.556094Z'
      }
  ]
  }
];
