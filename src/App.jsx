import {
  Box,
  Card,
  CardActions,
  CardContent,
  CardActionArea,
  Button,
  Typography,
} from "@mui/material";

const bull = (
  <Box
    component="span"
    sx={{ display: "inline-block", mx: "2px", transform: "scale(0.8)" }}
  >
    •
  </Box>
);

function App() {
  const handleClick = () => {
    alert("Card clicked with");
  };
  return (
    <Card sx={{ minWidth: 275, mx: "5px" }}>
      <CardActionArea onClick={handleClick}>
        <CardContent>
          <Typography sx={{ fontSize: 14 }} color="text.secondary" gutterBottom>
            Word of the Day
          </Typography>
          <Typography variant="h5" component="div">
            be{bull}nev{bull}o{bull}lent
          </Typography>
          <Typography sx={{ mb: 1.5 }} color="text.secondary">
            adjective
          </Typography>
          <Typography variant="body2">
            well meaning and kindly.
            <br />
            {'"a benevolent smile"'}
          </Typography>
        </CardContent>
        <CardActions>
          <Button size="small">Learn More</Button>
        </CardActions>
      </CardActionArea>
    </Card>
  );
}

export default App;
