import React from 'react-dom';
import PropTypes from 'prop-types';
import defaultImg from './default.jpg';

const Painting = ({ url, title, tag, profileUrl, price, quantity }) => {
  //   const availability = quantity < 10 ? 'заканчивается' : 'есть в наличии';
  return (
    <div>
      <img src={url} alt={title} width="320"></img>
      <h2>{title}</h2>
      <p>
        Автор:{' '}
        <a href={profileUrl} target="_blank" rel="noreferrer noopener">
          {tag}
        </a>
      </p>
      <p>Цена: {price} кредитов </p>
      <p>Доступность: {quantity < 10 ? 'заканчивается' : 'есть в наличии'} </p>
      {/* <p>Доступность: {availability} </p> */}
      <button type="button">Add to cart</button>
    </div>
  );
};

// значение свойств по умолчанию
Painting.defaultProps = {
  url: defaultImg,
  //   price: 1000,
  // url: 'https://netsh.pp.ua/wp-content/uploads/2017/08/Placeholder-1.png', // но лучше использовать локальную картинку
};

/*
если значение propTypes необязательное, то прописываем defaultProps.
И наоборот.
*/
// Описание типов props
Painting.propTypes = {
  url: PropTypes.string, // необязательный
  title: PropTypes.string.isRequired, // обязательный
  profileUrl: PropTypes.string.isRequired,
  tag: PropTypes.string.isRequired,
  price: PropTypes.number.isRequired,
  quantity: PropTypes.number.isRequired,
};
export default Painting;
