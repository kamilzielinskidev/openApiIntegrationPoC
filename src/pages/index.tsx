import type { components } from "@/schema";

type StoreLocator = components["schemas"]["StoreLocator"];
const StoreLocatorPlaceholderLabel = (props: StoreLocator) => (
  <div>
    <h1>Store Locator Placeholder</h1>
    <p>Store Locator Placeholder Label: {props.searchPlaceholder}</p>
  </div>
);

const Home = () => (
  <div>
    <StoreLocatorPlaceholderLabel searchPlaceholder="Search for a store..." />
  </div>
);

export default Home;
