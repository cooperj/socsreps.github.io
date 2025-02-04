const modalHTML = `
    <section class="hidden" id="{{ id }}">
        <div class="overlay w-full h-screen bg-black bg-opacity-50 fixed top-0 left-0"></div>
        <div class="modal-wrapper fixed top-0 left-0 w-full h-screen overflow-x-hidden">
            <div class="w-full h-screen relative">
                <div class="flex items-center justify-center min-h-full h-auto">
                    <div class="flex-1 container">
                        <div class="content m-8 px-8 pb-8 max-w-screen-md mx-2 lg:mx-auto bg-white">
                            <div class="text-right w-full pt-6">
                                <i class="close-button text-lg text-gray-500 hover:text-gray-700 cursor-pointer fas fa-times"></i>
                            </div>
                            {{{ content }}}
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </section>
`;

const modalTemplate = Handlebars.compile(modalHTML);

const feedbackEntries = document.getElementsByClassName("feedback-entry")

const modalIds = []

for (let index = 0; index < feedbackEntries.length; index++) {
    const entry = feedbackEntries[index];

    const answer = entry.querySelector(".answer-content");
    const answerText = answer ? answer.innerHTML : "<p class=\"px-4 py-2 text-lg\">No answer!</p>";

    const modalId = entry.getAttribute("data-modal-id");

    modalIds.push(modalId);

    const modal = modalTemplate({ content: answerText, id: modalId });

    const modalsContainer = document.getElementById("modals");

    modalsContainer.innerHTML += modal;

    entry.addEventListener("click", (node) => {
        const modalElement = document.getElementById(modalId)
        if (modalElement) {
            modalElement.classList.remove("hidden")
        }
    })
}

let modalsContainer = document.getElementById("modals");

for (let index = 0; index < modalIds.length; index++) {

    const modalId = modalIds[index];

    document.getElementById(modalId).addEventListener("click", (e) => {
        const modalElement = document.getElementById(modalId)

        if (modalElement) {
            modalElement.classList.add("hidden")
        }
    });

    document.getElementById(modalId).querySelector(".close-button").addEventListener("click", (e) => {
        const modalElement = document.getElementById(modalId)
    
        if (modalElement) {
            modalElement.classList.add("hidden")
        }
    })

    modalsContainer.querySelector("#" + modalId + " .content").addEventListener("click", (e) => {
        e.stopPropagation();
    })
   
}

