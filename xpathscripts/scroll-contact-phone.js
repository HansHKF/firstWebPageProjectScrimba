document.addEventListener("DOMContentLoaded", function () {


    const sections = document.querySelectorAll("section");

    let currentSectionIndex = 0;

    const observer = new IntersectionObserver(entries => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                currentSectionIndex = Array.from(sections).indexOf(entry.target);
            }
        });
    }, { threshold: 0.5 });

    sections.forEach(section => {
        observer.observe(section);
        section.addEventListener("scroll", function(event) {
            if (isScrolledToBottom(section)) {
                currentSectionIndex++;
                if (currentSectionIndex < sections.length) {
                    sections[currentSectionIndex].scrollIntoView({ behavior: "smooth" });
                }
            } else if (isScrolledToTop(section)) {
                currentSectionIndex--;
                if (currentSectionIndex >= 0) {
                    sections[currentSectionIndex].scrollIntoView({ behavior: "smooth" });
                }
            }
        });
        
        function isScrolledToTop(element) {
            return element.scrollTop === 0;
        }

    function isScrolledToBottom(element) {
        return Math.ceil(element.scrollTop + element.clientHeight) >= element.scrollHeight;
    }
    



    
    const phoneNumber = "004794098071";
    const contactButton = document.getElementById("contact-button");
    const phoneNumberDiv = document.getElementById("contact-phonenumber");
    const phoneNumberText = document.getElementById("contact-phone-link");

    const contactButtonMobileContact = document.getElementById("cta-header");
    const contactButtonMobileDiv = document.getElementById("contact-phonenumber-mobile");
    const contactButtonMobileNumberText = document.getElementById("contact-phone-link-mobile");

    var menuToggler = document.getElementById("menuToggler");
   /*const sections = document.querySelectorAll("section");*/
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
