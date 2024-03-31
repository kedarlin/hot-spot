import React, { useState } from 'react';
import Header from '../../components/Header/Header';
import './Newcase.css';
import { useNavigate } from 'react-router-dom';


const Newcase = () => {
    const navigate = useNavigate();
    const [formData, setFormData] = useState({
        caseNumber: '',
        dateTimeIncident: '',
        locationIncident: '',
        typeOfCrime: '',
        incidentDescription: '',
        complainantName: '',
        complainantAddress: '',
        complainantContact: '',
        accusedName: '',
        accusedDescription: '',
        relationshipToComplainant: '',
        witnessName: '',
        witnessAddress: '',
        witnessContact: '',
        evidenceDescription: '',
        witnessStatements: '',
        photoVideo: '',
        policeOfficerName: '',
        badgeID: '',
        policeStation: '',
        additionalNotes: ''
    });
    const [error, setError] = useState('');

    const handleInputChange = (e) => {
        const { name, value } = e.target;
        setFormData({ ...formData, [name]: value });
    };

    const handleSubmit = async () => {
        // Check for required authentication
        const userId = localStorage.getItem('userId');
        if (!userId) {
            setError('User not authenticated');
            return;
        }

        // Check for required fields
        const requiredFields = ['caseNumber', 'dateTimeIncident', 'locationIncident', 'typeOfCrime', 'incidentDescription', 'complainantName', 'complainantAddress', 'complainantContact', 'policeOfficerName', 'badgeID', 'policeStation'];
        for (const field of requiredFields) {
            if (!formData[field]) {
                setError('All required fields must be filled');
                return;
            }
        }

        // Optional fields - Check if suspect info is provided, if so, then require accusedName
        if (formData.accusedName && !formData.accusedName.trim()) {
            setError('Accused name is required');
            return;
        }

        // Optional fields - Check if there are witnesses, if so, then require witnessName
        if (formData.witnessName && !formData.witnessName.trim()) {
            setError('Witness name is required');
            return;
        }

        // Optional fields - Check if there are additional notes, if so, then require additionalNotes
        if (formData.additionalNotes && !formData.additionalNotes.trim()) {
            setError('Additional notes cannot be empty');
            return;
        }

        // Prepare the request body
        formData.userId = userId;
        const headers = {
            'Content-Type': 'application/json',
            'Authorization': `Bearer ${localStorage.getItem('token')}`
        };

        const requestOptions = {
            method: 'POST',
            headers: headers,
            body: JSON.stringify(formData),
        };

        // Submit the form
        try {
            const response = await fetch('http://localhost:3005/api/criminal-cases/create', requestOptions);
            if (!response.ok) {
                throw new Error('Failed to create criminal case');
            }
            navigate('/home');
        } catch (error) {
            console.error('Error:', error);
            setError('Failed to create criminal case');
        }
    };

    return (
        <div className='newcase-container'>
            <Header />
            <div className='newcase-body-container'>
                <div className='newcase-content'>
                    <div className='newcase-head'>Create a New Criminal Case Record</div>
                    <div className='newcase-title'>
                        <h4 className='newcase-title-head'>Case Information</h4>
                        <p className='newcase-title-desc'>
                            Enter details about the case.
                        </p>
                        <input
                            className='newcase-title-input'
                            name='caseNumber'
                            value={formData.caseNumber}
                            onChange={handleInputChange}
                            placeholder='Case Number'
                            required
                        />
                        <input
                            className='newcase-title-input'
                            name='dateTimeIncident'
                            type='datetime-local'
                            value={formData.dateTimeIncident}
                            onChange={handleInputChange}
                            required
                        />
                        <input
                            className='newcase-title-input'
                            name='locationIncident'
                            value={formData.locationIncident}
                            onChange={handleInputChange}
                            placeholder='Location of Incident'
                            required
                        />
                        <input
                            className='newcase-title-input'
                            name='typeOfCrime'
                            value={formData.typeOfCrime}
                            onChange={handleInputChange}
                            placeholder='Type of Crime'
                            required
                        />
                        <textarea
                            className='newcase-title-inputarea'
                            name='incidentDescription'
                            value={formData.incidentDescription}
                            onChange={handleInputChange}
                            placeholder='Brief Description of the Incident'
                            required
                        />
                    </div>
                    <div className='newcase-title'>
                        <h4 className='newcase-title-head'>Complainant Details</h4>
                        <p className='newcase-title-desc'>
                            Enter details about the complainant.
                        </p>
                        <input
                            className='newcase-title-input'
                            name='complainantName'
                            value={formData.complainantName}
                            onChange={handleInputChange}
                            placeholder='Name'
                            required
                        />
                        <input
                            className='newcase-title-input'
                            name='complainantAddress'
                            value={formData.complainantAddress}
                            onChange={handleInputChange}
                            placeholder='Address'
                            required
                        />
                        <input
                            className='newcase-title-input'
                            name='complainantContact'
                            value={formData.complainantContact}
                            onChange={handleInputChange}
                            placeholder='Contact Information'
                            required
                        />
                    </div>
                    <div className='newcase-title'>
                        <h4 className='newcase-title-head'>Accused/Suspect Details</h4>
                        <p className='newcase-title-desc'>
                            Enter details about the accused/suspect.
                        </p>
                        <input
                            className='newcase-title-input'
                            name='accusedName'
                            value={formData.accusedName}
                            onChange={handleInputChange}
                            placeholder='Name (if known)'
                        />
                        <textarea
                            className='newcase-title-inputarea'
                            name='accusedDescription'
                            value={formData.accusedDescription}
                            onChange={handleInputChange}
                            placeholder='Description (physical attributes if available)'
                        />
                        <input
                            className='newcase-title-input'
                            name='relationshipToComplainant'
                            value={formData.relationshipToComplainant}
                            onChange={handleInputChange}
                            placeholder='Relationship to the Complainant (if any)'
                        />
                    </div>
                    <div className='newcase-title'>
                        <h4 className='newcase-title-head'>Witness Details</h4>
                        <p className='newcase-title-desc'>
                            Enter details about any witnesses.
                        </p>
                        <input
                            className='newcase-title-input'
                            name='witnessName'
                            value={formData.witnessName}
                            onChange={handleInputChange}
                            placeholder='Name'
                        />
                        <input
                            className='newcase-title-input'
                            name='witnessAddress'
                            value={formData.witnessAddress}
                            onChange={handleInputChange}
                            placeholder='Address'
                        />
                        <input
                            className='newcase-title-input'
                            name='witnessContact'
                            value={formData.witnessContact}
                            onChange={handleInputChange}
                            placeholder='Contact Information'
                        />
                    </div>
                    <div className='newcase-title'>
                        <h4 className='newcase-title-head'>Evidence Information</h4>
                        <p className='newcase-title-desc'>
                            Enter details about evidence.
                        </p>
                        <textarea
                            className='newcase-title-inputarea'
                            name='evidenceDescription'
                            value={formData.evidenceDescription}
                            onChange={handleInputChange}
                            placeholder='Description of Evidence'
                        />
                        <textarea
                            className='newcase-title-inputarea'
                            name='witnessStatements'
                            value={formData.witnessStatements}
                            onChange={handleInputChange}
                            placeholder='Statements from Witnesses'
                        />
                        <input
                            className='newcase-title-input'
                            name='photoVideo'
                            value={formData.photoVideo}
                            onChange={handleInputChange}
                            placeholder='Photographs/Videos (if available)'
                        />
                    </div>
                    <div className='newcase-title'>
                        <h4 className='newcase-title-head'>Police Officer Details</h4>
                        <p className='newcase-title-desc'>
                            Enter details about the police officer handling the case.
                        </p>
                        <input
                            className='newcase-title-input'
                            name='policeOfficerName'
                            value={formData.policeOfficerName}
                            onChange={handleInputChange}
                            placeholder='Name'
                            required
                        />
                        <input
                            className='newcase-title-input'
                            name='badgeID'
                            value={formData.badgeID}
                            onChange={handleInputChange}
                            placeholder='Badge/ID Number'
                            required
                        />
                        <input
                            className='newcase-title-input'
                            name='policeStation'
                            value={formData.policeStation}
                            onChange={handleInputChange}
                            placeholder='Police Station'
                            required
                        />
                    </div>
                    <div className='newcase-title'>
                        <h4 className='newcase-title-head'>Additional Notes</h4>
                        <p className='newcase-title-desc'>
                            Add any additional information relevant to the case.
                        </p>
                        <textarea
                            className='newcase-title-inputarea'
                            name='additionalNotes'
                            value={formData.additionalNotes}
                            onChange={handleInputChange}
                            placeholder='Additional Notes'
                        />
                    </div>
                    <div className='newcase-submit' onClick={handleSubmit}>
                        Submit Criminal Case Record
                    </div>
                    {
                        error
                        &&
                        <div className='newcase-error'>
                            {error}
                        </div>
                    }
                </div>
            </div>
        </div>
    );
};

export default Newcase;