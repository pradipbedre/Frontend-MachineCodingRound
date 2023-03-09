import { useEffect, useState } from "react";

function ShowProduct() {
  const [products, setProducts] = useState([]);
  const [total, setTotal] = useState(0);
  const [cart, setCart] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      await fetch("https://dummyjson.com/products")
        .then((data) => data.json())
        .then((res) => setProducts(res.products));
    };
    fetchData();
  }, []);

  console.log(cart);
  return (
    <div className="main">
      <div className="main__products">
        {products &&
          products.map((product) => {
            return (
              <div
                key={product.id}
                style={{
                  padding: "10px",
                  border: "black 2px solid",
                  margin: "5px",
                  objectFit: "cover"
                }}
              >
                <div>
                  <img
                    src={product.thumbnail}
                    alt={product.title}
                    style={{ width: "200px", backgroundSize: "cover" }}
                  />
                  <div
                    style={{ display: "flex", justifyContent: "space-between" }}
                  >
                    <h3>{product.title} </h3>
                    <h4 style={{ color: "white " }}>{product.price} </h4>
                  </div>
                  {cart.includes(product) ? (
                    <button
                      style={{
                        padding: "5px",
                        width: "200px",
                        marginTop: "10px",
                        backgroundColor: "red"
                      }}
                      onClick={() => {
                        setCart(cart.filter((num) => num.id !== product.id));
                        setTotal(total - product.price);
                      }}
                    >
                      Remove to cart
                    </button>
                  ) : (
                    <button
                      style={{
                        padding: "5px",
                        width: "200px",
                        marginTop: "10px"
                      }}
                      onClick={() => {
                        setCart([...cart, product]);
                        setTotal(total + product.price);
                      }}
                    >
                      Add to cart
                    </button>
                  )}
                </div>
              </div>
            );
          })}
      </div>
      <div className="main__cart">
        <h1 style={{ textAlign: "center" }}> cart</h1>
        <h3>Total: {total}</h3>
        {cart &&
          cart.map((item) => {
            return (
              <div
                style={{
                  display: "flex",
                  padding: "5px",
                  backgroundColor: "white",
                  justifyContent: "center",
                  margin: "5px"
                }}
              >
                <div>
                  <img
                    src={item.thumbnail}
                    alt={item.title}
                    style={{ width: "100px" }}
                  />
                  <p> {item.title}</p>
                  <p>price: {item.price}</p>
                </div>
                <button
                  onClick={() => setTotal(total + item.price)}
                  style={{ height: "20px", margin: "10px", padding: "5px" }}
                >
                  +
                </button>
                <span>{qty}</span>
                <button
                  onClick={() => setTotal(total - item.price)}
                  style={{ height: "20px", margin: "10px", padding: "5px" }}
                >
                  -
                </button>
              </div>
            );
          })}
      </div>
    </div>
  );
}

export default ShowProduct;
