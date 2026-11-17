import { Navigate, Route, Routes } from "react-router-dom";
import { ThemeProvider } from "./utils/theme";
import InvitationPage from "./views/invitationPage";
import PortfolioPage from "./views/portfolioPage";

function App() {
  return (
    <ThemeProvider>
      <Routes>
        <Route path="/" element={<Navigate to="/portfolio" replace />} />
        <Route path="/portfolio" element={<PortfolioPage />} />
        <Route path="/invitation" element={<InvitationPage />} />
        <Route path="*" element={<Navigate to="/" replace />} />
      </Routes>
    </ThemeProvider>
  );
}

export default App;
