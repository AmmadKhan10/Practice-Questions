import Props from './Components/Props.components'
import './App.css'
import Car from './Components/cars.component'
import Employe from './Components/Employee'
import Hospital1 from './Components/Hospital1'
import CompaniesName from './Components/CompaniesName'
function App() {
  let carprop = {
    Model : 2015,
    Number : "xyz 1233",
    power : "1200cc",
    Engine : "2c",
    Capacity : 7,
  }
  let props = {
    PatientName : "Shahab",
    LastName : "Khan",
    Decease : "Fever",
    IDNO : "CS-145678",
    Contact : "03115517798s",
  }
  return (
    <>
     <Props/>
     <Employe 
     Name = {"M Tufail"}
     ID = {"CS-145678"}
     Mail = {"ak5321515@gmail.com"}
     />
     <Car car={carprop}/>

     <Hospital1{...props}/>

     <CompaniesName>

     Name = {"'Cedrue', 'Upward', 'Urraan', 'Codematics', 'PKteam'"}<br/>
     Address = {"Abbottabad, Islamabad"}<br/>
     Mail = {"ak5321515@gmail.com"}
     
     </CompaniesName>
     
     
    </>
  )
}

export default App;
