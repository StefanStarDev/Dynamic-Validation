function validate() {

    const getInput = () => document.querySelector('#email')

    const isValid = (email) => /([0-9a-zA-Z]([-.\w]*[0-9a-zA-Z])*@([0-9a-zA-Z][-\w]*[0-9a-zA-Z]\.)+[a-zA-Z]{2,3})$/.test(email)
    const input = getInput()

    input.addEventListener("change", () => {

        console.log("isChanging");
        
        if (isValid(input.value)) {

            input.classList.remove("error")

        } else {
            input.classList.add("error")
        }
    })

   

}