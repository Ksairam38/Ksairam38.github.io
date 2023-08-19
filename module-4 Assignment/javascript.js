function js()
{
    var arr=["Yaakov", "John", "Jen", "Jason", "Paul", "Frank", "Larry", "Paula", "Laura", "Jim",'sai',"siva","julesh","Jagadhesh","jim","jon","dad","Joy","son","John"]
    for (var i of arr)
    {
        if (i.startsWith("j") || i.startsWith("J") ){
            console.log("Goodbye "+i);
        }
        else{
            console.log("Hello "+i)
        }
       
    }
}
