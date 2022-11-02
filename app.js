//quando o botão "switch" estiver marcado para direita mudar o texto month para year
//quando "switch" estiver em "yearly billing" aplicar desconto de 25% a todos os preços
/*- 10K pageviews / $8 per month
- 50K pageviews / $12 per month
- 100K pageviews / $16 per month
- 500k pageviews / $24 per month
- 1M pageviews / $36 per month */

//quando "progress bar" for ativado mudar o valor e a quantia de "PAGEVIEWS" de acordo

let myCheckBox = document.querySelector('.switch input');
let switcher = document.querySelector('.switch');
let duration = document.querySelector('.month');
let price = document.querySelector('.price .pricefix');
let range = document.querySelector('.myrange');

/*if the switch button is on(i.e equal 'true') this part of the code will take the value inside the price variable and update this value
according to the math formula*/
myCheckBox.addEventListener("click", () => {
    if (myCheckBox.checked == true) {
        let priceInt = parseInt(price.textContent);
        price.textContent = `${(priceInt - (priceInt * .25)) * 12}`;

        duration.textContent = '/year';
    } else {

        updatePrices()

        duration.textContent = '/month';
    }
})

let pageViews = document.querySelector('.page-views span');

range.addEventListener("input", updatePrices)



//function to update prices

function updatePrices () {
    if (range.value == 1) { 
        if (myCheckBox.checked == true) {
            price.textContent = `${(8 - (8 * .25)) * 12}`;
        } else {
            price.textContent = 8;
        }

        pageViews.textContent = '10k';
    }

    if (range.value == 2) { 
        if (myCheckBox.checked == true) {
            price.textContent = 108;
        } else {
            price.textContent = 12;
        }

        pageViews.textContent = '50k';
    }

    if (range.value == 3) { 
        if (myCheckBox.checked == true) {
            price.textContent = 144;
        } else {
            price.textContent = 16;
        }

        pageViews.textContent = '100k';
    }

    if (range.value == 4) { 
        if (myCheckBox.checked == true) {
            price.textContent = 216;
        } else {
            price.textContent = 24;
        }

        pageViews.textContent = '500k';
    }

    if (range.value == 5) { 
        if (myCheckBox.checked == true) {
            price.textContent = 324;
        } else {
            price.textContent = 36;
        }

        pageViews.textContent = '1M';
    }
}






