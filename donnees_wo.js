const tabNumeros=[773000001,773000002,773000003,773000004,773000005]
var tabComptes=[10000,30000,40000,50000,60000]
const tabCodes=[5555,1111,2222,3333,4444]
function AfficheMenu() {
option=prompt('----MENU SENMONEY------- \n  Bindal nimero bi nga taan \n 1: Xol sama gafaka \n 2: yobanté xaliss \n 3: fay sa facture\n 4:  ', 1);xolal yi si dess}

function SoldeCompe(i){
code=prompt('Défal sa code',5555);
if (code==tabCodes[i])
{resultat=confirm('sa gafaka mouugui tollu si : ' + tabComptes[i] + '\n Beuga délu wate si fanga juguéwon?') ;}
 else {alert('niméro bi nga dugal baxul');}
}


function TransfertArgent(i){
dest=prompt('Dugalal niméro kingu kaay yonné', 773000002);
montant=prompt('bindal lingay ñooné ', 5000);
if (montant < tabComptes[i])
  { code=prompt('Dugalal sa code',5555);
if (code==tabCodes[i]) { tabComptes[i]=tabComptes[i]-montant;
                         resultat2=confirm('Yobanté bi jalna si jam ak salam , Sa gafaka lissi nék fu mi yollu ni  : ' + tabComptes[i] + '\n Beug nga déllu si menu?') ;}}
else {alert('li nék si gafaka gui matul');}
}


function menu() {

num=prompt('Dugalal sa niméro', 773000001);

var i;
for (i = 0; i < tabNumeros.length; i++) {
if (tabNumeros[i]==num){var valide=1; 
var user=i;}}

if (valide==1){AfficheMenu()}
if (option==1){SoldeCompe(user)}
if (option==2){TransfertArgent(user)}
//{option=prompt('----MENU SENMONEY------- \n  Bindal nimero bi nga taan  \n 1: Xol sama gafaka \n 2: yobanté\'argent \n 3: Paiement de facture \n 4: Options ', 1);
//if (option==1)
//{ 
//code=prompt('Entrer votre code',5555);
//if (code==tabCodes[user])
//{resultat=confirm('Li nék sa gafaka mouugui tollu si : ' + soldecompte + '\n Beug nga déllu si menu?') ;}
//else {alert('Niméro bi baxul');}
//}



}
  






.