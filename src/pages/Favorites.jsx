import { RentCars } from 'components/RentCars/RentCars';
import { Sidebar } from 'components/Sidebar/Sidebar';
import { useEffect} from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { fetchRent } from 'redux/api';
import { getAdverts, getFavorites } from 'redux/selectors';

export const Favorites = () => {
  const { items } = useSelector(getAdverts);
  const favorites = useSelector(getFavorites);
  const dispatch = useDispatch();
  const favoritesList = items.filter(item => favorites.includes(item.id));

  useEffect(() => {
    dispatch(fetchRent());
  }, [dispatch]);
  return (
    <>
      <Sidebar />
      <RentCars adverts={favoritesList} />
    </>
  );
};
