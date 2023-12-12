<template>
    <section class="get-in-touch">
        <h2>Let's Connect</h2>
        <form @submit.prevent="handleSubmit" class="contact-form">
            <div class="form-group">
                <input type="text" placeholder="Your Name" required>
            </div>
            <div class="form-group">
                <input type="email" placeholder="Your Email" required>
            </div>
            <div class="form-group">
                <textarea placeholder="Your Message"></textarea>
            </div>
            <button type="submit" class="submit-button">Send Message</button>
        </form>
    </section>
</template>

<script>
export default {
    name: "GetInTouch",
    methods: {
        handleSubmit() {
            // Handle form submission logic here
            alert("Form submitted!"); // Placeholder
        }
    }
};
</script>

<style scoped>
.get-in-touch {
    background-color: #F4F4F4;
    padding: 2rem;
    text-align: center;
    border-radius: 8px;
    box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);
    max-width: 500px;
    margin: 2rem auto;
}

.get-in-touch h2 {
    color: #0A3A60;
    margin-bottom: 1.5rem;
}

.contact-form .form-group {
    margin-bottom: 1rem;
}

.contact-form input[type="text"],
.contact-form input[type="email"],
.contact-form textarea {
    width: 100%;
    padding: 0.75rem;
    border: 2px solid #7EB2DD;
    border-radius: 4px;
    margin-top: 0.5rem;
    font-size: 1rem;
}

.contact-form textarea {
    resize: vertical;
    min-height: 150px;
}

.submit-button {
    background-color: #F49F1C;
    color: #FFFFFF;
    border: none;
    padding: 10px 20px;
    cursor: pointer;
    border-radius: 4px;
    font-size: 1rem;
    font-weight: bold;
    transition: background-color 0.3s;
}

.submit-button:hover {
    background-color: #d38917;
}
</style>