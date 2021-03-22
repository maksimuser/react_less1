// import PaintingList from './components/PaintingList';
import Logo from './components/Logo';
import Panel from './components/Panel';
import paintings from './paintings.json';

const App = () => {
  return (
    <div>
      <Panel title="Последние новости">
        <p>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Similique
          dignissimos rem nesciunt facilis aut, eos ab officiis aspernatur porro
          alias, sequi voluptas provident ipsum totam.
        </p>
        <a href="/">Читать...</a>
      </Panel>
      <Panel>
        <p>
          Lorem ipsum dolor sit amet, consectetur adipisicing elit. Dolore
          provident ipsam porro dolorum harum, laboriosam quis soluta amet
          impedit non. Numquam ab odio nesciunt beatae.
        </p>
      </Panel>

      <Logo text="Главный компонент-контейнер приложения" />
      <PaintingList paintings={paintings123} />
    </div>
  );
};
export default App;
