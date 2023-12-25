import './SectionTwo.css'

const SectionTwo = () => {
    return(
        <div className="section-two-container">
            <div className="section-two-card">
                <div className="section-two-content">
                    <h3>Fuel Management System</h3>
                    <hr />
                    <p>Fuel Management System is a Fuel control and Management System used at fueling stations. 
                        Accord Fuel Management system is most advanced fuel control and management system, 
                        which provides precise monitoring of fuel consumption and eliminates the risk of 
                        non-authorized fueling</p>
                </div>
                <div className="section-two-image">
                    <img src="/Images/fuelManagement1.jpg" alt="Fuel-Management" className="section-two-img"/>
                    <img src="/Images/fuelManagement2.jpg" alt="Fuel-Management" className="section-two-img" />
                    <img src="/Images/fuelManagement3.jpg" alt="Fuel-Management" className="section-two-img" />
                    <img src="/Images/fuelManagement4.jpg" alt="Fuel-Management" className="section-two-img" />
                </div>
            </div>
            <div className="section-two-card">
                <h3>Mobile Fuel Dispenser</h3>
                <hr />
                <p>Mobile Fuel Dispenser with Advanced Electronics, Data monitoring and robust hydraulics.</p>
            </div>
            <div className="section-two-image">
                <img src="/Images/mobileFuelDispenser.jpg" alt="Fuel-Management"/>
            </div>
        </div>
    )
}

export default SectionTwo