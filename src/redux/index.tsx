// ProviderWrapper.js
import { Provider } from "react-redux";
import store from "./store"; // Adjust the path if necessary

const ProviderWrapper: React.FC<any> = ({ children }) => {
  return <Provider store={store}>{children}</Provider>;
};

export default ProviderWrapper;
