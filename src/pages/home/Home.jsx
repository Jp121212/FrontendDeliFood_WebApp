import '../../styles/home.css';
import Category from '../../components/Category';
import fastfood from '../../assets/fastfood.svg';
import coffe from '../../assets/coffe.svg';
import healthy from '../../assets/healthy.svg';
import offers from '../../assets/offers.svg';
import vegan from '../../assets/vegan.svg';
import desserts from '../../assets/desserts.svg';
import smoothies from '../../assets/smoothies.svg';
import seafood from '../../assets/seafood.svg';
import national from '../../assets/national.svg';
import drinks from '../../assets/drinks.svg';
import breakfast from '../../assets/breakfast.svg';
import dinner from '../../assets/dinner.svg';
import bbq from '../../assets/bbq.svg';
import asian from '../../assets/asian.svg';
import mexican from '../../assets/mexican.svg';

const home = () => {
  const options = [
    {
      name: 'Fast Food',
      img: fastfood
    },
    {
      name: 'Sea Food',
      img: seafood
    },
    {
      name: 'Healthy',
      img: healthy
    },
    {
      name: 'Offers',
      img: offers
    },
    {
      name: 'Vegan',
      img: vegan
    },
    {
      name: 'Coffe',
      img: coffe
    },
    {
      name: 'Desserts',
      img: desserts
    },
    {
      name: 'Smoothies',
      img: smoothies
    },
    {
      name: 'Drinks',
      img: drinks
    },
    {
      name: 'National',
      img: national
    },
    {
      name: 'Breakfast',
      img: breakfast
    },
    {
      name: 'Dinner',
      img: dinner
    },
    {
      name: 'BBQ',
      img: bbq
    },
    {
      name: 'Asian',
      img: asian
    },
    {
      name: 'Mexican',
      img: mexican
    }
  ];
  return (
    <>
      <div className="ContentHome">
        <div className="Category">
          <Category options={options} />
        </div>
        <div className="Promos"></div>
        <div className="Restaurants">
          <div className="GetRestaurant"></div>
          <div className="SortOptions"></div>
        </div>
      </div>
    </>
  );
};
export default home;
