function greeting(){
  let i1 = document.querySelector('input[name="left"]');
  let i2 = document.querySelector('input[name="right"]');
  let k1 = Number(i1.value);
  let k2 = Number(i2.value);
  let keisan = k1+k2;
  let p = document.querySelector('span#answer'); 
  p.textContent = keisan
}

let b = document.querySelector('button#calc');

b.addEventListener('click', greeting);
