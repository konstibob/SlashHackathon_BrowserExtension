//firstcall wird jedes mal auf true gesetzt und das soll verhindert werden, weil so jedes mal firstcall aufgerufen wird. Das wollen wir aber nicht

function ovaerall_calulation(a,b){
    num = a + b 
    CO2_overall.innerHTML = num + " emission of CO2 in total"
   
    zum_vergleich.innerHTML = "a car ride of "+ (((num /18 ) * 100).toFixed(4)).toString() + " m emits about the same amount of CO2"
}


CO2_amt = document.getElementById("p1")

CO2_search = document.getElementById("p2")

CO2_overall = document.getElementById("p3")

zum_vergleich = document.getElementById("p4")

var tracktime = Date.now()




chrome.storage.local.get(['BrowserStart'], function(time) {
    time_val = (((tracktime - time.BrowserStart)/3600000)*1.2).toFixed(3)
    
    CO2_amt.innerHTML ="approx. " + ((((tracktime - time.BrowserStart)/3600000)*1.2).toFixed(3)).toString() + " g of CO2 with idling";
});


chrome.storage.local.get(['search'], function(amount) {
    if (amount.search == undefined)
    {
        x = 0;
        CO2_search.innerHTML = "approx. 0 g CO2 with browsing"
    }
    else
    {
        x = amount.search / 5;
        CO2_search.innerHTML = "approx. " + x.toString() + " g CO2 with browsing";
    }
    
    ovaerall_calulation(parseFloat(x),parseFloat(time_val))
});
 