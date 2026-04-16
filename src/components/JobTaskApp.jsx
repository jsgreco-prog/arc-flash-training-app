import React, { useState } from 'react';

const JobTaskApp = () => {
    const [formData, setFormData] = useState({
        jobTitle: '',
        taskDescription: '',
        duration: '',
        additionalNotes: ''
    });

    const handleChange = (e) => {
        const { name, value } = e.target;
        setFormData({ ...formData, [name]: value });
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        console.log('Form data submitted:', formData);
    };

    return (
        <form onSubmit={handleSubmit}>
            <h2>Job Task Training Form</h2>
            <label>
                Job Title:
                <input type="text" name="jobTitle" value={formData.jobTitle} onChange={handleChange} required />
            </label>
            <label>
                Task Description:
                <textarea name="taskDescription" value={formData.taskDescription} onChange={handleChange} required />
            </label>
            <label>
                Duration (hours):
                <input type="number" name="duration" value={formData.duration} onChange={handleChange} required />
            </label>
            <label>
                Additional Notes:
                <textarea name="additionalNotes" value={formData.additionalNotes} onChange={handleChange} />
            </label>
            <button type="submit">Submit</button>
        </form>
    );
};

export default JobTaskApp;