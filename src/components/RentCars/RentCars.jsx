import { useState } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { getAdverts, getFavorites } from 'redux/selectors';
import css from './RentCar.module.css';
// import { ReactComponent as HeartIcon } from '../../image/heart.svg';
// import { ReactComponent as ActiveIcon } from '../../image/active.svg';
import { Modal } from 'components/Modal/Modal';
import { addFavorites, deleteFavorites } from 'redux/favorite';

export const RentCars = ({ adverts, setPage, page }) => {
  const { error, isLoading, loadMore } = useSelector(getAdverts);
  const favorites = useSelector(getFavorites);
  const dispatch = useDispatch();
  const [openModal, setOpenModal] = useState(false);
  const [id, setId] = useState(null);

  const handleBtnClick = e => {
    setId(e.target.id);
    setOpenModal(true);
  };

  const handleHeartClick = currentId => {
    if (favorites.includes(currentId)) {
      dispatch(deleteFavorites(currentId));
    } else {
      dispatch(addFavorites(currentId));
    }
  };

  return (
    <>
      <div className={css.container}>
        <ul className={css.list}>
          {isLoading && <b>Loading adverts...</b>}
          {error && <b>{error}</b>}
          {adverts.map(
            ({
              year,
              id,
              make,
              model,
              img,
              rentalPrice,
              type,
              mileage,
              rentalCompany,
              accessories,
              address,
            }) => {
              return (
                <li className={css.listItem} key={id}>
                  {/* <div className={css.imageWrapper}>
                    {favorites.includes(id) ? (
                      <ActiveIcon
                        onClick={() => handleHeartClick(id)}
                        className={css.heartIcon}
                        width="18"
                        height="18"
                      />
                    ) : (
                      <HeartIcon
                        onClick={() => handleHeartClick(id)}
                        className={css.heartIcon}
                        width="18"
                        height="18"
                      />
                    )}
                    <img className={css.image} src={img} alt="" height="268" />
                  </div> */}
                  <div className={css.titleWrapper}>
                    <h2 className={css.title}>
                      {make}
                      <span className={css.accent}> {model}, </span>
                      {year}
                    </h2>
                    <p>{rentalPrice}</p>
                  </div>
                  <div className={css.optionsListWrap}>
                    <ul className={css.optionsList}>
                      <li className={css.optionsItem}>
                        {address.split(',')[1]}
                      </li>
                      <li className={css.optionsItem}>
                        {address.split(',')[2]}
                      </li>
                      <li className={css.optionsItem}>{rentalCompany}</li>
                    </ul>
                    <ul className={css.optionsList}>
                      <li className={css.optionsItem}>{type}</li>
                      <li className={css.optionsItem}>{model}</li>
                      <li className={css.optionsItem}>{mileage}</li>
                      <li className={css.optionsItem}>{accessories[0]}</li>
                    </ul>
                  </div>
                  <button
                    id={id}
                    className={css.learnMoreBtn}
                    type="button"
                    onClick={handleBtnClick}
                  >
                    Learn more
                  </button>
                </li>
              );
            }
          )}
        </ul>
        {page === 'catalog' && loadMore && (
          <button
            onClick={() => setPage(pageNumber => pageNumber + 1)}
            type="button"
            className={css.loadMoreBtn}
          >
            Load more
          </button>
        )}
      </div>
      {openModal && <Modal currentId={id} modalIsOpen={setOpenModal} />}
    </>
  );
};

