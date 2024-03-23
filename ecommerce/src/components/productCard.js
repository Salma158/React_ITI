import { Card, CardActionArea, CardContent, CardMedia, Typography, Grid } from '@mui/material';
import { Link } from 'react-router-dom';

const ProductItem = ({ product }) => {
  return (
    <Grid item xs={12} sm={6} md={4} lg={3}>
      <Card>
      <Link to={`/products/${product.id}`} style={{ textDecoration: 'none' }}>
        <CardActionArea>
          <CardMedia
            component="img"
            height="200"
            image={product.thumbnail}
            alt={product.title}
          />
          <CardContent>
            <Typography gutterBottom variant="h6" component="div">
              {product.title}
            </Typography>
            <Typography variant="body2" color="text.secondary">
              {product.category}
            </Typography>
          </CardContent>
        </CardActionArea>
        </Link>
      </Card>
    </Grid>
  );
};

export default ProductItem