
        let personas;
        let edats;
        
        function CalcularMitjana() {

            let mitjana = (MitjanaDedat() / edats.length);
            document.getElementById('s').innerHTML = "La mitjana es: " + mitjana
        }

        function MitjanaDedat() {
            personas = parseInt(prompt("Indica el nombre de persones"));
            edats = [];
            let suma = 0;
            for (let i = 0; i < personas; i++) {
                let age = parseInt(prompt("Indica la edat"));
                if (age < 121 && age >= 0) 
                {
                    edats.push(age);
                }                   
            }
            for (let i = 0; i < edats.length; i++) {
                suma = edats[i] + suma
            }
            return suma;
        }

