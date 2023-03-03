const Name=prompt("adinizi daxil edin:");
const password=prompt("sifrenizi daxil edin:")
let finish=true;
let money=100;
while(finish){
        
    if(Name==="rza" || password==="123"){
        
        alert("Pul cekmek ucun 1 \n Pul daxil etmek ucun 2 \n Balansda olan meblege baxmaq ucun 3 \n Cixmaq ucun 4 basin");
        let choice=prompt("Seciminizi daxil edin");     
        switch(choice){
            case "1":
                let cashMoney=prompt("Cekmek istediyiniz meblegi daxil edin");
                if(cashMoney>money){
                    alert("Hesabiniz bu miqdarda pul yoxdur");
                }
                else{
                    cashingOutOperation(cashMoney);
                    alert("Hesabinizdan "+cashMoney+"manat cekdiniz");
                    
                }
              break;
            case "2":
                let includeMoney=prompt("Daxil etmek istediyiniz meblegi daxil edin");
                if(includeMoney>0){
                    cashingInOperation(includeMoney);
                    alert("Hesabiniza kocuruldu");
                }
                else{
                    alert("Duzgun mebleg daxil etmediniz");
                }
                break;
            case "3":
                alert("Hesabinizda olan miqdar:"+balanceAccount());
                break;
            case "4":
                alert("Cixis elediz");
                finish=false;
                break;
            default:
                alert("Duzgun secim daxil elemediz");
                break;
    
        } 

    }
    else{
        alert("Bu adda istifadeci yoxdur");
    }
}
function cashingOutOperation(cashMoney){
    money-=Number(cashMoney);
    return money;
}
function cashingInOperation(includeMoney){
    money+=Number(includeMoney);
    return money;
}
function balanceAccount(){
    return money;
}

    

