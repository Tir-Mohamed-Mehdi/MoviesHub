import { useParams } from 'react-router-dom';
import './watch.style.scss';

const WatchComponent = () => {
  const { id } = useParams();

  return (
    <>
      {id}
      <iframe
        className="video-player"
        src={`https://vidsrc.to/embed/movie/${id}`}
        title="Embedded Video"
        allowFullScreen
      ></iframe>
    </>
  );
};

export default WatchComponent;
