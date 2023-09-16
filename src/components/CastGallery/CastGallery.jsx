import { CastList, CastItem, Paragraph } from './CastGallery.styled';
import imageNotFound from '../../images/imgNotFound.jpg';

export const CastGallery = ({ credits }) => {
  return (
    <>
      <CastList>
        {credits &&
          credits.map(({ id, profile_path, name, character }) => {
            return (
              <CastItem key={id}>
                <img
                  src={
                    profile_path 
                      ? `https://image.tmdb.org/t/p/w500/${profile_path}`
                      : imageNotFound
                  }
                  alt={name}
                />
                <Paragraph>{name}</Paragraph>
                <Paragraph>Character: {character}</Paragraph>
              </CastItem>
            );
          })}
      </CastList>
    </>
  );
};
