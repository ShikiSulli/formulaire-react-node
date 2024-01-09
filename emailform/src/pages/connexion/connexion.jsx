import { useState } from "react";
import './connexion.css';
import { Link } from "react-router-dom";
import Swal from 'sweetalert2';

export default function Connexion() {
    const [loginData, setLoginData] = useState({
        email: "",
        password: "",
    });

    const handleSubmit = async (event) => {
        event.preventDefault();

        try {
            const response = await fetch('http://localhost:3001/connexion', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify(loginData),
                
            });

            if (response.ok) {
                console.log(response);
                Swal.fire({
                    title: 'Bravo!',
                    text: 'Vous êtes connecté',
                    icon: 'success',
                    confirmButtonText: 'Cool'
                });
            } else {
                Swal.fire({
                    title: 'Erreur!',
                    text: 'La connexion a échoué',
                    icon: 'error',
                    confirmButtonText: 'Dommage'
                });
            }
        } catch (error) {
            Swal.fire({
                title: 'Erreur!',
                text: error.message,
                icon: 'error',
                confirmButtonText: 'D\'accord'
            });
        }
    };

    return (
        <>
            <form onSubmit={handleSubmit}>
                <label htmlFor="email">Email</label>
                <input type="email" name="email" value={loginData.email} onChange={(e) => setLoginData({...loginData, email: e.target.value})} />
                <label htmlFor="password">Mot de passe</label>
                <input type="password" name="password" value={loginData.password} onChange={(e) => setLoginData({...loginData, password: e.target.value})} />
                <button type="submit">Envoyer</button>
            </form>
            <Link className="link" to="/">Retour</Link>
        </>
    )
}
