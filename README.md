# 💱 Currency Converter

A sleek, responsive, and dynamic web application that allows users to convert currencies in real-time. This project fetches live exchange rates from a reliable currency API and updates both the rates and country flags dynamically upon selection.

---

## ✨ Features

* **Real-Time Conversion:** Fetches up-to-date global exchange rates dynamically using an open-source currency API.
* **Smart Dropdowns:** Automatically populates a massive list of global currencies using a dedicated country-to-currency mapping dataset.
* **Dynamic Flag Updates:** Instantly switches the country flag icon the exact moment a user changes the currency selection.
* **Interactive UI Animations:** Features custom, springy hover animations on the flags and smooth transition effects on buttons and icons.
* **Input Validation:** Automatically handles empty or invalid numeric inputs, defaulting gracefully to `1` to ensure seamless operations.
* **Modern Typography:** Styled beautifully using premium geometric/rounded Google Fonts for a cohesive, friendly aesthetic.

---

## 🛠️ Tech Stack

* **Frontend:** HTML5, CSS3 (Flexbox, Custom Transitions, Hover Effects)
* **Scripting:** JavaScript (ES6+, Async/Await, Fetch API, DOM Manipulation)
* **Fonts & Icons:** Google Fonts (Nunito/Poppins), FontAwesome Icons
* **API Integration:** * Currency Rates: [Fawaz Ahmed's Currency API](https://github.com/fawazahmed0/currency-api)
  * Country Flags: [FlagsAPI](https://flagsapi.com/)

---

## 📁 Project Structure

```text
├── index.html       # The structural layout of the converter app
├── style.css        # Custom styling, modern color palette, and hover animations
├── country.js       # Dataset mapping currency codes to respective country initials
└── script.js        # Core logic: DOM handling, event listening, and API data fetching
