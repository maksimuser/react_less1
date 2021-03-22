import Painting from './Painting';
import PropTypes from 'prop-types';

const PaintingList = ({ paintings }) => (
  <ul>
    {paintings.map(
      ({ url, title, price, author: { url: url2, tag }, quantity, id }) => (
        <li key={id}>
          <Painting
            url={url}
            title={title}
            // price="500" выводит сообщение Внимание: данный props указан в propTypes как number
            price={price}
            profileUrl={url2}
            tag={tag}
            quantity={quantity}
          />
        </li>
      ),
    )}
  </ul>
);

PaintingList.propTypes = {
  paintings: PropTypes.arrayOf(
    PropTypes.shape({ id: PropTypes.string.isRequired }).isRequired,
  ),
};

export default PaintingList;
