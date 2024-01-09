import { useState } from "react";
import './formulaire.css';
import { Link } from "react-router-dom";
import Swal from 'sweetalert2';

export default function Formulaire() {
    const [name, setName] = useState("");
    const [firstName, setFirstname] = useState("");
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");

    const handleChange = (event) => {
        const { name, value } = event.target;
        switch (name) {
            case "firstName":
                setFirstname(value);
                break;
            case "lastName":
                setName(value);
                break;
            case "email":
                setEmail(value);
                break;
            case "password":
                setPassword(value);
                break;
            default:
                break;
        }
    };

    const handleSubmit = async (event) => {
        event.preventDefault();
        const formData = {
            firstName: firstName,
            lastName: name,
            email: email,
            password: password,
        };

        try {
            const response = await fetch('http://localhost:3001/formulaire', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify(formData),
            });
            console.log(response);

            if (response.ok) {
                Swal.fire({
                    title: 'Bravo!',
                    text: 'Votre compte a bien été créé',
                    icon: 'success',
                    confirmButtonText: 'Cool'
                });
            } else {
                throw new Error('La soumission du formulaire a échoué');
            }
        } catch (error) {
            Swal.fire({
                title: 'Erreur!',
                text: 'La soumission du formulaire a échoué ',
                icon: 'error',
                confirmButtonText: 'D\'accord'
            });
            console.error('Erreur lors de la soumission du formulaire', error);
        }
    };

    return (
        <>
            <form onSubmit={handleSubmit}>
                <label htmlFor="firstName">Prénom</label>
                <input type="text" name="firstName" value={firstName} onChange={handleChange} />
                <label htmlFor="lastName">Nom</label>
                <input type="text" name="lastName" value={name} onChange={handleChange} />
                <label htmlFor="email">Email</label>
                <input type="email" name="email" value={email} onChange={handleChange} />
                <label htmlFor="password">Mot de passe</label>
                <input type="password" name="password" value={password} onChange={handleChange} />
                <button type="submit">Envoyer</button>
            </form>

            <Link className="link" to="/connexion">Vous avez déjà un compte? Connectez-vous</Link>
        </>
    );
}
