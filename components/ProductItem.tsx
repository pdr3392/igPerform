import { memo, useState } from "react";
import dynamic from "next/dynamic";
import lodash from "lodash";
import { AddProductToWishlistProps } from "./AddProductToWishlist";
//import AddProductToWishlist from "./AddProductToWishlist";

const AddProductToWishlist = dynamic<AddProductToWishlistProps>(
  () => {
    return import("./AddProductToWishlist");
  },
  {
    loading: () => <span>Carregando...</span>,
  }
);

interface ProductItemProps {
  product: { id: number; price: number; title: string; priceFormatted: string };
  onAddToWishlist: (id: number) => void;
}

// shallow compare -> comparação rasa
// {} === {} = false
// igualdade referencial
// compara a mesma posição alocada na memória

function ProductItemComponent({ product, onAddToWishlist }: ProductItemProps) {
  const [isAddingToWishlist, setIsAddingToWishlist] = useState(false);
  return (
    <div>
      {product.title} - <strong>{product.priceFormatted}</strong>
      <button
        style={{
          marginLeft: "1rem",
        }}
        onClick={() => setIsAddingToWishlist(true)}
      >
        Adicionar aos favoritos
      </button>
      {isAddingToWishlist && (
        <AddProductToWishlist
          onAddToWishlist={() => onAddToWishlist(product.id)}
          onRequestClose={() => setIsAddingToWishlist(false)}
        />
      )}
    </div>
  );
}

export const ProductItem = memo(
  ProductItemComponent,
  (prevProps, nextProps) => {
    return lodash.isEqual(prevProps.product, nextProps.product);
  }
);
