import React from 'react';
import Painting from './components/Painting';
import paintings from './paintings.json';

// const painting = {
//   id: 'id-1',
//   url:
//     'https://cdn.pixabay.com/photo/2017/07/31/22/05/feathers-2561511_1280.jpg',
//   title: 'Feathers. Art abstract',
//   price: 550,
//   author: {
//     tag: 'ractapopulous',
//     url: 'https://pixabay.com/users/ractapopulous-24766/',
//   },
//   quantity: 10,
// };

// const painting2 = {
//   id: 'id-2',
//   url: 'https://cdn.pixabay.com/photo/2017/08/02/22/38/bird-2573779_1280.jpg',
//   title: 'Bird. Animal art abstract',
//   price: 400,
//   author: {
//     tag: 'ractapopulous',
//     url: 'https://pixabay.com/users/ractapopulous-24766/',
//   },
//   quantity: 15,
// };

const App = () => {
  return (
    <div>
      <h2>Главный компонент-контейнер приложения</h2>
      <Painting
        url={paintings[0].url}
        title={paintings[0].title}
        // price="500" выводит сообщение Внимание: данный props указан в propTypes как number
        price={paintings[0].price}
        profileUrl={paintings[0].author.url}
        tag={paintings[0].author.tag}
        quantity={paintings[0].quantity}
      />

      <Painting
        url={paintings[1].url}
        title={paintings[1].title}
        price={paintings[1].price}
        profileUrl={paintings[1].author.url}
        tag={paintings[1].author.tag}
        quantity={paintings[1].quantity}
      />

      <Painting
        url={paintings[2].url}
        title={paintings[2].title}
        price={paintings[2].price}
        profileUrl={paintings[2].author.url}
        tag={paintings[2].author.tag}
        quantity={paintings[2].quantity}
      />
    </div>
  );
};
export default App;
