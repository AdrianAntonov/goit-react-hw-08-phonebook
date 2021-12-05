import { useEffect } from "react";
import { useDispatch } from "react-redux";
import { Routes, Route } from "react-router-dom";
import NavBar from "./components/Navigation/NavBar/NavBar";
// import ContactList from "./components/ContactList/ContactList";
// import ContactForm from "./components/ContactForm/ContactForm";
import { PublicRoute } from "./routes/PublicRoute";
import { PrivateRoute } from "./routes/PrivateRoute";
import ContactsView from "./components/ContactsView";
import Home from "./components/pages/Home";
import Register from "./components/pages/Register";
import Login from "./components/pages/Login";
import Container from "./components/Container/Container";
import authOperations from "./redux/auth/auth-operations";
// import authSelectors from "./redux/auth/auth-selectors";

export default function App() {
  const dispatch = useDispatch();

  // const isFetchingCurrentUser = useSelector(authSelectors.getIsFetchingCurrent);

  useEffect(() => {
    dispatch(authOperations.fetchCurrentUser());
  }, [dispatch]);

  return (
    <Container>
      <NavBar />

      <Routes>
        {/* <Route path="/" element={<Home />} /> */}
        <Route path="/" element={<PublicRoute component={Home} />} />
        {/* <Route path="/register" element={<Register />} /> */}
        <Route
          path="/register"
          element={<PublicRoute component={Register} restricted />}
        />
        {/* <Route path="/login" element={<Login />} /> */}
        <Route
          path="/login"
          element={<PublicRoute component={Login} restricted />}
        />
        {/* <Route path="/contacts" element={<ContactForm />} /> */}
        {/* <Route path="/contacts" element={<ContactsView />} /> */}
        <Route
          path="/contacts"
          element={<PrivateRoute component={ContactsView} />}
        />
      </Routes>
    </Container>
  );
}

// ========================   SANDRA   =========================

// // import { useSelector } from "react-redux";
// import { Link, Routes, Route } from "react-router-dom";
// import PropTypes from "prop-types";
// // import { items } from "./redux/phonebook/phonebook-selectors";
// // import ContactForm from "./components/ContactForm";
// // import ContactList from "./components/ContactList";
// // import Filter from "./components/Filter";
// import Home from "./pages/Home";
// import Login from "./pages/Login";
// import Registration from "./pages/Registration";
// import "./App.css";

// const isAuth = false;

// export default function App() {
//   // const contacts = useSelector(items);

//   return (
//     <div className="App">
//       <nav>
//         <ul>
//           <li>
//             <Link to="/">Home</Link>
//           </li>
//           <li>
//             <Link to="/login">Login</Link>
//           </li>
//           <li>
//             <Link to="/register">Register</Link>
//           </li>
//         </ul>
//       </nav>
//       <main>
//         {/* <h1>Phonebook</h1> */}
//         <Routes>
//           <Route
//             path="/"
//             element={<PrivateRoute isAuth={isAuth} component={Home} />}
//           />
//           <Route
//             path="/login"
//             element={<PublicRoute isAuth={isAuth} component={Login} />}
//           />
//           <Route
//             path="/register"
//             element={<PublicRoute isAuth={isAuth} component={Registration} />}
//           />
//           <Route
//             path="/contacts"
//             element={<PublicRoute isAuth={isAuth} component={ContactsView} />}
//           />

//         </Routes>
//         {/* <ContactForm /> */}
//         {/* <h2>Contacts</h2> */}
//         {/* <Filter />
//         {contacts && <ContactList />} */}
//       </main>
//     </div>
//   );
// }

// App.propTypes = {
//   contacts: PropTypes.object,
// };
