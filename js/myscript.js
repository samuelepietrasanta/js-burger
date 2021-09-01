

let listaCouponValidi = ["Euro2020" , "PanDiStelleAdventure" , "Melinda2k21"];

let nomeBurgerElement = document.getElementById("nome-hamburger");

let coupon = document.getElementById("coupon");

let bottone = document.getElementById("bottone-prezzo");

bottone.addEventListener('click', 
    function(){
        if (nomeBurgerElement.value.length === 0){
            alert("Devi dare un nome al tuo panino");
        }else{
            let costoBase = 10;
            IngredientiAggiuntivi = document.getElementsByClassName("ingrediente");

            for (i = 0; i < IngredientiAggiuntivi.length ; i++){
                IngredienteDelMomento = IngredientiAggiuntivi[i];

                if (IngredienteDelMomento.checked){
                    costoBase += 2.50;
                }

            }
            if (listaCouponValidi.includes(coupon.value)){
                costoBase = costoBase * 0.8;
                document.getElementById("valid-coupon").innerHTML = "Coupon valido, hai diritto ad uno sconto del 20%";
            }else{
                document.getElementById("unvalid-coupon").innerHTML = "Coupon non valido. Peccato hai perso uno sconto del 20%";

            }
            document.getElementById("scritta-prezzo-finale").innerHTML = "Il prezzo finale del tuo panino è  "  + costoBase + "&euro;";
        }

        


    })
