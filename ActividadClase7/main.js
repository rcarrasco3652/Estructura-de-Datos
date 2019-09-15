document.getElementById("inicio").addEventListener('click', () => {

    let vector = [];
    
    for(let i = 0;i < 1000; i++){
        vector[i] = 1; 
    }
    
    console.log(vector)
    for(let i = 2; i < 1000; i++){
        if(vector[i] == 1){
        
            for(let j = i*2; j<1000; j++){
                if(j%i==0){
                    vector[j]= 0
                }
            }
        
        }
    }
    
    console.log(vector)

})
