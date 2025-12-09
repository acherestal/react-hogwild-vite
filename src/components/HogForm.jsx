import React, { useState } from "react";

function HogForm({ addNewHog }) {
  const [formData, setFormData] = useState({
    name: "",
    specialty: "",
    weight: "",
    greased: false,
    "highest medal achieved": "",
    image: ""
  });

  function handleChange(e) {
    const { name, value, type, checked } = e.target;
    setFormData({
      ...formData,
      [name]: type === "checkbox" ? checked : value
    });
  }

  function handleSubmit(e) {
    e.preventDefault();
    addNewHog(formData);
  }

  return (
    <form onSubmit={handleSubmit} className="ui form">

      <label htmlFor="name-input">Name:</label>
      <input
        id="name-input"
        name="name"
        value={formData.name}
        onChange={handleChange}
      />

      <label htmlFor="weight-input">Weight:</label>
      <input
        id="weight-input"
        name="weight"
        value={formData.weight}
        onChange={handleChange}
      />

      <label htmlFor="specialty-input">Specialty:</label>
      <input
        id="specialty-input"
        name="specialty"
        value={formData.specialty}
        onChange={handleChange}
      />

      <label htmlFor="greased-input">Greased?</label>
      <input
        id="greased-input"
        type="checkbox"
        name="greased"
        checked={formData.greased}
        onChange={handleChange}
      />

      <button type="submit">Add Hog</button>
    </form>
  );
}

export default HogForm;
