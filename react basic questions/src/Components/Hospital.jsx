function Hospital(props) {
   
    return(
        <>
        <h1>Hospital details(Using Props 3rd method)</h1>
        <p> PatientName: {props.PatientName}</p>
        <p>LastName: {props.LastName}</p>
        <p>Decease :{props.Decease}</p>
        <p>EmployeID: {props.IDNO}</p>
        <p>Contact: {props.Contact}</p>
        </>
    )
}

export default Hospital;