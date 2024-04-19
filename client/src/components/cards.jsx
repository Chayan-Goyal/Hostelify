import * as React from 'react';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Typography from '@mui/material/Typography';
import { CardActionArea} from '@mui/material';

export function ActionAreaCard1() {
  return (
    <Card sx={{ maxWidth: 345, margin: 'auto', boxShadow: '0 4px 8px rgba(0, 0, 0, 0.3)' }}>
      <CardActionArea>
        <CardMedia
          component="img"
          height="300"
          image="https://www.dimensions-architect.com/wp-content/uploads/2014/07/Scholars-Institute-building.png"
          alt="Hostel"
        />
        <CardContent>
          <Typography variant="body2" color="text.secondary">
          Inviting common area with stylish furnishings, perfect for socializing and relaxing after a day of adventures.
          </Typography>
        </CardContent>
      </CardActionArea>
    </Card>
  );
}

export function ActionAreaCard2() {
  return (
    <Card sx={{ maxWidth: 345, margin: 'auto', boxShadow: '0 4px 8px rgba(0, 0, 0, 0.3)' }}>
      <CardActionArea>
        <CardMedia
          component="img"
          height="300"
          image= 'https://i.pinimg.com/originals/77/54/96/775496ea98fdfd1ec44d9bad64d48752.png'   />
        <CardContent>
          <Typography variant="body2" color="text.secondary">
          A cozy bedroom with a panoramic city view, offering a comfortable and tranquil retreat for a restful night's sleep.          </Typography>
        </CardContent>
      </CardActionArea>
    </Card>
  );
}

export function ActionAreaCard3() {
  return (
    <Card sx={{ maxWidth: 345, margin: 'auto', boxShadow: '0 4px 8px rgba(0, 0, 0, 0.3)' }}>
      <CardActionArea>
        <CardMedia
          component="img"
          height="300"
          image= 'https://architra.files.wordpress.com/2013/06/d.jpg?w=650'          alt="Hostel"
        />
        <CardContent>
          <Typography variant="body2" color="text.secondary">
          State-of-the-art kitchen facilities equipped with modern appliances, fostering a vibrant communal cooking experience.          </Typography>
        </CardContent>
      </CardActionArea>
    </Card>
  );
}

export function ActionAreaCard4() {
  return (
    <Card sx={{ maxWidth: 345, margin: 'auto', boxShadow: '0 4px 8px rgba(0, 0, 0, 0.3)' }}>
      <CardActionArea>
        <CardMedia
          component="img"
          height="300"
          image= 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSmr7g3TXl-9rotP8X4ZhNCmH35qc_GrDekCQ&usqp=CAU'          alt="Hostel"
        />
        <CardContent>
          <Typography variant="body2" color="text.secondary">
          Outdoor recreational space surrounded by greenery, providing a refreshing and enjoyable spot for leisure activities.          </Typography>
        </CardContent>
      </CardActionArea>
    </Card>
  );
}

export function ActionAreaCard5() {
  return (
    <Card sx={{ maxWidth: 345, margin: 'auto', boxShadow: '0 4px 8px rgba(0, 0, 0, 0.3)' }}>
      <CardActionArea>
        <CardMedia
          component="img"
          height="300"
          image= 'https://c1.wallpaperflare.com/preview/902/411/744/green-building-hostel-the-scenery.jpg'
          alt="Hostel"
        />
        <CardContent>
          <Typography variant="body2" color="text.secondary">
          Comfortable shared living room with ample seating and natural light, fostering a warm and inclusive atmosphere.          </Typography>
        </CardContent>
      </CardActionArea>
    </Card>
  );
}

export function ActionAreaCard6() {
  return (
    <Card sx={{ maxWidth: 345, margin: 'auto', boxShadow: '0 4px 8px rgba(0, 0, 0, 0.3)' }}>
      <CardActionArea>
        <CardMedia
          component="img"
          height="300"
          image= 'https://images.adsttc.com/media/images/61ce/d107/23d7/e810/451d/3575/newsletter/e-phx2875-fs.jpg?1640944002'          alt="Hostel"
        />
        <CardContent>
          <Typography variant="body2" color="text.secondary">
          Dormitory-style accommodations designed for a communal living experience, offering an affordable and friendly stay.          </Typography>
        </CardContent>
      </CardActionArea>
    </Card>
  );
}



// import React from 'react';
// import Card from '@mui/material/Card';
// import CardActionArea from '@mui/material/CardActionArea';
// import CardContent from '@mui/material/CardContent';
// import CardMedia from '@mui/material/CardMedia';
// import Typography from '@mui/material/Typography';
// import Grid from '@mui/material/Grid';

// const cardData = [
//     {
//         content: "Inviting common area with stylish furnishings, perfect for socializing and relaxing after a day of adventures.",
//         image: 'https://www.dimensions-architect.com/wp-content/uploads/2014/07/Scholars-Institute-building.png',
//       },
//   {
//     content: "A cozy bedroom with a panoramic city view, offering a comfortable and tranquil retreat for a restful night's sleep.",
//     image= 'https://i.pinimg.com/originals/77/54/96/775496ea98fdfd1ec44d9bad64d48752.png',
//   },
//   {
//     content: "State-of-the-art kitchen facilities equipped with modern appliances, fostering a vibrant communal cooking experience.",
//     image: 'https://architra.files.wordpress.com/2013/06/d.jpg?w=650',
//   },
//   {
//     content: "Outdoor recreational space surrounded by greenery, providing a refreshing and enjoyable spot for leisure activities.",
//     image: 'https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSmr7g3TXl-9rotP8X4ZhNCmH35qc_GrDekCQ&usqp=CAU',
//   },
//   {
//     content: "Comfortable shared living room with ample seating and natural light, fostering a warm and inclusive atmosphere.",
//     image: 'https://c1.wallpaperflare.com/preview/902/411/744/green-building-hostel-the-scenery.jpg',
// //   },
// //   {
//     content: "Dormitory-style accommodations designed for a communal living experience, offering an affordable and friendly stay.",
//     image: 'https://images.adsttc.com/media/images/61ce/d107/23d7/e810/451d/3575/newsletter/e-phx2875-fs.jpg?1640944002',
//   },
// ];

// export default function ActionAreaCard() {
//   return (
//     <Grid container spacing={2}>
//       {cardData.map((card, index) => (
//         <Grid key={index} >
//           <Card sx={{ maxWidth: 400 }}>
//             <CardActionArea>
//               <CardMedia
//                 component="img"
//                 height="300"
//                 image={card.image}
//                 alt={`Card ${index + 1}`}
//               />
//               <CardContent>
//                 <Typography variant="body2" color="text.secondary">
//                   {card.content}
//                 </Typography>
//               </CardContent>
//             </CardActionArea>
//           </Card>
//         </Grid>
//       ))}
//     </Grid>
//   );
// }



