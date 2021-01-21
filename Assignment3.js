function kilometerToMeter(km)
{
    if(km>=0) return 1000*km;
    else return "Distance cannot be negative";
}

function budgetCalculator(numOfWatch, numOfPhone, numOfLaptop)
{
    if(numOfWatch<0 || numOfPhone<0 || numOfLaptop <0)
    {
        return "Number of product cannot be negative";
    }
    return ((numOfWatch*50)+(numOfPhone*100)+(numOfLaptop*500));
}

function hotelCost(numOfDay)
{
    if(numOfDay<0)
    {
        return "Number of day cannot be negative";
    }
    else if(numOfDay>20)
    {
        return (10*100)+(10*80)+((numOfDay-20)*50);
    }
    else if(numOfDay>=11 && numOfDay<=20)
    {
        return (10*100)+((numOfDay-10)*80);
    }
    else 
    {
        return numOfDay*100;
    }
}

function megaFriend(friendsName)
{
    var len=0,index;
    for(var i=0;i<friendsName.length;i++)
    {
        if(friendsName[i].trim()=="")
        {
            return "Name cannot be empty string";
        }
        if(friendsName[i].length>len)
        {
            len=friendsName[i].length;
            index=i;
        }
    }
    return friendsName[index];
    
}

