import express from 'express';
import bodyParser from 'body-parser';

// meal routes
import mealRoutes from './routes/meal.route';

const app = express();

const PORT = 9001;

app.use(bodyParser.json());

app.get('/', (req, res) => {
  res.send('The API is working!');
});

// handle
app.use('/api/v1/meals', mealRoutes);

app.listen(PORT, () => {
  console.log(`The server is now running on PORT: ${PORT}`);
});
