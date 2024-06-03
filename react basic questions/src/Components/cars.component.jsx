function Car(Props) {
    return(
        <>
        <h1>PROPERTIES (using 2nd Props Method)</h1>
        <p>Model: {Props.car.Model}</p>
        <p>Number: {Props.car.Number}</p>
        <p>Power: {Props.car.power}</p>
        <p>Engine: {Props.car.Engine}</p>
        <p>SeatingCapacity: {Props.car.Capacity}</p>
        </>
    )
}
export default Car;