import { Injectable } from '@angular/core';
import { AProduct } from '../interfaces/aproduct';
import { Observable, of} from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class DataService {
  //itemsInCart: AProduct[] = [];
  products: AProduct[] = [
    {
      id: '1',
      name: 'Aboniki Balm',
      description: 'ABONIKI is used for the QUICK RELIEF of Major Body aches, Back, waist and joint pains, Rheumatism, Asthma, Bronchitis, Cold, Catarrh, Arthritis, Sprain.',
      category: 'Cosmetics',
      price: '6.00',
      image: '../../../../assets/aboniki.png',
      nameURL: 'AbonikiBalm',
      quantity:0
    },
    {
      id: '2',
      name: 'Adom Kooko Capsules',
      description: 'Adom Koo Capsules or Liquid : Benefit of product: Relief of constipation, piles, and waist pains cures. Improves eyesight.',
      category: 'Natural Supplement',
      price: '19.00',
      image: '../../../../assets/Adom.jpeg',
      nameURL: 'adom',
      quantity:0
    },
    {
      id: '3',
      name: 'Al Amair Corned Beef',
      description: 'Al Amair Corned Beef',
      category: 'Can Foods',
      price: '6.00',
      image: '../../../../assets/cbeef.jpeg',
      nameURL: 'cbeef',
      quantity:0
    },
    {
      id: '4',
      name: 'Banku Mix Flour',
      description: 'Banku is a dish commonly eaten in Ghana. It  is prepared by mixing fermented corn and cassava dough in varied proportions. Served with soup, stew or pepper sauce. This is a flour mix and very easy to prepare. African Market MN’s Banku mix flour doesn’t have any preservatives. Making banku from the flour mix. Add water and stir until it isn’t lumpy before heating it up on the stove. Keep stirring your banku up until it gets thick. Add salt to taste.',
      category: 'Grains',
      price: '10.00',
      image: '../../../../assets/banku.jpeg',
      nameURL: 'banku',
      quantity:0
    },
    {
      id: '5',
      name: 'Carnation Milk',
      description: 'Carnation Milk',
      category: 'Can Foods',
      price: '3.00',
      image: '../../../../assets/carnation.jpeg',
      nameURL: 'carnation',
      quantity:0
    },
    {
      id: '6',
      name: 'Hytop Canola Oil',
      description: 'Canola Oil',
      category: 'Cooking Oil',
      price: '19.00',
      image: '../../../../assets/hytopoil.jpeg',
      nameURL: 'hytopoil',
      quantity:0
    },
    {
      id: '7',
      name: 'Corn Oil Pure',
      description: 'Corn Oil Pure : Corn oil (maize oil) is oil extracted from the germ of corn (maize). Its main use is in cooking, where its high smoke point makes refined corn oil a valuable frying oil.  It is also a key ingredient in some margarines. Corn oil is generally less expensive than most other types of vegetable oils. One bushel of corn contains 1.55 pounds of corn oil (2.8% by weight). Corn agronomists have developed high-oil varieties; however, these varieties tend to show lower field yields, so they are not universally accepted by growers.',
      category: 'Cooking Oil',
      price: '10.00',
      image: '../../../../assets/cornoil.jpeg',
      nameURL: 'cornoil',
      quantity:0
    },
    {
      id: '8',
      name: 'Sodium Bicarbonate',
      description: 'Bicarbonate of Soda is a stalwart in any bakers’ cupboard, as it can be used in so many different recipes',
      category: 'Grains',
      price: '3.00',
      image: '../../../../assets/sodium.jpg',
      nameURL: 'sodium',
      quantity:0
    },
    {
      id: '9',
      name: 'Apeti Syrup',
      description: 'Apeti Syrup is an antihistamine, prescribed for allergic rhinitis. It blocks the action of histamine, which reduces allergy symptoms.',
      category: 'Beverages',
      price: '18.00',
      image: '../../../../assets/apeti.jpeg',
      nameURL: 'apeti',
      quantity:0
    },
    {
      id: '10',
      name: 'Dobrova Strudel Cherry',
      description: 'Dobrova Strudel Cherry',
      category: 'Candy',
      price: '3.00',
      image: '../../../../assets/dobrova.jpeg',
      nameURL: 'dobrova',
      quantity:0
    },
    {
      id: '11',
      name: 'Blue Diamond Naphtalene Balls',
      description: 'Blue Diamond Naphthalene Balls are made up with high-graded naphthalene and 99% up pure moth balls colored in clean snow white. It brings you protection from silverfish, moths, cockroaches and other dirty pests. You can put Canfor directly with clothing, or leather, or books etc. Blue Diamond Naphthalene Balls can prevent mildew and moth from your living room and toilet.',
      category: 'Sanitation',
      price: '12.00',
      image: '../../../../assets/napth.jpeg',
      nameURL: 'naphtalene',
      quantity:0
    },

    {
      id: '12',
      name: 'Maggi Cube Chicken',
      description: 'Maggi Cube Chicken',
      category: 'Spices',
      price: '10.00',
      image: '../../../../assets/maggi.jpg',
      nameURL: 'maggi',
      quantity:0
    },

    {
      id: '13',
      name: 'Attieke Box',
      description: 'Attiéké (also spelled acheke) is a side dish made from cassava that is a part of the cuisine of Côte d’Ivoire in Africa. The dish is prepared from fermented cassava pulp that has been grated or granulated. Dried attiéké is also prepared, which is similar in texture to couscous. It’s a common and traditional dish in Côte d’Ivoire that originated in the southern part of the country, and methods for its production are well known in Côte d’Ivoire and also in Benin.',
      category: 'Grains',
      price: '5.00',
      image: '../../../../assets/attieke.jpeg',
      nameURL: '',
      quantity:0
    },

    {
      id: '14',
      name: 'Al Amir Brown Rice',
      description: '',
      category: 'Grain',
      price: '18.00',
      image: '../../../../assets/brownrice.jpeg',
      nameURL: 'brownrice',
      quantity:0
    },

    {
      id: '15',
      name: 'Nina Egusi Melon',
      description: '',
      category: 'Grain',
      price: '6.00',
      image: '../../../../assets/ninamelon.jpeg',
      nameURL: 'ninamelon',
      quantity:0
    },

    {
      id: '16',
      name: '',
      description: '',
      category: '',
      price: '19.00',
      image: '../../../../assets/aboniki.png',
      nameURL: '',
      quantity:0
    },

  ]

  constructor() { }

  getProducts(): AProduct[] {
    return this.products;
  }

  getProduct(sku: string): Observable<AProduct> {
    return of(
    this.products.find(
      somethingElse => somethingElse.id === sku
    ));
  }


  // addToCart(cartItem: AProduct)
  // {
  //   if(!this.itemsInCart.includes(cartItem)) {
  //   cartItem.quantity++;
  //   this.itemsInCart.push(cartItem);
  //   console.log(this.itemsInCart);
  //   }
  //   else
  //   {
        
  //   }

  // }

  // getCartItems(): AProduct[] {
  //   return this.itemsInCart;
  // }
  // emptyCart()
  // {
  //   this.itemsInCart.length=0;

  // }
  // removeItemFromCart(id: AProduct)
  // {
  //   //find the location of the product
  //   const index = this.findItemInCart(id);
  //   //perform a splice
  //   this.itemsInCart.splice(index,1);

  // }

  // findItemInCart(id: AProduct):number {
  //   //we are going to find the product in our cart
  //   return this.itemsInCart.indexOf(id);
    
  // }


}



