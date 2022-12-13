function Generate() {
    let max = parseInt(document.getElementById('max').value);
    let opera = document.getElementById('opera').value;
    let x = rand(max-1)+1;
    let y = rand(max-1)+1;
    return (' '+x+' '+opera+' '+y+' ');
} function rand(maxi) {return Math.floor(Math.random()*maxi);}
function createBox() {
    let liz = document.createElement('li');
    let intex = document.createElement('a');
    let val = Generate();
    intex.appendChild( document.createTextNode(val) );

    let butExc = document.createElement('button');
    butExc.innerText = "🗑️";
    butExc.addEventListener('click', (obj) => {
        obj.target.parentElement.remove();
    });

    let but = document.createElement('button');
    but.setAttribute('type', 'button');
    but.innerText = ' = ';
    but.addEventListener('click', (obj) => {
        if(obj.target.innerText == "="){
            let result = eval( val );
            if( Number.isInteger(result) == false){
                result = result.toFixed(3); }

            obj.target.innerText = '= '+ result;
        }else{
            obj.target.innerText = '=';
        }
    });

    liz.appendChild( butExc );
    liz.appendChild( intex );
    liz.appendChild( but );
    document.getElementById('list').appendChild( liz );
}
function make() {
    let dex = document.getElementById('rangeBox').value;
    for(let i=0;i<dex;i++){
        createBox();
    }
}