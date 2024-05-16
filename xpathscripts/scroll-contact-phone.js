document.addEventListener("DOMContentLoaded", function () {
    
    const phoneNumber = "004794098071";
    const contactButton = document.getElementById("contact-button");
    const phoneNumberDiv = document.getElementById("contact-phonenumber");
    const phoneNumberText = document.getElementById("contact-phone-link");

    const contactButtonMobileContact = document.getElementById("cta-header");
    const contactButtonMobileDiv = document.getElementById("contact-phonenumber-mobile");
    const contactButtonMobileNumberText = document.getElementById("contact-phone-link-mobile");

    var menuToggler = document.getElementById("menuToggler");
    const sections = document.querySelectorAll("section");
    const lastSection = sections[sections.length - 1]; // Get the last section

    //navbar button
    if (lastSection) {
        const contactObserver = new IntersectionObserver(
            (entries) => {
                entries.forEach((entry) => {
                    if (
                        entry.isIntersecting &&
                        entry.target === lastSection &&
                        !menuToggler.checked &&
                        window.innerWidth >= 1000
                    ) {
                        phoneNumberText.textContent = "Call " + phoneNumber;
                        phoneNumberText.href = "tel:+" + phoneNumber;
                        contactButton.style.display = "none";
                        phoneNumberDiv.style.display = "block";
                    } else {
                        contactButton.style.display = "block";
                        phoneNumberDiv.style.display = "none";
                    }
                });
            },
            { threshold: 0.5 }
        ); // Trigger when at least 50% of the section is in view

        contactObserver.observe(lastSection);
    } else {
        console.error("Last section not found in the DOM.");
    }

    //header button (mobile)
    if (lastSection) {
        const contactObserver = new IntersectionObserver(
            (entries) => {
                entries.forEach((entry) => {
                    if (
                        entry.isIntersecting &&
                        entry.target === lastSection &&
                        window.innerWidth <= 1000
                    ) {
                        contactButtonMobileNumberText.textContent = "Call " + phoneNumber;
                        contactButtonMobileNumberText.href = "tel:+" + phoneNumber;
                        contactButtonMobileContact.style.display = "none";
                        contactButtonMobileDiv.style.display = "inline-block";
                        contactButtonMobileDiv.style.marginRight = "12vw";
                    } else if (window.innerWidth <= 1000) {

                        contactButtonMobileDiv.style.display = "none";
                        contactButtonMobileContact.style.display = "inline-block";
                    } else {
                        contactButtonMobileDiv.style.display = "none";
                    }
                });
            },
            { threshold: 0.5 }
        ); // Trigger when at least 50% of the section is in view

        contactObserver.observe(lastSection);
    } else {
        console.error("Last section not found in the DOM.");
    }
});
