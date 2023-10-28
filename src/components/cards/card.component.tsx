import { Card, CardBody, Image } from '@chakra-ui/react';
import { useNavigate } from 'react-router-dom';
import './card.style.scss';

interface cardCompo {
  title: string;
  year: string;
  rate: number;
  imageUrl: string;
  alt: string;
  type: string;
  id: number;
}

const CardComponent = ({ title, year, rate, imageUrl, alt, type, id }: cardCompo) => {
  const navigate = useNavigate();

  const navigateFunc = () => {
    navigate(`/watch/${id}`);
  };

  return (
    <Card
      className="card-container"
      colorScheme="cyan"
      onClick={navigateFunc}
    >
      <CardBody>
        <Image
          src={imageUrl}
          alt={`${alt} ${type} poster`}
          borderRadius="lg"
          className="card_image"
        />
        <h4 className="card-title">{title}</h4>
        <p className="card-year">Year: {year}</p>
        <p className="card-rate">Rate: {rate}/10</p>
      </CardBody>
    </Card>
  );
};

export default CardComponent;
