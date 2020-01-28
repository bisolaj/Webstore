import { Injectable } from '@angular/core';
import { AProduct } from '../interfaces/aproduct';

@Injectable({
  providedIn: 'root'
})
export class AdataService {
  id: string;
  name: string;
  description: string;
  category: string;
  price: number;
  image: string;
  products: AProduct[] = [
    {
      id: '1',
      name: 'Aboniki Balm',
      description: 'ABONIKI is used for the QUICK RELIEF of Major Body aches, Back, waist and joint pains, Rheumatism, Asthma, Bronchitis, Cold, Catarrh, Arthritis, Sprain.',
      category: 'Cosmetics',
      price: 5.45,
      image: '../../../../assets/aboniki.png',
      nameURL: 'AbonikiBalm'
    },
    {
      id: '2',
      name: 'Adom Kooko Capsules',
      description: 'Adom Koo Capsules or Liquid : Benefit of product: Relief of constipation, piles, and waist pains cures. Improves eyesight.',
      category: 'Natural Supplement',
      price: 18.75,
      image: '../../../../assets/adom.jpeg',
      nameURL: ''
    },
    {
      id: '3',
      name: 'Al Amair Corned Beef',
      description: 'Al Amair Corned Beef',
      category: 'Can Foods',
      price: 5.99,
      image: '../../../../assets/cbeef.jpeg',
      nameURL: ''
    },
    {
      id: '4',
      name: 'Banku Mix Flour',
      description: 'Banku is a dish commonly eaten in Ghana. It  is prepared by mixing fermented corn and cassava dough in varied proportions. Served with soup, stew or pepper sauce. This is a flour mix and very easy to prepare. African Market MN’s Banku mix flour doesn’t have any preservatives. Making banku from the flour mix. Add water and stir until it isn’t lumpy before heating it up on the stove. Keep stirring your banku up until it gets thick. Add salt to taste.',
      category: 'Grains',
      price: 9.99,
      image: '../../../../assets/banku.jpeg',
      nameURL: ''
    },
    {
      id: '5',
      name: 'Carnation Milk',
      description: 'Carnation Milk',
      category: 'Can Foods',
      price: 3.25,
      image: '../../../../assets/carnation.jpeg',
      nameURL: ''
    },
    {
      id: '6',
      name: 'Hytop Canola Oil',
      description: 'Canola Oil',
      category: 'Cooking Oil',
      price: 18.75,
      image: '../../../../assets/hytopoil.png',
      nameURL: ''
    },
    {
      id: '7',
      name: 'Corn Oil Pure',
      description: 'Corn Oil Pure : Corn oil (maize oil) is oil extracted from the germ of corn (maize). Its main use is in cooking, where its high smoke point makes refined corn oil a valuable frying oil.  It is also a key ingredient in some margarines. Corn oil is generally less expensive than most other types of vegetable oils. One bushel of corn contains 1.55 pounds of corn oil (2.8% by weight). Corn agronomists have developed high-oil varieties; however, these varieties tend to show lower field yields, so they are not universally accepted by growers.',
      category: 'Cooking Oil',
      price: 9.99,
      image: '../../../../assets/cornoil.jpeg',
      nameURL: ''
    },
    {
      id: '8',
      name: 'Sodium Bicarbonate',
      description: 'Bicarbonate of Soda is a stalwart in any bakers’ cupboard, as it can be used in so many different recipes',
      category: 'Grains',
      price: 2.95,
      image: '../../../../assets/sodium.jpg',
      nameURL: ''
    },
    {
      id: '9',
      name: 'Apeti Syrup',
      description: 'Apeti Syrup is an antihistamine, prescribed for allergic rhinitis. It blocks the action of histamine, which reduces allergy symptoms.',
      category: 'Beverages',
      price: 17.99,
      image: '../../../../assets/aboniki.png',
      nameURL: ''
    },
    {
      id: '10',
      name: '',
      description: '',
      category: '',
      price: 18.75,
      image: '../../../../assets/aboniki.png',
      nameURL: ''
    },
    {
      id: '11',
      name: '',
      description: '',
      category: '',
      price: 18.75,
      image: '../../../../assets/aboniki.png',
      nameURL: ''
    },
  ]

  constructor() { }
}
