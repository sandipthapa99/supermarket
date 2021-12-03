export const addToCart = (evt, prodId) => {
    evt.preventDefault();
    const accessToken = localStorage.getItem("accessToken");
    // console.log("add to cart clicked!")
    if (accessToken) {
      let cartData;
      const url = "https://uat.ordering-boafresh.ekbana.net//api/v4/cart";
      const headers = {
        method: "GET",
        headers: {
          "Api-key":
            "fa63647e6ac4500d4ffdd413c77487dbc8acf22dc062bb76e8566deb01107545",
          Authorization: "Bearer " + accessToken,
          "Warehouse-Id": "1",
        },
      };
      const fetchCart = async () => {
        try {
          const resp = await fetch(url, headers);
          const json = await resp.json();
          // console.log(json.data.cartProducts);
          cartData = json.data.cartProducts;
          if (cartData.some((item) => item.product.id === prodId)) {
            const cartProdId = cartData.find(
              (cartProd) => cartProd.product.id === prodId
            );
            const prodQuantity = cartProdId.quantity;
            console.log("Already exists" + cartProdId.id);
            updateCart(cartProdId.id, prodQuantity + 1, accessToken);
          } else {
            addNew(prodId, accessToken);
          }
        } catch (err) {
          console.log("error", err);
        }
      };
  
      fetchCart();
    } else {
      window.location.href = "./login";
    }
  };
  
  export const addNew = (prodId, accessToken) => {
    const url = "https://uat.ordering-boafresh.ekbana.net//api/v4/cart-product";
    const headers = {
      method: "POST",
      headers: {
        "Api-key":
          "fa63647e6ac4500d4ffdd413c77487dbc8acf22dc062bb76e8566deb01107545",
        Authorization: "Bearer " + accessToken,
        "Warehouse-Id": "1",
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        productId: prodId,
        priceId: prodId,
        quantity: "1",
        note: "test",
      }),
    };
    const addProduct = async () => {
      try {
        const resp = await fetch(url, headers);
        const json = await resp.json();
        if (resp.status === 200) {
          alert("Item added to cart!");
          const data = await json.data;
          return resp.status;
        } else {
          throw json.errors[0].message;
        }
      } catch (err) {
        console.log("error", err);
      }
    };
  
    addProduct();
  };
  
  export const updateCart = (cartProdId, quantity, accessToken) => {
    const url =
      "https://uat.ordering-boafresh.ekbana.net//api/v4/cart-product/" +
      cartProdId;
    const headers = {
      method: "PATCH",
      headers: {
        "Api-key":
          "fa63647e6ac4500d4ffdd413c77487dbc8acf22dc062bb76e8566deb01107545",
        Authorization: "Bearer " + accessToken,
        "Warehouse-Id": "1",
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        quantity: quantity,
      }),
    };
    const updateProduct = async () => {
      try {
        const resp = await fetch(url, headers);
        const json = await resp.json();
        if (resp.status === 200) {
          alert("Item added to cart!");
          const data = await json.data;
          return resp.status;
        } else {
          throw json.errors[0].message;
        }
      } catch (err) {
        console.log("error", err);
      }
    };
  
    updateProduct();
  };