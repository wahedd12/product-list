// import logo from './logo.svg';
// import './App.css';
import ProductList from './components/ProductList';
import ProductItem from './components/ProductItem';


function App() {
  return (
    <div className="App">
       <h1>My Product List</h1>
      {/* <ProductList name="bread" price="29.99" available="true" />
            <ProductList name="Rice" price="40.99" available="true" />
              <ProductList name="Mango" price="19.99" available="true" /> */}
              <ProductList/>
              <ProductItem name="bread" price="29.99" available="true"/>
              <ProductItem name="Rice" price="40.99" available="false"/>
              <ProductItem name="Mango" price="19.99" available="true"/>
      
      
    </div>
  );
}

export default App;
