import { Dish } from './dish';

export const DISHItems: Dish[] = [
    {
      id: 1,
      name: 'Green Sauce - Mild',
      image: '/assets/images/GreenSauce.jpg',
      category: 'sauce',
      label: 'Mild',
      price: '20.99',
      description: 'A mild green sauce made from Tomatillo chilis.',
      reviews: [
        {
          rating: 5,
          comment: 'I loved this sauce, it is the best in town',
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
          comment: 'Too much Tomatillo, but I still loved it',
          author: 'Mike Tomas',
          date: '2018-10-05T17:12:28.556094Z'
        },
        {
          rating: 3,
          comment: 'Ok Sauce!',
          author: 'Anita Thomas',
          date: '2017-11-13T23:03:28.556094Z'
        },
        {
          rating: 1,
          comment: 'Bad Sauce!',
          author: 'Anonymous',
          date: '2017-09-02T20:20:28.556094Z'
        }
      ]
    },
   {
      id: 2,
      name: 'Sauce Multi Pack',
      image: '/assets/images/MultiSauce.jpg',
      category: 'sauce',
      label: 'Mix',
      price: '30.99',
      description: 'A mixed pack of our msot popular hot sauces.',
      reviews: [
        {
          rating: 4,
          comment: 'This sauce is delicous!',
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
      name: 'Sauce Recipes',
      image: '/assets/images/RecipeSauce.jpg',
      category: 'recipe',
      label: 'Recipe',
      price: '10.99',
      description: 'A book containing our most popular hot sauce recipes!',
      reviews: [
        {
          rating: 1,
          comment: 'Worst recipe book I have ever had!',
          author: 'Lee K',
          date: '2016-08-08T01:15:28.556094Z'
        },
        {
          rating: 5,
          comment: 'Delicious recipes!',
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
      name: 'Spicy Sauce',
      image: '/assets/images/SpicySauce.jpg',
      category: 'sauce',
      label: 'Spicy',
      price: '14.99',
      description: 'Our spiciest sauce!',
      reviews: [
        {
          rating: 5,
          comment: 'Best sauceever!',
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
          comment: 'Spicy is my favorite!',
          author: 'Nicholas Pocs',
          date: '2016-01-03T10:57:28.556094Z'
        }
    ]
    }
   ];
