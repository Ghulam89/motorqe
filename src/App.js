
import { Route, Routes } from 'react-router-dom';
import './App.css';
import Footer from './components/footer';
import Header from './components/header';
import { Register } from './screens/auth/register';
import ContactUs from './screens/contactUs';
import { Dealar } from './screens/auth/register/Dealar';
import Home from './screens/home';
import ChoosePlane from './screens/ChoosePlane';
import NewLists from './screens/newLists';
import CarDetails from './screens/carDetails';
import CarPhotos from './screens/carPhotos';
import ContactDetails from './screens/contactDetails';
import CarInspection from './screens/carInspection';
import GarageBookingConfirmation from './screens/garageBookingConfirmation';
import CarDetailPage from './screens/carDetailPage';
import News from './screens/news';
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
function App() {

  return (
    <div >
      
  <ToastContainer/>
      <Header/>
      <Routes>
        
        <Route path='/' element={<Register/>} />
        <Route path='/home' element={<Home/>} />
        <Route path='/contactus' element={<ContactUs/>} />
        <Route path='/dealar' element={<Dealar/>} />
        <Route path='/choose_plane' element={<ChoosePlane/>} />
        <Route path='/new_lists' element={<NewLists/>} />
        <Route path='/car_details' element={<CarDetails/>} />
        <Route path='/car_photos' element={<CarPhotos/>} />
        <Route path='/contact_details' element={<ContactDetails/>} />
        <Route path='/car_inspection' element={<CarInspection/>} />
        <Route path='/garage_booking_confirmation' element={<GarageBookingConfirmation/>} />
        <Route path='/car_details_page' element={<CarDetailPage/>} />
        <Route path='/news' element={<News/>} />
      </Routes>
      <Footer/>
    </div>
  );
}

export default App;
