import Box from '@mui/material/Box';
import theme from './theme.jsx';

function Category(props) {
  const img = {
    width: '100%',
    height: '35px'
  };

  console.log(props.options);

  return (
    <div
      style={{
        display: 'flex',
        gap: '19.5px',
        width: '100%',
        overflow: 'hidden',
        overflowX: 'auto'
      }}>
      {props.options &&
        props.options.map((el, i) => {
          return (
            <Box
              key={i}
              value={el}
              sx={{
                borderRadius: '5px',
                height: '55px',
                display: 'flex',
                padding: '10px',
                minWidth: '150px',
                cursor: 'pointer',
                backgroundColor: theme.palette.quinary,
                '&:hover': {
                  backgroundColor: theme.palette.primary
                }
              }}>
              <div style={{ margin: 'auto', width: '100%' }}>
                <img style={img} src={el.img}></img>{' '}
                <p
                  style={{
                    margin: '0',
                    fontSize: '12px',
                    fontWeight: '500',
                    width: '100%',
                    textAlign: 'center',
                    color: theme.palette.quaternary
                  }}>
                  {el.name}
                </p>
              </div>
            </Box>
          );
        })}
    </div>
  );
}

export default Category;
