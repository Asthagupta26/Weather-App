import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Typography from '@mui/material/Typography';
import "./InfoBox.css";

export default function InfoBox({ info }){
const INIT_URL="https://images.unsplash.com/photo-1587513418817-a84420e494ad?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8MzJ8fGR1c3R5JTIwd2VhdGhlcnxlbnwwfHwwfHx8MA%3D%3D"

const HOT_URL="https://media.istockphoto.com/id/1226628621/photo/summer-background-orange-sky-with-clouds-and-bright-sun.jpg?s=2048x2048&w=is&k=20&c=N5Nkcvvh41O4WYiv9zf5Pez6CTB9GoB3DFMlf5_ysys=";
const COLD_URL="https://images.unsplash.com/photo-1564314968303-86c5df2b9a4c?w=500&auto=format&fit=crop&q=60&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8NHx8Q09MRCUyMFdFQVRIRVJ8ZW58MHx8MHx8fDA%3D";
const RAIN_URL="https://media.istockphoto.com/id/1473522114/photo/water-drops-on-leaves-hd-4k-photo-of-leaves-with-water-drops-rain-drops-on-leaves-in-farm.jpg?s=2048x2048&w=is&k=20&c=54ekMEgtwdb-2NJw09LVe2tfuTUyYTjuUyhPydT9x-c=";
   return (
    <div className="InfoBox">
    
    
    <div className="cardContainer">
    <Card sx={{ maxWidth: 345 }}>
      <CardMedia
        sx={{ height: 140 }}
        image={info.humidity>80 ?RAIN_URL: info.temp>15 ?HOT_URL :COLD_URL}
        title="green iguana"
      />
      <CardContent>
        <Typography gutterBottom variant="h5" component="div">
          {info.city}
        </Typography>
        <Typography variant="body2" color="text.secondary" component={"span"}>
          <p>Temperature={info.temp}&deg;C</p>
          <p>Humidity={info.humidity}&deg;C</p>
          <p>Minimum Temperature={info.tempMin}&deg;C</p>
          <p>Maximum Temperature={info.tempMax}&deg;C</p>
          <p>The weather can be described as {info.weather} and feels like {info.feelsLike}&deg;C  </p>

        </Typography>
      </CardContent>
      
    </Card>
    </div>
    </div>
   );
} 