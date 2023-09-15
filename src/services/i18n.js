import i18n from 'i18next';
import { initReactI18next } from 'react-i18next';

i18n.use(initReactI18next).init({
  resources: {
    en: {
      translation: {
        'About Us': 'About Us',
        Support: 'Support',
        Logout: 'Logout',
        Login: 'Login',
        Email: 'Email',
        'Sign Up': 'Sign Up',
        Password: 'Password',
        'Enter password': 'Enter password',
        'Enter email': 'Enter email',
        'Forget you password?': 'Forget you password?',
        Profile: 'Profile',
        Cart: 'Cart',
        Restaurant: 'Restaurant',
        Subscription: 'Subscription',
        Orders: 'Orders',
        'Confirm Password': 'Confirm Password',
        'Enter Confirm Password': 'Enter confirm password',
        Telephone: 'Telephone',
        'Enter telephone': 'Enter telephone',
        'Select City': 'Select City',
        'Search Restaurant': 'Search Restaurant',
        'Do you already have an account? login or create one':
          'Do you already have an account? login or create one',
        'Put your location to ORDER NOW': 'Put your location to ORDER NOW',
        'Welcome to DeliFood, your most reliable food delivery service. We take pride in offering you a wide variety of culinary delights to satisfy your cravings and busy lifestyle. Whether you want a slice of hot pizza, a hearty burger with all the ingredients, a fresh and vibrant salad, or a creamy and delicious pasta, we are here to please you.':
          'Welcome to DeliFood, your most reliable food delivery service. We take pride in offering you a wide variety of culinary delights to satisfy your cravings and busy lifestyle. Whether you want a slice of hot pizza, a hearty burger with all the ingredients, a fresh and vibrant salad, or a creamy and delicious pasta, we are here to please you.'
      }
    },
    es: {
      translation: {
        'About Us': 'Nosotros',
        Support: 'Soporte',
        Logout: 'Cerrar Sesión',
        Login: 'Iniciar Sesión',
        Email: 'Correo Electrónico',
        'Sign Up': 'Registrarse',
        Password: 'Contraseña',
        'Enter password': 'Ingresa contraseña',
        'Enter email': 'Ingresa correo electrónico',
        'Forget you password?': '¿Olvidaste tu contraseña?',
        Profile: 'Perfil',
        Cart: 'Carrito',
        Restaurant: 'Restaurante',
        Subscription: 'Suscripción',
        Orders: 'Pedidos',
        'Confirm Password': 'Confirmar Contraseña',
        'Enter Confirm Password': 'Ingresa confirmación de contraseña',
        Telephone: 'Teléfono',
        'Enter telephone': 'Ingresa teléfono',
        'Select City': 'Selecciona Ciudad',
        'Search Restaurant': 'Buscar Restaurante',
        'Do you already have an account? login or create one':
          '¿Ya tienes una cuenta? inicia sesión o crea una',
        'Put your location to ORDER NOW': 'Pon tu ubicación para ORDENAR AHORA',
        'Welcome to DeliFood, your most reliable food delivery service. We take pride in offering you a wide variety of culinary delights to satisfy your cravings and busy lifestyle. Whether you want a slice of hot pizza, a hearty burger with all the ingredients, a fresh and vibrant salad, or a creamy and delicious pasta, we are here to please you.':
          'Bienvenido a DeliFood, su servicio de entrega de comida más confiable. Nos enorgullecemos de ofrecerle una amplia variedad de delicias culinarias para satisfacer sus antojos y su ajetreado estilo de vida. Ya sea que desee una rebanada de pizza caliente, una hamburguesa abundante con todos los ingredientes, una ensalada fresca y vibrante o una pasta cremosa y deliciosa, estamos aquí para complacerlo.'
      }
    }
  },
  lng: localStorage.getItem('language') || 'en',
  fallbackLng: null,
  interpolation: {
    escapeValue: false
  }
});

export default i18n;
