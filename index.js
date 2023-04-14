
const btnConvertEl = document.querySelector("#btn-convert") ;
let modifyInputEl = document.querySelectorAll(".Input-Value-In-Span") ; 

const inputEl = document.querySelector("#input-id") ;

inputEl.addEventListener("input", function() {
    const inputElValue = document.querySelector("#input-id").value ;

    for (let i= 0 ; i < modifyInputEl.length ; i++) {
        modifyInputEl[i].textContent = `${inputElValue} `;
    }

    btnConvertEl.addEventListener("click", function(){
        const LengthMeterFeet = document.querySelector("#Length-meter-to-feet") ;
        const LengthFeetMeter = document.querySelector("#Length-feet-to-meter") ;
        const VolumeLittersGallons = document.querySelector("#Volume-litters-to-gallons") ;
        const VolumeGallonsLitters = document.querySelector("#Volume-gallons-to-litters") ;
        const MassKilogramsPounds = document.querySelector("#Mass-kilograms-to-pounds") ;
        const MassPoundsKilograms = document.querySelector("#Mass-pounds-to-kilograms") ;
    
        //Ici commence la modification et le display sur le navigateur à proprement parlé ! 
    
        LengthMeterFeet.textContent = `${(inputElValue * 3.281).toFixed(2)} ` ;
        LengthFeetMeter.textContent = `${(inputElValue / 3.281).toFixed(2)} ` ;
        VolumeLittersGallons.textContent = `${(inputElValue * 0.264).toFixed(2)} ` ;
        VolumeGallonsLitters.textContent = `${(inputElValue / 0.264).toFixed(2)} ` ;
        MassKilogramsPounds.textContent = `${(inputElValue * 2.204).toFixed(2)} ` ;
        MassPoundsKilograms.textContent = `${(inputElValue / 2.204).toFixed(2)} ` ;
    })

    inputEl.addEventListener("input", function() {
        const inputElValue = inputEl.value;
        inputEl.style.width = `${inputElValue.length + 1}ch`;
        if (inputElValue.length > 12) {
            inputEl.value = inputElValue.slice(0, 12);
          }
      })
})
