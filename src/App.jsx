import Navbar from "./Components/Navbar.jsx";
import Home from "./Pages/Home.jsx";
import Footer from "./Components/Footer.jsx";
import { Route, Routes } from "react-router-dom";
import MovieDetails from "./Pages/MovieDetails.jsx";
import SeatLayout from "./Pages/SeatSelection.jsx";
import AdminDashboard from "./Components/AdminDashboard.jsx";
import AuthModal from "./Pages/AuthModal.jsx";
import ProtectedRoute from "./Components/ProtectedRoute";
import { AuthProvider } from "./context/AuthContext.jsx";
import MovieSchedule from "./Components/MovieSchedule.jsx";
import Payment from "./Components/Payment.jsx";
import PaymentSuccess from "./Components/PaymentSuccess.jsx";
import MyBookings from "./Pages/MyBookings.jsx";
import { useNavigate } from "react-router-dom";

const App = () => {
  const navigate = useNavigate();

  return (
    <AuthProvider>
      <div>
        <Navbar />

        <Routes>
          {/* Public Routes */}
          <Route path="/" element={<Home />} />
          <Route path="/movie/:id" element={<MovieDetails />} />
          <Route path="/book/:movieId" element={<MovieSchedule />} />

          {/*
            ✅ No ProtectedRoute here.
            MovieSchedule already blocks unauthenticated users with the modal.
            Keeping ProtectedRoute here would redirect them to /login and
            destroy the sessionStorage redirect intent we saved.
          */}
          <Route path="/select-seats/:showId" element={<SeatLayout />} />

          {/* Payment Routes */}
          <Route path="/payment" element={<Payment />} />
          <Route path="/payment-success" element={<PaymentSuccess />} />

          {/* Protected Routes */}
          <Route
            path="/mybookings"
            element={
              <ProtectedRoute>
                <MyBookings />
              </ProtectedRoute>
            }
          />

          <Route
            path="/login"
            element={<AuthModal onClose={() => navigate("/")} />}
          />

          {/* Admin Route */}
          <Route
            path="/admin/*"
            element={
              <ProtectedRoute adminOnly={true}>
                <AdminDashboard />
              </ProtectedRoute>
            }
          />
        </Routes>

        <Footer />
      </div>
    </AuthProvider>
  );
};

export default App;