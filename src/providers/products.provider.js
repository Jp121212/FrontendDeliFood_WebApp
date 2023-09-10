import React, { useMemo, useState, useEffect } from 'react';

export const ProductsContext = React.createContext();

export const ProductsProvider = ({ children }) => {
  const [products, setProducts] = useState([]);
  const [alert, setAlert] = useState();
  const [severity, setSeverity] = useState();
  const [open, setOpen] = useState(false);
  const [badgeCount, setBadgeCount] = useState(() => {
    const count = localStorage.getItem('badgeCount');
    return count ? JSON.parse(count) : 1;
  });

  useEffect(() => {
    localStorage.setItem('badgeCount', JSON.stringify(badgeCount));
  }, [badgeCount]);

  useEffect(() => {
    if (alert) {
      if (alert === 'Product added to cart') {
        setSeverity('success');
        setOpen(true);
      } else {
        setSeverity('error');
        setOpen(true);
      }
    }
  }, [alert, severity]);

  useEffect(() => {
    const saveProductslocalStorage = (products) => {
      localStorage.setItem('products', JSON.stringify(products));
    };
    saveProductslocalStorage(products);
  }, [products]);

  useEffect(() => {
    const storedproducts = localStorage.getItem('products');
    if (storedproducts) {
      setProducts(JSON.parse(storedproducts));
    }
  }, []);

  //   const addProduct = (productprops) => {
  //     if (productprops.name && productprops.price && productprops.image) {
  //       setProducts((products) => [...products, productprops]);
  //       setAlert('Product added to cart');
  //       setBadgeCount(badgeCount + 1);
  //     } else {
  //       setAlert('Error adding product to cart');
  //     }
  //   };

  //   const removeProduct = (productprops) => {
  //     const RemoveProduct = products.findIndex((product) => product.id === productprops.id);
  //     if (RemoveProduct !== -1) {
  //       setBadgeCount(products.length - 1 > 0 ? products.length - 1 : 0);
  //       setProducts([...products.slice(0, RemoveProduct), ...products.slice(RemoveProduct + 1)]);
  //       setAlert('Product removed from cart');
  //     } else {
  //       setAlert('Error removing product from cart');
  //     }
  //   };
  const Values = useMemo(() => ({
    products,
    setProducts,
    alert,
    setAlert,
    severity,
    setSeverity,
    open,
    setOpen,
    badgeCount,
    setBadgeCount
  }));

  return <ProductsContext.Provider value={Values}>{children}</ProductsContext.Provider>;
};
