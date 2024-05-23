document.getElementById('calculate-button').addEventListener('click', calculate);

function calculate() {
    const side1 = parseFloat(document.getElementById('side1').value);
    const side2 = parseFloat(document.getElementById('side2').value);
    const side3 = parseFloat(document.getElementById('side3').value);
    const height = parseFloat(document.getElementById('height').value);
    
    if (side1 > 0 && side2 > 0 && side3 > 0 && height > 0) {
        
        const base = side1;  
        const area = (base * height) / 2;

        
        const perimeter = side1 + side2 + side3;

        
        document.getElementById('result').innerHTML = 
            `Luas Segitiga: ${area} cm²<br>Keliling Segitiga: ${perimeter} cm`;
        
        
        const triangle = document.getElementById('triangle-shape');
        triangle.setAttribute('points', `0,100 50,${100 - height} 100,100`);
        
        const triangleSvg = document.getElementById('triangle-svg');
        triangleSvg.style.animation = 'none';
        setTimeout(() => {
            triangleSvg.style.animation = '';
        }, 10);

        
        const modal = document.getElementById('result-modal');
        modal.style.display = "block";
    } else {
        document.getElementById('result').textContent = 'Masukkan nilai yang valid untuk semua sisi dan tinggi.';
    }
}


document.querySelector('.close').addEventListener('click', () => {
    const modal = document.getElementById('result-modal');
    modal.style.display = "none";
});


window.addEventListener('click', (event) => {
    const modal = document.getElementById('result-modal');
    if (event.target == modal) {
        modal.style.display = "none";
    }
});