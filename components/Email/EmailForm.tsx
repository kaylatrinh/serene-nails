'use client';

import {FormEvent, useState} from "react";
import Notification from "@/components/Notification/Notification";

export default function EmailForm() {
    const [name, setName] = useState("");
    const [email, setEmail] = useState("");
    const [message, setMessage] = useState("");
    const [notification, setNotification] = useState({
        open: false,
        message: "",
        severity: "success",
    });

    const showNotification = (message: string, severity = "success") => {
        setNotification({ open: true, message, severity });
    };

    const onSubmit = (e: FormEvent) => {
        e.preventDefault();

        const formData = new FormData(e.currentTarget as HTMLFormElement);
        const data = Object.fromEntries(formData.entries());
        console.log(data)
        fetch("/api/send", {
            method: "POST",
            body: formData,
        })
        .then(async (response) => {
            if (response.ok) {
                const [data] = await Promise.all([response.json()]);
                console.log(data)
                showNotification("Email sent successfully!");
                setName("");
                setEmail("");
                setMessage("");
            } else {
                showNotification("An error occurred while sending the email.<br/>" + response.status, "error");
            }
        })
        .catch((error) => {
            console.error("Error:", error);
            showNotification("An error occurred while sending the email.<br/>" + error, "error");
        });
    };

    return (
        <>
            <Notification
                message={notification.message}
                severity={notification.severity = "success"}
                open={notification.open}
                onClose={() => setNotification({ ...notification, open: false })}
            />
            <form onSubmit={onSubmit} className="max-w-lg mx-auto p-4">
            <div className="mb-4">
                <label htmlFor="name" className="block text-gray-700 mb-2">Name</label>
                <input type="text"
                       id="name"
                       name="name"
                       value={name}
                       onChange={(e) => setName(e.target.value)}
                       required
                       className="w-full border border-gray-300 p-2 rounded"/>
            </div>
            <div className="mb-4">
                <label htmlFor="email" className="block text-gray-700 mb-2">Email</label>
                <input type="email"
                       id="email"
                       name="email"
                       value={email}
                       onChange={(e) => setEmail(e.target.value)}
                       required
                       className="w-full border border-gray-300 p-2 rounded"/>
            </div>
            <div className="mb-4">
                <label htmlFor="message" className="block text-gray-700 mb-2">Date, time and service</label>
                <textarea id="message"
                          name="message"
                          value={message}
                          onChange={(e) => setMessage(e.target.value)}
                          required
                          rows={4}
                          className="w-full border border-gray-300 p-2 rounded"></textarea>
            </div>
            <button type="submit" className="bg-green-950 bg-opacity-75 text-white py-2 px-6 rounded-full hover:bg-green-950 transition duration-300">Submit</button>
            </form>
        </>
    )
}
