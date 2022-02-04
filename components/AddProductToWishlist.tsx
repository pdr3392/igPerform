export interface AddProductToWishlistProps {
  onAddToWishlist: () => void;
  onRequestClose: () => void;
}

export default function AddProductToWishlist({
  onAddToWishlist,
  onRequestClose,
}: AddProductToWishlistProps) {
  function handleProcceed() {
    onAddToWishlist();
    onRequestClose();
  }

  return (
    <span>
      Deseja adicionar aos favoritos?
      <button onClick={handleProcceed}>Sim</button>
      <button onClick={onRequestClose}>Não</button>
    </span>
  );
}
