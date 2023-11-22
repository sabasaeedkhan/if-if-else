let  purchase_amt = prompt("Enter the total bill amount")
let discount = 0
if (purchase_amt>=50000)
{

    discount = .20
} 
else if (purchase_amt>=40000)
{

    discount = .15
}
else if (purchase_amt>=30000)
{ discount = .10
}

else if (purchase_amt>=20000)
{

    discount = .05
}

else if (purchase_amt>=10000)
{
   discount= .02

}
else{
    discount= 0
}
alert(`
your total bill is Rs : ${purchase_amt}
your discount amount is Rs : ${purchase_amt*discount}
your final bill is Rs : ${purchase_amt - purchase_amt*discount}
`
)