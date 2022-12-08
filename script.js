function Generate() {
    let max = parseInt(document.getElementById('max').value);
    let opera = document.getElementById('opera').value;
    let x = rand(max);
    let y = rand(max);
    return (' '+x+' '+opera+' '+y+' ');
} function rand(maxi) {return Math.floor(Math.random()*maxi);}
function createBox() {
    let liz = document.createElement('li');
    let tex = document.createElement('p');
    let val = Generate();
    tex.appendChild(document.createTextNode(val));

    let but = document.createElement('button');
    but.setAttribute('type', 'button');
    but.innerText = ' = ';
    but.addEventListener('click', (obj) => {
        obj.target.innerText = '= '+eval( val );
    });

    tex.appendChild( but );
    liz.appendChild( tex );
    document.getElementById('list').appendChild( liz );
}
function make() {
    let dex = document.getElementById('rangeBox').value;
    console.log( dex );
    for(let i=0;i<dex;i++){
        createBox();
    }
}