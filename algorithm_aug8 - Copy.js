function xcribe(dna){
    var mrna = "";
    for (var i=0; i<dna.length; i++){
        if (dna[i]== "T"){
            mrna += "A";
        }
       else if (dna[i]== "G"){
            mrna += "C";
        }
        else if (dna[i]== "C"){
            mrna += "G";
        }
        else if (dna[i]== "A"){
            mrna += "U";
        }
    }
    return mrna;
}
var x = xcribe();

//truncate my codons

function truncate(mrna){
    var start = "AUG";
    var end1 = "UUA";
    var end2 = "UAG";
    var end3 = "UGA";

    for (let i=0; i<nrna.length-4; i+=3){
        if (mrna[i])
    }
}