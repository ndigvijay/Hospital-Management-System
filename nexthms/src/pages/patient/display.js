import { useEffect, useState } from 'react';

export default function DisplayPatient() {
    const [patients, setPatients] = useState([]);

    useEffect(() => {
        async function fetchPatients() {
            try {
                const response = await fetch('/api/get-patients');
                if (response.ok) {
                    const data = await response.json();
                    setPatients(data);
                }
            }
            catch (error) {
                console.error(error);
            }
        }
        fetchPatients();
    }, []);

    return (
        <div>
            <h1>Patient List</h1>
            <ul>
                {patients.map((patient) => (
                    <li key={patient.patient_id}>
                        Name: {patient.name}, Gender: {patient.gender}, DOB: {patient.dob}, Contact: {patient.contact}, Insurance: {patient.insurance} <br />
                    </li>
                ))}
            </ul>
        </div>
    )
}