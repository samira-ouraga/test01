//this is object from letters to mrna 
var obj = {
  UUU: "F",
  UUC: "F",
  UUA: "L",
  UUG: "L",
  CUU: "L",
  CUC: "L",
  CUA: "L",
  CUG: "L",
  AUU: "I",
  AUC: "I",
  AUA: "I",
  AUG: "M",
  GUU: "V",
  GUC: "V",
  GUA: "V",
  GUG: "V",
  UCU: "S",
  UCC: "S",
  UCA: "S",
  UCG: "S",
  CCU: "P",
  CCC: "P",
  CCA: "P",
  CCG: "P",
  ACU: "T",
  ACC: "T",
  ACA: "T",
  ACG: "T",
  GCU: "A",
  GCC: "A",
  GCA: "A",
  GCG: "A",
  UAU: "Y",
  UAC: "Y",
  // UAA: "stop",
  // UAG: "stop",
  CAU: "H",
  CAC: "H",
  CAA: "Q",
  CAG: "Q",
  AAU: "N",
  AAC: "N",
  AAA: "K",
  AAG: "K",
  GAU: "D",
  GAC: "D",
  GAA: "E",
  GAG: "E",
  UGU: "C",
  UGC: "C",
  // UGA: "stop",
  UGG: "W",
  CGU: "R",
  CGC: "R",
  CGA: "R",
  CGG: "R", 
  AGU: "S",
  AGC: "S",
  AGA: "R",
  AGG: "R",
  GGU: "G",
  GGC: "G",
  GGA: "G",
  GGG: "G",
}

//translate DNA to mRNA
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
var x = xcribe("tacgtactcatgtgggtgctcgctctcattaaagcataacttacgctgaggatt".toUpperCase());
console.log(x);

//truncate my codons
function truncate(mrna){
    var messages =[];
    var start = "AUG";
    var end1 = "UAA";
    var end2 = "UAG";
    var end3 = "UGA";

    var startindex = null;
    var endindex = 0;
    for (let i=0; i<mrna.length-2; i+=3){
      
        let codon = mrna.substr(i,3);
        console.log("codon is ", codon);
    if (!startindex){
        if (codon === start){
            startindex = i+3;
        }
    }
    else {
        if(codon === end1 || codon === end2 || codon === end3){
            endindex = i;
            console.log('in here');
            messages.push(mrna.substring(startindex, endindex));
            startindex = endindex =null;
        }
    }
    console.log(messages);
    }
    return messages;
}
var y = truncate(x);
console.log("message is" + " " +  y);
// turn the whole dna mrna table into objects, where object molecule has UUU is key - phe is value. then //do another 
//object2 is the transaltion with phe is key and F is value. then use that for function below
function translateMsg(arr){
  var result = [];
  arr.forEach(function(val){
    var translation = "";
    for (let i=0; i<val.length-2 ; i+=3){
     var codon = val.substr(i,3);
     translation+= obj[codon];
    }
    result.push(translation);
    
  });
  return result;
}

var z = translateMsg(y);
console.log(z);

