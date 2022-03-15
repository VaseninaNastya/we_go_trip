import { QueryClient, QueryClientProvider } from "react-query";
import GraphsContainer from "./components/GraphsContainer/GraphsContainer";

function App() {
  const queryClient = new QueryClient();

  return (
    <QueryClientProvider client={queryClient}>
      <GraphsContainer />
    </QueryClientProvider>
  );
}

export default App;
