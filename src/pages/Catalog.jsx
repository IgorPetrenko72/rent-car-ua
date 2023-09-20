import { RentCars } from 'components/RentCars/RentCars';
import { Sidebar } from 'components/Sidebar/Sidebar';
import { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { fetchRent } from 'redux/api';
import { getAdverts } from 'redux/selectors';

export const Catalog = () => {
  const { items } = useSelector(getAdverts);
  const [pageNumber, setPageNumber] = useState(1);

  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(fetchRent(pageNumber));
  }, [dispatch, pageNumber]);
  return (
    <>
      <Sidebar />
      <RentCars adverts={items} setPage={setPageNumber} page="catalog" />
    </>
  );
};
