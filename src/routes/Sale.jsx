import { Link } from "react-router-dom";

const productsBySaleName = {
  monthlydealevent: [
    { id: "B09M2XFRCF", name: "ポップコーン" },
    { id: "X00X0XXXXX", name: "コーラ" },
  ],
  specialevent: [
    { id: "Y00Y0YYYYY", name: "ポテトチップス" },
    { id: "Z00Z0ZZZZZ", name: "オレンジジュース" },
  ],
};

function Sale() {
　
  // 追加
  const allProducts = Object.values(productsBySaleName).flat();

  return (
    <div>
      <h1>セールページ</h1>
      <hr />
      <ul>
        {allProducts.map((product) => (
          <li key={product.id}>
            <Link to={`/dp/${product.id}`}>{product.name} の商品ページ</Link>
          </li>
        ))}
      </ul>
      <br />
      <Link to="/">ホームに戻る</Link>
    </div>
  );
}

export default Sale;
