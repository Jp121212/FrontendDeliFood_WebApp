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
import { useState } from 'react';
import { useTranslation } from 'react-i18next';

const home = () => {
  const { t } = useTranslation();
  const [sort, setSort] = useState({
    sort: ''
  });

  const GoHome = (selectedValue) => {
    setSort({ sort: selectedValue });
    console.log(selectedValue);
  };

  const options = [
    {
      name: t('Fast Food'),
      img: fastfood
    },
    {
      name: t('Sea Food'),
      img: seafood
    },
    {
      name: t('Healthy'),
      img: healthy
    },
    {
      name: t('Offers'),
      img: offers
    },
    {
      name: t('Vegan'),
      img: vegan
    },
    {
      name: t('Coffe'),
      img: coffe
    },
    {
      name: t('Desserts'),
      img: desserts
    },
    {
      name: t('Smoothies'),
      img: smoothies
    },
    {
      name: t('Drinks'),
      img: drinks
    },
    {
      name: t('National'),
      img: national
    },
    {
      name: t('Breakfast'),
      img: breakfast
    },
    {
      name: t('Dinner'),
      img: dinner
    },
    {
      name: t('BBQ'),
      img: bbq
    },
    {
      name: t('Asian'),
      img: asian
    },
    {
      name: t('Mexican'),
      img: mexican
    }
  ];
  return (
    <>
      <div className="ContentHome">
        <div className="Category">
          <Category options={options} onClick={GoHome} value={sort} />
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
