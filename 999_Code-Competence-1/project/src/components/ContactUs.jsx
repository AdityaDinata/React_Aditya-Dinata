import React, { useState } from 'react';
import Header from './Header'; // Pastikan path sesuai dengan struktur folder Anda
import Footer from './Footer'; // Pastikan path sesuai dengan struktur folder Anda

const ContactUs = () => {
    const [formData, setFormData] = useState({
        username: '',
        email: '',
        message: ''
    });
    const [submittedData, setSubmittedData] = useState(null);

    const handleChange = (e) => {
        const { name, value } = e.target;
        setFormData({ ...formData, [name]: value });
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        setSubmittedData(formData);
        setFormData({ username: '', email: '', message: '' }); // Reset form
    };

    return (
        <div>
            {/* Header */}
            <Header />

            <div className="max-w-md mx-auto p-4">
                <h2 className="text-2xl font-bold mb-4">Contact Us</h2>
                <form onSubmit={handleSubmit} className="space-y-4">
                    <div>
                        <label className="block mb-1" htmlFor="username">Username:</label>
                        <input
                            type="text"
                            name="username"
                            id="username"
                            value={formData.username}
                            onChange={handleChange}
                            className="w-full p-2 border rounded"
                            required
                        />
                    </div>
                    <div>
                        <label className="block mb-1" htmlFor="email">Email:</label>
                        <input
                            type="email"
                            name="email"
                            id="email"
                            value={formData.email}
                            onChange={handleChange}
                            className="w-full p-2 border rounded"
                            required
                        />
                    </div>
                    <div>
                        <label className="block mb-1" htmlFor="message">Message:</label>
                        <textarea
                            name="message"
                            id="message"
                            value={formData.message}
                            onChange={handleChange}
                            className="w-full p-2 border rounded"
                            rows="4"
                            required
                        ></textarea>
                    </div>
                    <button
                        type="submit"
                        className="w-full bg-blue-500 text-white font-semibold py-2 rounded hover:bg-blue-600 transition duration-300"
                    >
                        Submit
                    </button>
                </form>

                {submittedData && (
                    <div className="mt-6 p-4 border rounded bg-gray-100">
                        <h3 className="font-bold">Submitted Data:</h3>
                        <p><strong>Username:</strong> {submittedData.username}</p>
                        <p><strong>Email:</strong> {submittedData.email}</p>
                        <p><strong>Message:</strong> {submittedData.message}</p>
                    </div>
                )}
            </div>

      
            <Footer />
        </div>
    );
};

export default ContactUs;
