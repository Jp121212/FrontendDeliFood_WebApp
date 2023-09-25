import Card from '@mui/material/Card';
import '../styles/auth.css';
import CardContent from '@mui/material/CardContent';
import Typography from '@mui/material/Typography';
import theme from '../components/theme.jsx';

function PromoCard({ title, price, description, image }) {
  const cardStyle = {
    maxWidth: '25%',
    minWidth: '400px',
    minHeight: '100%',
    position: 'relative',
    cursor: 'pointer',
    transition: 'transform 0.3s ease', // Agregamos una transición suave
    '&:hover': {
      transform: 'scale(1.05)' // Hacemos que el card se agrande en un 5% al pasar el mouse
    }
  };

  const titleStyle = {
    color: '#fff',
    fontWeight: 'bold',
    fontSize: '24px',
    fontFamily: 'Poppins, sans-serif'
  };

  const priceStyle = {
    marginTop: '15%',
    color: '#fff',
    fontSize: '14px',
    fontFamily: 'Poppins, sans-serif'
  };

  const descriptionStyle = {
    marginTop: '10%',
    color: '#fff',
    fontSize: '12px',
    fontFamily: 'Poppins, sans-serif'
  };

  const card = {
    position: 'absolute',
    width: '100%',
    minHeight: '100%',
    backgroundRepeat: 'no-repeat',
    backgroundPosition: 'center',
    backgroundSize: 'cover',
    display: 'flex',
    padding: '0px',
    margin: '0px',
    borderRadius: '5px'
  };

  const left = {
    width: '50%',
    backgroundColor: theme.palette.quinary
  };

  const right = {
    width: '50%',
    backgroundImage: image,
    backgroundRepeat: 'no-repeat',
    backgroundSize: 'cover',
    backgroundPosition: 'center'
  };

  return (
    <Card sx={cardStyle}>
      <CardContent sx={card}>
        <CardContent sx={left}>
          <Typography variant="h3" style={titleStyle}>
            {title}
          </Typography>
          <Typography variant="h1" style={descriptionStyle}>
            {description}
          </Typography>
          <Typography variant="h1" style={priceStyle}>
            Price: {price}
          </Typography>
        </CardContent>
        <CardContent sx={right}> </CardContent>
      </CardContent>
    </Card>
  );
}

export default PromoCard;
