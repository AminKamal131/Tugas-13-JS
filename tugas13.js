function panggil(){
    var data = ["pisang","Jeruk"];
    console.log(data)

    data.unshift("Apel","Mangga");
    return data
}

console.log(panggil())