import { createContext, useReducer } from "react";

/* useReducer es un hook para manejar un estado de manera escalable porque se basa en recibir en una funcion e estado actual 
y la accion que se quiere realizar y con eso devolver el nuevo estado.

AYuda porque logramos separar toda la logica de algo en una funcion completamente separada, se puede utilziar hasta en algunas cosas que no son de react, ademas es mas facil de comprobar
ya que solo se le pasan valores faciles para pruebas y porbar la logica de actualizacion del estado.
*/

export const CartContext = createContext();

const inicialState = [];

//Se puede separar a otra carpeta como reducers
const reducer = (state, action) => {
  const { type: actionType, payload: actionPayload } = action; //Le pasamos la accion que hay que hacer en el type y en el payload tod el objeto que ocupamos para actualizar el estado
  const { id } = actionPayload;

  switch (actionType) {
    case "ADD_TO_CART":
      const productCartIndex = state.findIndex(
        (cartItem) => cartItem.id === id
      );
      if (productCartIndex >= 0) {
        const newCart = structuredClone(state);
        newCart[productCartIndex].quantity += 1;
        return newCart;
      } else {
        return [...state, { ...actionPayload, quantity: 1 }];
      }
    case "REMOVE_FROM_CART":
      const productIndex = state.findIndex((cartItem) => cartItem.id === id);
      if (productIndex >= 0) {
        const newCart = structuredClone(state);
        newCart[productIndex].quantity -= 1;
        if (newCart[productIndex].quantity === 0) {
          newCart.splice(productIndex, 1);
        }
        return newCart;
      }
      return state;
    case "CLEAR_CART":
      return [];
    default:
      return state;
  }
};

function useCartReducer() {
  const [state, dispatch] = useReducer(reducer, inicialState); // Se le pasa el estado inicial y las acciones, recibe dispatch que es el que se encarga de enviar las accioens al reducer

  const addToCart = (item) => {
    dispatch({ type: "ADD_TO_CART", payload: item });
  };

  const removeFromCart = (item) => {
    dispatch({ type: "REMOVE_FROM_CART", payload: item });
  };

  const clearCart = () => {
    dispatch({ type: "CLEAR_CART" });
  };

  return { state, addToCart, removeFromCart, clearCart };
}

//se deja al MINIMO la dependecia de usar react context
export function CartProvider({ children }) {
  const { state, addToCart, removeFromCart, clearCart } = useCartReducer();

  return (
    <CartContext.Provider
      value={{ cart: state, addToCart, removeFromCart, clearCart }}
    >
      {children}
    </CartContext.Provider>
  );
}
