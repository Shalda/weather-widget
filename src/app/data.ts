import {of} from 'rxjs';

export interface IWeather {
    'title': string;
    'icon': string;
    'water': number;
    'temperature': number;
}

export interface ISocial {
    'title': string;
    'img': string;
    'followers': number;
    'following': number;
}

export interface IPlaces {
    'img': string;
    'address': string;
    'phone': number;
    'weather': IWeather;
    'social_info': ISocial;
    'type': string;
}

export const places = [
    {
        'img': 'assets/images/hotel1.png',
        'address': 'street 1, house 1',
        'phone': 6238795,
        'weather': {
            'title': 'Hotel One',
            'icon': 'assets/images/sunny.png',
            'water': 23,
            'temperature': 29,
        },
        'social_info': {
            'title': 'Hotel One',
            'img': 'assets/images/hotel1.png',
            'followers': 598,
            'following': 450,
        },
        'type': 'Hotel',
    },
    {
        'img': 'assets/images/hotel2.png',
        'address': 'street 2, house 2',
        'phone': 8932147,
        'weather': {
            'title': 'Hotel Two',
            'icon': 'assets/images/cloudy.png',
            'water': 20,
            'temperature': 25,
        },
        'social_info': {
            'title': 'Hotel One',
            'img': 'assets/images/hotel2.png',
            'followers': 421,
            'following': 125,
        },
        'type': 'Hotel',
    },
    {
        'img': 'assets/images/tour1.png',
        'address': 'avenue 1, flat 1',
        'phone': 2654896,
        'weather': {
            'title': 'Tour One',
            'icon': 'assets/images/snowy.png',
            'water': 3,
            'temperature': -10,
        },
        'social_info': {
            'title': 'Tour One',
            'img': 'assets/images/tour1.png',
            'followers': 321,
            'following': 431,
        },
        'type': 'Tours',
    },
    {
        'img': 'assets/images/tour2.png',
        'address': 'avenue 2, flat 12',
        'phone': 7985632,
        'weather': {
            'title': 'Tour Two',
            'icon': 'assets/images/sunny.png',
            'water': 17,
            'temperature': 22,
        },
        'social_info': {
            'title': 'Tour Two',
            'img': 'assets/images/tour2.png',
            'followers': 123,
            'following': 342,
        },
        'type': 'Tours',
    },
    {
        'img': 'assets/images/fishing1.png',
        'address': 'main square 1, app 12',
        'phone': 7985632,
        'weather': {
            'title': 'Fishing One',
            'icon': 'assets/images/sunny.png',
            'water': 15,
            'temperature': 19,
        },
        'social_info': {
            'title': 'Fishing One',
            'img': 'assets/images/fishing1.png',
            'followers': 25,
            'following': 10,
        },
        'type': 'Fishing',
    },
    {
        'img': 'assets/images/fishing2.png',
        'address': 'main square 5, app 13',
        'phone': 1256921,
        'weather': {
            'title': 'Fishing Two',
            'icon': 'assets/images/rainy.png',
            'water': 12,
            'temperature': 15,
        },
        'social_info': {
            'title': 'Fishing Two',
            'img': 'assets/images/fishing2.png',
            'followers': 2,
            'following': 0,
        },
        'type': 'Fishing',
    }
];
export const places$ = of(places);


