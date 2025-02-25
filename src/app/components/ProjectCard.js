import { Card, CardContent, Typography, CardMedia } from '@mui/material';

const ProjectCard = ({ title, description, image }) => {
  return (
    <Card className="max-w-sm m-4 bg-gray-700 text-white">
      <CardMedia component="img" height="140" image={image} alt={title} />
      <CardContent>
        <Typography variant="h6">{title}</Typography>
        <Typography variant="body2">{description}</Typography>
      </CardContent>
    </Card>
  );
};

export default ProjectCard;