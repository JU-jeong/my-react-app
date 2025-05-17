import { Link, useParams } from "react-router-dom";

const productsBySaleName = {
  monthlydealevent: [
    {
      id: "B09M2XFRCF",
      name: "ポップコーン",
      price: 1000,
      description: "おいしいポップコーンです。",
    },
    {
      id: "X00X0XXXXX",
      name: "コーラ",
      price: 300,
      description: "普通のコーラです。",
    },
  ],
  specialevent: [
    {
      id: "Y00Y0YYYYY",
      name: "ポテトチップス",
      price: 200,
      description: "おいしいポテトチップスです。",
    },
    {
      id: "Z00Z0ZZZZZ",
      name: "オレンジジュース",
      price: 400,
      description: "おいしいオレンジジュースです。",
    },
  ],
};

function Product() {
  const { productId } = useParams();

  // 追加
  const allProducts = Object.values(productsBySaleName).flat();
  const product = allProducts.find((item) => item.id === productId);

  return (
    <div>
      <h1>商品ページ</h1>

      <h2>商品名: {product.name}</h2>
      <p>価格: {product.price}円</p>
      <p>商品説明: {product.description}</p>
      <button>購入する</button>

      <hr />
      <Link to="/events/monthlydealevent">セールページ</Link>
      <br />
      <Link to="/">ホームに戻る</Link>
    </div>
  );
}

export default Product;