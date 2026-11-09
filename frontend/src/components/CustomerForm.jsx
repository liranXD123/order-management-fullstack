import { useState } from 'react';

function CustomerForm({onCustomerCreated}){
    const [name, setName] = useState("");
    const [email, setEmail] = useState("");
    console.log("Current name:", name);
    console.log("Current email:", email);

    const handleSubmit = async (e) =>{e.preventDefault();
        console.log("Submitted:", {name, email});
        try{
            const response = await fetch("http://localhost:8080/api/customers", {
                method: "POST",
                headers: {
                    "Content-Type": "application/json"
                },
                body: JSON.stringify({name, email})
            });
            if(response.ok){
                const data = await response.json();
                onCustomerCreated(data);
                alert("Customer created with ID: " + data.customerId);
                setName("");
                setEmail("");
            } else {
                console.error("Server returned an error");
            }

        } catch (error) {
            console.error("Network error, is Spring Boot running?", error);
        }

    };


    return(
        <form onSubmit={handleSubmit}>
            <input
                type="text"
                placeholder={"Enter your name:"}
                value = {name}
                onChange={(e) => setName(e.target.value)}/>
            <input
                type="text"
                placeholder={"Enter your email:"}
                value = {email}
                onChange={(e) => setEmail(e.target.value)}/>
            <button>Submit form</button>
        </form>
    );
}
export default CustomerForm;
