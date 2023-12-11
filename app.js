const formPresupuesto = document.getElementById("form-presuesto");
const btnForm = document.getElementById("enviar");
const envioMessage = document.getElementById("envio-message");
envioMessage.style.display = 'none'


formPresupuesto.addEventListener('submit', (e) => {

    e.preventDefault();
    const form = e.target;
    const formData = new FormData(form);
    const formObj = Object.fromEntries(formData.entries());
    // delete formObj._captcha;
    // delete formObj._next;

    envioCorreo(formObj).then(res => {
        if (res.success) {
            envioMessage.style.display = 'block'
            setTimeout(() => {
                formPresupuesto.reset();
                envioMessage.style.display = 'none'
            }, 6000)
        }
    })


})





function envioCorreo(mensaje) {
    return fetch("https://formsubmit.co/ajax/neumaticosmonasterio@gmail.com", {
        method: "POST",
        headers: {
            'Content-Type': 'application/json',
            'Accept': 'application/json'
        },
        body: JSON.stringify(mensaje)
    })
        .then(res => res.json())
        .then(resu => {
            return resu
        })
}

