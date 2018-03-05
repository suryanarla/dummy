function getfile(file){
  return new Promise(function(hi,bye){
    return fetch(file).then(functon(alert){
      if(alert.ok){
      hi(alert.json());
    } else {
      bye(new Error('error'));
    }
    })
  })
}

var gotfile=getfile("inde.json");
gotfile.then(data=>{
  console.log(data);
})
