const calculus = {
    ["+"]: (x,y) => {return x + y;},
    ["-"]: (x,y) => {return x - y;},
    ["*"]: (x,y) => {return x * y;},
    ["÷"]: (x,y) => {return (x / y).toFixed(3);},
    ["^"]: (x,y) => {return Math.pow(x,y);}}
function Generate() {
    let max = parseInt(document.getElementById('max').value);
    let opera = document.getElementById('opera').value;
    let x = rand(max-1)+1;
    let y = rand(max-1)+1;
    return ( x+ " " +opera+ " " +y );
} function rand(maxi) {return Math.floor(Math.random()*maxi);}
function createBox() {
    let liz = document.createElement('li');
    let intex = document.createElement('p');
    let val = Generate();
    intex.appendChild( document.createTextNode(val) );

    let butExc = document.createElement('button');
    butExc.innerText = "🙅";
    butExc.style = "background-color: #222233;font-size: 22.5px;"
    butExc.addEventListener('click', (obj) => {
        obj.target.parentElement.remove();
    });

    let but = document.createElement('button');
    but.setAttribute('type', 'button');
    but.innerText = ' = ';
    but.addEventListener('click', (obj) => {
        var pie = val.split(" ");
        console.log( pie );
        if(obj.target.innerText == "="){
            obj.target.innerText = '= '+ calculus[pie[1]]( parseInt(pie[0]),parseInt(pie[2]) );
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